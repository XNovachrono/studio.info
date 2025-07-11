import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { FeaturedCourses } from "@/components/landing/featured-courses";
import { Pricing } from "@/components/landing/pricing";
import { Calculator } from "@/components/landing/calculator";
import { WhatsAppButton } from "@/components/landing/whatsapp-button";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <FeaturedCourses />
        <Pricing />
        <Calculator />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
