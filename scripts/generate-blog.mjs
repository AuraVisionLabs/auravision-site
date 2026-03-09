#!/usr/bin/env node
/**
 * Weekly Blog Post Generator for Aura Vision
 *
 * Three-step pipeline:
 *   1. Search for latest retail news (excluding already-covered retailers)
 *   2. Search for retail technology & AI trends
 *   3. Combine both into a well-researched blog post
 *
 * Usage:
 *   ANTHROPIC_API_KEY=... node scripts/generate-blog.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// Load .env file if present
const envPath = path.join(ROOT, ".env");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = (match[2] || "").replace(/^["']|["']$/g, "");
    }
  }
}

const BLOG_DIR = path.join(ROOT, "src/content/blog");
const CASE_STUDIES_DIR = path.join(ROOT, "src/content/case-studies");
const LLMS_FILE = path.join(ROOT, "public/llms.txt");
const IMAGES_DIR = path.join(ROOT, "public/images/uploads/blog");

// ── Helpers ──────────────────────────────────────────────────────────────────

function readFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  return match ? match[1] : "";
}

function getExistingContent() {
  const blogs = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({
      file: f,
      frontmatter: readFrontmatter(path.join(BLOG_DIR, f)),
    }));

  const caseStudies = fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({
      file: f,
      frontmatter: readFrontmatter(path.join(CASE_STUDIES_DIR, f)),
    }));

  return { blogs, caseStudies };
}

/** Extract retailer names from blog titles heuristically */
function extractRetailers(blogs) {
  const knownRetailers = [
    "Target", "Aldi", "Walmart", "Tesco", "Primark", "IKEA", "Nike", "Zara",
    "H&M", "Marks & Spencer", "John Lewis", "Selfridges", "Next", "Sainsbury's",
    "Asda", "Lidl", "Costco", "Nordstrom", "Macy's", "JD Sports", "Uniqlo",
    "Frasers Group", "Flannels", "DFS", "Schuh", "Gymshark", "Adidas",
    "Virgin Media O2", "VMO2", "Decathlon", "Kruidvat", "Onitsuka Tiger",
    "Situ Live", "Purple", "Krys", "Centrepoint", "c2c",
    "Neighborhood Goods", "A.S. Watson",
  ];

  const found = new Set();
  for (const blog of blogs) {
    const title = blog.frontmatter.match(/title:\s*"?(.+?)"?\n/)?.[1] || "";
    for (const retailer of knownRetailers) {
      if (title.toLowerCase().includes(retailer.toLowerCase())) {
        found.add(retailer);
      }
    }
    // Also check for Target's possessive form etc.
    if (title.toLowerCase().includes("target")) found.add("Target");
    if (title.toLowerCase().includes("fraser")) found.add("Frasers Group");
    if (title.toLowerCase().includes("vmo2") || title.toLowerCase().includes("virgin media")) found.add("Virgin Media O2");
  }
  return [...found];
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function todayISO() {
  return new Date().toISOString().split("T")[0];
}

function hr(label) {
  console.log(`\n${"═".repeat(60)}`);
  console.log(`  ${label}`);
  console.log(`${"═".repeat(60)}\n`);
}

// ── Anthropic API ────────────────────────────────────────────────────────────

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
if (!ANTHROPIC_API_KEY) {
  console.error("Error: ANTHROPIC_API_KEY environment variable is required");
  process.exit(1);
}

async function claudeMessage(system, userContent, { model = "claude-opus-4-6", maxTokens = 4096, tools } = {}) {
  const body = {
    model,
    max_tokens: maxTokens,
    system,
    messages: [{ role: "user", content: userContent }],
  };
  if (tools) body.tools = tools;

  const maxRetries = 5;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify(body),
    });

    if (res.status === 429) {
      const retryAfter = parseInt(res.headers.get("retry-after") || "60", 10);
      const waitSecs = Math.max(retryAfter, 60);
      console.log(`⏳ Rate limited (attempt ${attempt}/${maxRetries}). Waiting ${waitSecs}s...`);
      await new Promise((r) => setTimeout(r, waitSecs * 1000));
      continue;
    }

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Anthropic API error ${res.status}: ${err}`);
    }

    const data = await res.json();
    const textBlocks = (data.content || [])
      .filter((b) => b.type === "text")
      .map((b) => b.text);
    return textBlocks.join("\n");
  }

  throw new Error("Anthropic API rate limit: max retries exceeded. Try again later.");
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  // ── Gather existing content ──────────────────────────────────────────────
  hr("STEP 0: Gathering existing content");

  const { blogs, caseStudies } = getExistingContent();
  const companyContext = fs.readFileSync(LLMS_FILE, "utf-8");

  const existingBlogTitles = blogs
    .map((b) => b.frontmatter.match(/title:\s*"?(.+?)"?\n/)?.[1] || "")
    .filter(Boolean);

  const excludedRetailers = extractRetailers(blogs);

  const caseStudyList = caseStudies
    .map((c) => {
      const client = c.frontmatter.match(/client:\s*"?(.+?)"?\n/)?.[1] || "";
      return `- ${client} (/case-studies/${c.file.replace(".md", "")})`;
    })
    .join("\n");

  console.log("Existing blog posts:");
  existingBlogTitles.forEach((t) => console.log(`  • ${t}`));
  console.log(`\nExcluded retailers: ${excludedRetailers.join(", ")}`);
  console.log(`Case studies: ${caseStudies.length} available`);

  // ── Step 1: Retail news search ───────────────────────────────────────────
  hr("STEP 1: Searching for retail news");

  const retailExclusion = excludedRetailers.length > 0
    ? `Do NOT include news about these retailers (we have already covered them): ${excludedRetailers.join(", ")}.`
    : "";

  const retailSearchQuery = `Search the web for the most significant retail industry news from the past 7 days.

Focus on: store openings or closings, earnings reports, new store formats, expansion plans, restructuring, partnerships, and in-store strategy shifts.

Look at retailers such as: Walmart, Tesco, Primark, IKEA, Nike, Zara, H&M, Marks & Spencer, John Lewis, Selfridges, Next, Sainsbury's, Asda, Lidl, Costco, Nordstrom, Macy's, JD Sports, Uniqlo, Lululemon, Sephora, Currys, B&Q, Homebase, Waitrose, Co-op, M&S, Boots.

${retailExclusion}

Return a numbered list of the TOP 5 most newsworthy stories. For each, include:
- Retailer name
- What happened (1-2 sentences)
- Source / publication
- Why it matters for the industry (1 sentence)

Only include confirmed news, not rumours or opinion pieces.`;

  console.log(`Search query (retail): ${retailSearchQuery}\n`);
  console.log(`  ${retailExclusion || "(no exclusions)"}\n`);

  const retailResults = await claudeMessage(
    "You are a retail news researcher. Return concise, factual summaries.",
    retailSearchQuery,
    { tools: [{ type: "web_search_20250305", name: "web_search", max_uses: 3 }], maxTokens: 2048 }
  );

  console.log("Retail news results:");
  console.log(retailResults);

  // ── Step 2: Tech & trends search ─────────────────────────────────────────
  hr("STEP 2: Searching for retail tech & AI trends");

  const techSearchQuery = `Search the web for the latest retail technology and AI news from the past 14 days.

Focus on: computer vision in retail, in-store analytics, footfall counting technology, customer behaviour tracking, AI-powered store operations, privacy-preserving analytics, autonomous checkout, smart stores, digital signage analytics, workforce optimisation tech, store layout optimisation.

Return a numbered list of the TOP 5 most relevant stories or developments. For each, include:
- Company or technology involved
- What's new (1-2 sentences)
- Why it's relevant for physical retail (1 sentence)`;

  const techResults = await claudeMessage(
    "You are a retail technology researcher. Return concise, factual summaries.",
    techSearchQuery,
    { tools: [{ type: "web_search_20250305", name: "web_search", max_uses: 3 }], maxTokens: 2048 }
  );

  console.log("Tech/trends results:");
  console.log(techResults);

  // ── Step 3: Combine and write ────────────────────────────────────────────
  hr("STEP 3: Combining research & writing blog post");

  const existingBlogList = existingBlogTitles.map((t) => `- ${t}`).join("\n");

  const writeSystemPrompt = `You are a senior content writer for Aura Vision, a computer vision and AI company that provides in-store analytics for retailers.

## About Aura Vision
${companyContext}

## Our Case Studies (link using relative paths)
${caseStudyList}

## Title Format
Use a title style similar to these examples (vary the pattern each time):
- "Secrets of Store Success: Exploring Aldi's Case"
- "Behind the Counter: What [Retailer]'s [Strategy] Reveals About [Theme]"
- "Decoding [Retailer]'s [Move]: Lessons for Physical Retail"
- "The [Retailer] Playbook: How [Strategy] Is Reshaping [Area]"
- "What [Retailer]'s [Announcement] Means for the Future of Stores"
The title should be catchy, specific to the retailer, and hint at actionable insights. Use a colon to separate two parts.

## Style Guidelines
- Professional but accessible tone, like a retail industry analyst
- Informative and opinionated — take a clear point of view
- UK English spelling (optimise, analyse, colour, etc.)
- **Bold** for emphasis, not ALL CAPS
- 4-6 subheadings (## Heading)
- 800-1200 words
- End with a paragraph tying the story to Aura Vision, referencing ONE relevant case study link. Subtle, not salesy.
- Write "Aura Vision" not "we" or "our"
- No generic phrases like "In today's fast-paced retail landscape" or "In conclusion"
- Don't mention AI assistance or web searches`;

  const writeUserPrompt = `I have two sets of research for you. Pick the best combination of a retail news story + a relevant tech angle, and write a blog post.

## RETAIL NEWS (pick ONE story as the main focus)
${retailResults}

## TECH & AI TRENDS (weave in a relevant angle)
${techResults}

## RULES
1. Pick a story about a SPECIFIC, NAMED retailer — not a trend piece
2. The retailer must NOT be one we've already covered. ALREADY COVERED (DO NOT USE):
${existingBlogList}
3. Combine the retail story with a relevant tech/AI angle — what could data and analytics do here?
4. Reference ONE Aura Vision case study where it fits naturally
5. Before writing, state in one sentence: "CHOSEN STORY: [retailer] — [angle]" and "RATIONALE: [why this story + tech angle work together]"

## OUTPUT FORMAT
First output your CHOSEN STORY and RATIONALE lines, then a blank line, then the markdown starting with ---.

CHOSEN STORY: ...
RATIONALE: ...

---
title: "Your Title Here"
author: "Aura Vision"
pubDate: ${todayISO()}
coverImage: "/images/uploads/blog/placeholder.jpg"
summary: "A compelling 1-2 sentence summary for the blog card."
tags: ["Tag1", "Tag2", "Tag3"]
---

Article content here...`;

  console.log("Sending combined research to writer...\n");

  const response = await claudeMessage(writeSystemPrompt, writeUserPrompt, { maxTokens: 4096 });

  // ── Parse output ─────────────────────────────────────────────────────────
  hr("STEP 4: Processing output");

  // Extract and log the rationale
  const chosenMatch = response.match(/CHOSEN STORY:\s*(.+)/);
  const rationaleMatch = response.match(/RATIONALE:\s*(.+)/);

  if (chosenMatch) console.log(`Chosen story: ${chosenMatch[1]}`);
  if (rationaleMatch) console.log(`Rationale: ${rationaleMatch[1]}`);

  // Extract the markdown (everything from first ---)
  let markdown = response;
  const frontmatterStart = markdown.indexOf("---");
  if (frontmatterStart >= 0) {
    markdown = markdown.slice(frontmatterStart);
  }

  // Strip code fences
  markdown = markdown.replace(/^```(?:markdown)?\n?/, "").replace(/\n?```$/, "");

  // Extract title for filename
  const titleMatch = markdown.match(/title:\s*"(.+?)"/);
  const title = titleMatch ? titleMatch[1] : "untitled-blog-post";
  const slug = slugify(title);
  const filename = `${slug}.md`;
  const outputPath = path.join(BLOG_DIR, filename);

  console.log(`\nTitle: ${title}`);
  console.log(`Filename: ${filename}`);

  // Check for collision
  if (fs.existsSync(outputPath)) {
    console.error(`\n⚠️  File already exists: ${outputPath}`);
    console.error("Skipping to avoid overwriting existing content.");
    process.exit(1);
  }

  // ── Step 5: Find and download a cover image from Wikimedia Commons ──────
  hr("STEP 5: Finding cover image");

  const imageFilename = `${slug}.jpg`;
  const imagePath = path.join(IMAGES_DIR, imageFilename);
  const imageUrlPath = `/images/uploads/blog/${imageFilename}`;

  // Extract the retailer name from the CHOSEN STORY line or title
  const retailerFromChosen = chosenMatch?.[1]?.split("—")[0]?.trim() || "";
  const retailerForSearch = retailerFromChosen || title.split(":")[0].replace(/[^a-zA-Z0-9\s&]/g, "").trim();

  try {
    // Search Wikimedia Commons for a store/retail photo of this retailer
    const searchTerms = `${retailerForSearch} store`;
    console.log(`Searching Wikimedia Commons for: "${searchTerms}"`);

    const wikiApiUrl = `https://commons.wikimedia.org/w/api.php?` +
      `action=query&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(searchTerms)}` +
      `&gsrlimit=5&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=1200&format=json`;

    const wikiRes = await fetch(wikiApiUrl, {
      headers: { "User-Agent": "AuraVision-BlogBot/1.0 (https://auravision.ai)" },
    });
    if (!wikiRes.ok) throw new Error(`Wikimedia API returned ${wikiRes.status}`);

    const wikiData = await wikiRes.json();
    const pages = wikiData.query?.pages;
    if (!pages) throw new Error("No results found on Wikimedia Commons");

    // Find the best image: prefer large JPEGs
    const candidates = Object.values(pages)
      .map((p) => p.imageinfo?.[0])
      .filter(Boolean)
      .filter((img) => img.mime?.startsWith("image/") && img.width >= 600)
      .sort((a, b) => b.width - a.width);

    if (candidates.length === 0) throw new Error("No suitable images found");

    // Use the thumbnail URL (pre-scaled to 1200px width) if available, otherwise the full URL
    const chosen = candidates[0];
    const downloadUrl = chosen.thumburl || chosen.url;
    console.log(`Found: ${downloadUrl} (${chosen.width}x${chosen.height})`);

    // Download the image
    console.log("Downloading...");
    const imgRes = await fetch(downloadUrl, {
      redirect: "follow",
      headers: { "User-Agent": "AuraVision-BlogBot/1.0 (https://auravision.ai)" },
    });
    if (!imgRes.ok) throw new Error(`Image download failed: ${imgRes.status}`);

    const contentType = imgRes.headers.get("content-type") || "";
    if (!contentType.startsWith("image/")) throw new Error(`Not an image (content-type: ${contentType})`);

    const buffer = Buffer.from(await imgRes.arrayBuffer());
    if (buffer.length < 5000) throw new Error(`Image too small (${buffer.length} bytes)`);

    fs.writeFileSync(imagePath, buffer);
    console.log(`✅ Image saved: public/images/uploads/blog/${imageFilename} (${(buffer.length / 1024).toFixed(0)} KB)`);

    // Update the frontmatter to use the real image path
    markdown = markdown.replace(
      'coverImage: "/images/uploads/blog/placeholder.jpg"',
      `coverImage: "${imageUrlPath}"`
    );
  } catch (imgErr) {
    console.log(`⚠️  Could not download image: ${imgErr.message}`);
    console.log("   The post will use placeholder.jpg — replace it manually.");
  }

  fs.writeFileSync(outputPath, markdown);

  hr("DONE");
  console.log(`✅ Blog post generated: src/content/blog/${filename}`);
  console.log(`   Cover image: ${markdown.includes("placeholder") ? "⚠️  placeholder (replace manually)" : imageUrlPath}`);
  console.log(`\nNext: review the post, then commit.`);
}

main().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
