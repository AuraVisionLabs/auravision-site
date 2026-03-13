import { defineCollection, z } from "astro:content";

const slideBg = z.enum(["none", "top", "bottom", "bl", "br"]).default("none");

// ── Slide type schemas (discriminated union) ──────────
const coverSlide = z.object({
  type: z.literal("cover"),
  title: z.string(),
  tagline: z.string(),
  logo: z.string().optional(),
  clientLogo: z.string().optional(),
  footer: z.string().optional(),
  background: slideBg,
});

const techSlide = z.object({
  type: z.literal("tech"),
  category: z.string().optional(),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  callout: z.string().optional(),
  video: z.string().optional(),
  background: slideBg,
});

const textSize = z.enum(["h1", "h2", "h3", "h4", "h5", "h6", "p-lg", "p-md", "p-sm", "p-xs"]).default("p-md");

const bgColor = z.enum(["none", "cyan", "fuchsia", "purple", "blue", "red", "orange", "white-transparent"]).default("none");

const contentBlock = z.discriminatedUnion("type", [
  z.object({ type: z.literal("text"), text: z.string(), size: textSize, bg: bgColor }),
  z.object({ type: z.literal("image"), src: z.string(), alt: z.string().optional(), width: z.enum(["full", "half"]).optional() }),
  z.object({ type: z.literal("logos"), items: z.array(z.object({ src: z.string(), alt: z.string().optional() })), fit: z.enum(["fill", "fixed"]).default("fill") }),
  z.object({ type: z.literal("testimonial"), headliner: z.string(), quote: z.string(), size: z.enum(["sm", "md", "lg"]).optional() }),
  z.object({ type: z.literal("profile"), name: z.string(), role: z.string(), photo: z.string().optional(), logo: z.string().optional(), company: z.string().optional() }),
  z.object({ type: z.literal("snapshot"), src: z.string(), camera: z.string().optional() }),
  z.object({ type: z.literal("inlinetable"), columns: z.array(z.object({ label: z.string(), header: z.string(), level: z.number().min(1) })) }),
  z.object({ type: z.literal("metrics"), items: z.array(z.string()) }),
  z.object({ type: z.literal("metric-list"), items: z.array(z.object({ metric: z.string(), text: z.string() })) }),
  z.object({ type: z.literal("heatmap") }),
  z.object({ type: z.literal("chat") }),
  z.object({ type: z.literal("device") }),
]);

const colorOption = z.enum(["none", "cyan", "fuchsia", "purple", "blue", "red", "orange", "white", "white-transparent"]);

const columnOptions = z.object({
  background: colorOption.optional(),
  solidBg: z.boolean().optional(),
  glow: colorOption.optional(),
  valign: z.enum(["top", "center"]).optional(),
});

const tableSlide = z.object({
  type: z.literal("table"),
  category: z.string().optional(),
  categoryBg: z.enum(["none", "cyan", "fuchsia", "purple", "blue", "red", "orange"]).optional(),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  layout: z.enum(["grid", "table-striped", "table"]).default("grid"),
  autoHeight: z.boolean().optional(),
  colWidths: z.array(z.number()).optional(),
  background: slideBg,
  rows: z.array(z.object({
    cells: z.array(z.object({
      blocks: z.array(contentBlock),
      options: columnOptions.optional(),
    })),
  })),
});

const endingSlide = z.object({
  type: z.literal("ending"),
  headline: z.string(),
  contacts: z.array(z.object({
    name: z.string(),
    email: z.string().optional(),
    phone: z.string().optional(),
  })).optional(),
  footer: z.string().optional(),
  background: slideBg,
});

const slideSchema = z.discriminatedUnion("type", [
  coverSlide,
  techSlide,
  tableSlide,
  endingSlide,
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
