'use client';

import { useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { scrollState } from '@/lib/scroll';
import { sphere, wave, helix, vortex, randoms, starfield } from '@/lib/formations';

/* ------------------------------------------------------------------ *
 * Shaders
 * ------------------------------------------------------------------ */

const particleVertex = /* glsl */ `
  uniform float uTime;
  uniform float uProgress;
  uniform float uSize;
  uniform float uPixelRatio;

  attribute vec3 aP0;
  attribute vec3 aP1;
  attribute vec3 aP2;
  attribute vec3 aP3;
  attribute float aRand;

  varying float vFade;
  varying float vRand;

  float ease(float t) { return t * t * (3.0 - 2.0 * t); }

  void main() {
    float t = uProgress * 3.0;
    float s1 = ease(clamp(t, 0.0, 1.0));
    float s2 = ease(clamp(t - 1.0, 0.0, 1.0));
    float s3 = ease(clamp(t - 2.0, 0.0, 1.0));

    vec3 p = mix(aP0, aP1, s1);
    p = mix(p, aP2, s2);
    p = mix(p, aP3, s3);

    // gentle organic drift so the system never looks frozen
    float w = uTime * 0.4 + aRand * 6.2831;
    p += vec3(sin(w), cos(w * 1.27), sin(w * 0.73)) * (0.05 + aRand * 0.07);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    gl_PointSize = uSize * uPixelRatio * (1.0 / max(0.5, -mv.z)) * (0.55 + aRand * 0.9);

    vFade = clamp(1.0 - (-mv.z - 2.0) / 16.0, 0.0, 1.0);
    vRand = aRand;
  }
`;

const particleFragment = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;

  varying float vFade;
  varying float vRand;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    if (d > 0.5) discard;

    float alpha = pow(smoothstep(0.5, 0.0, d), 2.0);
    vec3 col = mix(uColorA, uColorB, smoothstep(0.2, 0.9, vRand));

    gl_FragColor = vec4(col, alpha * vFade * 0.8);
  }
`;

const coreVertex = /* glsl */ `
  varying vec3 vNormalW;
  varying vec3 vViewDir;

  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vViewDir = normalize(cameraPosition - world.xyz);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const coreFragment = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;

  varying vec3 vNormalW;
  varying vec3 vViewDir;

  void main() {
    float fres = 1.0 - clamp(dot(normalize(vNormalW), normalize(vViewDir)), 0.0, 1.0);
    float glow = pow(fres, 2.6);
    gl_FragColor = vec4(uColor * glow, glow * uOpacity);
  }
`;

/* ------------------------------------------------------------------ *
 * Morphing particle system
 * ------------------------------------------------------------------ */

function Particles({ count }) {
  const matRef = useRef();
  const groupRef = useRef();
  const { size, viewport } = useThree();

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const p0 = sphere(count);
    const p1 = wave(count);
    const p2 = helix(count);
    const p3 = vortex(count);

    g.setAttribute('position', new THREE.BufferAttribute(p0.slice(), 3));
    g.setAttribute('aP0', new THREE.BufferAttribute(p0, 3));
    g.setAttribute('aP1', new THREE.BufferAttribute(p1, 3));
    g.setAttribute('aP2', new THREE.BufferAttribute(p2, 3));
    g.setAttribute('aP3', new THREE.BufferAttribute(p3, 3));
    g.setAttribute('aRand', new THREE.BufferAttribute(randoms(count), 1));
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 12);
    return g;
  }, [count]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uProgress: { value: 0 },
      uSize: { value: 42 },
      uPixelRatio: { value: 1 },
      uColorA: { value: new THREE.Color('#1e5f8f') },
      uColorB: { value: new THREE.Color('#7df2ff') },
    }),
    []
  );

  useFrame((state, delta) => {
    const u = matRef.current?.uniforms;
    if (!u) return;

    u.uTime.value += delta;
    u.uPixelRatio.value = Math.min(viewport.dpr || 1, 2);
    // ease toward the real scroll value so fast flicks still feel smooth
    u.uProgress.value += (scrollState.progress - u.uProgress.value) * Math.min(1, delta * 4);

    if (groupRef.current) {
      const p = u.uProgress.value;
      groupRef.current.rotation.y += delta * 0.055 + Math.abs(scrollState.velocity) * 0.0006;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        scrollState.pointerY * 0.12 + p * 0.25,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      <points geometry={geometry} frustumCulled={false}>
        <shaderMaterial
          ref={matRef}
          vertexShader={particleVertex}
          fragmentShader={particleFragment}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

/* ------------------------------------------------------------------ *
 * Glowing core + wireframe cage
 * ------------------------------------------------------------------ */

function Core() {
  const glowRef = useRef();
  const cageRef = useRef();
  const matRef = useRef();

  const uniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color('#22d3ee') },
      uOpacity: { value: 1 },
    }),
    []
  );

  useFrame((state, delta) => {
    const p = scrollState.progress;
    // the core belongs to the hero — it recedes as the journey begins
    const presence = 1 - THREE.MathUtils.smoothstep(p, 0.02, 0.24);

    if (matRef.current) matRef.current.uniforms.uOpacity.value = presence * 0.9;

    if (glowRef.current) {
      const s = 0.6 + presence * 0.55;
      glowRef.current.scale.setScalar(s);
      glowRef.current.rotation.y += delta * 0.1;
    }

    if (cageRef.current) {
      cageRef.current.rotation.y -= delta * 0.07;
      cageRef.current.rotation.z += delta * 0.02;
      cageRef.current.scale.setScalar(1 + presence * 0.35);
      cageRef.current.material.opacity = presence * 0.14;
      cageRef.current.visible = presence > 0.01;
    }
  });

  return (
    <group>
      <mesh ref={glowRef}>
        <icosahedronGeometry args={[1.5, 12]} />
        <shaderMaterial
          ref={matRef}
          vertexShader={coreVertex}
          fragmentShader={coreFragment}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <mesh ref={cageRef}>
        <icosahedronGeometry args={[2.35, 1]} />
        <meshBasicMaterial color="#5eeaff" wireframe transparent opacity={0.14} />
      </mesh>
    </group>
  );
}

/* ------------------------------------------------------------------ *
 * Deep-space backdrop
 * ------------------------------------------------------------------ */

function Stars({ count = 700 }) {
  const ref = useRef();
  const positions = useMemo(() => starfield(count), [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.008;
    ref.current.rotation.x = scrollState.pointerY * 0.03;
  });

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#8fd7ff"
        size={0.09}
        sizeAttenuation
        transparent
        opacity={0.5}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ------------------------------------------------------------------ *
 * Camera choreography — one dolly move per section
 * ------------------------------------------------------------------ */

const CAMERA_KEYS = [
  new THREE.Vector3(0, 0, 7.6),
  new THREE.Vector3(0, 2.9, 6.4),
  new THREE.Vector3(0, 0.2, 6.8),
  new THREE.Vector3(0, 0.6, 5.0),
];

const LOOK_KEYS = [
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(0, -1.4, 0),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(0, -0.6, 0),
];

function CameraRig() {
  const { camera } = useThree();
  const target = useMemo(() => new THREE.Vector3(), []);
  const desired = useMemo(() => new THREE.Vector3(), []);
  const look = useMemo(() => new THREE.Vector3(), []);
  const eased = useRef(0);

  useFrame((state, delta) => {
    eased.current += (scrollState.progress - eased.current) * Math.min(1, delta * 4);

    const t = eased.current * (CAMERA_KEYS.length - 1);
    const i = Math.min(CAMERA_KEYS.length - 2, Math.floor(t));
    const f = THREE.MathUtils.smoothstep(t - i, 0, 1);

    desired.copy(CAMERA_KEYS[i]).lerp(CAMERA_KEYS[i + 1], f);
    look.copy(LOOK_KEYS[i]).lerp(LOOK_KEYS[i + 1], f);

    // parallax from the pointer, kept small so it reads as depth not wobble
    desired.x += scrollState.pointerX * 0.55;
    desired.y += -scrollState.pointerY * 0.35;

    camera.position.lerp(desired, Math.min(1, delta * 2.6));
    target.lerp(look, Math.min(1, delta * 2.6));
    camera.lookAt(target);
  });

  return null;
}

/* ------------------------------------------------------------------ *
 * Canvas
 * ------------------------------------------------------------------ */

export default function Scene() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const narrow = window.innerWidth < 768;
    setCount(narrow || coarse ? 3200 : 7000);
  }, []);

  if (!count) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0, 7.6], fov: 52, near: 0.1, far: 120 }}
      >
        <color attach="background" args={['#03060f']} />
        <fog attach="fog" args={['#03060f', 9, 34]} />

        <Stars />
        <Core />
        <Particles count={count} />
        <CameraRig />
      </Canvas>

      {/* vignette keeps the edges calm */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(3,6,15,0.8)_100%)]" />

      {/* copy lives on the left, so the left third gets a scrim it can sit on */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-midnight-950/70 via-transparent to-midnight-950/70 md:bg-gradient-to-r md:from-midnight-950/92 md:via-midnight-950/30 md:to-transparent md:to-45%" />
    </div>
  );
}
