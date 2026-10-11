import type { Config } from "tailwindcss";

// Central theme: brand colours, font and aspect ratios live here only.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: "#09261D", light: "#0F3A2C" },
        brand: { DEFAULT: "#FF6415", dark: "#E5560F" },
        surface: "#FFFFFF",
        line: "#E5E7E4",
        muted: "#68756F",
      },
      fontFamily: { sans: ["var(--font-urbanist)", "system-ui", "sans-serif"] },
      aspectRatio: { card: "4 / 3", portrait: "4 / 5" },
    },
  },
  plugins: [],
};
export default config;
