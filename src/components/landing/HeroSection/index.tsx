import { CollaborationCompaniesLogo } from "@/src/components/landing/CollaborationCompaniesLogo";
import { ContactUsForm } from "@/src/components/landing/ContactUsForm";
import { Container } from "@/src/components/shared/Container";
import { Logo } from "@/src/components/shared/Logo";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";

export function HeroSection() {
  return (
    <Container
      as="section"
      className="h-screen max-h-[800px] bg-brand-primary rounded-xl relative overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 h-full w-[60%] bg-cover bg-right"
        style={{ backgroundImage: "url('/hero-section-bg.webp')" }}
      />

      <Container
        variant="inner"
        className="h-full relative z-10 py-16"
      >
        <Logo />

        <div className="w-full h-full flex items-center justify-between gap-12">
          <div className="max-w-xl flex flex-col items-start">
            <div className="mb-7.5 py-4 px-6 bg-brand-secondary-100 rounded">
              <BodyText
                variant="14sb"
                className="text-secondary-orange-100!"
              >
                Mere end 20 års erfaring
              </BodyText>
            </div>
            <Headline>Din professionelle partner ibyggefinansiering</Headline>
            <BodyText className="mt-10 mb-12">
              Vi finansierer projekter i alle størrelser – fra boligbyggeri til større
              investeringer. Byggefinansiering med sikkerhed, indsigt og en effektiv proces.
            </BodyText>

            <CollaborationCompaniesLogo />
          </div>

          <ContactUsForm />
        </div>
      </Container>
    </Container>
  );
}
