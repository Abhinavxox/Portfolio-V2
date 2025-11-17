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
        jet: "hsl(0, 0%, 22%)",
        onyx: "hsl(240, 1%, 17%)",
        "eerie-black-1": "hsl(240, 2%, 13%)",
        "eerie-black-2": "hsl(240, 2%, 12%)",
        "smoky-black": "hsl(0, 0%, 7%)",
        "white-1": "hsl(0, 0%, 100%)",
        "white-2": "hsl(0, 0%, 98%)",
        "orange-yellow-crayola": "hsl(45, 100%, 72%)",
        "vegas-gold": "hsl(45, 54%, 58%)",
        "light-gray": "hsl(0, 0%, 84%)",
        "light-gray-70": "hsla(0, 0%, 84%, 0.7)",
        "bittersweet-shimmer": "hsl(0, 43%, 51%)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-onyx": "linear-gradient(to bottom right, hsl(240, 1%, 25%) 3%, hsl(0, 0%, 19%) 97%)",
        "gradient-jet": "linear-gradient(to bottom right, hsla(240, 1%, 18%, 0.251) 0%, hsla(240, 2%, 11%, 0) 100%), hsl(240, 2%, 13%)",
        "gradient-yellow-1": "linear-gradient(to bottom right, hsl(45, 100%, 71%) 0%, hsla(36, 100%, 69%, 0) 50%)",
        "gradient-yellow-2": "linear-gradient(135deg, hsla(45, 100%, 71%, 0.251) 0%, hsla(35, 100%, 68%, 0) 59.86%), hsl(240, 2%, 13%)",
        "text-gradient-yellow": "linear-gradient(to right, hsl(45, 100%, 72%), hsl(35, 100%, 68%))",
      },
      boxShadow: {
        "1": "-4px 8px 24px hsla(0, 0%, 0%, 0.25)",
        "2": "0 16px 30px hsla(0, 0%, 0%, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;

