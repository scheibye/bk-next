import { cn } from "@/src/lib/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { tv } from "tailwind-variants";

const buttonVariants = tv({
  base: "py-4 px-5 rounded-lg flex items-center justify-center gap-2",
  variants: {
    variant: {
      primary: "bg-brand-primary text-white",
      secondary:
        "w-full bg-secondary-orange hover:opacity-90 text-lg font-semibold leading-[150%] text-foreground outline-none cursor-pointer transition-colors duration-300",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonVariant = "primary" | "secondary";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export function Button({ children, variant, className, ...rest }: Props) {
  return (
    <button
      className={cn(buttonVariants({ variant }), className)}
      {...rest}
    >
      {children}
    </button>
  );
}
