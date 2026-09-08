'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { scrollState } from '@/lib/scroll';

/**
 * Inertial scrolling + the single source of truth for scroll progress.
 * Everything 3D reads `scrollState` inside useFrame, so scrolling never
 * re-renders React.
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const setProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollState.progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };

    let lenis;
    let raf;

    if (!reduced) {
      lenis = new Lenis({
        duration: 1.15,
        smoothWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      lenis.on('scroll', ({ velocity }) => {
        scrollState.velocity = velocity;
        setProgress();
      });

      const loop = (time) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    } else {
      window.addEventListener('scroll', setProgress, { passive: true });
    }

    const onPointer = (e) => {
      scrollState.pointerX = (e.clientX / window.innerWidth) * 2 - 1;
      scrollState.pointerY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    setProgress();
    window.addEventListener('resize', setProgress);
    window.addEventListener('pointermove', onPointer, { passive: true });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (lenis) lenis.destroy();
      else window.removeEventListener('scroll', setProgress);
      window.removeEventListener('resize', setProgress);
      window.removeEventListener('pointermove', onPointer);
    };
  }, []);

  return children;
}
