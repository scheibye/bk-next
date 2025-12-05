import { AnimatedContainer } from "@/src/components/shared/AnimatedContainer";
import { Button } from "@/src/components/shared/Button";
import { Container } from "@/src/components/shared/Container";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function OurExpertiseSection() {
  return (
    <Container
      as="section"
      className="relative bg-brand-primary md:rounded-xl overflow-hidden"
    >
      {/* desktop pattern bg */}
      <AnimatedContainer
        preset="scale"
        duration={1}
        className="absolute inset-y-0 right-0 h-full w-1/3 bg-cover bg-repeat bg-right hidden md:block"
        style={{ backgroundImage: "url('/pattern-bg/our-expertise.webp')" }}
      />

      {/* mobile pattern bg */}
      <AnimatedContainer
        preset="scale"
        duration={1}
        className="absolute inset-y-0 right-0 w-2/5 bg-cover bg-no-repeat md:hidden"
        style={{ backgroundImage: "url('/pattern-bg/our-expertise-mobile.webp')" }}
      />

      <Container
        variant="inner"
        className="relative py-12.5 md:py-18 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 lg:gap-32 z-10"
      >
        <Image
          src="/landing-section-bg/our-expertise-bg.webp"
          alt="our expertise bg"
          width={450}
          height={600}
          draggable={false}
          className="w-full md:w-[350px] lg:w-[450px] h-fit rounded-lg"
        />

        <div>
          <div className="flex flex-col gap-7.5">
            <AnimatedContainer
              preset="fadeUp"
              delay={0.2}
              duration={0.6}
            >
              <Headline
                as="h2"
                variant="h2"
              >
                Erfaringen bag vores løsninger
              </Headline>
            </AnimatedContainer>

            <AnimatedContainer
              preset="fadeUp"
              delay={0.35}
              duration={0.6}
            >
              <BodyText>Vi har finansieret byggeprojekter i over to årtier.</BodyText>
            </AnimatedContainer>

            <AnimatedContainer
              preset="fadeUp"
              delay={0.5}
              duration={0.6}
            >
              <BodyText>
                Vores tilgang er enkel: solide data, grundig vurdering og ærlig rådgivning. Vi ved,
                at hvert projekt er forskelligt – derfor ser vi altid på den reelle værdi og
                potentiale.
              </BodyText>
            </AnimatedContainer>

            <AnimatedContainer
              preset="fadeUp"
              delay={0.65}
              duration={0.6}
            >
              <BodyText>
                Hos Byggekredit får du en partner, der følger dig hele vejen. Fra første vurdering
                til sidste udbetaling. Tryghed, indsigt og erfaring i én løsning.
              </BodyText>
            </AnimatedContainer>

            <AnimatedContainer
              preset="fadeUp"
              delay={0.8}
              duration={0.6}
              className="flex flex-col gap-2.5"
            >
              <Headline
                as="h3"
                variant="h3"
              >
                Brian Efternavn
              </Headline>
              <BodyText className="text-gray-500">CFO hos Byggekredit</BodyText>
            </AnimatedContainer>
          </div>

          <AnimatedContainer
            preset="fadeUp"
            delay={0.95}
            duration={0.5}
          >
            <Button
              variant="secondary"
              className="mt-10 max-w-none md:max-w-xs flex items-center justify-between group"
            >
              {/* empty div for spacing */}
              <div className="size-5 shrink-0" />
              Kom i gang
              <ArrowRight
                size={20}
                className="text-foreground transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </AnimatedContainer>
        </div>
      </Container>
    </Container>
  );
}
