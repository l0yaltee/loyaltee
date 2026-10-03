// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Set this to the production domain so canonical/OG URLs are absolute.
  site: 'https://loyaltee.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
