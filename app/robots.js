import { SITE_URL } from '@/lib/site';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // The demo sites and the client brief carry their own noindex tags.
        // They are deliberately NOT disallowed here — blocking a URL in
        // robots.txt stops Google reading the noindex on it, which is the
        // opposite of what you want.
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
