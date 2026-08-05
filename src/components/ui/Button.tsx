import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ComponentPropsWithoutRef<typeof Link> {
  readonly variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-foreground hover:bg-accent-hover",
  secondary: "border border-border text-foreground hover:bg-background-subtle",
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}
