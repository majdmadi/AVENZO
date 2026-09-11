import '../globals.css';
import { LOCALES, HTML_LANG, getDictionary, isLocale } from '@/lib/i18n';
import { SITE_URL, businessJsonLd } from '@/lib/site';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export function generateMetadata({ params }) {
  const { locale } = params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: 'Zyvanta',
    authors: [{ name: 'Zyvanta', url: SITE_URL }],
    creator: 'Zyvanta',
    publisher: 'Zyvanta',
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en-CA': '/en',
        'fr-CA': '/fr',
        'x-default': '/en',
      },
    },
    icons: {
      icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    },
    openGraph: {
      siteName: 'Zyvanta',
      title: dict.meta.title,
      description: dict.meta.ogDescription,
      locale: HTML_LANG[locale].replace('-', '_'),
      alternateLocale: locale === 'en' ? 'fr_CA' : 'en_CA',
      type: 'website',
      url: `${SITE_URL}/${locale}`,
      images: [
        {
          url: '/og.png',
          width: 1200,
          height: 630,
          alt:
            locale === 'fr'
              ? 'Zyvanta — conception de sites web à Ottawa'
              : 'Zyvanta — web design and development in Ottawa',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.ogDescription,
      images: ['/og.png'],
    },
  };
}

export const viewport = {
  themeColor: '#03060f',
};

export default function LocaleLayout({ children, params }) {
  const { locale } = params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html lang={HTML_LANG[locale]}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Tells Google that the website and the business are the same entity —
            the markup that local results are built on. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd(locale, dict.meta.description)),
          }}
        />
      </head>
      <body className="grain font-sans antialiased">{children}</body>
    </html>
  );
}
