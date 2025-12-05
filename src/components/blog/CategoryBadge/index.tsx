import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { cn } from "@/src/lib/cn";
import { ReactNode } from "react";

type CategoryBadgeVariant = "primary" | "secondary";

interface Props {
  children: ReactNode;
  className?: string;
  variant?: CategoryBadgeVariant;
}

export function CategoryBadge({ children, className, variant = "primary", ...rest }: Props) {
  return (
    <div
      className={cn(
        "w-fit my-1 px-4 py-2 rounded-full shadow-md text-nowrap",
        variant === "primary" ? "bg-gray-100" : "bg-gray-500/25",
        className
      )}
      {...rest}
    >
      <BodyText
        className={cn(variant === "primary" ? "text-gray-600!" : "text-secondary-foreground!")}
      >
        {children}
      </BodyText>
    </div>
  );
}
