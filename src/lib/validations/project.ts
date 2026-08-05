import { z } from "zod";

export const projectStatusSchema = z.enum(["live", "in-progress", "concept"]);

export const projectSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  tagline: z.string().min(1),
  description: z.string().min(1),
  stack: z.array(z.string().min(1)).min(1),
  /** Dev-workflow tooling (Swagger, Postman, Claude, CI, ...) shown separately from `stack`. */
  tools: z.array(z.string().min(1)).default([]),
  status: projectStatusSchema.default("live"),
  links: z.object({
    github: z.string().url().optional(),
    live: z.string().url().optional(),
  }),
  image: z.string().min(1).optional(),
  featured: z.boolean().default(false),
  order: z.number().default(0),
});

export const projectsSchema = z.array(projectSchema);

export type Project = z.infer<typeof projectSchema>;
export type ProjectStatus = z.infer<typeof projectStatusSchema>;
