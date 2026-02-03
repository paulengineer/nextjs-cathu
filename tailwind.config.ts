import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: "#f5f1e8",
        navy: "#1a2332",
      },
      backgroundColor: {
        cream: "#f5f1e8",
        navy: "#1a2332",
      },
      textColor: {
        navy: "#1a2332",
        cream: "#f5f1e8",
      },
      borderColor: {
        navy: "#1a2332",
        cream: "#f5f1e8",
      },
    },
  },
  plugins: [],
};
export default config;
