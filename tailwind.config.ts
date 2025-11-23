import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Glassmorphic theme colors using CSS variables
        "glass-bg": "var(--glass-bg)",
        "glass-border": "var(--glass-border)",
        "glass-light": "rgba(255, 255, 255, 0.05)",
        "glass-dark": "rgba(0, 0, 0, 0.2)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        // Legacy color names for compatibility
        jet: "var(--glass-border)",
        onyx: "var(--glass-bg)",
        "eerie-black-1": "var(--bg-gradient-start)",
        "eerie-black-2": "var(--glass-bg)",
        "smoky-black": "var(--text-primary)",
        "white-1": "var(--text-primary)",
        "white-2": "var(--text-secondary)",
        "orange-yellow-crayola": "var(--accent)",
        "vegas-gold": "var(--accent)",
        "light-gray": "var(--text-secondary)",
        "light-gray-70": "var(--text-tertiary)",
        "bittersweet-shimmer": "#FF3B30",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)",
        // Legacy gradients for compatibility
        "gradient-onyx": "var(--glass-bg)",
        "gradient-jet": "var(--glass-bg)",
        "gradient-yellow-1": "linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)",
        "gradient-yellow-2": "linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)",
        "text-gradient-yellow": "linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)",
      },
      boxShadow: {
        "1": "0 8px 32px 0 var(--shadow-color)",
        "2": "0 12px 40px 0 var(--shadow-color)",
        "3": "0 16px 48px 0 var(--shadow-color)",
        "glass": "0 8px 32px 0 var(--shadow-color)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;

