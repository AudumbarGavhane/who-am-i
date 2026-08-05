import { z } from "zod";

// The URL slug comes from the filename (see src/features/blog/lib/posts.ts),
// not frontmatter — a single source of truth avoids the slug field drifting
// out of sync with the actual filename a lookup uses.
export const blogFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  // gray-matter parses unquoted YAML dates (e.g. `date: 2026-01-01`) into
  // JS Date objects rather than strings, so both inputs must be accepted.
  date: z.coerce.date(),
  tags: z.array(z.string().min(1)).default([]),
  published: z.boolean().default(true),
});

export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;
