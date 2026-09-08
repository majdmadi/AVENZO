'use client';

import { useEffect, useState } from 'react';

/**
 * Shared demo nav. Transparent white over the video hero, then swaps to the
 * site's own surface once you scroll past it — without that swap the white
 * links vanish against the light sections below.
 */
export default function DemoNav({
  brand,
  links,
  cta,
  solid, // classes for the scrolled bar
  solidText, // text colour once scrolled
  ctaTop, // CTA classes over the hero
  ctaSolid, // CTA classes once scrolled
  maxWidth = 'max-w-[1160px]',
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? solid : 'border-b border-transparent'
      }`}
    >
      <nav
        className={`mx-auto flex ${maxWidth} items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
      >
        <a
          href="#top"
          className={`transition-colors ${scrolled ? solidText : 'text-white drop-shadow'}`}
        >
          {brand}
        </a>

        <div
          className={`hidden items-center gap-8 text-[14px] transition-colors md:flex ${
            scrolled ? `${solidText} opacity-70` : 'text-white/90 drop-shadow'
          }`}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:opacity-100">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={cta.href}
          className={`text-[13px] font-semibold transition-all duration-300 ${
            scrolled ? ctaSolid : ctaTop
          }`}
        >
          {cta.label}
        </a>
      </nav>
    </header>
  );
}
