import { Footer } from "@/src/components/landing/Footer";
import { FundedProjectsSection } from "@/src/components/landing/FundedProjectsSection";
import { HeroSection } from "@/src/components/landing/HeroSection";
import { HowItWorksSection } from "@/src/components/landing/HowItWorksSection";
import { OurExpertiseSection } from "@/src/components/landing/OurExpertiseSection";
import { TargetAudienceSection } from "@/src/components/landing/TargetAudienceSection";

export function LandingPageContent() {
  return (
    <div className="py-5">
      <HeroSection />
      <HowItWorksSection />
      <TargetAudienceSection />
      <OurExpertiseSection />
      <FundedProjectsSection />
      <Footer />
    </div>
  );
}
