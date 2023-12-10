import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";
import pandacss from '@pandacss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), pandacss()],
  output: "server",
  adapter: vercel()
});
