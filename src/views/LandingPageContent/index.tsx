import { FundedProjectsSection } from "@/src/components/landing/FundedProjectsSection";
import { HeroSection } from "@/src/components/landing/HeroSection";
import { HowItWorksSection } from "@/src/components/landing/HowItWorksSection";
import { OurExpertiseSection } from "@/src/components/landing/OurExpertiseSection";
import { TargetAudienceSection } from "@/src/components/landing/TargetAudienceSection";

export function LandingPageContent() {
  return (
    <div className="md:py-5 space-y-8">
      <HeroSection />
      <HowItWorksSection />
      <TargetAudienceSection />
      <OurExpertiseSection />
      <FundedProjectsSection />
    </div>
  );
}
