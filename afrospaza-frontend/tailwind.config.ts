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
        background: "#08090c",
        surface: "#0f1117",
        "surface-elevated": "#171a23",
        border: "rgba(255, 255, 255, 0.08)",
        spaza: {
          orange: "#f97316",
          "orange-hover": "#ea580c",
          "orange-light": "#ffedd5",
          "orange-glow": "rgba(249, 115, 22, 0.2)",
          black: "#08090c",
          white: "#ffffff",
          gray: "#94a3b8",
        },
        xrpl: {
          blue: "#2388ff",
          green: "#00d084",
          cyan: "#00f0ff",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "orange-glow": "0 0 25px -5px rgba(249, 115, 22, 0.35)",
        "blue-glow": "0 0 25px -5px rgba(35, 136, 255, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
