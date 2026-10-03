import { SITE_URL } from '@/lib/site';
import { LOCALES } from '@/lib/i18n';
import { services } from '@/lib/servicePages';

/**
 * Every indexable URL, in both languages, each declaring its translation as an
 * hreflang alternate.
 *
 * The /demo/* concept sites and /brief carry their own noindex tags and stay
 * out — listing them would point Google at pages it has been told to ignore.
 */
export default function sitemap() {
  const now = new Date();

  const alternates = (path) => ({
    languages: Object.fromEntries(
      LOCALES.map((l) => [l === 'en' ? 'en-CA' : 'fr-CA', `${SITE_URL}${path(l)}`])
    ),
  });

  const entries = [];

  for (const locale of LOCALES) {
    const primary = locale === 'en';

    entries.push({
      url: `${SITE_URL}/${locale}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: primary ? 1 : 0.9,
      alternates: alternates((l) => `/${l}`),
    });

    entries.push({
      url: `${SITE_URL}/${locale}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: primary ? 0.9 : 0.8,
      alternates: alternates((l) => `/${l}/services`),
    });

    for (const service of services) {
      entries.push({
        url: `${SITE_URL}/${locale}/services/${service.slug[locale]}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: primary ? 0.8 : 0.7,
        alternates: alternates((l) => `/${l}/services/${service.slug[l]}`),
      });
    }

    entries.push({
      url: `${SITE_URL}/${locale}/audit`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: primary ? 0.8 : 0.7,
      alternates: alternates((l) => `/${l}/audit`),
    });
  }

  return entries;
}
