import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    category: z.enum(['research', 'project']).default('project'),
    venue: z.string().optional(),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    bannerImage: z.string().optional(),
    imageFit: z.enum(['cover', 'contain']).default('cover'),
    links: z
      .object({
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
        writeup: z.string().url().optional()
      })
      .nullable()
      .optional()
      .transform((value) => value ?? {})
  })
});

export const collections = { projects };
