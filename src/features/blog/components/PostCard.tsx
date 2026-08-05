import Link from "next/link";

import type { BlogPostSummary } from "@/features/blog/lib/posts";

interface PostCardProps {
  readonly post: BlogPostSummary;
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex flex-col gap-2 border-b border-border py-6 transition-colors first:pt-0 hover:text-accent"
    >
      <div className="flex items-center gap-3 text-xs text-foreground-muted">
        <time dateTime={post.date.toISOString()}>{dateFormatter.format(post.date)}</time>
        <span aria-hidden="true">&middot;</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="text-lg font-semibold text-foreground">{post.title}</h3>
      <p className="text-sm text-foreground-muted">{post.description}</p>
    </Link>
  );
}
