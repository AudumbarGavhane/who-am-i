"use client";

import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/layout/Container";
import { mainNav } from "@/config/nav";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <Container as="nav" className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground"
          onClick={() => setIsMenuOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
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

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-foreground md:hidden"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinecap="round"
            className="h-5 w-5"
          >
            {isMenuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </Container>

      {isMenuOpen && (
        <ul id="mobile-nav" className="flex flex-col border-t border-border md:hidden">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-3 text-sm text-foreground-muted transition-colors hover:bg-background-subtle hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
