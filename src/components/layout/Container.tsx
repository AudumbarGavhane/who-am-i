import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps {
  readonly as?: ElementType;
  readonly children: ReactNode;
  readonly className?: string;
}

export function Container({ as: Tag = "div", children, className }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-6xl px-6", className)}>
      {children}
    </Tag>
  );
}
