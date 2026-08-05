import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { mainNav } from "@/config/nav";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-foreground-muted">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>

        <ul className="flex items-center gap-6">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-foreground-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-4">
          <li>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
