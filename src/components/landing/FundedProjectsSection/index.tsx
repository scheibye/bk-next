import { FundedProjectsSwiper } from "@/src/components/landing/FundedProjectsSwiper";
import { Container } from "@/src/components/shared/Container";
import { Headline } from "@/src/components/shared/ui/typography/Headline";

export function FundedProjectsSection() {
  return (
    <Container
      as="section"
      className="py-12.5"
    >
      <Container variant="inner">
        <div className="mb-12 flex items-center justify-between gap-4">
          <Headline
            as="h2"
            variant="h2"
            className="text-secondary-foreground!"
          >
            Projekter vi har finansieret
          </Headline>
        </div>

        <FundedProjectsSwiper />
      </Container>
    </Container>
  );
}
