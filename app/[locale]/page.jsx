import { getDictionary } from '@/lib/i18n';
import SmoothScroll from '@/components/SmoothScroll';
import SceneLoader from '@/components/SceneLoader';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);

  return (
    <SmoothScroll>
      <SceneLoader />
      <Nav dict={dict.nav} locale={locale} />

      <main className="relative z-10">
        <Hero dict={dict.hero} />
        <Services dict={dict.services} />
        <Work dict={dict.work} locale={locale} />
        <About dict={dict.about} />
        <Contact dict={dict.contact} />
      </main>

      <Footer dict={dict.footer} nav={dict.nav} />
    </SmoothScroll>
  );
}
