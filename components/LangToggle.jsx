'use client';

import { usePathname, useRouter } from 'next/navigation';
import { LOCALES, LOCALE_LABELS } from '@/lib/i18n';

/**
 * EN / FR switch. Writes the choice to a cookie so middleware stops
 * second-guessing it from the browser's Accept-Language on later visits.
 */
export default function LangToggle({ locale, label, className = '' }) {
  const pathname = usePathname();
  const router = useRouter();

  const other = LOCALES.find((l) => l !== locale) || 'en';

  const swap = () => {
    document.cookie = `zyv_locale=${other};path=/;max-age=31536000;samesite=lax`;
    const rest = pathname.replace(new RegExp(`^/${locale}`), '') || '';
    router.push(`/${other}${rest}`);
  };

  return (
    <button
      onClick={swap}
      lang={other}
      title={label}
      aria-label={label}
      className={`rounded-full border border-white/15 px-2.5 py-1 text-[11px] font-medium tracking-[0.08em] text-slate-300 transition-colors hover:border-cyan-core/50 hover:text-white ${className}`}
    >
      {LOCALE_LABELS[other]}
    </button>
  );
}
