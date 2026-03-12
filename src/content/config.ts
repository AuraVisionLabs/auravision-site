import { defineCollection, z } from "astro:content";

// ── Slide type schemas (discriminated union) ──────────
const coverSlide = z.object({
  type: z.literal("cover"),
  title: z.string(),
  tagline: z.string(),
  logo: z.string().optional(),
});

const techSlide = z.object({
  type: z.literal("tech"),
  category: z.string().optional(),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  callout: z.string().optional(),
  video: z.string().optional(),
});

const contentBlock = z.discriminatedUnion("type", [
  z.object({ type: z.literal("title"), text: z.string() }),
  z.object({ type: z.literal("text"), text: z.string() }),
  z.object({ type: z.literal("image"), src: z.string(), alt: z.string().optional() }),
]);

const colorOption = z.enum(["none", "cyan", "fuchsia", "purple", "blue"]);

const columnOptions = z.object({
  background: colorOption.optional(),
  glow: colorOption.optional(),
});

const gridSlide = z.object({
  type: z.literal("grid"),
  category: z.string().optional(),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  cols: z.number().min(1).max(4).default(2),
  cells: z.array(
    z.object({
      blocks: z.array(contentBlock),
      options: columnOptions.optional(),
    })
  ),
});

const slideSchema = z.discriminatedUnion("type", [
  coverSlide,
  techSlide,
  gridSlide,
]);

// ── Decks collection ──────────────────────────────────
const decks = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    slides: z.array(slideSchema),
  }),
});

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

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    coverImage: z.string().optional(),
    summary: z.string(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

const glossary = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["analytics", "technology", "privacy", "operations"]),
    relatedTerms: z.array(z.string()).optional().default([]),
    relatedCaseStudies: z.array(z.string()).optional().default([]),
    relatedBlogPosts: z.array(z.string()).optional().default([]),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .optional()
      .default([]),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = {
  "case-studies": caseStudies,
  press,
  blog,
  glossary,
  decks,
};
