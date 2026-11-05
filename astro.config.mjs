// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { callouts } from './src/plugins/callouts.mjs';

export default defineConfig({
  // Set this to the production domain so canonical/OG URLs are absolute.
  site: 'https://loyaltee.com',
  trailingSlash: 'ignore',
  markdown: { processor: satteri({ hastPlugins: [callouts] }) },
  build: { format: 'directory' },
});
