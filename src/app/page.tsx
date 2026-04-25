import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Metrics from '@/components/Metrics';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      {/* Skip to content — accessibility for keyboard users */}
      <a href="#main-content" className="skip-to-content">
        Saltar al contenido principal
      </a>

      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Menu />
        <Gallery />
        <Testimonials />
        <Metrics />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
