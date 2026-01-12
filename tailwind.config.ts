import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "pastel-pink": "#f8bbd0",
        "pastel-blue": "#a3c1e0",
        "pastel-mint": "#b2e0d4",
      },
      backgroundImage: {
        "gradient-pink": "linear-gradient(135deg, rgba(248, 187, 208, 0.1) 0%, transparent 100%)",
        "gradient-blue": "linear-gradient(135deg, rgba(163, 193, 224, 0.1) 0%, transparent 100%)",
        "gradient-mint": "linear-gradient(135deg, rgba(178, 224, 212, 0.1) 0%, transparent 100%)",
        "gradient-pink-accent": "linear-gradient(135deg, #f8bbd0 0%, rgba(248, 187, 208, 0.5) 100%)",
        "gradient-blue-accent": "linear-gradient(135deg, #a3c1e0 0%, rgba(163, 193, 224, 0.5) 100%)",
        "gradient-mint-accent": "linear-gradient(135deg, #b2e0d4 0%, rgba(178, 224, 212, 0.5) 100%)",
      },
      boxShadow: {
        "glow-pink": "0 0 20px rgba(248, 187, 208, 0.3)",
        "glow-blue": "0 0 20px rgba(163, 193, 224, 0.3)",
        "glow-mint": "0 0 20px rgba(178, 224, 212, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
