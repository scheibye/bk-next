import { CategoryBadge } from "@/src/components/blog/CategoryBadge";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";

export function LatestArticleCard() {
  return (
    <div className="w-full bg-secondary-background rounded-xl flex flex-col border border-gray-500">
      <div className="w-full h-[220px] bg-brand-primary rounded-xl object-cover" />

      <div className="p-4 flex-1 flex flex-col justify-between gap-4 md:gap-6">
        <div className="flex items-center gap-6">
          <CategoryBadge variant="secondary">Category 1</CategoryBadge>
          <BodyText
            variant="14"
            className="text-secondary-foreground!"
          >
            04 December 2025
          </BodyText>
        </div>

        <div>
          <Headline
            as="p"
            variant="h3"
            className="text-secondary-foreground!"
          >
            5 ting du skal vide før du starter en renovering
          </Headline>
          <BodyText className="text-gray-600! line-clamp-3">
            En renovering kan hurtigt blive dyrere end forventet. Her er de vigtigste ting at
            overveje inden du
          </BodyText>
        </div>

        <div className="pt-4 w-full border-t border-border flex gap-4">
          <div className="bg-gray-200 size-12 shrink-0 rounded-full" />

          <div className="w-full flex items-center justify-between gap-4">
            <BodyText
              variant="18Semibold"
              className="text-secondary-foreground"
            >
              Firstname Lastname
            </BodyText>

            <BodyText
              variant="12"
              className="text-gray-600!"
            >
              4 min read
            </BodyText>
          </div>
        </div>
      </div>
    </div>
  );
}
