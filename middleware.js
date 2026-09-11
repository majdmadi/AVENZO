import { NextResponse } from 'next/server';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';

const COOKIE = 'zyv_locale';

/**
 * Picks a locale for a visitor who landed without one.
 * A locale the visitor chose by hand (cookie) always beats their browser
 * setting — otherwise an anglophone on a French-language OS gets bounced
 * back to /fr every time they navigate.
 */
function pickLocale(request) {
  const saved = request.cookies.get(COOKIE)?.value;
  if (saved && LOCALES.includes(saved)) return saved;

  const header = request.headers.get('accept-language') || '';

  // "fr-CA,fr;q=0.9,en;q=0.8" → [['fr-ca', 1], ['fr', 0.9], ['en', 0.8]]
  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, ...rest] = part.trim().split(';');
      const q = rest.find((r) => r.trim().startsWith('q='));
      return [tag.toLowerCase(), q ? parseFloat(q.split('=')[1]) : 1];
    })
    .filter(([tag]) => tag)
    .sort((a, b) => b[1] - a[1]);

  for (const [tag] of ranked) {
    const base = tag.split('-')[0];
    if (LOCALES.includes(base)) return base;
  }

  return DEFAULT_LOCALE;
}

export function middleware(request) {
  const { pathname, search } = request.nextUrl;

  // Legacy links from before the rename: /demo/fiorella → /en/demo/fiorella
  if (pathname === '/demo' || pathname.startsWith('/demo/')) {
    const url = request.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
    return NextResponse.redirect(url);
  }

  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  const locale = pickLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  url.search = search;

  return NextResponse.redirect(url);
}

export const config = {
  // Only page routes get a locale. Anything containing a dot is a file and is
  // left alone — that covers /robots.txt, /sitemap.xml, /og.png, /icon.svg and
  // /__forms.html, which the contact and brief forms POST to. An earlier,
  // looser pattern matched those and redirected them into /en/, where they
  // 404'd; keep the dot rule.
  matcher: ['/((?!_next|api|.*\\.).*)'],
};
