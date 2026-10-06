// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

export default defineConfig({
  // Set this to the production domain so canonical/OG URLs are absolute.
  site: 'https://loyaltee.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  // sharp's prebuilt binaries need a newer CPU than this VPS exposes.
  image: { service: passthroughImageService() },
});
