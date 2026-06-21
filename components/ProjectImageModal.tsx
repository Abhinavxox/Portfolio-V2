"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
  initialIndex?: number;
}

export default function ProjectImageModal({
  isOpen,
  onClose,
  images,
  title,
  initialIndex = 0,
}: ProjectImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => Math.min(images.length - 1, prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length, onClose]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(images.length - 1, prev + 1));
  };

  if (!isOpen || images.length === 0) return null;

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
                  src={images[currentIndex]}
                  alt={`${title} - Image ${currentIndex + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain max-w-full"
                  unoptimized
                  priority
                />
              </div>

              {/* Navigation Arrows */}
              {currentIndex > 0 && (
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 glass p-3 rounded-full hover:bg-glass-strong transition-colors"
                  aria-label="Previous image"
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

              {currentIndex < images.length - 1 && (
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 glass p-3 rounded-full hover:bg-glass-strong transition-colors"
                  aria-label="Next image"
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

            {/* Footer with Image Info */}
            <div className="flex items-center justify-between p-4 border-t border-glass-border flex-shrink-0">
              <div className="text-text-secondary text-sm">
                Image {currentIndex + 1} of {images.length}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={goToPrevious}
                  disabled={currentIndex === 0}
                  className="px-4 py-2 glass rounded-lg text-text-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-glass-strong transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={goToNext}
                  disabled={currentIndex === images.length - 1}
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

