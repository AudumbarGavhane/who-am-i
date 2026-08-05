import type { Metadata } from "next";

import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/features/contact/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to discuss a project, opportunity, or just to say hello.",
};

const socialLinks = [
  { label: "GitHub", href: siteConfig.links.github, Icon: GithubIcon },
  { label: "LinkedIn", href: siteConfig.links.linkedin, Icon: LinkedinIcon },
];

export default function ContactPage() {
  return (
    <div className="grid gap-12 py-16 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-accent">Get in Touch</p>
          <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Contact Me</h1>
          <p className="max-w-md text-foreground-muted">
            Have a project in mind, an opportunity to discuss, or just want to say hello?
            Reach out below and I&apos;ll get back to you as soon as I can.
          </p>
        </div>

        <ContactForm />
      </div>

      <div className="flex flex-col gap-6 rounded-lg border border-border p-8">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-foreground-muted">Name</p>
          <p className="text-foreground">{siteConfig.name}</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm text-foreground-muted">Location</p>
          <p className="text-foreground">{siteConfig.location}</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm text-foreground-muted">Email</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-accent transition-colors hover:text-accent-hover"
          >
            {siteConfig.email}
          </a>
        </div>

        <div className="flex gap-3 pt-2">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
