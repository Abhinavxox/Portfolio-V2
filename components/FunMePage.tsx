"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

// List of fun images - filtered to only include web-compatible formats
const funImages = [
  "/fun/20241022_114447_Original.jpg",
  "/fun/66DB48FD-E800-497F-9ED9-B48F696506A1.JPG",
  "/fun/7DD7CD38-39C6-4194-A8D5-53C121DE854A.JPG",
  "/fun/d36be0cb-27b7-4949-a887-fdc4d0220697.jpg",
  "/fun/fossunited.jpeg",
  "/fun/hacktober.jpeg",
  "/fun/hackverse.jpeg",
  "/fun/hackverseposter.jpeg",
  "/fun/hito.jpeg",
  "/fun/Image.PNG",
  "/fun/IMG_0894.JPG",
  "/fun/IMG_20231202_101053_Original.jpg",
  "/fun/IMG_2249.JPG",
  "/fun/IMG_6357.JPG",
  "/fun/IMG_8398.JPG",
  "/fun/PXL_20231202_053813999.MP_Original.jpg",
  "/fun/spaceapps.jpeg",
  "/fun/spaceappslogo.png",
  "/fun/wikimedia.jpeg",
  // Note: HEIC files and MP4 videos are excluded as they're not web-compatible
];

export default function FunMePage() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Shuffle images for a fun surprise
    const shuffled = [...funImages].sort(() => Math.random() - 0.5);
    setImages(shuffled);
  }, []);

  return (
    <div className="pt-20 md:pt-24 pb-12 px-4 sm:px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.1 * (index % 8),
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer portfolio-card p-0 group"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`Fun moment ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-medium"
              >
                Click to view
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Full Screen Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-7xl max-h-[90vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-text-primary hover:bg-red-500 hover:text-white transition-all duration-300"
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
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <div className="relative w-full h-full">
                  <Image
                    src={selectedImage}
                    alt="Full size fun moment"
                    fill
                    className="object-contain rounded-lg"
                    sizes="100vw"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
