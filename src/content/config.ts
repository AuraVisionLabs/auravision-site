import { defineCollection, z } from "astro:content";

const caseStudies = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    client: z.string(),
    clientLogo: z.string().optional(),
    pubDate: z.coerce.date(),
    sortOrder: z.number().optional().default(999),
    coverImage: z.string().optional(),
    summary: z.string(),
    tags: z.array(z.string()).optional().default([]),
    metrics: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
        })
      )
      .optional()
      .default([]),
    testimonial: z
      .object({
        headliner: z.string(),
        quote: z.string(),
        name: z.string(),
        role: z.string(),
        photo: z.string().optional(),
      })
      .optional(),
  }),
});

const press = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publication: z.string(),
    pubDate: z.coerce.date(),
    externalUrl: z.string(),
    coverImage: z.string().optional(),
    containImage: z.boolean().optional().default(false),
    summary: z.string(),
  }),
});

export const collections = {
  "case-studies": caseStudies,
  press,
};
