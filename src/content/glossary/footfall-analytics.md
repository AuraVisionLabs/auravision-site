---
title: "What is Footfall Analytics?"
description: "Footfall analytics is the practice of measuring and analysing the number of people entering a physical space — such as a retail store, shopping centre, or transport hub — to understand visitor patterns, evaluate performance, and make data-driven decisions."
category: "analytics"
relatedTerms: ["people-counting", "capture-rate", "store-conversion-rate", "dwell-time"]
relatedCaseStudies: ["gymshark-x-aura-vision", "dfs-x-aura-vision", "flannels-x-aura-vision"]
relatedBlogPosts: ["exploring-the-future-of-retail-through-in-store-analytics"]
faq:
  - question: "How accurate is footfall counting?"
    answer: "Modern AI-powered footfall systems using computer vision typically achieve 95–99% accuracy, significantly outperforming older technologies like infrared beam counters or Wi-Fi tracking which usually range from 70–85% accuracy."
  - question: "What is the difference between footfall and traffic?"
    answer: "Footfall specifically refers to the number of people who physically enter a location, while traffic is a broader term that can include passers-by outside the store. Knowing both allows retailers to calculate their capture rate — the percentage of passers-by who actually enter."
  - question: "How much does footfall analytics cost?"
    answer: "Costs vary widely depending on the technology. Legacy solutions require dedicated sensors at each entrance (£500–£2,000 per sensor plus installation). Modern AI-based solutions like Aura Vision use existing CCTV cameras, dramatically reducing hardware costs and enabling same-day deployment."
  - question: "Can footfall data be broken down by hour or day?"
    answer: "Yes. Modern footfall analytics platforms provide data in granularities as fine as 15-minute intervals, allowing retailers to identify peak trading hours, plan staffing schedules, and measure the impact of marketing campaigns by time of day."
  - question: "Is footfall analytics GDPR compliant?"
    answer: "When implemented correctly with privacy-by-design principles, footfall analytics is fully GDPR compliant. Systems like Aura Vision process video on-device and only output anonymous aggregate counts — no personal data is ever collected or stored."
publishedDate: 2026-03-10
---

## What is footfall analytics?

Footfall analytics is the measurement, collection, and analysis of pedestrian traffic data in physical spaces. It answers the most fundamental question in brick-and-mortar retail: **how many people are coming into your store, and when?**

While the concept of counting visitors is decades old, modern footfall analytics goes far beyond simple headcounts. Today's systems can distinguish between staff and customers, track visitor flow between store zones, segment by demographics, and correlate foot traffic with sales data — all in real time.

## Why footfall analytics matters

For any physical business, understanding visitor volume is the foundation of performance measurement. Without accurate footfall data, retailers are essentially flying blind:

- **Sales conversion becomes measurable.** If 1,000 people visit your store and 50 make a purchase, your conversion rate is 5%. Without footfall data, you only see 50 transactions — you have no idea whether your store attracted 500 visitors or 5,000.
- **Marketing ROI becomes provable.** Did that window display campaign actually drive more people through the door? Footfall data gives you the before-and-after comparison.
- **Staffing can be optimised.** By overlaying footfall patterns with staff schedules, retailers can ensure they have the right number of people on the floor during peak hours — and aren't overstaffed during quiet periods.
- **Lease negotiations are informed.** Shopping centre tenants can use footfall data to understand whether their location is delivering the foot traffic promised by the landlord.

## How footfall analytics works

### Traditional methods

Early footfall counting relied on simple mechanical or electronic devices:

- **Infrared beam counters** placed at doorways detected when someone broke a beam of light. These struggled with groups of people walking side-by-side.
- **Thermal sensors** mounted overhead detected body heat. More accurate than beams but expensive and still prone to errors in crowded environments.
- **Wi-Fi and Bluetooth tracking** detected mobile device signals. While useful for understanding dwell time and repeat visits, these methods raised significant privacy concerns and suffered from low detection rates as phone manufacturers blocked MAC address tracking.

### Modern AI-powered methods

The current state of the art uses **computer vision** and **deep learning** to analyse video feeds from standard CCTV cameras. The AI is trained to detect and count individual people with high accuracy, even in crowded environments, varying lighting conditions, and complex store layouts.

Key advantages of AI-based footfall analytics include:

- **No new hardware required** — works with existing cameras
- **Staff vs. customer segmentation** — the AI learns to distinguish employees from shoppers
- **Multi-entrance consolidation** — counts across all entrances are unified into a single store total
- **Privacy by design** — video is processed on an edge device and only anonymous counts leave the building

## Key metrics in footfall analytics

| Metric | Definition |
|---|---|
| **Entries** | Total number of people who entered the space |
| **Exits** | Total number of people who left the space |
| **Capture rate** | Percentage of passers-by who entered the store |
| **Conversion rate** | Percentage of visitors who made a purchase |
| **Dwell time** | How long visitors spent in the store or a specific zone |
| **Occupancy** | Number of people currently inside the space at any given moment |

## Use cases

### Retail stores
Retailers use footfall analytics to benchmark store performance, optimise staffing, measure campaign effectiveness, and compare locations. By combining footfall with point-of-sale data, they can calculate true conversion rates and identify underperforming stores that may have great sales-per-visitor but low visitor volume — a completely different problem than a store with high traffic but low conversion.

### Shopping centres
Mall operators track footfall across common areas, corridors, and anchor stores to understand traffic flow patterns. This data informs tenant mix decisions, common-area marketing effectiveness, and helps justify lease rates.

### Cities and public spaces
Local authorities monitor pedestrian traffic on high streets and in public spaces to assess the economic health of town centres, measure the impact of events or infrastructure changes, and plan urban development.

## How Aura Vision approaches footfall analytics

Aura Vision provides AI-powered footfall analytics that works with existing CCTV infrastructure. A small edge device — the Analytics Processing Unit (APU) — connects to cameras already installed in the space. All video processing happens on-device, meaning no footage ever leaves the building.

The system counts entries and exits across multiple entrances, automatically segments staff from customers using uniform recognition (no RFID badges needed), and provides data through a real-time dashboard or API. Retailers can see footfall broken down by 15-minute intervals, overlay it with sales data, and use the built-in headcount planner to align staff rosters with actual customer demand.
