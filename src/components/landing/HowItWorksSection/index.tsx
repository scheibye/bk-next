import { Button } from "@/src/components/shared/Button";
import { Container } from "@/src/components/shared/Container";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function HowItWorksSection() {
  return (
    <Container className="my-5 py-18 bg-secondary-background rounded-xl">
      <Container
        variant="inner"
        className="flex items-center gap-32"
      >
        <Image
          src="/how-it-works-bg.webp"
          alt="hero section bg"
          width={450}
          height={580}
          draggable={false}
          className="rounded-xl"
        />

        <div className="max-w-sm">
          <Headline
            as="h2"
            variant="h2"
            className="text-secondary-foreground mb-5"
          >
            Sådan fungerer det
          </Headline>

          <BodyText className="mb-10 text-gray-700!">
            Fra første henvendelse til færdigt projekt. Klar og tydelig kommunikation hele vejen.
          </BodyText>

          <Button
            className="flex items-center justify-between"
          >
            {/* empty div for spacing */}
            <div className="size-5 shrink-0" />
            Kom i gang
            <ArrowRight
              size={20}
              className="text-foreground"
            />
          </Button>
        </div>
      </Container>
    </Container>
  );
}
