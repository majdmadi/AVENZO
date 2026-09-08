'use client';

import Reveal from './Reveal';

const SERVICES = [
  {
    n: '01',
    title: 'Web platforms',
    copy:
      'Marketing sites, portals and storefronts on Next.js — engineered for Core Web Vitals, search visibility and conversion, not just for the launch screenshot.',
    tags: ['Next.js', 'Design systems', 'SEO', 'CMS'],
  },
  {
    n: '02',
    title: 'Custom applications',
    copy:
      'Internal tools, client portals and dashboards that replace the spreadsheet everyone is quietly afraid of. Built on React, Node and Azure, with auth and audit built in.',
    tags: ['React', 'Node', 'Azure', 'Dataverse'],
  },
  {
    n: '03',
    title: 'Automation & integration',
    copy:
      'The systems you already pay for, finally talking to each other. Power Automate, n8n and API pipelines that take hours of manual work out of the week.',
    tags: ['Power Automate', 'n8n', 'Logic Apps', 'APIs'],
  },
  {
    n: '04',
    title: 'AI engineering',
    copy:
      'Document analysis, assistants and retrieval systems built on current LLM APIs — scoped to a real workflow, with the guardrails and evaluation to keep it honest.',
    tags: ['LLM APIs', 'RAG', 'Extraction', 'Evals'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative min-h-[100svh] py-32" aria-labelledby="services-heading">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-cyan-core/60" />
            Services
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            id="services-heading"
            className="mt-5 max-w-[20ch] font-display text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.05] tracking-tightest text-white"
          >
            Four ways we make software carry its weight.
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-slate-400">
            Most engagements start with one of these and grow into two. You work directly
            with the people writing the code.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={0.08 * i}>
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

                <h3 className="mt-6 font-display text-[22px] font-semibold text-white">
                  {s.title}
                </h3>

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
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
