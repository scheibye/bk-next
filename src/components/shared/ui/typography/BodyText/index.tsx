import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { Text, VariantMap } from "@/src/components/shared/ui/typography/Text";

export const BodyTextVariantMap = {
  "20Medium": "text-xl font-medium leading-[150%]",

  "18Semibold": "text-lg font-semibold leading-[150%]",
  "18": "text-lg font-normal leading-[150%]",

  "16Semibold": "text-base font-normal leading-[150%]",
  "16": "text-base font-normal leading-[150%]",

  "14": "text-sm font-normal leading-[150%]",
  "14Semibold": "text-sm font-semibold leading-[150%]",

  "12": "text-xs font-normal leading-[150%]",
} as const satisfies VariantMap;

export type BodyTextVariant = keyof typeof BodyTextVariantMap;

export interface BodyTextProps<T extends ElementType = "p"> {
  as?: T;
  variant?: BodyTextVariant;
  children?: ReactNode;
  className?: string;
}

export function BodyText<T extends ElementType = "p">({
  variant = "16",
  as = "p" as T,
  className = "",
  ...props
}: BodyTextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof BodyTextProps<T>>) {
  return (
    <Text
      as={as}
      variant={variant}
      variantMap={BodyTextVariantMap}
      defaultVariant="16"
      className={className}
      {...props}
    />
  );
}
