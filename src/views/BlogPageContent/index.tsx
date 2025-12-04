import { CategoriesSwiper } from "@/src/components/blog/Categories";
import { HeroSection } from "@/src/components/blog/HeroSection";
import { LatestArticlesSection } from "@/src/components/blog/LatestArticlesSection";
import { TheMostEngagedArticleSection } from "@/src/components/blog/TheMostEngagedArticleSection";

export function BlogPageContent() {
  return (
    <div className="md:py-5 space-y-8">
      <HeroSection />
      <CategoriesSwiper />
      <TheMostEngagedArticleSection />
      <LatestArticlesSection />
    </div>
  );
}
