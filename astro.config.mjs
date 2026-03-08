// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://auravision.ai",

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap({
    filter: (page) => !page.includes('/platform') && !page.includes('/retail-analytics'),
  })]
});