import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per guide in src/content/guides/. The file name is the URL slug.
const guides = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/guides' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      /** Lower numbers come first on the index. */
      order: z.number(),
      updated: z.coerce.date(),
      /** Who the guide is for, e.g. "Dispatchers and the RingCentral admin". */
      for: z.string().optional(),
      hero: image(),
      heroAlt: z.string().default(''),
    }),
});

export const collections = { guides };
