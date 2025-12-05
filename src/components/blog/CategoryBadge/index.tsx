import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { cn } from "@/src/lib/cn";
import { ReactNode } from "react";

type CategoryBadgeVariant = "primary" | "secondary";

interface Props {
  children: ReactNode;
  className?: string;
  variant?: CategoryBadgeVariant;
  isSelected?: boolean;
}

export function CategoryBadge({
  children,
  className,
  variant = "primary",
  isSelected,
  ...rest
}: Props) {
  return (
    <div
      className={cn(
        "w-fit my-1 px-4 py-2 rounded-full shadow-md text-nowrap cursor-pointer",
        variant === "primary" && "bg-gray-100",
        variant === "primary" && isSelected && "bg-secondary-green",
        variant === "secondary" && "bg-gray-500/50",
        className
      )}
      {...rest}
    >
      <BodyText
        variant="14"
        className={cn(
          variant === "primary" && "text-gray-600!",
          variant === "primary" && isSelected && "text-gray-100!",
          variant === "secondary" && "text-secondary-foreground!"
        )}
      >
        {children}
      </BodyText>
    </div>
  );
}
