import { projectsSchema, type Project } from "@/lib/validations/project";

/**
 * Real project entries go here as plain object literals — validated
 * against projectSchema below, so a malformed entry (bad URL, empty
 * required field) fails fast at build/import time instead of silently
 * rendering broken.
 *
 * NOTE: `links` below are placeholders (repo names / *.vercel.app guesses)
 * until each project is actually pushed and deployed — swap them for the
 * real URLs as each one ships.
 */
const rawProjects: unknown[] = [
  {
    slug: "examprep-platform",
    title: "ExamPrep — Adaptive Exam Preparation Platform",
    tagline: "Adaptive practice tests and spaced-repetition study plans for competitive exam prep.",
    description:
      "A full-stack study platform for competitive exam aspirants: timed mock tests, topic-wise question banks, and a spaced-repetition engine that resurfaces weak areas automatically. The Spring Boot backend exposes a versioned REST API secured with JWT, caches hot leaderboard and test-session data in Redis, and persists attempts and analytics in PostgreSQL. The Next.js frontend renders test-taking and analytics dashboards with server components for fast first paint. Every endpoint is documented in Swagger/OpenAPI and exercised through a Postman collection before it ships, and Claude is used throughout the build for API design review, test-case generation, and refactoring passes.",
    stack: ["Spring Boot", "Java", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Tailwind CSS"],
    tools: ["Swagger / OpenAPI", "Postman", "Claude", "Docker", "GitHub Actions"],
    status: "live",
    links: {
      github: "https://github.com/AudumbarGavhane/examprep-platform",
      live: "https://examprep.vercel.app",
    },
    featured: true,
    order: 0,
  },
  {
    slug: "puzzle-arena",
    title: "Puzzle Arena — Daily Logic Puzzle Game",
    tagline: "A Queens-style daily deduction puzzle, built as a fast, installable web game.",
    description:
      "A browser puzzle game in the spirit of daily logic games like Queens: a fresh grid-deduction puzzle each day, with region-based placement rules, a mistake counter, and a shareable results grid. Built entirely in Next.js with client-side puzzle generation and solving logic, animated with CSS transitions for a native-app feel, and installable as a PWA for offline play. Claude was used to help design the puzzle-generation algorithm and validate edge cases in the solver.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    tools: ["Claude", "Vercel", "Playwright"],
    status: "in-progress",
    links: {
      github: "https://github.com/AudumbarGavhane/puzzle-arena",
    },
    featured: true,
    order: 1,
  },
  {
    slug: "skyfare-reservations",
    title: "SkyFare — Airline Ticket Reservation System",
    tagline: "Modernized airline booking platform: search, seat selection, and reservation management.",
    description:
      "An airline ticket reservation system covering flight search, seat-map selection, booking, and reservation management end to end. The Spring Boot backend models flights, fares, and bookings against MySQL and exposes a documented REST API; the React frontend is being rebuilt with a modern, responsive UI and clearer booking flow. The whole stack is containerized with Docker and deployed to Oracle Cloud Infrastructure. Currently being modernized from its original version — updated component design, responsive layouts, and an API refresh backed by Swagger docs and a Postman regression suite.",
    stack: ["React", "Spring Boot", "Java", "MySQL", "Docker", "OCI"],
    tools: ["Swagger / OpenAPI", "Postman", "GitHub Actions", "Claude"],
    status: "live",
    links: {
      github: "https://github.com/AudumbarGavhane/skyfare-reservations",
      live: "https://skyfare-demo.audumbargavhane.dev",
    },
    featured: true,
    order: 2,
  },
  {
    slug: "qr-toolkit",
    title: "QR Toolkit — Scanner & Generator",
    tagline: "Instant QR code scanning and generation, right in the browser.",
    description:
      "A lightweight utility app for scanning QR codes via the device camera and generating custom QR codes (URLs, text, Wi-Fi credentials, contact cards) with adjustable size, error correction, and export to PNG/SVG. Built with Next.js and the browser's native camera APIs, with no server round-trip required for either scanning or generation. Claude was used to speed up the canvas-rendering and camera-permission edge cases.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    tools: ["Claude", "Vercel"],
    status: "in-progress",
    links: {
      github: "https://github.com/AudumbarGavhane/qr-toolkit",
    },
    featured: false,
    order: 3,
  },
  {
    slug: "pdf2md-notes",
    title: "PDF2MD — PDF to Markdown Notes Converter",
    tagline: "Turns lecture PDFs into clean, searchable Markdown notes for exam prep.",
    description:
      "A conversion tool that takes lecture slides and reference PDFs and produces clean, structured Markdown — headings, lists, and tables preserved — so they can be indexed and reused inside the ExamPrep notes workflow. Planned as a statically generated (SSG) notes viewer with client-side search, backed by a small conversion pipeline. Currently at the concept stage: architecture and content model are being scoped before implementation starts.",
    stack: ["Next.js", "Node.js", "TypeScript"],
    tools: ["Claude"],
    status: "concept",
    links: {},
    featured: false,
    order: 4,
  },
];

export const projects: Project[] = projectsSchema.parse(rawProjects);
