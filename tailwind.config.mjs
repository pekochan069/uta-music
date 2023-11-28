/** @type {import('tailwindcss').Config} */
import preline from "preline/plugin.js";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "1080p": "1920px",
        "1440p": "2560px",
      },
    },
  },
  plugins: [preline],
  darkMode: "class",
};
