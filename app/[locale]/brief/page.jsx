import { getDictionary, isLocale, HTML_LANG } from '@/lib/i18n';
import { UI } from '@/lib/brief';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import BriefForm from '@/components/BriefForm';

export function generateMetadata({ params }) {
  const { locale } = params;
  if (!isLocale(locale)) return {};
  return {
    title: `${UI.title[locale]} — Zyvanta`,
    description: UI.intro[locale],
    // A client tool, not a marketing page. Keep it out of search results so it
    // does not compete with /en and /fr for relevance.
    robots: { index: false, follow: false },
  };
}

export default function BriefPage({ params }) {
  const { locale } = params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <div className="min-h-screen bg-midnight-950">
      <header className="border-b border-white/8">
        <div className="container-x flex h-[68px] items-center justify-between">
          <Link href={`/${locale}`} className="group flex items-center gap-2.5" aria-label={dict.nav.home}>
            <span className="relative grid h-7 w-7 place-items-center">
              <span className="absolute inset-0 rotate-45 rounded-[7px] border border-cyan-core/60 transition-transform duration-500 group-hover:rotate-[135deg]" />
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow shadow-[0_0_12px_3px_rgba(94,234,255,0.6)]" />
            </span>
            <span className="font-display text-[15px] font-semibold tracking-[0.22em] text-white">
              ZYVANTA
            </span>
          </Link>

          <Link
            href={locale === 'fr' ? '/en/brief' : '/fr/brief'}
            lang={locale === 'fr' ? 'en' : 'fr'}
            className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] font-medium tracking-[0.08em] text-slate-300 transition-colors hover:border-cyan-core/50 hover:text-white"
          >
            {locale === 'fr' ? 'EN' : 'FR'}
          </Link>
        </div>
      </header>

      <main className="container-x py-14 sm:py-20">
        <div className="mx-auto mb-12 max-w-[760px]">
          <p className="eyebrow">
            <span className="h-px w-8 bg-cyan-core/60" />
            {dict.nav.cta}
          </p>
          <h1 className="mt-5 font-display text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.05] tracking-tightest text-white">
            {UI.title[locale]}
          </h1>
          <p className="mt-5 max-w-[58ch] text-[15.5px] leading-relaxed text-slate-400">
            {UI.intro[locale]}
          </p>
        </div>

        <BriefForm locale={locale} />
      </main>

      <footer className="border-t border-white/5 py-10">
        <div className="container-x text-center text-[12.5px] text-slate-500">
          © {new Date().getFullYear()} Zyvanta. {dict.footer.built}
        </div>
      </footer>
    </div>
  );
}
