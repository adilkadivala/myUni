import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ProgramsSection } from "@/components/programs-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { StatsSection } from "@/components/stats-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col px-5">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <ProgramsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
