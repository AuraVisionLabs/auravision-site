import { defineCollection, z } from "astro:content";

// ── Slide type schemas (discriminated union) ──────────
const coverSlide = z.object({
  type: z.literal("cover"),
  title: z.string(),
  subtitle: z.string().optional(),
  deckType: z.string().optional(),
  logo: z.string().optional(),
  background: z.string().optional(),
});

const techSlide = z.object({
  type: z.literal("tech"),
  heading: z.string().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  badges: z.array(z.string()).optional().default([]),
  body: z.string().optional(),
  callout: z.string().optional(),
  video: z.string().optional(),
  background: z.string().optional(),
});

const processSlide = z.object({
  type: z.literal("process"),
  heading: z.string().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  steps: z.array(
    z.object({
      number: z.string(),
      title: z.string(),
      description: z.string().optional(),
    })
  ),
});

const roiTableSlide = z.object({
  type: z.literal("roi-table"),
  heading: z.string().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  rows: z.array(
    z.object({
      useCase: z.string(),
      description: z.string(),
      roi: z.string(),
    })
  ),
});

const testimonialsPricingSlide = z.object({
  type: z.literal("testimonials-pricing"),
  heading: z.string().optional(),
  title: z.string(),
  quotes: z.array(
    z.object({
      text: z.string(),
      attribution: z.string(),
    })
  ),
  pricing: z
    .array(
      z.object({
        tier: z.string(),
        price: z.string(),
        perCamera: z.string().optional(),
      })
    )
    .optional()
    .default([]),
});

const timelineSlide = z.object({
  type: z.literal("timeline"),
  heading: z.string().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  steps: z.array(
    z.object({
      number: z.string(),
      title: z.string(),
      description: z.string().optional(),
    })
  ),
  milestones: z
    .array(
      z.object({
        duration: z.string(),
        label: z.string(),
      })
    )
    .optional()
    .default([]),
});

const caseStudyDetailSlide = z.object({
  type: z.literal("case-study-detail"),
  heading: z.string().optional(),
  category: z.string(),
  client: z.string(),
  description: z.string(),
  roiValue: z.string(),
  quote: z.string(),
  attribution: z.string(),
  metrics: z.array(z.string()).optional().default([]),
  logo: z.string().optional(),
});

const contactSlide = z.object({
  type: z.literal("contact"),
  heading: z.string().optional(),
  title: z.string(),
  contacts: z.array(
    z.object({
      name: z.string(),
      email: z.string().optional(),
      phone: z.string().optional(),
      website: z.string().optional(),
    })
  ),
});

const slideSchema = z.discriminatedUnion("type", [
  coverSlide,
  techSlide,
  processSlide,
  roiTableSlide,
  testimonialsPricingSlide,
  timelineSlide,
  caseStudyDetailSlide,
  contactSlide,
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
