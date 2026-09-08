import './globals.css';

export const metadata = {
  title: 'Avenzo — Engineering the web, end to end',
  description:
    'Avenzo is a web and software studio building fast, intelligent products: web platforms, custom applications, and automation that removes the busywork.',
  openGraph: {
    title: 'Avenzo — Engineering the web, end to end',
    description:
      'Web platforms, custom applications, and automation for teams that expect their software to keep up.',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#03060f',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
