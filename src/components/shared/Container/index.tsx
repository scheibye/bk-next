import { cn } from "@/src/lib/cn";
import { ElementType, HTMLAttributes, ReactNode } from "react";
import { tv } from "tailwind-variants";

const containerVariants = tv({
  base: "mx-auto",
  variants: {
    variant: {
      inner: "max-w-[1164px] px-5",
      outer: "mx-5",
    },
  },
  defaultVariants: {
    variant: "outer",
  },
});

type ContainerVariant = "inner" | "outer";
interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: ContainerVariant;
  as?: ElementType;
}

export function Container({ children, variant, as: Component = "div", className, ...rest }: Props) {
  return (
    <Component
      className={cn(containerVariants({ variant }), className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
