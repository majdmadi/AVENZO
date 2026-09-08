export const metadata = {
  title: 'Concept sites — Avenzo',
  description:
    'Three sector concept sites built by Avenzo to show how a finished build feels. The businesses are fictional.',
  robots: { index: false, follow: false },
};

export default function DemoLayout({ children }) {
  return (
    <>
      {/* Identity fonts for the demo sites only. */}
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=DM+Sans:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      {children}
    </>
  );
}
