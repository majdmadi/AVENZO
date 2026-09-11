import { SITE_URL, } from '@/lib/site';
import { LOCALES } from '@/lib/i18n';

export default function sitemap() {
  const now = new Date();

  // Only genuinely indexable pages belong here. The /demo/* concept sites and
  // /brief are noindex on purpose, so listing them would just send Google to
  // pages it has been told to ignore.
  return LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: locale === 'en' ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        LOCALES.map((l) => [l === 'en' ? 'en-CA' : 'fr-CA', `${SITE_URL}/${l}`])
      ),
    },
  }));
}
