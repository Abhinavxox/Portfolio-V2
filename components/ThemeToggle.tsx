"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full glass border border-glass-border transition-colors p-1"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-6 h-6 rounded-full glass-strong shadow-lg flex items-center justify-center"
        animate={{
          x: theme === "dark" ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {theme === "dark" ? (
          <ion-icon name="moon-outline" className="text-sm text-accent"></ion-icon>
        ) : (
          <ion-icon name="sunny-outline" className="text-sm text-accent"></ion-icon>
        )}
      </motion.div>
    </motion.button>
  );
}

