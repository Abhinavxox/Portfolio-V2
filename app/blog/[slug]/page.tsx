import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogPostPage from "@/components/BlogPostPage";
import { fetchHashnodePostBySlug } from "@/lib/hashnode";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchHashnodePostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post",
      description: "Blog post not found",
    };
  }

  return {
    title: post.title,
    description: post.brief || post.seo?.description || post.title,
    openGraph: {
      title: post.title,
      description: post.brief || post.seo?.description || post.title,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Abhinav Pandey"],
      images: post.coverImage ? [post.coverImage.url] : ["/images/blog.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.brief || post.seo?.description || post.title,
      images: post.coverImage ? [post.coverImage.url] : ["/images/blog.png"],
    },
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;

  return (
    <div className="min-h-screen">
      <Navbar />
      <BlogPostPage slug={slug} />
    </div>
  );
}
