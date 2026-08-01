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
        ivory: "#FAF6F0",
        beige: "#F5EDE0",
        cream: "#FDF8F2",
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C86D",
          dark: "#A67C2E",
          muted: "#D4B96A",
        },
        maroon: {
          DEFAULT: "#6B1D2A",
          dark: "#4A1020",
          light: "#8B2535",
        },
        brown: {
          DEFAULT: "#3D2B1F",
          light: "#5C3D2E",
          dark: "#2A1A10",
        },
        sand: "#E8D5B7",
        rose: "#D4A5A5",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #C9A84C 0%, #E8C86D 50%, #A67C2E 100%)",
        "maroon-gradient":
          "linear-gradient(135deg, #6B1D2A 0%, #4A1020 100%)",
        "ivory-gradient":
          "linear-gradient(180deg, #FDF8F2 0%, #FAF6F0 100%)",
        "hero-overlay":
          "linear-gradient(90deg, rgba(58, 20, 10, 0.85) 0%, rgba(58, 20, 10, 0.4) 60%, transparent 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        shimmer: "shimmer 2s infinite",
        float: "float 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        ripple: "ripple 0.6s linear",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201, 168, 76, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(201, 168, 76, 0)" },
        },
      },
      boxShadow: {
        gold: "0 4px 24px rgba(201, 168, 76, 0.3)",
        "gold-lg": "0 8px 40px rgba(201, 168, 76, 0.4)",
        maroon: "0 4px 24px rgba(107, 29, 42, 0.3)",
        luxury: "0 20px 60px rgba(58, 20, 10, 0.12)",
        "card-hover": "0 12px 48px rgba(58, 20, 10, 0.18)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      screens: {
        xs: "375px",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
