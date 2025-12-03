import Navigation from '@/components/landing_page/Navigation';
import Hero from '@/components/landing_page/Hero';
import PlatformShowcase from '@/components/landing_page/PlatformShowcase';
import Features from '@/components/landing_page/Features';
import Benefits from '@/components/landing_page/Benefits';
import Testimonials from '@/components/landing_page/Testimonials';
import FAQ from '@/components/landing_page/FAQ';
import Footer from '@/components/landing_page/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <PlatformShowcase />
      <Features />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
