import { CollaborationCompaniesLogo } from "@/src/components/landing/CollaborationCompaniesLogo";
import { ContactUsForm } from "@/src/components/landing/ContactUsForm";
import { Header } from "@/src/components/landing/Header";
import { AnimatedContainer } from "@/src/components/shared/AnimatedContainer";
import { Container } from "@/src/components/shared/Container";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";

export function HeroSection() {
  return (
    <Container
      as="section"
      className="lg:h-screen lg:max-h-[800px] bg-brand-primary md:rounded-xl relative overflow-hidden"
    >
      {/* mobile pattern bg */}
      <div
        className="absolute inset-y-0 right-0 w-[80%] bg-contain bg-no-repeat bg-top-right md:hidden"
        style={{ backgroundImage: "url('/pattern-bg/hero-section-mobile.webp')" }}
      />

      {/* desktop pattern bg */}
      <div
        className="absolute inset-y-0 right-0 w-full bg-contain bg-no-repeat bg-right hidden md:block"
        style={{ backgroundImage: "url('/pattern-bg/hero-section.webp')" }}
      />

      <Container
        variant="inner"
        className="py-9 md:py-16 h-full relative z-10"
      >
        <Header />

        <div className="pt-12.5 w-full h-full flex flex-col lg:flex-row items-center justify-between gap-12">
          <AnimatedContainer
            className="max-w-xl flex flex-col items-start"
            preset="fadeUp"
            duration={0.7}
          >
            <AnimatedContainer
              className="mb-6 md:mb-7.5 py-3 md:py-4 px-3.5 md:px-6 bg-brand-secondary-100 rounded"
              preset="fadeUp"
              delay={0.1}
              duration={0.5}
            >
              <BodyText
                variant="14Semibold"
                className="text-secondary-orange-100!"
              >
                Mere end 20 års erfaring
              </BodyText>
            </AnimatedContainer>

            <AnimatedContainer
              preset="fadeUp"
              delay={0.2}
            >
              <Headline>Din professionelle partner i byggefinansiering</Headline>
            </AnimatedContainer>

            <AnimatedContainer
              preset="fadeUp"
              delay={0.3}
            >
              <BodyText className="mt-6 md:mt-10 md:mb-12.5">
                Vi finansierer projekter i alle størrelser – fra boligbyggeri til større
                investeringer. Byggefinansiering med sikkerhed, indsigt og en effektiv proces.
              </BodyText>
            </AnimatedContainer>

            <AnimatedContainer
              className="hidden lg:block"
              preset="fadeIn"
              delay={0.5}
              duration={0.8}
            >
              <CollaborationCompaniesLogo />
            </AnimatedContainer>
          </AnimatedContainer>

          <AnimatedContainer
            preset="fadeLeft"
            delay={0.4}
            duration={0.7}
            className="w-full max-w-xl lg:w-fit"
          >
            <ContactUsForm />
          </AnimatedContainer>

          <AnimatedContainer
            className="lg:hidden flex flex-col justify-center items-center"
            preset="fadeIn"
            delay={0.6}
            duration={0.7}
          >
            <CollaborationCompaniesLogo />
          </AnimatedContainer>
        </div>
      </Container>
    </Container>
  );
}
