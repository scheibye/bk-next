import { TargetAudienceCard } from "@/src/components/landing/TargetAudienceCard";
import { Container } from "@/src/components/shared/Container";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { TARGET_AUDIENCE } from "@/src/data/targetAudience";

export function TargetAudienceSection() {
  return (
    <Container
      as="section"
      className="py-12.5"
    >
      <Container
        variant="inner"
        className="flex flex-col justify-center items-center gap-12"
      >
        <Headline
          as="h2"
          variant="h2"
          className="text-secondary-foreground"
        >
          Hvem henvender vi os til?
        </Headline>

        <div className="w-full grid grid-cols-3 gap-5">
          {TARGET_AUDIENCE.map((item, index) => (
            <TargetAudienceCard
              key={index}
              item={item}
            />
          ))}
        </div>
      </Container>
    </Container>
  );
}
