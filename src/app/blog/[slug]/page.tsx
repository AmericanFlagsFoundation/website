import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getPostBySlug, getAllPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Simple markdown-to-html: paragraphs
  const paragraphs = post.content
    .split(/\n\n+/)
    .filter((p) => p.trim().length > 0);

  return (
    <>
      <section className="bg-navy-700 py-12 text-white sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/blog"
            className="mb-4 inline-block text-sm text-gray-300 hover:text-white"
          >
            ← Back to Blog
          </Link>
          <h1 className="text-3xl font-extrabold sm:text-4xl">{post.title}</h1>
          <p className="mt-3 text-sm text-gray-400">{post.date}</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          {paragraphs.map((p, i) => (
            <p key={i} className="mb-4 leading-relaxed text-gray-700">
              {p.trim()}
            </p>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <Link
            href="/blog"
            className="text-sm font-semibold text-navy-600 hover:underline"
          >
            ← Back to All Posts
          </Link>
        </div>
      </article>
    </>
  );
}
