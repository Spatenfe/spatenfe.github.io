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
    bibtex: z.string().optional(),
    authors: z
      .array(
        z.object({
          name: z.string(),
          url: z.string().url().optional()
        })
      )
      .optional(),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    bannerImage: z.string().optional(),
    imageFit: z.enum(['cover', 'contain']).default('cover'),
    imagePadding: z.boolean().default(false),
    bannerPadding: z.boolean().default(false),
    links: z
      .object({
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
        // A direct link to the published paper (e.g. IEEE Xplore, arXiv).
        paper: z.string().url().optional(),
        // Unlike github/demo, a write-up can be a local public/ asset (e.g. a PDF
        // report) referenced by root-relative path, not just an external URL.
        writeup: z.string().optional(),
        // A hosted project page (e.g. a GitHub Pages site) that supersedes the
        // built-in project detail page rather than supplementing it.
        projectPage: z.string().url().optional()
      })
      .nullable()
      .optional()
      .transform((value) => value ?? {})
  })
});

export const collections = { projects };
