// One source of truth for the site's own identity.
//
// SITE_URL previously defaulted to the Netlify subdomain, which meant every
// canonical and hreflang tag on the live site pointed Google at the wrong
// host. The default is now the real domain, so the tags are correct whether
// or not NEXT_PUBLIC_SITE_URL is set in Netlify.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://zyvanta.ca'
).replace(/\/$/, '');

export const BUSINESS = {
  name: 'Zyvanta',
  legalName: 'Zyvanta',
  city: 'Ottawa',
  region: 'ON',
  country: 'CA',
  // Service-area business: no storefront, so no street address is published.
  // Add `streetAddress` and `telephone` here once the Google Business Profile
  // is verified — Google cross-checks this markup against that listing, and
  // the two must match exactly, character for character.
  telephone: null,
  areaServed: ['Ottawa', 'Kanata', 'Nepean', 'Orléans', 'Barrhaven', 'Stittsville', 'Gatineau'],
  languages: ['en-CA', 'fr-CA'],
  services: [
    'Web design',
    'Web development',
    'Custom application development',
    'Business process automation',
    'AI engineering',
  ],
  // Add profile URLs here as they go live — sameAs is how Google ties the
  // website, the Business Profile and the social accounts into one entity.
  sameAs: [],
};

/** Schema.org ProfessionalService — the markup that feeds the local map pack. */
export function businessJsonLd(locale, description) {
  const node = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#business`,
    name: BUSINESS.name,
    url: `${SITE_URL}/${locale}`,
    description,
    image: `${SITE_URL}/og.png`,
    logo: `${SITE_URL}/icon.svg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      addressCountry: BUSINESS.country,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({ '@type': 'City', name })),
    availableLanguage: BUSINESS.languages.map((l) => ({
      '@type': 'Language',
      name: l.startsWith('fr') ? 'French' : 'English',
    })),
    knowsLanguage: BUSINESS.languages,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'fr' ? 'Services' : 'Services',
      itemListElement: BUSINESS.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s },
      })),
    },
  };

  if (BUSINESS.telephone) node.telephone = BUSINESS.telephone;
  if (BUSINESS.sameAs.length) node.sameAs = BUSINESS.sameAs;

  return node;
}
