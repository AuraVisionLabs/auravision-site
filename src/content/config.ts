import { defineCollection, z } from "astro:content";

const caseStudies = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    client: z.string(),
    pubDate: z.coerce.date(),
    coverImage: z.string().optional(),
    summary: z.string(),
    tags: z.array(z.string()).optional().default([]),
    services: z.array(z.string()).optional().default([]),
  }),
});

export const collections = {
  "case-studies": caseStudies,
};
