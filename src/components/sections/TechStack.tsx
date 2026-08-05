import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site";

// siteConfig.keywords leads with role titles (for SEO metadata); only the
// technology entries that follow belong in a "tech stack" list.
const ROLE_TITLE_COUNT = 3;
const technologies = siteConfig.keywords.slice(ROLE_TITLE_COUNT);

export function TechStack() {
  return (
    <section className="flex flex-col gap-6 border-t border-border py-16">
      <h2 className="text-sm font-medium uppercase tracking-wide text-foreground-muted">
        Tech Stack
      </h2>
      <div className="flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <Badge key={technology}>{technology}</Badge>
        ))}
      </div>
    </section>
  );
}
