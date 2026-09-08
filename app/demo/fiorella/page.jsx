'use client';

import { useState } from 'react';
import Link from 'next/link';
import VideoHero from '@/components/demo/VideoHero';
import DemoNav from '@/components/demo/DemoNav';
import ConceptBadge from '@/components/demo/ConceptBadge';

const MENU = [
  {
    course: 'Antipasti',
    items: [
      ['Focaccia, rosemary, sea salt', '9'],
      ['Burrata, late peaches, basil oil', '18'],
      ['Grilled octopus, white bean, lemon', '21'],
      ['Prosciutto di Parma, 24 months', '19'],
    ],
  },
  {
    course: 'Primi',
    items: [
      ['Spaghetti cacio e pepe', '24'],
      ['Tagliatelle, slow beef ragù', '29'],
      ['Cacio e ricotta, mint, pecorino', '26'],
      ['Risotto, wild mushroom, thyme', '27'],
    ],
  },
  {
    course: 'Dolci',
    items: [
      ['Tiramisù, our way', '12'],
      ['Affogato, single origin', '10'],
      ['Olive oil cake, mascarpone', '13'],
      ['Amaro flight, three pours', '18'],
    ],
  },
];

const HOURS = [
  ['Tuesday — Thursday', '5:00 – 10:00 pm'],
  ['Friday — Saturday', '5:00 – 11:00 pm'],
  ['Sunday', '4:00 – 9:00 pm'],
  ['Monday', 'Closed'],
];

export default function Fiorella() {
  const [booked, setBooked] = useState(false);

  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <ConceptBadge tone="dark" />

      <DemoNav
        maxWidth="max-w-[1140px]"
        brand={<span className="font-fraunces text-[22px] font-semibold tracking-tight">Fiorella</span>}
        links={[
          { href: '#menu', label: 'Menu' },
          { href: '#story', label: 'Our story' },
          { href: '#visit', label: 'Visit' },
        ]}
        cta={{ href: '#reserve', label: 'Reserve' }}
        solid="border-b border-ink/10 bg-cream/95 backdrop-blur-md"
        solidText="text-ink"
        ctaTop="rounded-full bg-cream/95 px-5 py-2.5 text-ink hover:bg-white"
        ctaSolid="rounded-full bg-terracotta px-5 py-2.5 text-cream hover:bg-[#9d4425]"
      />

      {/* --------------------------------------------------------- hero */}
      <div id="top">
        <VideoHero
          src="/work/restaurant-web.mp4"
          poster="/work/restaurant.jpg"
          overlay="bg-gradient-to-t from-black/85 via-black/30 to-black/40"
        >
          <div className="mx-auto max-w-[1140px] px-6 pb-20">
            <p className="text-[11px] uppercase tracking-[0.35em] text-cream/75">
              Trattoria · Wellington West, Ottawa
            </p>
            <h1 className="mt-5 max-w-[13ch] font-fraunces text-[clamp(2.8rem,8vw,6rem)] font-semibold leading-[0.94] text-cream">
              Pasta rolled this morning.
            </h1>
            <p className="mt-6 max-w-[46ch] text-[16px] leading-relaxed text-cream/85">
              A short menu that changes when the market does, a long wine list that
              doesn&apos;t, and a room built for staying past dessert.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#reserve"
                className="rounded-full bg-terracotta px-7 py-3.5 text-[14px] font-semibold text-cream transition hover:bg-[#9d4425]"
              >
                Book a table
              </a>
              <a
                href="#menu"
                className="rounded-full border border-cream/45 px-7 py-3.5 text-[14px] font-medium text-cream transition hover:bg-cream/10"
              >
                See the menu
              </a>
            </div>
          </div>
        </VideoHero>
      </div>

      {/* -------------------------------------------------------- strip */}
      <div className="border-b border-ink/10 bg-ink text-cream">
        <div className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-between gap-4 px-6 py-5 text-[13px]">
          <span>Open tonight · 5:00 – 10:00 pm</span>
          <span className="hidden sm:inline">341 Wellington St W, Ottawa</span>
          <span>(613) 555-0148</span>
        </div>
      </div>

      {/* -------------------------------------------------------- story */}
      <section id="story" className="mx-auto max-w-[1140px] px-6 py-28">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-24">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-terracotta">Our story</p>
            <h2 className="mt-5 font-fraunces text-[clamp(2rem,4.4vw,3.2rem)] font-semibold leading-[1.06]">
              One room, four tables of regulars, and a very small menu.
            </h2>
          </div>
          <div className="space-y-6 text-[16px] leading-relaxed text-ink/75">
            <p>
              Fiorella started as a Sunday supper club in a friend&apos;s kitchen. The rule then is
              the rule now: make the pasta the same day you serve it, buy what looks best that
              morning, and never print a menu you can&apos;t change by Thursday.
            </p>
            <p>
              We seat forty. There is one seating for the back room and two for the front. If we
              are full, put your name down — we hold six seats at the bar for walk-ins every
              night, and they are the best seats in the house.
            </p>
            <div className="grid grid-cols-3 gap-8 border-t border-ink/12 pt-8">
              {[
                ['40', 'Seats'],
                ['6', 'Held for walk-ins'],
                ['1', 'Menu change a week'],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-fraunces text-[30px] font-semibold text-terracotta">{n}</div>
                  <div className="mt-1 text-[12.5px] uppercase tracking-[0.14em] text-ink/50">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- menu */}
      <section id="menu" className="border-y border-ink/10 bg-[#F4EDE1] py-28">
        <div className="mx-auto max-w-[1140px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-terracotta">The menu</p>
              <h2 className="mt-4 font-fraunces text-[clamp(2rem,4.4vw,3.2rem)] font-semibold">
                This week&apos;s table
              </h2>
            </div>
            <p className="max-w-[34ch] text-[14.5px] text-ink/60">
              Changed every Tuesday. Ask about the off-menu pasta — there is always one.
            </p>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {MENU.map((group) => (
              <div key={group.course}>
                <h3 className="font-fraunces text-[22px] font-semibold text-olive">{group.course}</h3>
                <div className="mt-6 h-px w-full bg-ink/12" />
                <ul className="mt-6 space-y-5">
                  {group.items.map(([name, price]) => (
                    <li key={name} className="flex items-baseline gap-3">
                      <span className="text-[15px] leading-snug text-ink/85">{name}</span>
                      <span className="mx-1 flex-1 translate-y-[-3px] border-b border-dotted border-ink/25" />
                      <span className="font-fraunces text-[15px] text-ink/60">{price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- visit */}
      <section id="visit" className="mx-auto max-w-[1140px] px-6 py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-terracotta">Visit</p>
            <h2 className="mt-5 font-fraunces text-[clamp(2rem,4.4vw,3.2rem)] font-semibold leading-[1.06]">
              Find us behind the green door.
            </h2>
            <p className="mt-6 max-w-[42ch] text-[16px] leading-relaxed text-ink/70">
              341 Wellington Street West, Ottawa. Street parking after 6, and the 11 stops at the
              corner. The patio opens the week the frost breaks.
            </p>

            <dl className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {HOURS.map(([day, time]) => (
                <div key={day} className="flex items-baseline justify-between py-4">
                  <dt className="text-[15px] text-ink/80">{day}</dt>
                  <dd className={`text-[15px] ${time === 'Closed' ? 'text-ink/35' : 'text-ink/60'}`}>
                    {time}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ------------------------------------------------- reserve */}
          <div id="reserve" className="rounded-3xl bg-ink p-8 text-cream sm:p-10">
            {booked ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <h3 className="font-fraunces text-[26px] font-semibold">See you soon.</h3>
                <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-cream/70">
                  In a real build this would hit the reservations system and send a confirmation.
                  Here it just proves the form works.
                </p>
                <button
                  onClick={() => setBooked(false)}
                  className="mt-8 rounded-full border border-cream/30 px-6 py-2.5 text-[13.5px] transition hover:bg-cream/10"
                >
                  Book another
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBooked(true);
                }}
                className="space-y-5"
              >
                <h3 className="font-fraunces text-[26px] font-semibold">Reserve a table</h3>
                <p className="text-[14px] text-cream/60">
                  Parties of seven or more, please call the restaurant.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Name" className="rounded-xl border border-cream/20 bg-cream/5 px-4 py-3.5 text-[14.5px] text-cream placeholder:text-cream/40 outline-none focus:border-terracotta" />
                  <input required type="tel" placeholder="Phone" className="rounded-xl border border-cream/20 bg-cream/5 px-4 py-3.5 text-[14.5px] text-cream placeholder:text-cream/40 outline-none focus:border-terracotta" />
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <input required type="date" className="rounded-xl border border-cream/20 bg-cream/5 px-4 py-3.5 text-[14.5px] text-cream outline-none focus:border-terracotta" />
                  <select className="rounded-xl border border-cream/20 bg-cream/5 px-4 py-3.5 text-[14.5px] text-cream outline-none focus:border-terracotta">
                    {['5:00', '5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30'].map((t) => (
                      <option key={t} className="bg-ink">{t} pm</option>
                    ))}
                  </select>
                  <select className="rounded-xl border border-cream/20 bg-cream/5 px-4 py-3.5 text-[14.5px] text-cream outline-none focus:border-terracotta">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} className="bg-ink">{n} {n === 1 ? 'guest' : 'guests'}</option>
                    ))}
                  </select>
                </div>

                <textarea rows={3} placeholder="Anything we should know? Allergies, occasions, a favourite table." className="w-full resize-none rounded-xl border border-cream/20 bg-cream/5 px-4 py-3.5 text-[14.5px] text-cream placeholder:text-cream/40 outline-none focus:border-terracotta" />

                <button type="submit" className="w-full rounded-xl bg-terracotta py-4 text-[15px] font-semibold text-cream transition hover:bg-[#9d4425]">
                  Request a table
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- footer */}
      <footer className="border-t border-ink/10 py-10">
        <div className="mx-auto flex max-w-[1140px] flex-col items-center justify-between gap-4 px-6 text-[13px] text-ink/50 sm:flex-row">
          <span className="font-fraunces text-[17px] font-semibold text-ink">Fiorella</span>
          <span>341 Wellington St W, Ottawa · (613) 555-0148</span>
          <Link href="/#work" className="underline underline-offset-2 hover:text-ink">
            A concept site by Avenzo
          </Link>
        </div>
      </footer>
    </div>
  );
}
