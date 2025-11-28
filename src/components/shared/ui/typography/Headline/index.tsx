import { Text, VariantMap } from "@/src/components/shared/ui/typography/Text";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export const headlineVariantMap = {
  // H1 - 44px
  h1: "text-[26px] md:text-[44px] font-semibold leading-[120%] tracking-[-0.01em]",
  h1NotResponsive: "text-[44px] font-semibold leading-[120%] tracking-[-0.01em]",
  mobileH1: "text-[26px] font-semibold leading-[120%] tracking-[-0.01em]",

  // H2 - 32px
  h2: "text-[22px] md:text-[34px] font-semibold leading-[120%] tracking-[-0.01em]",
  h2NotResponsive: "text-[34px] font-semibold leading-[120%] tracking-[-0.01em]",
  mobileH2: "text-[22px] font-semibold leading-[120%] tracking-[-0.01em]",

  // H3 - 22px
  h3: "text-[20px] md:text-[22px] font-medium leading-[120%] tracking-[-0.01em]",
  h3NotResponsive: "text-[22px] font-medium leading-[120%] tracking-[-0.01em]",
  mobileH3: "text-[20px] font-medium leading-[120%]",

  // H4 - 20px
  h4: "text-base md:text-xl font-medium leading-[120%] tracking-[-0.01em]",
  h4NotResponsive: "text-xl font-medium leading-[120%] tracking-[-0.01em]",
  mobileH4: "text-base font-medium leading-[120%]",
} as const satisfies VariantMap;

type HeadlineVariant = keyof typeof headlineVariantMap;

export interface HeadlineProps<T extends ElementType = "h1"> {
  as?: T;
  variant?: HeadlineVariant;
  children?: ReactNode;
  className?: string;
}

export function Headline<T extends ElementType = "h1">({
  variant = "h1" as HeadlineVariant,
  as = "h1" as T,
  className = "",
  ...props
}: HeadlineProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof HeadlineProps<T>>) {
  return (
    <Text
      as={as}
      variant={variant}
      variantMap={headlineVariantMap}
      defaultVariant="h1"
      className={className}
      {...props}
    />
  );
}
