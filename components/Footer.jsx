export default function Footer({ dict, nav, locale = 'en', base = '' }) {
  const to = (hash) => `${base}${hash}`;
  const extra = locale === 'fr'
    ? [{ href: `/fr/services`, label: 'Services' }, { href: `/fr/audit`, label: 'Analyse gratuite' }]
    : [{ href: `/en/services`, label: 'Services' }, { href: `/en/audit`, label: 'Free teardown' }];
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <span className="relative grid h-6 w-6 place-items-center">
            <span className="absolute inset-0 rotate-45 rounded-[6px] border border-cyan-core/50" />
            <span className="h-1 w-1 rounded-full bg-cyan-glow" />
          </span>
          <span className="font-display text-[13px] font-semibold tracking-[0.22em] text-white">
            ZYVANTA
          </span>
        </div>

        <p className="text-[12.5px] text-slate-500">
          © {new Date().getFullYear()} Zyvanta. {dict.built}
        </p>

        <div className="flex items-center gap-6 text-[12.5px] text-slate-500">
          {nav.links.map((l) => (
            <a key={l.href} href={to(l.href)} className="transition-colors hover:text-cyan-glow">
              {l.label}
            </a>
          ))}
          {extra.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-cyan-glow">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
