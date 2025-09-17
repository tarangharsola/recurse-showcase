import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BentoGrid } from "@/components/BentoGrid";
import { PricingSection } from "@/components/PricingSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BentoGrid />
        <PricingSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
