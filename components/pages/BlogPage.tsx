"use client";

import { blogPosts } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <article className="max-w-6xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-semibold text-white-1 mb-2">Blog</h2>
      </header>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-gradient-jet rounded-xl overflow-hidden border border-jet hover:border-vegas-gold transition-colors"
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
                  <div className="flex items-center gap-2 text-xs text-light-gray-70 mb-3">
                    <span className="text-vegas-gold">{post.category}</span>
                    <span>•</span>
                    <time>{post.date}</time>
                  </div>
                  <h3 className="text-lg font-semibold text-white-1 mb-2 group-hover:text-vegas-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-light-gray-70 line-clamp-2">
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

