"use client";

import { useEffect, useState } from "react";
import { fetchHashnodePosts, formatDate, HashnodePost } from "@/lib/hashnode";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogPage() {
  const [posts, setPosts] = useState<HashnodePost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await fetchHashnodePosts(50);
        setPosts(fetchedPosts);
        setError(null);
      } catch (err) {
        setError("Failed to load blog posts. Please try again later.");
        console.error("Error loading posts:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="pt-20 md:pt-24 pb-12 px-4 sm:px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent mb-4"></div>
              <p className="text-text-secondary">Loading blog posts...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-20 md:pt-24 pb-12 px-4 sm:px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center glass px-8 py-6 rounded-2xl">
              <p className="text-text-primary text-lg mb-2">⚠️ Error</p>
              <p className="text-text-secondary">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="pt-20 md:pt-24 pb-12 px-4 sm:px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-8">
              My Blogs
            </h1>
            <div className="text-center glass px-8 py-12 rounded-2xl">
              <p className="text-text-secondary text-lg">
                No blog posts found. Check back later!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 md:pt-24 pb-12 px-4 sm:px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-4">
            My Blogs
          </h1>
          <p className="text-text-secondary text-lg mb-8">
            Thoughts, tutorials, and insights on AI, development, and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="portfolio-card group cursor-pointer h-full flex flex-col"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col h-full"
              >
                {/* Cover Image */}
                {post.coverImage ? (
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={post.coverImage.url}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 to-accent-hover/20 flex items-center justify-center">
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent/50"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-2 py-1 rounded-full glass text-text-secondary"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Brief */}
                  <p className="text-text-secondary mb-4 flex-1 leading-relaxed line-clamp-3">
                    {post.brief || "Read more about this topic..."}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-text-tertiary pt-4 border-t border-glass-border">
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
                  </div>

                  {/* Read More Indicator */}
                  <div className="mt-4 flex items-center gap-2 text-accent group-hover:text-accent-hover transition-colors">
                    <span className="text-sm font-medium">Read More</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Hashnode Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="https://hashnode.com/@MeroNaamAbhinav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-lg hover:bg-glass-strong transition-colors"
          >
            <span className="text-text-primary font-medium">
              View all posts on Hashnode
            </span>
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
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
