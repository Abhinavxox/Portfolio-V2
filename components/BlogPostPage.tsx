"use client";

import { useEffect, useState } from "react";
import {
  fetchHashnodePostBySlug,
  formatDate,
  HashnodePost,
} from "@/lib/hashnode";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogPostPageProps {
  slug: string;
}

export default function BlogPostPage({ slug }: BlogPostPageProps) {
  const [post, setPost] = useState<HashnodePost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        const fetchedPost = await fetchHashnodePostBySlug(slug);
        if (fetchedPost) {
          setPost(fetchedPost);
          setError(null);
        } else {
          setError("Post not found");
        }
      } catch (err) {
        setError("Failed to load blog post. Please try again later.");
        console.error("Error loading post:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-20 md:pt-24 pb-12 px-4 sm:px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent mb-4"></div>
              <p className="text-text-secondary">Loading blog post...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="pt-20 md:pt-24 pb-12 px-4 sm:px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center glass px-8 py-6 rounded-2xl">
              <p className="text-text-primary text-lg mb-2">⚠️ Error</p>
              <p className="text-text-secondary mb-4">
                {error || "Post not found"}
              </p>
              <Link
                href="/blog"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                ← Back to Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 md:pt-24 pb-12 px-4 sm:px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <span>Back to Blogs</span>
          </Link>
        </motion.div>

        {/* Cover Image */}
        {post.coverImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-64 md:h-96 mb-8 rounded-2xl overflow-hidden"
          >
            <Image
              src={post.coverImage.url}
              alt={post.title}
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>
        )}

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full glass text-text-secondary"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-text-tertiary mb-8 pb-6 border-b border-glass-border">
            <span>{formatDate(post.publishedAt)}</span>
            <span className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {post.readTimeInMinutes} min read
            </span>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors flex items-center gap-1"
            >
              <span>View on Hashnode</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>

          {/* Brief/Description */}
          {post.brief && (
            <div className="mb-8">
              <p className="text-xl text-text-secondary leading-relaxed">
                {post.brief}
              </p>
            </div>
          )}

          {/* Content */}
          {post.contentMarkdown || post.content?.markdown ? (
            <div className="prose prose-invert prose-lg max-w-none blog-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h1
                      className="text-3xl font-bold text-text-primary mt-8 mb-4"
                      {...props}
                    />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2
                      className="text-2xl font-bold text-text-primary mt-6 mb-3"
                      {...props}
                    />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3
                      className="text-xl font-semibold text-text-primary mt-5 mb-2"
                      {...props}
                    />
                  ),
                  h4: ({ node, ...props }) => (
                    <h4
                      className="text-lg font-semibold text-text-primary mt-4 mb-2"
                      {...props}
                    />
                  ),
                  h5: ({ node, ...props }) => (
                    <h5
                      className="text-base font-semibold text-text-primary mt-3 mb-2"
                      {...props}
                    />
                  ),
                  h6: ({ node, ...props }) => (
                    <h6
                      className="text-sm font-semibold text-text-primary mt-3 mb-2"
                      {...props}
                    />
                  ),
                  p: ({ node, ...props }) => (
                    <p
                      className="text-text-secondary leading-relaxed mb-4"
                      {...props}
                    />
                  ),
                  a: ({ node, ...props }) => (
                    <a
                      className="text-accent hover:text-accent-hover underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                    />
                  ),
                  code: ({
                    node,
                    inline,
                    className,
                    children,
                    ...props
                  }: any) => {
                    if (inline) {
                      return (
                        <code
                          className="px-1.5 py-0.5 rounded bg-glass text-accent text-sm font-mono"
                          {...props}
                        >
                          {children}
                        </code>
                      );
                    }
                    // For code blocks, return plain code (pre will handle the wrapper)
                    return (
                      <code
                        className={`font-mono text-sm ${className || ""}`}
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  },
                  pre: ({ node, children, ...props }: any) => {
                    return (
                      <pre
                        className="mb-4 overflow-x-auto bg-glass border border-glass-border rounded-lg p-4"
                        {...props}
                      >
                        {children}
                      </pre>
                    );
                  },
                  ul: ({ node, ...props }) => (
                    <ul
                      className="list-disc mb-4 text-text-secondary space-y-2 pl-6"
                      {...props}
                    />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol
                      className="list-decimal mb-4 text-text-secondary space-y-2 pl-6"
                      {...props}
                    />
                  ),
                  li: ({ node, children, ...props }: any) => (
                    <li className="mb-2 leading-relaxed" {...props}>
                      {children}
                    </li>
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      className="border-l-4 border-accent pl-4 italic text-text-secondary my-4"
                      {...props}
                    />
                  ),
                  img: ({ node, ...props }: any) => (
                    <img
                      className="rounded-lg my-4 max-w-full h-auto"
                      {...props}
                    />
                  ),
                }}
              >
                {post.contentMarkdown || post.content?.markdown || ""}
              </ReactMarkdown>
            </div>
          ) : (
            <div className="text-center glass px-8 py-12 rounded-2xl">
              <p className="text-text-secondary">
                Content not available.{" "}
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover"
                >
                  Read on Hashnode
                </a>
              </p>
            </div>
          )}

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-glass-border">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <span>Back to Blogs</span>
              </Link>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass px-4 py-2 rounded-lg hover:bg-glass-strong transition-colors"
              >
                <span className="text-text-primary">View on Hashnode</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
