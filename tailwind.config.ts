import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        trust: {
          50: "#f0f6fa",
          100: "#e0edf5",
          200: "#bad7eb",
          300: "#80b6db",
          400: "#4192c7",
          500: "#2275ad",
          600: "#175c8d",
          700: "#154a72",
          800: "#153f5f",
          900: "#0f2942",
          950: "#091a2b",
        },
        growth: {
          50: "#f2f9f4",
          100: "#e1f2e5",
          200: "#c4e5ce",
          300: "#97d2aa",
          400: "#64b67f",
          500: "#3d9b5c",
          600: "#2d7d47",
          700: "#25633a",
          800: "#204f30",
          900: "#1b4229",
          950: "#0b2414",
        },
        accent: {
          50: "#fdf8ee",
          100: "#faefd5",
          200: "#f5ddaa",
          300: "#eec573",
          400: "#e5a73e",
          500: "#c59b27",
          600: "#b87c1d",
          700: "#995f1a",
          800: "#7c4c1c",
          900: "#673f1b",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
