import { AnimatedContainer } from "@/src/components/shared/AnimatedContainer";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { TargetAudience } from "@/src/data/targetAudience";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface Props {
  item: TargetAudience;
}

export function TargetAudienceCard({
  item: { imageSrc, imageAlt, title, description, ctaButton },
}: Props) {
  return (
    <AnimatedContainer
      preset="fadeUp"
      staggerItem
      className="w-full bg-secondary-background rounded-xl py-6 px-4.5 flex flex-col border border-gray-500"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={340}
        height={220}
        draggable={false}
        className="w-full h-[220px] rounded-lg object-cover"
      />

      <div className="mt-5 md:mt-7 flex-1 flex flex-col justify-between gap-6 md:gap-12">
        <div className="space-y-4">
          <Headline
            as="h3"
            variant="h3"
            className="text-secondary-foreground!"
          >
            {title}
          </Headline>
          <BodyText className="text-gray-600!">{description}</BodyText>
        </div>

        <button className="group flex items-center justify-center md:justify-start gap-2 cursor-pointer rounded-lg outline-none">
          <BodyText
            variant="20Medium"
            className="text-brand-primary! group-hover:underline group-hover:text-secondary-orange!"
          >
            {ctaButton}
          </BodyText>
          <ArrowRight
            size={20}
            className="text-brand-primary group-hover:text-secondary-orange! transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </AnimatedContainer>
  );
}
