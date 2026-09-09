import '../globals.css';
import { LOCALES, HTML_LANG, getDictionary, isLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://zyvantadigital.netlify.app';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export function generateMetadata({ params }) {
  const { locale } = params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(SITE),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en-CA': '/en',
        'fr-CA': '/fr',
        'x-default': '/en',
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.ogDescription,
      locale: HTML_LANG[locale].replace('-', '_'),
      type: 'website',
      url: `${SITE}/${locale}`,
    },
  };
}

export const viewport = {
  themeColor: '#03060f',
};

export default function LocaleLayout({ children, params }) {
  const { locale } = params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={HTML_LANG[locale]}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain font-sans antialiased">{children}</body>
    </html>
  );
}
