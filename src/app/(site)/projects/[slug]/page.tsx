import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GithubIcon } from "@/components/icons/GithubIcon";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getAllProjects, getProjectBySlug } from "@/features/projects/lib/projects";

interface ProjectPageProps {
  readonly params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.tagline };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="flex flex-col gap-10 py-16">
      <header className="flex flex-col gap-4">
        <StatusBadge status={project.status} className="w-fit" />
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">{project.title}</h1>
        <p className="text-lg text-foreground-muted">{project.tagline}</p>
      </header>

      <p className="max-w-2xl text-foreground-muted">{project.description}</p>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-medium uppercase tracking-wide text-foreground-muted">
          Built with
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>
      </section>

      {project.tools.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium uppercase tracking-wide text-foreground-muted">
            Tooling &amp; Workflow
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool} className="border-accent/30 text-accent">
                {tool}
              </Badge>
            ))}
          </div>
        </section>
      )}

      <div className="flex flex-wrap gap-4">
        {project.links.live && (
          <Button href={project.links.live} target="_blank" rel="noopener noreferrer">
            Live Site
          </Button>
        )}
        {project.links.github && (
          <Button
            href={project.links.github}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="size-4" />
            Source Code
          </Button>
        )}
      </div>
    </article>
  );
}
