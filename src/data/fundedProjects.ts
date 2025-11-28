export interface FundedProject {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  budget: number;
  isFlexibleFinancing?: boolean;
}

export const FUNDED_PROJECTS: FundedProject[] = [
  {
    imageSrc: "/funded-projects/project-1.webp",
    imageAlt: "residential construction",
    title: "Boligbyggeri – 42 lejligheder i udvikling",
    description:
      "Dette projekt omfatter opførelsen af et moderne boligbyggeri med fokus på energieffektivitet og bæredygtige materialer.",
    budget: 12200000,
    isFlexibleFinancing: true,
  },
  {
    imageSrc: "/funded-projects/project-2.webp",
    imageAlt: "renovation result",
    title: "Renovering af erhvervsejendom i København",
    description:
      "Dette projekt omfatter opførelsen af et moderne boligbyggeri med fokus på energieffektivitet og bæredygtige materialer.",
    budget: 6200000,
  },
  {
    imageSrc: "/funded-projects/project-3.webp",
    imageAlt: "Showroom and office",
    title: "Showroom og kontorfaciliteter i Tyskland",
    description:
      "Dette projekt omfatter opførelsen af et moderne boligbyggeri med fokus på energieffektivitet og bæredygtige materialer.",
    budget: 14600000,
  },
];
