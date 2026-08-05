import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="flex flex-col gap-6 py-16 sm:py-24">
      <p className="text-sm font-medium text-accent">{siteConfig.location}</p>
      <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        {siteConfig.name}
      </h1>
      <p className="text-lg text-foreground-muted sm:text-xl">{siteConfig.title}</p>
      <p className="max-w-2xl text-base text-foreground-muted">{siteConfig.description}</p>
      <div className="flex flex-wrap gap-4">
        <Button href="/projects">View Projects</Button>
        <Button href="/contact" variant="secondary">
          Get in Touch
        </Button>
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
