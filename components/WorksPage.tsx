"use client";

import { useState } from "react";
import { projects, publications } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import PaperPreviewModal from "./PaperPreviewModal";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function WorksPage() {
  const [selectedPaper, setSelectedPaper] = useState<number | null>(null);
  return (
    <div className="pt-20 md:pt-24 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Research Papers Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-8">
            Research Papers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {publications.map((paper, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                className="portfolio-card"
              >
                <div className="flex flex-col h-full">
                  {/* Thumbnail Preview */}
                  <div
                    className="relative w-full h-64 mb-4 rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedPaper(index)}
                  >
                    <Image
                      src={paper.thumbnail}
                      alt={paper.title}
                      fill
                      className="object-contain bg-white/5 group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity glass px-4 py-2 rounded-lg">
                        <span className="text-text-primary text-sm font-medium">
                          Click to Preview
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {paper.title}
                  </h3>
                  <p className="text-text-secondary mb-6 flex-1 leading-relaxed">
                    {paper.description}
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedPaper(index)}
                      className="flex-1 glass px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors text-base font-medium hover:bg-glass-strong"
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
                        className="text-text-primary"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      <span className="text-text-primary">Preview</span>
                    </button>
                    <a
                      href={paper.downloadLink}
                      download={paper.filename}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 interactive-element glass px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors text-base font-medium"
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
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      <span className="text-text-primary">Download</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Paper Preview Modal */}
          {selectedPaper !== null && (
            <PaperPreviewModal
              isOpen={selectedPaper !== null}
              onClose={() => setSelectedPaper(null)}
              pages={publications[selectedPaper].pages}
              title={publications[selectedPaper].title}
            />
          )}
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-8">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.3 + index * 0.1,
                }}
                className="portfolio-card cursor-pointer"
              >
                <Link href={`/works/${project.slug}`}>
                  <div className="flex flex-col h-full">
                    {/* Project Image */}
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        {project.title}
                      </h3>
                      <p className="text-text-secondary mb-4 flex-1 leading-relaxed line-clamp-3">
                        {Array.isArray(project.description)
                          ? project.description[0]
                          : project.description}
                      </p>
                      
                      {/* Links Section */}
                      <div className="flex flex-col gap-2">
                        {/* External Links */}
                        {(project.githubLink || project.website || project.paperDownloadLink) && (
                          <div className="flex items-center gap-2 flex-wrap">
                            {project.githubLink && (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-1.5 text-sm"
                              >
                                <FaGithub size={16} />
                                <span>GitHub</span>
                              </a>
                            )}
                            {project.githubLink && (project.website || project.paperDownloadLink) && (
                              <span className="text-text-secondary">•</span>
                            )}
                            {project.website && (
                              <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-1.5 text-sm"
                              >
                                <FaExternalLinkAlt size={14} />
                                <span>Website</span>
                              </a>
                            )}
                            {project.website && project.paperDownloadLink && (
                              <span className="text-text-secondary">•</span>
                            )}
                            {project.paperDownloadLink && (
                              <a
                                href={project.paperDownloadLink}
                                download={project.paperFilename || "paper.pdf"}
                                onClick={(e) => e.stopPropagation()}
                                className="text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-1.5 text-sm"
                              >
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
                                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                  <polyline points="7 10 12 15 17 10"></polyline>
                                  <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                <span>Paper</span>
                              </a>
                            )}
                          </div>
                        )}
                        
                        {/* View Details Link */}
                        <div className="text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-2">
                          <span>View Details</span>
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
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

