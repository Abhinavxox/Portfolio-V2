"use client";

import { useState } from "react";
import { getProjectBySlug } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectImageModal from "./ProjectImageModal";

interface ProjectPageProps {
  slug: string;
}

export default function ProjectPage({ slug }: ProjectPageProps) {
  const project = getProjectBySlug(slug);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  if (!project) {
    return (
      <div className="pt-20 md:pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="portfolio-card text-center">
            <h1 className="text-2xl font-semibold text-text-primary mb-4">
              Project Not Found
            </h1>
            <p className="text-text-secondary mb-6">
              The project you're looking for doesn't exist.
            </p>
            <Link
              href="/works"
              className="text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-2"
            >
              ← Back to Works
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 md:pt-24 pb-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <Link
            href="/works"
            className="text-text-secondary hover:text-text-primary transition-colors inline-flex items-center gap-2"
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
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Works
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="portfolio-card mb-6"
        >
          {/* Project Image */}
          <div className="relative w-full h-64 sm:h-80 mb-6 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Title and Links */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h1 className="text-2xl sm:text-3xl font-semibold text-text-primary">
              {project.title}
            </h1>
            <div className="flex items-center gap-4 flex-wrap">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-element glass px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-base font-medium"
                >
                  <FaGithub size={18} />
                  <span className="text-text-primary">GitHub</span>
                </a>
              )}
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-element glass px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-base font-medium"
                >
                  <FaExternalLinkAlt size={16} />
                  <span className="text-text-primary">Website</span>
                </a>
              )}
              {project.paperDownloadLink && (
                <a
                  href={project.paperDownloadLink}
                  download={project.paperFilename || "paper.pdf"}
                  className="interactive-element glass px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-base font-medium"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span className="text-text-primary">Download Paper</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Description Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="portfolio-card mb-6"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4">
            About
          </h2>
          <div className="space-y-4 text-text-secondary">
            {project.description.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Images Gallery Section */}
        {project.images && project.images.length > 0 && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="portfolio-card mb-6"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4">
              Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="relative w-full h-48 rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity glass px-4 py-2 rounded-lg">
                      <span className="text-text-primary text-sm font-medium">
                        Click to View
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tech Stack Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: project.images && project.images.length > 0 ? 0.3 : 0.2,
          }}
          className="portfolio-card"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techstack.map((tech, index) => (
              <span
                key={index}
                className="glass px-3 py-1.5 rounded-lg text-sm text-text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Image Modal */}
        {project.images && project.images.length > 0 && (
          <ProjectImageModal
            isOpen={selectedImageIndex !== null}
            onClose={() => setSelectedImageIndex(null)}
            images={project.images}
            title={project.title}
            initialIndex={selectedImageIndex ?? 0}
          />
        )}
      </div>
    </div>
  );
}

