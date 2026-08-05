import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllPosts, getPostBySlug } from "@/features/blog/lib/posts";

interface BlogPostPageProps {
  readonly params: Promise<{ slug: string }>;
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return { title: post.frontmatter.title, description: post.frontmatter.description };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="flex flex-col gap-8 py-16">
      <header className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          {post.frontmatter.title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-foreground-muted">
          <time dateTime={post.frontmatter.date.toISOString()}>
            {dateFormatter.format(post.frontmatter.date)}
          </time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      <div className="flex max-w-2xl flex-col gap-4 text-foreground-muted">{post.content}</div>
    </article>
  );
}
