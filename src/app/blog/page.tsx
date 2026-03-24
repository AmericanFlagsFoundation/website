import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stories, insights, and updates from the American Flags Foundation on mental health awareness and advocacy.",
};

export const dynamic = "force-dynamic";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-navy-700 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Blog</h1>
          <p className="mt-4 text-lg text-gray-300">
            Stories, insights, and updates on our mission to combat mental
            health stigma.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <div className="text-center">
            <p className="text-lg text-gray-500">
              No posts yet. Check back soon for stories and updates!
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="card">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="mb-2 text-2xl font-bold text-navy-700 hover:text-navy-500 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="mb-2 text-sm text-gray-400">{post.date}</p>
                <p className="text-gray-600">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-3 inline-block text-sm font-semibold text-navy-600 hover:underline"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
