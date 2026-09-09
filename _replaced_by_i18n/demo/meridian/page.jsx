'use client';

import { useState } from 'react';
import Link from 'next/link';
import VideoHero from '@/components/demo/VideoHero';
import DemoNav from '@/components/demo/DemoNav';
import ConceptBadge from '@/components/demo/ConceptBadge';

const STATS = [
  ['5 days', 'Average crown turnaround'],
  ['0.4%', 'Remake rate, trailing 12 months'],
  ['112', 'Partner clinics across Ontario'],
  ['2011', 'Milling in Ottawa since'],
];

const SERVICES = [
  {
    title: 'Crown & bridge',
    copy: 'Full-contour and layered zirconia, e.max, and PFM. Milled in-house, finished by hand.',
    turnaround: '5 days',
  },
  {
    title: 'Implant restoration',
    copy: 'Custom abutments and screw-retained restorations on all major platforms, planned digitally.',
    turnaround: '7 days',
  },
  {
    title: 'Removable',
    copy: 'Partial frameworks and full dentures, digitally designed and printed for a predictable try-in.',
    turnaround: '9 days',
  },
  {
    title: 'Splints & guards',
    copy: 'Night guards, bruxism splints and sports guards from an intraoral scan or a poured model.',
    turnaround: '3 days',
  },
];

const STEPS = [
  ['Submit', 'Upload an intraoral scan or book a model pickup. Any scanner, any file format.'],
  ['Design', 'A technician designs the case and sends the proposal back for your approval.'],
  ['Mill', 'Approved cases go to the mill the same day, then to hand finishing and glaze.'],
  ['Deliver', 'Tracked courier to your clinic, or same-day drop-off inside the greenbelt.'],
];

export default function Meridian() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-navy">
      <ConceptBadge tone="dark" />

      <DemoNav
        maxWidth="max-w-[1180px]"
        brand={
          <span className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-clinicblue text-[13px] font-bold text-white">
              M
            </span>
            <span className="text-[15px] font-semibold tracking-tight">Meridian Dental Lab</span>
          </span>
        }
        links={[
          { href: '#services', label: 'Services' },
          { href: '#process', label: 'How it works' },
          { href: '#portal', label: 'Case portal' },
        ]}
        cta={{ href: '#open', label: 'Open a case' }}
        solid="border-b border-navy/10 bg-white/95 backdrop-blur-md"
        solidText="text-navy"
        ctaTop="rounded-lg bg-clinicblue px-5 py-2.5 text-white hover:bg-[#155399]"
        ctaSolid="rounded-lg bg-clinicblue px-5 py-2.5 text-white hover:bg-[#155399]"
      />

      {/* --------------------------------------------------------- hero */}
      <div id="top">
        <VideoHero
          src="/work/dental-lab-web.mp4"
          poster="/work/dental-lab.jpg"
          overlay="bg-[linear-gradient(100deg,rgba(12,27,42,0.95)_0%,rgba(12,27,42,0.82)_38%,rgba(12,27,42,0.45)_70%,rgba(12,27,42,0.3)_100%)]"
          height="min-h-[92svh]"
        >
          <div className="mx-auto max-w-[1180px] px-6 pb-20">
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-300">
              Digital dental laboratory · Ottawa
            </p>
            <h1 className="mt-5 max-w-[16ch] text-[clamp(2.4rem,6.4vw,4.6rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white">
              Crowns your chair time can count on.
            </h1>
            <p className="mt-6 max-w-[50ch] text-[16px] leading-relaxed text-white/80">
              Five-day turnaround, a 0.4% remake rate, and a case portal that tells you exactly
              where a unit is — without a phone call.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#open" className="rounded-lg bg-clinicblue px-7 py-3.5 text-[14.5px] font-semibold text-white transition hover:bg-[#155399]">
                Open a case
              </a>
              <a href="#portal" className="rounded-lg border border-white/35 px-7 py-3.5 text-[14.5px] font-medium text-white transition hover:bg-white/10">
                Partner login
              </a>
            </div>
          </div>
        </VideoHero>
      </div>

      {/* -------------------------------------------------------- stats */}
      <div className="border-b border-navy/10 bg-clinical">
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-px px-6 md:grid-cols-4">
          {STATS.map(([v, l]) => (
            <div key={l} className="py-9 pr-6">
              <div className="text-[30px] font-bold tracking-tight text-clinicblue">{v}</div>
              <div className="mt-1.5 text-[12.5px] leading-snug text-navy/55">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------------------------------------------- services */}
      <section id="services" className="mx-auto max-w-[1180px] px-6 py-28">
        <p className="text-[11px] uppercase tracking-[0.3em] text-clinicblue">Services</p>
        <h2 className="mt-4 max-w-[20ch] text-[clamp(1.9rem,4.2vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em]">
          Everything you send, milled under one roof.
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl border border-navy/10 bg-white p-7 transition-all duration-300 hover:border-clinicblue/40 hover:shadow-[0_12px_40px_-16px_rgba(12,27,42,0.25)]"
            >
              <div className="flex items-start justify-between gap-6">
                <h3 className="text-[20px] font-semibold tracking-tight">{s.title}</h3>
                <span className="shrink-0 rounded-full bg-clinical px-3 py-1 text-[11.5px] font-medium text-clinicblue">
                  {s.turnaround}
                </span>
              </div>
              <p className="mt-3.5 text-[14.5px] leading-relaxed text-navy/65">{s.copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------ process */}
      <section id="process" className="border-y border-navy/10 bg-clinical py-28">
        <div className="mx-auto max-w-[1180px] px-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-clinicblue">How it works</p>
          <h2 className="mt-4 max-w-[22ch] text-[clamp(1.9rem,4.2vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em]">
            Four steps, and you can watch every one of them.
          </h2>

          <ol className="mt-14 grid gap-8 md:grid-cols-4">
            {STEPS.map(([title, copy], i) => (
              <li key={title} className="relative">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-clinicblue text-[13px] font-bold text-white">
                    {i + 1}
                  </span>
                  {i < STEPS.length - 1 && (
                    <span className="hidden h-px flex-1 bg-navy/15 md:block" />
                  )}
                </div>
                <h3 className="mt-5 text-[17px] font-semibold tracking-tight">{title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-navy/60">{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------------- portal */}
      <section id="portal" className="mx-auto max-w-[1180px] px-6 py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-clinicblue">Case portal</p>
            <h2 className="mt-4 text-[clamp(1.9rem,4.2vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em]">
              Stop phoning the lab to ask where a crown is.
            </h2>
            <p className="mt-6 max-w-[46ch] text-[16px] leading-relaxed text-navy/65">
              Every case gets a status, a due date and a technician&apos;s name. Approve a design,
              flag a shade, or push a delivery date without picking up the phone.
            </p>
            <ul className="mt-8 space-y-3.5">
              {[
                'Live status from scan received to courier dispatched',
                'Design approval with a 3D preview in the browser',
                'Shade and remake notes attached to the case, not an inbox',
                'Monthly statements and case history per practitioner',
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-[15px] text-navy/75">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-clinicblue" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* mock portal panel */}
          <div className="overflow-hidden rounded-2xl border border-navy/12 bg-white shadow-[0_20px_60px_-30px_rgba(12,27,42,0.4)]">
            <div className="flex items-center justify-between border-b border-navy/10 bg-clinical px-5 py-3.5">
              <span className="text-[13px] font-semibold">Open cases</span>
              <span className="rounded-full bg-white px-2.5 py-1 text-[11px] text-navy/50">
                Dr. Chen · Bells Corners Dental
              </span>
            </div>
            <ul className="divide-y divide-navy/8">
              {[
                ['MDL-4471', 'Zirconia crown · #14', 'In milling', 'Fri', 'bg-amber-100 text-amber-800'],
                ['MDL-4468', 'Implant crown · #30', 'Awaiting approval', 'Today', 'bg-sky-100 text-sky-800'],
                ['MDL-4459', 'Night guard', 'Shipped', 'Delivered', 'bg-emerald-100 text-emerald-800'],
                ['MDL-4452', 'Bridge · #19–21', 'Design', 'Mon', 'bg-slate-100 text-slate-700'],
              ].map(([id, desc, status, due, tone]) => (
                <li key={id} className="flex items-center justify-between gap-4 px-5 py-4">
                  <div className="min-w-0">
                    <div className="text-[13.5px] font-semibold">{id}</div>
                    <div className="truncate text-[12.5px] text-navy/55">{desc}</div>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${tone}`}>
                      {status}
                    </span>
                    <span className="w-16 text-right text-[12px] text-navy/45">{due}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- open */}
      <section id="open" className="border-t border-navy/10 bg-navy py-28 text-white">
        <div className="mx-auto grid max-w-[1180px] gap-14 px-6 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-[clamp(1.9rem,4.2vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em]">
              Send a first case.
            </h2>
            <p className="mt-6 max-w-[42ch] text-[16px] leading-relaxed text-white/70">
              New partner clinics get their first unit at no charge, and a technician on the phone
              for the first month. Tell us what you use and we&apos;ll handle the rest.
            </p>
            <div className="mt-10 space-y-5 text-[15px]">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/40">Lab</div>
                <div className="mt-1.5 text-white/85">2280 Carling Ave, Unit 4 · Ottawa</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/40">Phone</div>
                <div className="mt-1.5 text-white/85">(613) 555-0192</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.06] p-8 ring-1 ring-white/12 sm:p-9">
            {sent ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-clinicblue text-xl">✓</div>
                <h3 className="mt-6 text-[21px] font-semibold">Case request received</h3>
                <p className="mt-3 max-w-[34ch] text-[14.5px] leading-relaxed text-white/60">
                  A real build would create the case, email a pickup label and open the portal
                  record. Here it just confirms the form works.
                </p>
                <button onClick={() => setSent(false)} className="mt-8 rounded-lg border border-white/25 px-6 py-2.5 text-[13.5px] transition hover:bg-white/10">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Practitioner name" className="rounded-lg border border-white/15 bg-white/5 px-4 py-3.5 text-[14.5px] placeholder:text-white/35 outline-none focus:border-clinicblue" />
                  <input required placeholder="Clinic" className="rounded-lg border border-white/15 bg-white/5 px-4 py-3.5 text-[14.5px] placeholder:text-white/35 outline-none focus:border-clinicblue" />
                </div>
                <input required type="email" placeholder="Email" className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3.5 text-[14.5px] placeholder:text-white/35 outline-none focus:border-clinicblue" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <select className="rounded-lg border border-white/15 bg-white/5 px-4 py-3.5 text-[14.5px] outline-none focus:border-clinicblue">
                    <option className="bg-navy">Case type</option>
                    {SERVICES.map((s) => <option key={s.title} className="bg-navy">{s.title}</option>)}
                  </select>
                  <select className="rounded-lg border border-white/15 bg-white/5 px-4 py-3.5 text-[14.5px] outline-none focus:border-clinicblue">
                    <option className="bg-navy">Scanner</option>
                    {['iTero', 'Trios', 'Primescan', 'Medit', 'Physical impression'].map((s) => (
                      <option key={s} className="bg-navy">{s}</option>
                    ))}
                  </select>
                </div>
                <textarea rows={4} placeholder="Anything specific about the case?" className="w-full resize-none rounded-lg border border-white/15 bg-white/5 px-4 py-3.5 text-[14.5px] placeholder:text-white/35 outline-none focus:border-clinicblue" />
                <button type="submit" className="w-full rounded-lg bg-clinicblue py-4 text-[15px] font-semibold transition hover:bg-[#155399]">
                  Request a pickup
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-navy py-8 text-white/45">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-3 px-6 text-[13px] sm:flex-row">
          <span>Meridian Dental Lab · Ottawa, Ontario</span>
          <Link href="/#work" className="underline underline-offset-2 hover:text-white">
            A concept site by Zyvanta
          </Link>
        </div>
      </footer>
    </div>
  );
}
