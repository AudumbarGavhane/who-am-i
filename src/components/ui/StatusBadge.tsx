import type { ProjectStatus } from "@/lib/validations/project";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  readonly status: ProjectStatus;
  readonly className?: string;
}

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  live: {
    label: "Live",
    className: "bg-emerald-500/10 text-emerald-500",
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-amber-500/10 text-amber-500",
  },
  concept: {
    label: "Concept",
    className: "bg-foreground-muted/10 text-foreground-muted",
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const { label, className: colorClassName } = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        colorClassName,
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}
