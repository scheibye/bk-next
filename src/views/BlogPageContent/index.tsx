import { CategoriesSwiper } from "@/src/components/blog/Categories";
import { HeroSection } from "@/src/components/blog/HeroSection";

export function BlogPageContent() {
  return (
    <div className="md:py-5 space-y-8">
      <HeroSection />
      <CategoriesSwiper />
    </div>
  );
}
