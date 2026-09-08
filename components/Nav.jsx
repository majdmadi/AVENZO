'use client';

import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'Studio' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'border-b border-cyan-glow/10 bg-midnight-950/70 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-x flex h-[68px] items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Avenzo home">
          <span className="relative grid h-7 w-7 place-items-center">
            <span className="absolute inset-0 rotate-45 rounded-[7px] border border-cyan-core/60 transition-transform duration-500 group-hover:rotate-[135deg]" />
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow shadow-[0_0_12px_3px_rgba(94,234,255,0.6)]" />
          </span>
          <span className="font-display text-[15px] font-semibold tracking-[0.22em] text-white">
            AVENZO
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[13.5px] text-slate-300 transition-colors hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-cyan-core after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-cyan-core/40 bg-cyan-core/10 px-4 py-2 text-[13px] font-medium text-cyan-glow transition-all duration-300 hover:border-cyan-core hover:bg-cyan-core/20 hover:shadow-[0_0_24px_-4px_rgba(34,211,238,0.6)] sm:block"
          >
            Start a project
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-4 bg-white transition-all ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-4 bg-white transition-all ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/5 bg-midnight-950/95 backdrop-blur-xl transition-[max-height] duration-500 md:hidden ${
          open ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
