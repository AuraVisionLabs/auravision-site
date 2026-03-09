---
title: "What is People Counting?"
description: "People counting is the technology and practice of measuring the number of individuals passing through a specific point or area — typically a store entrance, corridor, or zone — using sensors, cameras, or AI-powered systems."
category: "analytics"
relatedTerms: ["footfall-analytics", "capture-rate", "occupancy-analytics", "computer-vision-in-retail"]
relatedCaseStudies: ["c2c-x-aura-vision", "bedford-city-council-x-aura-vision"]
relatedBlogPosts: []
faq:
  - question: "What technologies are used for people counting?"
    answer: "Common technologies include infrared beam sensors, thermal imaging sensors, stereo-vision cameras, Wi-Fi/Bluetooth tracking, LiDAR, and AI-powered computer vision on standard CCTV cameras. Each has different trade-offs in accuracy, cost, privacy, and additional insight capabilities."
  - question: "How accurate are people counters?"
    answer: "Accuracy varies by technology. Simple infrared beam counters typically achieve 70–85% accuracy, thermal sensors 85–95%, and modern AI-powered computer vision systems 95–99%. Accuracy is most challenged in crowded environments and with groups walking side-by-side."
  - question: "Can people counters distinguish between staff and customers?"
    answer: "Most traditional people counters cannot. AI-powered computer vision systems can be trained to recognise staff uniforms and automatically exclude employees from customer counts, providing a more accurate picture of actual customer traffic."
  - question: "Do people counters work with multiple entrances?"
    answer: "Yes, though the approach varies. Legacy sensors require a device at each entrance. AI-based systems can use multiple camera feeds to consolidate counts across all entrances into a single, deduplicated total for the store."
publishedDate: 2026-03-10
---

## What is people counting?

People counting is the process of measuring the number of people entering, exiting, or occupying a physical space. It is the foundational technology behind footfall analytics and is used across retail, transport, hospitality, corporate offices, and public spaces.

While the concept is simple — counting people — the implementation varies enormously in sophistication, accuracy, and the additional insight it can deliver beyond basic counts.

## People counting technologies compared

### Infrared beam counters
The simplest and oldest technology. A beam of infrared light crosses the entrance; each time it's broken, a count is registered.

**Pros:** Low cost, easy to install
**Cons:** Cannot count groups walking abreast, counts objects as well as people, no directional data (entry vs. exit), no demographic or behavioural insight

**Typical accuracy:** 70–85%

### Thermal imaging sensors
Ceiling-mounted sensors detect body heat signatures to count people passing underneath.

**Pros:** Works in all lighting conditions, directional (in vs. out)
**Cons:** Expensive per entrance, struggles with very crowded environments, affected by ambient heat sources, no additional analytics

**Typical accuracy:** 85–95%

### Stereo-vision / 3D depth cameras
Dual-lens cameras create a depth map to identify people by their 3D shape.

**Pros:** Good accuracy, directional, less affected by shadows than 2D
**Cons:** Requires dedicated hardware at each entrance, limited field of view, no demographic or journey insight

**Typical accuracy:** 90–97%

### Wi-Fi / Bluetooth tracking
Detects the signals emitted by mobile phones to estimate the number of people in an area.

**Pros:** Can estimate dwell time and repeat visits
**Cons:** Requires people to have Wi-Fi or Bluetooth enabled, MAC address randomisation has severely reduced accuracy, significant privacy concerns, cannot detect people without smartphones

**Typical accuracy:** 40–60% (post MAC randomisation)

### AI-powered computer vision
Uses deep learning models running on standard CCTV camera feeds to detect, count, and track individuals.

**Pros:** Works with existing cameras (no new hardware), highest accuracy, provides additional insights (demographics, heatmaps, journey mapping, queue analytics), can distinguish staff from customers
**Cons:** Requires on-premise processing hardware (edge device), needs initial AI training per location

**Typical accuracy:** 95–99%

## Beyond basic counts

The most significant advantage of modern people counting systems is that counting becomes just the starting point. An AI-powered system that can count people can also:

- **Track journeys** through the store to create path maps
- **Measure dwell time** in specific zones
- **Generate heatmaps** showing where people spend the most time
- **Detect queues** and measure wait times
- **Estimate demographics** anonymously
- **Segment staff from customers** for cleaner data

This transforms people counting from a basic operational metric into a comprehensive analytics platform.

## Use cases by industry

### Retail
The primary use case: understanding store traffic, measuring conversion, optimising staffing, and evaluating marketing campaigns.

### Transport
Railway stations, airports, and bus stations use people counting for capacity management, crowd safety, and service planning. Aura Vision's work with c2c railway is an example of computer-vision-based counting in transport.

### Smart cities
Councils and urban planners use pedestrian counting on high streets and public spaces to measure economic activity, assess the impact of events, and plan infrastructure.

### Corporate
Offices use people counting for meeting room utilisation, space planning, and occupancy management.

## How Aura Vision counts people

Aura Vision uses AI-powered computer vision running on a compact edge device (the APU) connected to existing CCTV cameras. The deep learning models are trained in-situ — meaning the AI adapts to the specific cameras, angles, lighting, and environment of each location.

This approach means:
- **No new cameras or sensors** need to be purchased or installed
- **Staff are automatically excluded** from customer counts via uniform recognition
- **Multiple entrances** are consolidated into a single store total
- **All processing is on-device** — no video footage leaves the building
- **Deployment takes the same day** — truly plug and play
