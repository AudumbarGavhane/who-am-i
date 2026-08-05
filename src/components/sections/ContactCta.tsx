import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function ContactCta() {
  return (
    <section className="flex flex-col items-start gap-6 border-t border-border py-16">
      <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
        Let&apos;s work together
      </h2>
      <p className="max-w-xl text-foreground-muted">
        Based in {siteConfig.location}. Reach out at{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-accent transition-colors hover:text-accent-hover"
        >
          {siteConfig.email}
        </a>
        .
      </p>
      <div className="flex flex-wrap gap-4">
        <Button href={`mailto:${siteConfig.email}`}>Email Me</Button>
        <Button
          href={siteConfig.links.github}
          variant="secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
        <Button
          href={siteConfig.links.linkedin}
          variant="secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Button>
      </div>
    </section>
  );
}
