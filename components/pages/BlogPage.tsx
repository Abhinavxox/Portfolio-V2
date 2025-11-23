"use client";

import { blogPosts } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <article className="max-w-6xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-semibold text-text-primary mb-2">Blog</h2>
      </header>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group glass rounded-xl overflow-hidden border border-glass-border hover:border-accent hover:shadow-2 hover:glass-strong transition-all"
            >
              <a href={post.link}>
                <figure className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </figure>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-text-tertiary mb-3">
                    <span className="text-accent">{post.category}</span>
                    <span>•</span>
                    <time>{post.date}</time>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-secondary line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </section>
    </article>
  );
}

