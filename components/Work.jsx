'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Reveal from './Reveal';

const TINTS = {
  restaurant: 'from-amber-500/45 via-orange-700/25 to-rose-950/50',
  'dental-lab': 'from-sky-400/45 via-cyan-600/25 to-indigo-950/50',
  landscaping: 'from-emerald-400/45 via-green-600/25 to-teal-950/50',
};

function Piece({ piece, index, locale, viewSite }) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [broken, setBroken] = useState(false);

  // Touch devices have no hover — play whichever card is on screen instead.
  useEffect(() => {
    const el = cardRef.current;
    const video = videoRef.current;
    if (!el || !video) return;
    if (!window.matchMedia('(pointer: coarse)').matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.5 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const play = () => videoRef.current?.play().catch(() => {});
  const stop = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <Reveal delay={index * 0.1}>
      <Link
        href={`/${locale}/demo/${piece.demo}`}
        ref={cardRef}
        onMouseEnter={play}
        onMouseLeave={stop}
        onFocus={play}
        onBlur={stop}
        className="group relative block overflow-hidden rounded-2xl glass outline-none transition-all duration-500 hover:-translate-y-1 hover:border-cyan-core/35 focus-visible:border-cyan-core/60"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-midnight-900">
          {!broken && (
            <video
              ref={videoRef}
              src={`/work/${piece.slug}-web.mp4`}
              poster={`/work/${piece.slug}.jpg`}
              muted
              loop
              playsInline
              preload="metadata"
              onError={() => setBroken(true)}
              className="h-full w-full scale-105 object-cover transition-transform duration-[1200ms] group-hover:scale-100"
            />
          )}

          {broken && (
            <div className={`h-full w-full bg-gradient-to-br ${TINTS[piece.slug]}`}>
              <div className="h-full w-full bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.12),transparent_60%)]" />
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/20 to-transparent" />

          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-midnight-950/70 px-3 py-1 text-[10.5px] uppercase tracking-[0.2em] text-slate-300 backdrop-blur">
            {piece.sector}
          </span>

          <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full border border-cyan-core/40 bg-midnight-950/80 px-3 py-1.5 text-[11.5px] text-cyan-glow opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
            {viewSite}
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </span>
        </div>

        <div className="p-6">
          <h3 className="font-display text-[19px] font-semibold text-white">{piece.name}</h3>
          <p className="mt-2.5 text-[14px] leading-relaxed text-slate-400">{piece.copy}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {piece.build.map((b) => (
              <li
                key={b}
                className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10.5px] text-slate-400"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Work({ dict, locale }) {
  return (
    <section id="work" className="relative py-32" aria-labelledby="work-heading">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-cyan-core/60" />
            {dict.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            id="work-heading"
            className="mt-5 max-w-[22ch] font-display text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.05] tracking-tightest text-white"
          >
            {dict.title}
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-5 max-w-[58ch] text-[15px] leading-relaxed text-slate-400">{dict.lede}</p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {dict.items.map((p, i) => (
            <Piece key={p.slug} piece={p} index={i} locale={locale} viewSite={dict.viewSite} />
          ))}
        </div>
      </div>
    </section>
  );
}
