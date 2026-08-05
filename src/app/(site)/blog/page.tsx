import type { Metadata } from "next";

import { PostCard } from "@/features/blog/components/PostCard";
import { getAllPosts } from "@/features/blog/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on backend systems, testing, and web development.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col gap-8 py-16">
      <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-foreground-muted">No posts yet. Check back soon.</p>
      ) : (
        <div className="flex flex-col">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
