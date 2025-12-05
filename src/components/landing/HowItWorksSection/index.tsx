import { AnimatedStepper } from "@/src/components/landing/AnimatedStepper";
import { AnimatedContainer } from "@/src/components/shared/AnimatedContainer";
import { AnimatedStaggerContainer } from "@/src/components/shared/AnimatedStaggerContainer";
import { Button } from "@/src/components/shared/Button";
import { Container } from "@/src/components/shared/Container";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function HowItWorksSection() {
  return (
    <Container
      as="section"
      className="my-5 mx-5 pt-7.5 pb-5 md:py-18 bg-secondary-background rounded-xl"
    >
      <Container
        variant="inner"
        className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 lg:gap-32"
      >
        <AnimatedContainer
          preset="fadeRight"
          delay={0.2}
        >
          <Image
            src="/landing-section-bg/how-it-works-bg.webp"
            alt="hero section bg"
            width={450}
            height={580}
            draggable={false}
            className="w-full md:w-[350px] lg:w-[450px] h-fit rounded-xl"
          />
        </AnimatedContainer>

        <AnimatedStaggerContainer
          className="max-w-sm flex flex-col items-center md:items-start"
          staggerDelay={0.15}
          delayChildren={0.1}
          amount={0.3}
        >
          <AnimatedContainer
            preset="fadeUp"
            staggerItem
          >
            <Headline
              as="h2"
              variant="h2"
              className="text-secondary-foreground mb-5 text-center md:text-left"
            >
              Sådan fungerer det
            </Headline>
          </AnimatedContainer>

          <AnimatedContainer
            preset="fadeUp"
            staggerItem
          >
            <BodyText className="mb-7.5 md:mb-10 text-gray-700! text-center md:text-left">
              Fra første henvendelse til færdigt projekt. Klar og tydelig kommunikation hele vejen.
            </BodyText>
          </AnimatedContainer>

          <AnimatedContainer
            preset="fadeUp"
            staggerItem
            className="w-full"
          >
            <AnimatedStepper />
          </AnimatedContainer>

          <AnimatedContainer
            preset="fadeUp"
            staggerItem
            className="w-full flex justify-center md:justify-start"
          >
            <Button className="mt-7.5 md:mt-10 flex items-center justify-between group">
              <div className="size-5 shrink-0" />
              Kom i gang
              <ArrowRight
                size={20}
                className="text-foreground transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </AnimatedContainer>
        </AnimatedStaggerContainer>
      </Container>
    </Container>
  );
}
