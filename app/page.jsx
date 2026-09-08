'use client';

import dynamic from 'next/dynamic';
import SmoothScroll from '@/components/SmoothScroll';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// WebGL never renders on the server — the scene loads once the page is interactive.
const Scene = dynamic(() => import('@/components/Scene'), { ssr: false });

export default function Page() {
  return (
    <SmoothScroll>
      <Scene />
      <Nav />

      <main className="relative z-10">
        <Hero />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>

      <Footer />
    </SmoothScroll>
  );
}
