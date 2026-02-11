import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://derekmayor.github.io',
  base: '/',
  integrations: [
    // Use legacy tailwind integration which works with v3 and v4 (via postcss)
    tailwind(),
    react(), 
    sitemap()
  ]
});
