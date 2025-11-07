import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { FeaturedCourses } from "@/components/landing/featured-courses";
import { Pricing } from "@/components/landing/pricing";
import { Contact } from "@/components/landing/contact";
import { WhatsAppButton } from "@/components/landing/whatsapp-button";
import { Footer } from "@/components/landing/footer";
import { ScrollAnimator } from "@/components/scroll-animator";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <ScrollAnimator>
          <Hero />
        </ScrollAnimator>
        <ScrollAnimator>
          <About />
        </ScrollAnimator>
        <ScrollAnimator>
          <FeaturedCourses />
        </ScrollAnimator>
        <ScrollAnimator>
          <Pricing />
        </ScrollAnimator>
        <ScrollAnimator>
          <Contact />
        </ScrollAnimator>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
