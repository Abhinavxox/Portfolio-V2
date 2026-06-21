import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogPage from "@/components/BlogPage";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Read Abhinav Pandey's blog posts on AI, machine learning, software development, technology insights, and programming tutorials.",
  openGraph: {
    title: "Blogs - Abhinav Pandey",
    description:
      "Blog posts on AI, machine learning, software development, and technology insights.",
    images: ["/images/blog.png"],
  },
};

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BlogPage />
    </div>
  );
}

