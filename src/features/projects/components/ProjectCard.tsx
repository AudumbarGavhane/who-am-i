import Link from "next/link";

import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Badge } from "@/components/ui/Badge";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { Project } from "@/lib/validations/project";

interface ProjectCardProps {
  readonly project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col gap-4 rounded-lg border border-border p-6 transition-colors hover:border-accent">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-foreground">
          <Link href={`/projects/${project.slug}`}>
            <span className="absolute inset-0" aria-hidden="true" />
            {project.title}
          </Link>
        </h3>
        <StatusBadge status={project.status} className="shrink-0" />
      </div>

      <p className="text-sm text-foreground-muted">{project.tagline}</p>

      <div className="flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((technology) => (
          <Badge key={technology}>{technology}</Badge>
        ))}
      </div>

      {project.tools.length > 0 && (
        <p className="text-xs text-foreground-muted">
          <span className="font-medium text-foreground">Workflow:</span> {project.tools.join(" · ")}
        </p>
      )}

      {(project.links.live || project.links.github) && (
        <div className="relative z-10 mt-auto flex items-center gap-4 pt-2 text-sm text-foreground-muted">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-accent"
            >
              Live
              <ArrowUpRightIcon className="size-3.5" />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-accent"
            >
              <GithubIcon className="size-3.5" />
              Code
            </a>
          )}
        </div>
      )}
    </div>
  );
}
