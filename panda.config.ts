import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx,astro}"],

  // Files to exclude
  exclude: [],

  globalCss: {
    "html, body": {
      color: "utaGray.500",
      bg: "white",
      minH: "100svh",
      _dark: {
        color: "utaGray.400",
        bg: "utaGray.900",
      },
    },
  },

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        "1080p": "1920px",
        "1440p": "2560px",
        "2160p": "3840px",
      },
      tokens: {
        colors: {
          utaGray: {
            50: { value: "#f8fafc" },
            100: { value: "#f1f5f9" },
            200: { value: "#e2e8f0" },
            300: { value: "#cbd5e1" },
            400: { value: "#94a3b8" },
            500: { value: "#64748b" },
            600: { value: "#475569" },
            700: { value: "#334155" },
            800: { value: "#1e293b" },
            900: { value: "#0f172a" },
            950: { value: "#020617" },
          },
        },
      },
    },
  },

  outdir: "styled-system",
  shorthands: true,
});
