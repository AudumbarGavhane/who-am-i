export interface AboutStat {
  readonly label: string;
  readonly value: string;
}

export interface ExperienceEntry {
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly domain?: string;
  readonly highlights: readonly string[];
}

export interface EducationEntry {
  readonly credential: string;
  readonly field: string;
  readonly institution?: string;
  readonly detail?: string;
}

export interface SkillGroup {
  readonly category: string;
  readonly items: readonly string[];
}

export interface AboutConfig {
  readonly eyebrow: string;
  readonly heading: string;
  readonly positioning: string;
  readonly stats: readonly AboutStat[];
  readonly story: readonly string[];
  readonly experience: readonly ExperienceEntry[];
  readonly education: readonly EducationEntry[];
  readonly skills: readonly SkillGroup[];
  readonly goal: string;
}

export const about = {
  eyebrow: "About Me",
  heading: "Hi, I'm Audumbar Gavhane.",
  positioning:
    "AI-powered Full Stack Engineer building scalable web applications with Java, Spring Boot, Next.js, React, and modern cloud technologies — with production-grade quality backed by real QA experience.",
  stats: [
    { label: "Experience", value: "~2.5 yrs" },
    { label: "Focus", value: "Backend, Full Stack & QA" },
    { label: "Based in", value: "Pune, India" },
    { label: "Workflow", value: "AI-assisted development" },
  ],
  story: [
    "I'm a Full Stack Engineer based in Pune, India, with roughly two and a half years of professional experience that started in quality engineering and is now squarely focused on building production software. At Ixsight Technologies, I work on AML, KYC, fraud detection, and compliance software for banking clients — manual, API, SQL, and regression testing with REST Assured, JMeter, and Postman on Linux. Before that, I was a Quality Assurance Trainee at GE Aviation, where Lean, Six Sigma, and manufacturing QA practices — including NDT/FPI inspection — shaped a habit of rigor that still shows up in how I test everything I build.",
    "These days I build full-stack products end to end — Java and Spring Boot on the backend, React and Next.js on the front end — and lean on AI tools like Claude throughout the workflow, from API design to test generation to refactoring, to move faster without cutting corners. QA isn't something I'm leaving behind; it's the edge I bring to shipping software that actually holds up. I'm looking for product companies, remote roles, freelance clients, and international startups where I can build scalable systems.",
  ],
  experience: [
    {
      company: "Ixsight Technologies Pvt. Ltd.",
      role: "Associate Software Tester / QA Engineer",
      period: "Current",
      domain: "AML · KYC · Fraud Detection · Compliance",
      highlights: [
        "Manual, API, and SQL testing across banking and compliance software",
        "Regression and functional testing for AML/KYC workflows",
        "Building automation exposure with REST Assured, JMeter, and Postman",
        "Working daily on Linux in a banking-software environment",
      ],
    },
    {
      company: "GE Aviation",
      role: "Quality Assurance Trainee",
      period: "Previous",
      highlights: [
        "Quality inspection on manufacturing lines",
        "Applied Lean and Six Sigma methodologies",
        "Manufacturing QA and NDT/FPI (Fluorescent Penetrant Inspection) processes",
      ],
    },
  ],
  education: [
    {
      credential: "Bachelor of Engineering (BE)",
      field: "Mechanical Engineering",
      detail: "CGPA: 9.16",
    },
    {
      credential: "PG-DAC",
      field: "Full Stack Development",
      institution: "CDAC Pune",
      detail: "Post Graduate Diploma in Advanced Computing",
    },
  ],
  skills: [
    { category: "Backend", items: ["Java", "Spring Boot", "Hibernate", "REST APIs", "JWT"] },
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    { category: "Database", items: ["MySQL", "PostgreSQL", "SQL"] },
    {
      category: "Testing & QA",
      items: [
        "Manual Testing",
        "API Testing",
        "REST Assured",
        "JMeter",
        "Postman",
        "Regression Testing",
        "Functional Testing",
      ],
    },
    { category: "Tools & Cloud", items: ["Git", "Docker", "Linux", "OCI", "AWS", "GitHub Actions", "Nginx"] },
    { category: "AI-Assisted Development", items: ["Claude", "Claude Code"] },
  ],
  goal: "Long-term, the goal is to grow into a high-level Full Stack Engineer building production-grade software — and eventually ship AI-assisted software products of my own while working with clients and teams globally.",
} satisfies AboutConfig;
