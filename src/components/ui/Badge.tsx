import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface BadgeProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-background-subtle px-3 py-1 text-xs text-foreground-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
