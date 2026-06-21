"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PaperPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  pages: string[];
  title: string;
}

export default function PaperPreviewModal({
  isOpen,
  onClose,
  pages,
  title,
}: PaperPreviewModalProps) {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentPage(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        setCurrentPage((prev) => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentPage((prev) => Math.min(pages.length - 1, prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, pages.length, onClose]);

  const goToPrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(pages.length - 1, prev + 1));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full max-w-7xl max-h-[95vh] flex flex-col bg-[#0f0f0f] rounded-lg overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-glass-border flex-shrink-0">
              <h3 className="text-lg font-semibold text-text-primary">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="text-text-secondary hover:text-text-primary transition-colors p-2"
                aria-label="Close"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Image Container */}
            <div className="flex-1 relative overflow-auto flex items-start justify-center p-4 min-h-0">
              <div className="relative w-full max-w-5xl flex items-center justify-center">
                <Image
                  src={pages[currentPage]}
                  alt={`Page ${currentPage + 1}`}
                  width={1200}
                  height={1600}
                  className="w-full h-auto object-contain max-w-full"
                  unoptimized
                  priority
                />
              </div>

              {/* Navigation Arrows */}
              {currentPage > 0 && (
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 glass p-3 rounded-full hover:bg-glass-strong transition-colors"
                  aria-label="Previous page"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-text-primary"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
              )}

              {currentPage < pages.length - 1 && (
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 glass p-3 rounded-full hover:bg-glass-strong transition-colors"
                  aria-label="Next page"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-text-primary"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              )}
            </div>

            {/* Footer with Page Info */}
            <div className="flex items-center justify-between p-4 border-t border-glass-border flex-shrink-0">
              <div className="text-text-secondary text-sm">
                Page {currentPage + 1} of {pages.length}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={goToPrevious}
                  disabled={currentPage === 0}
                  className="px-4 py-2 glass rounded-lg text-text-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-glass-strong transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={goToNext}
                  disabled={currentPage === pages.length - 1}
                  className="px-4 py-2 glass rounded-lg text-text-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-glass-strong transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

