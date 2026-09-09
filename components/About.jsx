'use client';

import Reveal from './Reveal';

export default function About({ dict }) {
  return (
    <section id="about" className="relative min-h-[100svh] py-32" aria-labelledby="about-heading">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-cyan-core/60" />
                {dict.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2
                id="about-heading"
                className="mt-5 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.05] tracking-tightest text-white"
              >
                {dict.titleLead}
                <br />
                <span className="text-slate-500">{dict.titleMuted}</span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-slate-400">
                {dict.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] sm:grid-cols-4">
                {dict.stats.map((s) => (
                  <div key={s.label} className="bg-midnight-950/80 px-5 py-6">
                    <div className="font-display text-[26px] font-semibold text-cyan-glow">
                      {s.value}
                    </div>
                    <div className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:pt-24">
            <ul className="space-y-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06]">
              {dict.principles.map((p, i) => (
                <Reveal key={p.title} delay={0.1 * i} as="li">
                  <div className="group bg-midnight-950/80 p-7 transition-colors duration-500 hover:bg-midnight-900/90">
                    <div className="flex items-start gap-4">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-core shadow-[0_0_10px_2px_rgba(34,211,238,0.5)]" />
                      <div>
                        <h3 className="font-display text-[17px] font-semibold text-white">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-[14.5px] leading-relaxed text-slate-400">{p.copy}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
