---
title: "What are Heatmaps in Retail?"
description: "Retail heatmaps are visual representations of customer activity within a physical store, using colour gradients to show where people spend the most time, how they move through the space, and which areas receive the highest engagement."
category: "analytics"
relatedTerms: ["customer-journey-mapping", "dwell-time", "zone-analytics", "visual-merchandising-analytics"]
relatedCaseStudies: ["situ-live-x-aura-vision", "onitsuka-tiger-case-study", "gymshark-x-aura-vision"]
relatedBlogPosts: ["understanding-how-shoppers-navigate"]
faq:
  - question: "What is the difference between a dwell heatmap and a path heatmap?"
    answer: "A dwell (or total time) heatmap shows where people spend the most time — it highlights areas of engagement and lingering. A path (or popular path) heatmap shows the routes people take through the store — it reveals navigation patterns and traffic corridors. Both are valuable but answer different questions."
  - question: "How are retail heatmaps generated?"
    answer: "Modern retail heatmaps are generated using computer vision. AI models detect and track people through camera feeds, recording their positions over time. These position data points are aggregated and overlaid on a store floor plan, with colour intensity representing the density of activity."
  - question: "Can heatmaps show different time periods?"
    answer: "Yes. Analytics platforms allow retailers to filter heatmaps by date range, day of week, or time of day. This is valuable for comparing weekday vs. weekend patterns, measuring campaign impact, or understanding how shopper behaviour changes throughout the day."
  - question: "Do mannequins or TV screens affect heatmap accuracy?"
    answer: "Well-trained AI models learn to distinguish between people and static objects like mannequins. TV screens can occasionally cause false detections in poorly calibrated systems, but in-situ trained models account for these environmental factors."
publishedDate: 2026-03-10
---

## What are heatmaps in retail?

Retail heatmaps are data visualisations that show how customers use physical space within a store. Using colour gradients — typically from cool blues (low activity) to hot reds (high activity) — they transform complex movement data into an intuitive picture that any retailer can understand at a glance.

If you've seen a website heatmap showing where users click or scroll, retail heatmaps are the physical-world equivalent: they show where shoppers go, where they stop, and where they don't.

## Types of retail heatmaps

### Total time (dwell) heatmaps
These show the cumulative time spent by all visitors in each area of the store. Hot spots indicate areas where people linger — browsing products, engaging with displays, or waiting in queues. Cold spots reveal areas that shoppers pass through quickly or ignore entirely.

**Best for:** Identifying high-engagement zones, evaluating product display effectiveness, spotting dead zones

### Popular path heatmaps
These visualise the most common routes customers take through the store. Rather than showing where people stop, they show how people flow — the corridors, aisles, and navigation patterns that define the customer journey.

**Best for:** Store layout evaluation, understanding natural traffic flow, identifying bottlenecks

### Comparative heatmaps
By overlaying heatmaps from different time periods (before vs. after a layout change, weekday vs. weekend, or promotion vs. non-promotion periods), retailers can visually assess the impact of changes.

**Best for:** A/B testing layouts, measuring campaign impact, seasonal comparisons

## Why heatmaps matter for retailers

### Optimise store layout
Heatmaps reveal whether the store layout guides customers to key areas. If the highest-margin department is consistently a cold spot, it may need better signage, repositioning, or a "speed bump" display to slow shoppers down and draw them in.

### Measure display and fixture effectiveness
A product display that generates high dwell time is working. One that sits in a traffic dead zone is wasted investment. Heatmaps provide objective evidence for merchandising decisions.

### Understand the customer journey
By combining dwell and path heatmaps, retailers can reconstruct the typical customer journey: where do people enter, what's the first thing they see, which departments do they visit in which order, and where do they exit?

### Prove ROI on store changes
When a retailer invests in a store refit, new fixtures, or a repositioned entrance, heatmaps before and after provide visual proof of whether the change achieved its intended effect.

## How retail heatmaps are created

Modern retail heatmaps are generated through a pipeline of computer vision technologies:

1. **Person detection** — AI identifies each individual in the camera feed
2. **Tracking** — each person's position is tracked frame-by-frame as they move through the store
3. **Position mapping** — camera coordinates are translated to positions on the store floor plan
4. **Aggregation** — thousands of individual data points are aggregated over a chosen time period
5. **Visualisation** — the aggregated data is rendered as a colour gradient overlaid on the store map

This entire process runs continuously and can be viewed in near real-time or analysed historically over any date range.

## Heatmaps vs. other spatial analytics

| Tool | What it shows | Best for |
|---|---|---|
| **Heatmap** | Where people spend time (colour intensity) | Visual merchandising, layout evaluation |
| **Path map** | Individual journey lines through the store | Understanding navigation patterns |
| **Zone analytics** | Aggregate metrics per defined area | Department-level KPIs, conversion by zone |
| **Occupancy** | How many people are in the space right now | Capacity management, real-time alerts |

## How Aura Vision generates heatmaps

Aura Vision uses existing CCTV cameras and on-premise AI processing to generate both total time and popular path heatmaps. Because the AI models are trained in-situ — adapting to each store's specific camera angles, lighting, and environment — the heatmaps are accurate and free of false positives from static objects like mannequins or display screens.

Heatmaps can be filtered by date, time of day, and day of week, and can be exported for use in presentations and reports. They integrate with the platform's broader analytics suite, allowing retailers to correlate spatial behaviour with footfall counts, demographic data, and conversion metrics.
