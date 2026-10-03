import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary, isLocale, LOCALES } from '@/lib/i18n';
import { SITE_URL } from '@/lib/site';
import { services, servicesIndex, serviceUi } from '@/lib/servicePages';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }) {
  const { locale } = params;
  if (!isLocale(locale)) return {};
  const copy = servicesIndex[locale];

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: `/${locale}/services`,
      languages: {
        'en-CA': '/en/services',
        'fr-CA': '/fr/services',
        'x-default': '/en/services',
      },
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: `${SITE_URL}/${locale}/services`,
      type: 'website',
    },
  };
}

export default function ServicesIndexPage({ params }) {
  const { locale } = params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const copy = servicesIndex[locale];
  const ui = serviceUi[locale];
  const base = `/${locale}`;

  // An ItemList of the four services, each pointing at its own page. This is
  // what lets Google show the individual service pages rather than only the
  // home page for a service query.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s[locale].name,
      url: `${SITE_URL}/${locale}/services/${s.slug[locale]}`,
    })),
  };

  return (
    <>
      <Nav dict={dict.nav} locale={locale} base={base} />

      <main className="relative z-10 pt-[68px]">
        <section className="container-x py-20 sm:py-28">
          <p className="eyebrow">
            <span className="h-px w-8 bg-cyan-core/60" />
            {copy.eyebrow}
          </p>
          <h1 className="mt-5 max-w-[22ch] font-display text-[clamp(2.2rem,5.4vw,3.8rem)] font-semibold leading-[1.03] tracking-tightest text-white">
            {copy.h1}
          </h1>
          <p className="mt-6 max-w-[58ch] text-[16px] leading-relaxed text-slate-400">{copy.lede}</p>
        </section>

        <section className="container-x pb-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((s) => {
              const c = s[locale];
              return (
                <Link
                  key={s.id}
                  href={`/${locale}/services/${s.slug[locale]}`}
                  className="group relative block overflow-hidden rounded-2xl glass p-7 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-core/35"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-core/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-[11px] tracking-[0.3em] text-cyan-core/70">{s.n}</span>
                    <span className="text-cyan-core/30 transition-all duration-500 group-hover:translate-x-1 group-hover:text-cyan-core">
                      →
                    </span>
                  </div>
                  <h2 className="mt-6 font-display text-[22px] font-semibold text-white">{c.name}</h2>
                  <p className="mt-3.5 text-[14.5px] leading-relaxed text-slate-400">{c.short}</p>
                  <p className="mt-5 text-[12.5px] text-slate-500">{c.price}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="container-x py-20 sm:py-28">
          <div className="rounded-2xl glass p-8 sm:p-12">
            <h2 className="max-w-[20ch] font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-semibold leading-[1.1] tracking-tightest text-white">
              {copy.cta}
            </h2>
            <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-slate-400">{ui.ctaLede}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`${base}#contact`}
                className="rounded-full bg-cyan-core px-6 py-3 text-[14px] font-semibold text-midnight-950 transition-shadow hover:shadow-[0_0_40px_-8px_rgba(34,211,238,0.9)]"
              >
                {copy.cta}
              </Link>
              <Link
                href={`/${locale}/audit`}
                className="rounded-full border border-white/15 px-6 py-3 text-[14px] text-slate-200 transition-colors hover:border-cyan-core/50 hover:text-white"
              >
                {ui.auditCta}
              </Link>
            </div>
            <p className="mt-4 text-[12.5px] text-slate-500">{copy.ctaHint}</p>
          </div>
        </section>
      </main>

      <Footer dict={dict.footer} nav={dict.nav} locale={locale} base={base} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
