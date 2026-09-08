'use client';

import Reveal from './Reveal';

const STATS = [
  { value: '2019', label: 'Building since' },
  { value: '40+', label: 'Projects shipped' },
  { value: '100%', label: 'Senior-built' },
  { value: 'Ottawa', label: 'Based in Canada' },
];

const PRINCIPLES = [
  {
    title: 'One team, no handoffs',
    copy:
      'The person who scopes your project is the person who builds it. Nothing gets lost translating a deck into a codebase.',
  },
  {
    title: 'Performance is a feature',
    copy:
      'Every build ships with a budget for load time, bundle size and accessibility — measured, not assumed.',
  },
  {
    title: 'You own everything',
    copy:
      'Your repository, your cloud account, your data. We work in the open and hand over clean, documented code.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative min-h-[100svh] py-32" aria-labelledby="about-heading">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-cyan-core/60" />
                The studio
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2
                id="about-heading"
                className="mt-5 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.05] tracking-tightest text-white"
              >
                Small on purpose.
                <br />
                <span className="text-slate-500">Senior by default.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-slate-400">
                <p>
                  Avenzo is a web and software studio in Ottawa. We work with founders and
                  operations teams who have outgrown their tooling and need something built
                  properly — quickly, and without a project manager in between.
                </p>
                <p>
                  That means full-stack engineering across React and Next.js, Azure and the
                  Microsoft Power Platform, and the automation and AI layers that sit on top.
                  One engagement, one accountable team, from first sketch to production.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] sm:grid-cols-4">
                {STATS.map((s) => (
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
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p.title} delay={0.1 * i} as="li">
                  <div className="group bg-midnight-950/80 p-7 transition-colors duration-500 hover:bg-midnight-900/90">
                    <div className="flex items-start gap-4">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-core shadow-[0_0_10px_2px_rgba(34,211,238,0.5)]" />
                      <div>
                        <h3 className="font-display text-[17px] font-semibold text-white">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-[14.5px] leading-relaxed text-slate-400">
                          {p.copy}
                        </p>
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
