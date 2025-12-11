import { cn } from "@/src/lib/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { tv } from "tailwind-variants";

const buttonVariants = tv({
  base: "w-full py-4 px-5 rounded-md flex items-center justify-center gap-2 text-lg font-semibold leading-[150%] text-foreground cursor-pointer transition-colors duration-300 outline-none",
  variants: {
    variant: {
      primary: "bg-secondary-green hover:opacity-90",
      secondary: "bg-secondary-orange hover:opacity-90",
      transparent: "bg-transparent border border-border hover:bg-secondary-background",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonVariant = "primary" | "secondary" | "transparent";
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
