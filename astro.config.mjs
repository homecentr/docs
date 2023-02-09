import {
  defineConfig
} from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react(),
    mdx()
  ],
  site: `https://docs.homecentr.io`
});