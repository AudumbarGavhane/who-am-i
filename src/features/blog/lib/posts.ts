import fs from "node:fs";
import path from "node:path";
import type { ReactElement } from "react";

import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

import { estimateReadingTime } from "@/lib/reading-time";
import { blogFrontmatterSchema, type BlogFrontmatter } from "@/lib/validations/blog";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPostSummary extends BlogFrontmatter {
  readonly slug: string;
  readonly readingTime: string;
}

export interface BlogPost {
  readonly slug: string;
  readonly frontmatter: BlogFrontmatter;
  readonly readingTime: string;
  readonly content: ReactElement;
}

function getMdxFilenames(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((filename) => filename.endsWith(".mdx"));
}

function slugFromFilename(filename: string): string {
  return path.basename(filename, ".mdx");
}

export function getAllPosts(): BlogPostSummary[] {
  const posts = getMdxFilenames().map((filename) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
    const { data, content } = matter(raw);
    const frontmatter = blogFrontmatterSchema.parse(data);
    return {
      slug: slugFromFilename(filename),
      ...frontmatter,
      readingTime: estimateReadingTime(content),
    };
  });

  return posts
    .filter((post) => post.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf8");
  const { content: mdxSource, data } = matter(raw);
  const frontmatter = blogFrontmatterSchema.parse(data);

  const { content } = await compileMDX({
    source: mdxSource,
    options: { parseFrontmatter: false },
  });

  return {
    slug,
    frontmatter,
    readingTime: estimateReadingTime(mdxSource),
    content,
  };
}
