import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { cn } from "@/src/lib/cn";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function CategoryBadge({ children, className, ...rest }: Props) {
  return (
    <div
      className={cn("w-fit px-4 py-2 bg-gray-100 rounded-full", className)}
      {...rest}
    >
      <BodyText className="text-gray-600!">{children}</BodyText>
    </div>
  );
}
