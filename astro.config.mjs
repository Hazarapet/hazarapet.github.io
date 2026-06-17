import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  // Update this to your deployed URL (used for SEO/sitemap and absolute links).
  site: 'https://hazarapet.github.io',
  vite: {
    // Lets us `import data from '../data/*.yaml'` and get parsed objects.
    plugins: [yaml()],
    css: {
      // Use the modern Sass compiler API (legacy API is removed in Dart Sass 2).
      preprocessorOptions: { scss: { api: 'modern-compiler' } },
    },
  },
});
