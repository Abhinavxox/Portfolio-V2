"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "web development", "web design", "applications"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <article className="max-w-6xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-semibold text-text-primary mb-2">Portfolio</h2>
      </header>

      <section>
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-accent text-white glass-strong"
                  : "glass text-text-secondary hover:text-accent border border-glass-border hover:glass-strong"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: (idx % 6) * 0.05 }}
                className="group relative overflow-hidden rounded-xl glass border border-glass-border hover:border-accent hover:shadow-2 hover:glass-strong transition-all"
              >
                <a href={project.link}>
                  <figure className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                      <ion-icon
                        name="eye-outline"
                        className="text-4xl text-white"
                      ></ion-icon>
                    </div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </figure>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary capitalize">
                      {project.category}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </article>
  );
}

