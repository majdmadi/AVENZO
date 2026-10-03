import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary, isLocale, LOCALES } from '@/lib/i18n';
import { SITE_URL } from '@/lib/site';
import { audit } from '@/lib/servicePages';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AuditForm from '@/components/AuditForm';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }) {
  const { locale } = params;
  if (!isLocale(locale)) return {};
  const copy = audit[locale];

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: `/${locale}/audit`,
      languages: { 'en-CA': '/en/audit', 'fr-CA': '/fr/audit', 'x-default': '/en/audit' },
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: `${SITE_URL}/${locale}/audit`,
      type: 'website',
    },
  };
}

export default function AuditPage({ params }) {
  const { locale } = params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const copy = audit[locale];
  const base = `/${locale}`;

  return (
    <>
      <Nav dict={dict.nav} locale={locale} base={base} />

      <main className="relative z-10 pt-[68px]">
        <section className="container-x py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
            <div>
              <p className="eyebrow">
                <span className="h-px w-8 bg-cyan-core/60" />
                {copy.eyebrow}
              </p>

              <h1 className="mt-5 max-w-[18ch] font-display text-[clamp(2.1rem,5vw,3.6rem)] font-semibold leading-[1.04] tracking-tightest text-white">
                {copy.h1}
              </h1>

              <p className="mt-6 max-w-[56ch] text-[16.5px] leading-relaxed text-slate-400">{copy.lede}</p>

              <ul className="mt-10 space-y-4">
                {copy.whatYouGet.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-slate-300">
                    <span className="mt-0.5 shrink-0 text-cyan-core" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-12 rounded-2xl border border-white/8 bg-white/[0.02] p-6">
                <h2 className="font-display text-[16px] font-semibold text-white">{copy.catchTitle}</h2>
                <p className="mt-3 max-w-[60ch] text-[14.5px] leading-relaxed text-slate-400">{copy.catchBody}</p>
              </div>

              <p className="mt-8 text-[13.5px] text-slate-500">
                <Link href={`/${locale}/services`} className="underline transition-colors hover:text-cyan-glow">
                  {locale === 'fr' ? 'Voir tous les services' : 'See all services'}
                </Link>
              </p>
            </div>

            <div className="lg:sticky lg:top-24 lg:self-start">
              <AuditForm copy={copy} />
            </div>
          </div>
        </section>
      </main>

      <Footer dict={dict.footer} nav={dict.nav} locale={locale} base={base} />
    </>
  );
}
