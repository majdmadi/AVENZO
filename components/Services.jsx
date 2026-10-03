'use client';

import Link from 'next/link';
import Reveal from './Reveal';
import { services as servicePages } from '@/lib/servicePages';

export default function Services({ dict, locale = 'en' }) {
  const more = locale === 'fr' ? 'En savoir plus' : 'Learn more';
  return (
    <section id="services" className="relative min-h-[100svh] py-32" aria-labelledby="services-heading">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-cyan-core/60" />
            {dict.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            id="services-heading"
            className="mt-5 max-w-[20ch] font-display text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.05] tracking-tightest text-white"
          >
            {dict.title}
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-slate-400">{dict.lede}</p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {dict.items.map((s, i) => (
            <Reveal key={s.n} delay={0.08 * i}>
              <Link href={`/${locale}/services/${servicePages[i].slug[locale]}`} className="block h-full">
              <article className="group relative h-full overflow-hidden rounded-2xl glass p-7 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-core/35">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-core/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-baseline justify-between">
                  <span className="font-display text-[11px] tracking-[0.3em] text-cyan-core/70">
                    {s.n}
                  </span>
                  <span className="text-cyan-core/30 transition-all duration-500 group-hover:translate-x-1 group-hover:text-cyan-core">
                    →
                  </span>
                </div>

                <h3 className="mt-6 font-display text-[22px] font-semibold text-white">{s.title}</h3>

                <p className="mt-3.5 text-[14.5px] leading-relaxed text-slate-400">{s.copy}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-slate-400"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <span className="mt-6 inline-flex items-center gap-1.5 text-[12.5px] text-cyan-glow/80 transition-colors group-hover:text-cyan-glow">
                  {more}
                  <span aria-hidden="true">→</span>
                </span>
              </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
