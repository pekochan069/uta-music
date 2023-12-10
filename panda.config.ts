import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx,astro}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        "1080p": "1920px",
        "1440p": "2560px",
        "2160p": "3840px",
      },
    },
    semanticTokens: {
      colors: {
        text: {
          value: {
            _defaultTheme: {
              base: "{colors.slate.500}",
              _dark: "{colors.slate.400}",
            },
          },
        },
        background: {
          value: {
            _defaultTheme: {
              base: "{colors.white}",
              _dark: "{colors.slate.900}",
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
    defaultTheme: "[data-theme=default] &",
  },
});
