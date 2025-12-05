import { CTA, Features, Footer, Header, Hero, Overview } from "@/components/landing_page";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Overview />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
