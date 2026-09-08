'use client';

import { useEffect, useRef } from 'react';

/**
 * Full-bleed looping video hero shared by the three demo sites.
 * Falls back to the poster still if autoplay is refused or the codec
 * is unavailable, so the hero never renders as a blank box.
 */
export default function VideoHero({
  src,
  poster,
  overlay = 'bg-gradient-to-t from-black/80 via-black/35 to-black/45',
  height = 'min-h-[100svh]',
  children,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // Some browsers refuse autoplay until the element is muted in JS too.
    v.muted = true;
    const attempt = v.play();
    if (attempt?.catch) attempt.catch(() => {});
  }, []);

  return (
    <section className={`relative flex ${height} items-end overflow-hidden`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className={`absolute inset-0 ${overlay}`} />
      {/* protects the fixed nav over bright footage */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/45 to-transparent" />
      <div className="relative w-full">{children}</div>
    </section>
  );
}
