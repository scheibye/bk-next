import { HeroSection } from "@/src/components/landing/HeroSection";
import { HowItWorksSection } from "@/src/components/landing/HowItWorksSection";

export function LandingPageContent() {
  return (
    <div className="py-5 bg-background">
      <HeroSection />
      <HowItWorksSection />
    </div>
  );
}
