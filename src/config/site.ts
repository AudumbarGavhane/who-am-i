export interface SocialLinks {
  readonly github: string;
  readonly linkedin: string;
}

export interface SiteConfig {
  readonly name: string;
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly email: string;
  readonly location: string;
  readonly links: SocialLinks;
  readonly keywords: readonly string[];
  readonly ogImage: string;
}

export const siteConfig = {
  name: "Audumbar Gavhane",
  title: "Full Stack Engineer | QA Automation Engineer | Backend Systems Developer",
  description:
    "Full Stack Engineer with a background in QA Automation, building secure, scalable, production-ready web applications with Java, Spring Boot, React, and Next.js.",
  url: "https://audumbargavhane.dev",
  email: "audumbar.dev@gmail.com",
  location: "Pune, Maharashtra, India",
  links: {
    github: "https://github.com/AudumbarGavhane",
    linkedin: "https://www.linkedin.com/in/audumbar-gavhane",
  },
  keywords: [
    "Full Stack Engineer",
    "QA Automation Engineer",
    "Backend Systems Developer",
    "Java",
    "Spring Boot",
    "Hibernate",
    "JPA",
    "REST API",
    "JWT Authentication",
    "Microservices",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux",
    "TanStack Query",
    "MySQL",
    "PostgreSQL",
    "Playwright",
    "REST Assured",
    "JUnit",
    "JMeter",
    "Docker",
    "AWS",
    "Oracle Cloud Infrastructure",
    "GitHub Actions",
    "Linux",
    "Nginx",
  ],
  ogImage: "/images/og/default.png",
} satisfies SiteConfig;
