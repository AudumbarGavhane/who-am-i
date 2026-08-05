import type { Metadata } from "next";

import { ProjectCard } from "@/features/projects/components/ProjectCard";
import { getAllProjects } from "@/features/projects/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects spanning full-stack apps, games, and developer tools.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="flex flex-col gap-8 py-16">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Projects</h1>
        <p className="max-w-2xl text-foreground-muted">
          A mix of full-stack products, games, and developer tools — built with modern
          tooling like Swagger, Postman, and Claude alongside the usual stack.
        </p>
      </div>

      {projects.length === 0 ? (
        <p className="text-foreground-muted">Projects coming soon.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
