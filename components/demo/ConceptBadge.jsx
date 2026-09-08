import Link from 'next/link';

/**
 * Every demo carries this. These are fictional businesses built to show
 * what Avenzo makes — the badge keeps that unambiguous for any visitor.
 */
export default function ConceptBadge({ tone = 'dark' }) {
  const dark = tone === 'dark';
  return (
    <div
      className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full border px-4 py-2 text-[11.5px] backdrop-blur-md ${
        dark
          ? 'border-white/15 bg-black/55 text-white/80'
          : 'border-black/10 bg-white/80 text-black/70'
      }`}
    >
      <span className="hidden sm:inline">Concept site — fictional business. </span>
      Built by{' '}
      <Link href="/#work" className="font-semibold underline underline-offset-2">
        Avenzo
      </Link>
    </div>
  );
}
