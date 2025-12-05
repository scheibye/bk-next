import { LatestArticleCard } from "@/src/components/blog/LatestArticleCard";
import { Container } from "@/src/components/shared/Container";

export function LatestArticlesSection() {
  return (
    <Container
      as="section"
      className="py-12.5"
    >
      <Container
        variant="inner"
        className="md:px-0 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {Array.from({ length: 7 }).map((_, index) => (
          <LatestArticleCard key={index} />
        ))}
      </Container>
    </Container>
  );
}
