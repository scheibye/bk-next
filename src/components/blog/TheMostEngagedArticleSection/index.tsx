import { CategoryBadge } from "@/src/components/blog/CategoryBadge";
import { Button } from "@/src/components/shared/Button";
import { Container } from "@/src/components/shared/Container";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { ArrowRight } from "lucide-react";

export function TheMostEngagedArticleSection() {
  return (
    <Container
      as="section"
      className="py-12.5"
    >
      <Container
        variant="inner"
        className="md:px-0 grid grid-cols-1 lg:grid-cols-2 rounded-2xl"
      >
        <div className="bg-gray-200 h-[50vh] max-h-[400px] lg:h-full lg:max-h-none rounded-2xl" />

        <div className="pt-4 lg:p-12 flex flex-col items-start gap-6 lg:gap-8">
          <div className="flex items-center gap-6">
            <CategoryBadge variant="secondary">Category 1</CategoryBadge>
            <BodyText
              variant="14"
              className="text-secondary-foreground!"
            >
              04 December 2025
            </BodyText>
          </div>

          <Headline
            as="h3"
            className="text-secondary-foreground line-clamp-4"
          >
            Sådan sikrer du den bedste finansiering til dit byggeprojekt i 2025
          </Headline>
          <BodyText className="text-gray-600! line-clamp-3">
            Med stigende renter og nye krav fra bankerne kan det være svært at navigere i
            finansieringsmulighederne. Vi guider dig gennem de vigtigste faktorer
          </BodyText>

          <Button
            variant="secondary"
            className="w-fit group"
          >
            {/* empty div for spacing */}
            <div className="size-5 shrink-0" />
            Læs mere
            <ArrowRight
              size={20}
              className="text-foreground transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>

          <div className="pt-8 w-full border-t border-border flex gap-4">
            <div className="bg-gray-200 size-12 shrink-0 rounded-full" />

            <div>
              <BodyText
                variant="18Semibold"
                className="text-secondary-foreground"
              >
                Firstname Lastname
              </BodyText>
              <BodyText
                variant="14"
                className="text-gray-600!"
              >
                Job title
              </BodyText>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}
