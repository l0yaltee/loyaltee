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

// The legal texts, one Markdown file each, rendered at /ilvol/<file name>.
// The body is the published policy text word for word; only edit it when the
// wording itself is changed on purpose.
const legal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/legal' }),
  schema: z.object({ title: z.string(), description: z.string() }),
});

export const collections = { guides, legal };
