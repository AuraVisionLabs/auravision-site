import { defineCollection, z } from "astro:content";

// ── Slide type schemas (discriminated union) ──────────
const coverSlide = z.object({
  type: z.literal("cover"),
  title: z.string(),
  subtitle: z.string().optional(),
  logo: z.string().optional(),
  background: z.string().optional(),
});

const metricsSlide = z.object({
  type: z.literal("metrics"),
  title: z.string().optional(),
  items: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
    })
  ),
});

const caseStudySlide = z.object({
  type: z.literal("case-study"),
  ref: z.string(), // slug from case-studies collection
});

const testimonialSlide = z.object({
  type: z.literal("testimonial"),
  headliner: z.string(),
  quote: z.string(),
  name: z.string(),
  role: z.string(),
  photo: z.string().optional(),
  logo: z.string().optional(),
  company: z.string().optional(),
});

const featureSlide = z.object({
  type: z.literal("feature"),
  title: z.string(),
  subtitle: z.string().optional(),
  bullets: z.array(z.string()).optional().default([]),
  image: z.string().optional(),
  reversed: z.boolean().optional().default(false),
});

const logoWallSlide = z.object({
  type: z.literal("logo-wall"),
  title: z.string().optional(),
  logos: z
    .array(
      z.object({
        name: z.string(),
        src: z.string(),
      })
    )
    .optional()
    .default([]),
});

const imageSlide = z.object({
  type: z.literal("image"),
  src: z.string(),
  alt: z.string().optional(),
  caption: z.string().optional(),
});

const textSlide = z.object({
  type: z.literal("text"),
  title: z.string(),
  subtitle: z.string().optional(),
  body: z.string().optional(),
  bullets: z.array(z.string()).optional().default([]),
});

const comparisonSlide = z.object({
  type: z.literal("comparison"),
  title: z.string().optional(),
  left: z.object({
    heading: z.string(),
    items: z.array(z.string()),
  }),
  right: z.object({
    heading: z.string(),
    items: z.array(z.string()),
  }),
});

const ctaSlide = z.object({
  type: z.literal("cta"),
  title: z.string(),
  subtitle: z.string().optional(),
  buttonText: z.string().optional(),
  buttonHref: z.string().optional(),
});

const slideSchema = z.discriminatedUnion("type", [
  coverSlide,
  metricsSlide,
  caseStudySlide,
  testimonialSlide,
  featureSlide,
  logoWallSlide,
  imageSlide,
  textSlide,
  comparisonSlide,
  ctaSlide,
]);

// ── Decks collection ──────────────────────────────────
const decks = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    prospect: z.string().optional(),
    date: z.coerce.date().optional(),
    theme: z.enum(["dark", "light"]).optional().default("dark"),
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
