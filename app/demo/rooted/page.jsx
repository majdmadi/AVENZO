'use client';

import { useState } from 'react';
import Link from 'next/link';
import VideoHero from '@/components/demo/VideoHero';
import DemoNav from '@/components/demo/DemoNav';
import ConceptBadge from '@/components/demo/ConceptBadge';

const SERVICES = [
  {
    title: 'Design & build',
    copy: 'Beds, borders, plantings and the odd small retaining wall. We draw it, you approve it, we plant it.',
    from: 'from $2,400',
  },
  {
    title: 'Weekly maintenance',
    copy: 'Mowing, edging, bed care and cleanup on a fixed day, all season, with the same crew each week.',
    from: 'from $65 / visit',
  },
  {
    title: 'Hardscape',
    copy: 'Interlock patios, walkways and steps, built on a base that survives an Ottawa freeze-thaw.',
    from: 'from $8,000',
  },
  {
    title: 'Irrigation',
    copy: 'Zoned sprinkler install, spring startup and fall blowout, with a controller you can run from your phone.',
    from: 'from $3,200',
  },
];

const PACKAGES = [
  {
    name: 'Tidy',
    price: '$180',
    cadence: 'per month',
    blurb: 'For a small lot that just needs to stay sharp.',
    includes: ['Bi-weekly mow & edge', 'Spring cleanup', 'Fall leaf removal'],
    featured: false,
  },
  {
    name: 'Full season',
    price: '$320',
    cadence: 'per month',
    blurb: 'The one most of our clients are on.',
    includes: [
      'Weekly mow & edge',
      'Bed weeding and mulch top-up',
      'Spring and fall cleanup',
      'Hedge trim, twice',
      'Irrigation startup & blowout',
    ],
    featured: true,
  },
  {
    name: 'Estate',
    price: 'Quoted',
    cadence: 'per property',
    blurb: 'Larger grounds, or anything with a schedule of its own.',
    includes: ['Everything in Full season', 'Twice-weekly visits', 'Seasonal planting rotations', 'Named account lead'],
    featured: false,
  },
];

const CALENDAR = [
  ['April', 'Cleanup, dethatch, irrigation startup'],
  ['May', 'First cuts, mulch, spring planting'],
  ['June — Aug', 'Weekly maintenance, hedge trims'],
  ['September', 'Aeration, overseed, fall planting'],
  ['Oct — Nov', 'Leaf removal, cutback, blowout'],
];

export default function Rooted() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-stone font-dm text-bark">
      <ConceptBadge tone="dark" />

      <DemoNav
        maxWidth="max-w-[1160px]"
        brand={
          <span className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-current text-[13px] font-bold">
              R
            </span>
            <span className="text-[16px] font-bold tracking-tight">Rooted</span>
          </span>
        }
        links={[
          { href: '#services', label: 'Services' },
          { href: '#packages', label: 'Packages' },
          { href: '#season', label: 'Season' },
        ]}
        cta={{ href: '#quote', label: 'Get a quote' }}
        solid="border-b border-bark/10 bg-stone/95 backdrop-blur-md"
        solidText="text-bark"
        ctaTop="rounded-full bg-white px-5 py-2.5 text-forest hover:bg-white/90"
        ctaSolid="rounded-full bg-forest px-5 py-2.5 text-white hover:bg-[#255637]"
      />

      {/* --------------------------------------------------------- hero */}
      <div id="top">
        <VideoHero
          src="/work/landscaping-web.mp4"
          poster="/work/landscaping.jpg"
          overlay="bg-gradient-to-t from-bark/90 via-bark/25 to-bark/45"
        >
          <div className="mx-auto max-w-[1160px] px-6 pb-20">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/75">
              Landscape care · Ottawa &amp; Kanata
            </p>
            <h1 className="mt-5 max-w-[14ch] text-[clamp(2.6rem,7.4vw,5.4rem)] font-bold leading-[0.98] tracking-[-0.035em] text-white">
              Your yard, handled all season.
            </h1>
            <p className="mt-6 max-w-[48ch] text-[16.5px] leading-relaxed text-white/85">
              One crew, one fixed day of the week, one price agreed in April. No chasing quotes
              in July because the grass got away from you.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#quote" className="rounded-full bg-forest px-7 py-3.5 text-[14.5px] font-bold text-white transition hover:bg-[#255637]">
                Get a quote in 2 minutes
              </a>
              <a href="#packages" className="rounded-full border border-white/40 px-7 py-3.5 text-[14.5px] font-medium text-white transition hover:bg-white/10">
                See packages
              </a>
            </div>
          </div>
        </VideoHero>
      </div>

      {/* -------------------------------------------------------- strip */}
      <div className="bg-forest text-white">
        <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 py-4 text-[13px]">
          <span>Booking for the 2026 season</span>
          <span className="hidden sm:inline opacity-40">·</span>
          <span>Fully insured, WSIB covered</span>
          <span className="hidden sm:inline opacity-40">·</span>
          <span>Same crew every visit</span>
        </div>
      </div>

      {/* ----------------------------------------------------- services */}
      <section id="services" className="mx-auto max-w-[1160px] px-6 py-28">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-clay">Services</p>
        <h2 className="mt-4 max-w-[20ch] text-[clamp(2rem,4.4vw,3.2rem)] font-bold leading-[1.06] tracking-[-0.035em]">
          Four things, done properly.
        </h2>
        <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-bark/65">
          We don&apos;t plow, we don&apos;t do tree removal, and we don&apos;t take on more
          properties than the crew can finish before dark.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group rounded-3xl border border-bark/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-forest/30 hover:shadow-[0_16px_44px_-22px_rgba(30,42,34,0.4)]"
            >
              <div className="flex items-baseline justify-between gap-6">
                <h3 className="text-[21px] font-bold tracking-tight">{s.title}</h3>
                <span className="shrink-0 text-[12.5px] font-medium text-moss">{s.from}</span>
              </div>
              <p className="mt-3.5 text-[15px] leading-relaxed text-bark/65">{s.copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------- packages */}
      <section id="packages" className="border-y border-bark/10 bg-[#EEEBE2] py-28">
        <div className="mx-auto max-w-[1160px] px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-clay">Packages</p>
          <h2 className="mt-4 max-w-[22ch] text-[clamp(2rem,4.4vw,3.2rem)] font-bold leading-[1.06] tracking-[-0.035em]">
            Pick a season, not a phone call.
          </h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((p) => (
              <article
                key={p.name}
                className={`relative flex flex-col rounded-3xl border p-8 ${
                  p.featured
                    ? 'border-forest bg-forest text-white shadow-[0_20px_60px_-28px_rgba(47,107,69,0.7)]'
                    : 'border-bark/12 bg-white'
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-clay px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                    Most booked
                  </span>
                )}

                <h3 className={`text-[20px] font-bold ${p.featured ? 'text-white' : 'text-bark'}`}>
                  {p.name}
                </h3>
                <p className={`mt-2 text-[14px] ${p.featured ? 'text-white/75' : 'text-bark/60'}`}>
                  {p.blurb}
                </p>

                <div className="mt-7 flex items-baseline gap-2">
                  <span className="text-[38px] font-bold tracking-tight">{p.price}</span>
                  <span className={`text-[13px] ${p.featured ? 'text-white/65' : 'text-bark/50'}`}>
                    {p.cadence}
                  </span>
                </div>

                <ul className="mt-7 flex-1 space-y-3">
                  {p.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5 text-[14.5px]">
                      <span className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${p.featured ? 'bg-white/70' : 'bg-forest'}`} />
                      <span className={p.featured ? 'text-white/90' : 'text-bark/75'}>{inc}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#quote"
                  className={`mt-8 rounded-full py-3.5 text-center text-[14px] font-bold transition ${
                    p.featured
                      ? 'bg-white text-forest hover:bg-white/90'
                      : 'bg-bark text-white hover:bg-bark/85'
                  }`}
                >
                  Start with {p.name}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- season */}
      <section id="season" className="mx-auto max-w-[1160px] px-6 py-28">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-clay">The season</p>
            <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-bold leading-[1.06] tracking-[-0.035em]">
              What we&apos;re doing, and when.
            </h2>
            <p className="mt-6 max-w-[40ch] text-[16px] leading-relaxed text-bark/65">
              An Ottawa season is short. Everything below is already scheduled the day you sign —
              you never have to call and ask whether it&apos;s time to aerate.
            </p>
          </div>

          <ol className="divide-y divide-bark/10 border-y border-bark/10">
            {CALENDAR.map(([month, work]) => (
              <li key={month} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8">
                <span className="w-32 shrink-0 text-[13px] font-bold uppercase tracking-[0.12em] text-forest">
                  {month}
                </span>
                <span className="text-[15.5px] text-bark/75">{work}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* -------------------------------------------------------- quote */}
      <section id="quote" className="border-t border-bark/10 bg-bark py-28 text-white">
        <div className="mx-auto grid max-w-[1160px] gap-14 px-6 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-[clamp(2rem,4.4vw,3.2rem)] font-bold leading-[1.06] tracking-[-0.035em]">
              Two minutes for a real number.
            </h2>
            <p className="mt-6 max-w-[42ch] text-[16px] leading-relaxed text-white/70">
              Tell us the postal code and roughly what you&apos;re after. We measure the lot from
              aerial imagery and send a fixed seasonal price — no site visit needed for
              maintenance work.
            </p>
            <div className="mt-10 space-y-5 text-[15px]">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/40">Service area</div>
                <div className="mt-1.5 text-white/85">Ottawa, Kanata, Stittsville, Barrhaven</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/40">Phone</div>
                <div className="mt-1.5 text-white/85">(613) 555-0177</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white/[0.06] p-8 ring-1 ring-white/12 sm:p-9">
            {sent ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-forest text-xl">✓</div>
                <h3 className="mt-6 text-[21px] font-bold">Quote request in</h3>
                <p className="mt-3 max-w-[34ch] text-[14.5px] leading-relaxed text-white/60">
                  A real build would measure the lot, price it and email a fixed quote. Here it
                  just confirms the form works.
                </p>
                <button onClick={() => setSent(false)} className="mt-8 rounded-full border border-white/25 px-6 py-2.5 text-[13.5px] transition hover:bg-white/10">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <h3 className="text-[21px] font-bold">Get a seasonal price</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Name" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-[14.5px] placeholder:text-white/35 outline-none focus:border-forest" />
                  <input required placeholder="Postal code" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-[14.5px] placeholder:text-white/35 outline-none focus:border-forest" />
                </div>
                <input required type="email" placeholder="Email" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-[14.5px] placeholder:text-white/35 outline-none focus:border-forest" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <select className="rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-[14.5px] outline-none focus:border-forest">
                    <option className="bg-bark">What do you need?</option>
                    {SERVICES.map((s) => <option key={s.title} className="bg-bark">{s.title}</option>)}
                  </select>
                  <select className="rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-[14.5px] outline-none focus:border-forest">
                    <option className="bg-bark">Property size</option>
                    {['Under 3,000 sq ft', '3,000 – 7,000 sq ft', '7,000 – 15,000 sq ft', 'Over 15,000 sq ft'].map((s) => (
                      <option key={s} className="bg-bark">{s}</option>
                    ))}
                  </select>
                </div>
                <textarea rows={3} placeholder="Anything we should know? Slopes, dogs, a gate code." className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-[14.5px] placeholder:text-white/35 outline-none focus:border-forest" />
                <button type="submit" className="w-full rounded-xl bg-forest py-4 text-[15px] font-bold transition hover:bg-[#255637]">
                  Send my quote request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-bark py-8 text-white/45">
        <div className="mx-auto flex max-w-[1160px] flex-col items-center justify-between gap-3 px-6 text-[13px] sm:flex-row">
          <span>Rooted Landscape Co. · Ottawa, Ontario</span>
          <Link href="/#work" className="underline underline-offset-2 hover:text-white">
            A concept site by Avenzo
          </Link>
        </div>
      </footer>
    </div>
  );
}
