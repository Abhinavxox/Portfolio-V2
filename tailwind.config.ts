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
        "glass-bg": "var(--glass-bg)",
        "glass-border": "var(--glass-border)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)",
      },
      boxShadow: {
        "1": "0 8px 32px 0 var(--shadow-color)",
        "2": "0 12px 40px 0 var(--shadow-color)",
        "glass": "0 8px 32px 0 var(--shadow-color)",
      },
    },
  },
  plugins: [],
};
export default config;

