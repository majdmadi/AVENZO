// Four particle formations the scene morphs between as you scroll.
// Every function fills a Float32Array of xyz triples, so they can be handed
// straight to the GPU as vertex attributes.

const TAU = Math.PI * 2;

/** 1 — Hero: an even shell of points (Fibonacci sphere). */
export function sphere(count, radius = 2.9) {
  const out = new Float32Array(count * 3);
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    out[i * 3] = Math.cos(theta) * r * radius;
    out[i * 3 + 1] = y * radius;
    out[i * 3 + 2] = Math.sin(theta) * r * radius;
  }
  return out;
}

/** 2 — Services: a rippling ground plane you fly over. */
export function wave(count, size = 11) {
  const out = new Float32Array(count * 3);
  const cols = Math.ceil(Math.sqrt(count));
  for (let i = 0; i < count; i++) {
    const cx = i % cols;
    const cz = Math.floor(i / cols);
    const x = (cx / (cols - 1) - 0.5) * size;
    const z = (cz / (cols - 1) - 0.5) * size;
    const d = Math.sqrt(x * x + z * z);
    const y = Math.sin(d * 1.15) * 1.15 - 2.0 + Math.cos(x * 0.55) * 0.28;
    out[i * 3] = x;
    out[i * 3 + 1] = y;
    out[i * 3 + 2] = z;
  }
  return out;
}

/** 3 — About: a double helix, two strands of the same system. */
export function helix(count, radius = 1.75, height = 9, turns = 4) {
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const t = i / count;
    const strand = i % 2 === 0 ? 0 : Math.PI;
    const angle = t * TAU * turns + strand;
    const jitter = i % 7 === 0 ? 0.35 : 0;
    out[i * 3] = Math.cos(angle) * (radius + jitter);
    out[i * 3 + 1] = (t - 0.5) * height;
    out[i * 3 + 2] = Math.sin(angle) * (radius + jitter);
  }
  return out;
}

/** 4 — Contact: everything funnels toward a single point. */
export function vortex(count, radius = 2.9, height = 6.0, turns = 7) {
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const t = i / count;
    const eased = Math.pow(t, 0.75);
    const angle = eased * TAU * turns;
    const r = 0.12 + eased * radius;
    out[i * 3] = Math.cos(angle) * r;
    out[i * 3 + 1] = height * 0.5 - eased * height;
    out[i * 3 + 2] = Math.sin(angle) * r;
  }
  return out;
}

export function randoms(count) {
  const out = new Float32Array(count);
  for (let i = 0; i < count; i++) out[i] = Math.random();
  return out;
}

export function starfield(count, spread = 46) {
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = spread * (0.55 + Math.random() * 0.45);
    const theta = Math.random() * TAU;
    const phi = Math.acos(2 * Math.random() - 1);
    out[i * 3] = Math.sin(phi) * Math.cos(theta) * r;
    out[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * r * 0.6;
    out[i * 3 + 2] = Math.cos(phi) * r;
  }
  return out;
}
