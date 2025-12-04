import { Header } from "@/src/components/landing/Header";
import { Container } from "@/src/components/shared/Container";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { Search } from "lucide-react";

export function HeroSection() {
  return (
    <Container
      as="section"
      className="lg:max-h-[800px] bg-brand-primary md:rounded-xl relative overflow-hidden"
    >
      <Container
        variant="inner"
        className="py-9 md:py-16 h-full relative z-10"
      >
        <Header />

        <div className="pt-12.5 mx-auto w-full max-w-xl h-full flex flex-col items-center justify-center gap-4">
          <Headline>Blog</Headline>
          <BodyText
            variant="18"
            className="text-center"
          >
            Indsigt og inspiration til dit næste byggeprojekt. Få de seneste nyheder om finansiering
            og byggebranchen.
          </BodyText>

          <div className="mt-8 w-full relative">
            <input
              placeholder="Søg i artikel..."
              className="w-full bg-gray-100 rounded-full py-2 pl-4 pr-12 min-h-12 text-secondary-foreground outline-none placeholder:text-gray-600"
            />

            <Search className="text-gray-600 absolute top-1/2 -translate-y-1/2 right-4" />
          </div>
        </div>
      </Container>
    </Container>
  );
}
