import type { Metadata } from "next";

import { about } from "@/config/about";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ContactCta } from "@/components/sections/ContactCta";

export const metadata: Metadata = {
  title: "About",
  description: about.positioning,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 py-16">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium text-accent">{about.eyebrow}</p>
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">{about.heading}</h1>
        <p className="max-w-2xl text-lg text-foreground-muted">{about.positioning}</p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button href="/projects">View Projects</Button>
          <Button href="/contact" variant="secondary">
            Get in Touch
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 border-y border-border py-8 sm:grid-cols-4">
        {about.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <p className="text-lg font-semibold text-foreground sm:text-xl">{stat.value}</p>
            <p className="text-sm text-foreground-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="flex max-w-2xl flex-col gap-4 text-foreground-muted">
        {about.story.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <section className="flex flex-col gap-6">
        <h2 className="text-sm font-medium uppercase tracking-wide text-foreground-muted">
          Experience
        </h2>
        <ol className="flex flex-col gap-6">
          {about.experience.map((entry) => (
            <li
              key={entry.company}
              className="flex flex-col gap-3 rounded-lg border border-border p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-foreground">{entry.role}</h3>
                  <p className="text-sm text-foreground-muted">{entry.company}</p>
                </div>
                <Badge
                  className={
                    entry.period === "Current" ? "border-accent/30 text-accent" : undefined
                  }
                >
                  {entry.period}
                </Badge>
              </div>

              {entry.domain && <p className="text-xs text-foreground-muted">{entry.domain}</p>}

              <ul className="flex flex-col gap-1.5 text-sm text-foreground-muted">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="text-accent">·</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-sm font-medium uppercase tracking-wide text-foreground-muted">
          Education
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {about.education.map((entry) => (
            <div
              key={entry.credential}
              className="flex flex-col gap-1.5 rounded-lg border border-border p-6"
            >
              <h3 className="text-base font-semibold text-foreground">{entry.credential}</h3>
              <p className="text-sm text-foreground-muted">{entry.field}</p>
              {entry.institution && (
                <p className="text-sm text-foreground-muted">{entry.institution}</p>
              )}
              {entry.detail && <p className="text-xs text-foreground-muted">{entry.detail}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-sm font-medium uppercase tracking-wide text-foreground-muted">
          Skills
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {about.skills.map((group) => (
            <div key={group.category} className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-foreground">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <p className="max-w-2xl text-foreground-muted">{about.goal}</p>

      <ContactCta />
    </div>
  );
}
