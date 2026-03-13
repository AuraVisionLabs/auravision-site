---
title: BoConcept × Aura Vision
date: 2026-03-13
slides:
  # ── Slide 1: Cover ──────────────────────────────────
  - type: cover
    title: In-Store Video Analytics
    tagline: BoConcept × Aura Vision
    clientLogo: /images/logos/boconcept.svg
    footer: "A tailored overview for Katie Nevins & the BoConcept HQ team<br>Aura Vision Labs Ltd · <a href='https://auravision.ai'>auravision.ai</a>"

  # ── Slide 2: The Challenge ──────────────────────────
  - type: table
    category: The Challenge
    title: Stores are operating blind
    subtitle: Footfall data tells you how many people enter. It tells you nothing about what happens inside.
    layout: table
    rows:
      - cells:
          - blocks:
              - type: text
                text: No in-store visibility
                size: h4
                bg: blue
          - blocks:
              - type: text
                text: Product placement is guesswork
                size: h4
                bg: purple
          - blocks:
              - type: text
                text: Franchisee inconsistency
                size: h4
                bg: fuchsia
      - cells:
          - blocks:
              - type: text
                text: Staff and customer interactions go unmeasured. You cannot see who engages, where, or how often.
                size: p-md
                bg: white-transparent
          - blocks:
              - type: text
                text: Which zones drive dwell time? Which windows convert passersby? Currently impossible to answer.
                size: p-md
                bg: white-transparent
          - blocks:
              - type: text
                text: 20% of customers may not be approached. With no data you cannot identify where this may be happening.
                size: p-md
                bg: white-transparent

  # ── Slide 3: Ask Aura ───────────────────────────────
  - type: table
    category: Ask Aura
    title: "Three questions answered in seconds"
    subtitle: BoConcept can get answers from day one. No analyst required.
    layout: grid
    rows:
      - cells:
          - blocks:
              - type: text
                text: "\"Are our windows driving traffic inside?\""
                size: h4
              - type: text
                text: Measure capture rate changes against window display rotations and compare performance across stores.
                size: p-sm
              - type: chat
                conversation:
                  - user: "Are our windows driving traffic inside?"
                    bot: "<strong>Yes, partially.</strong> Capture rate rose 12% after the last window rotation, but 3 stores saw no change."
                    image: /images/entrance1.webp
                    followUpUser: "Which window display performed best?"
                    followUpBot: "<strong>The white sofa display</strong> drove a 19% capture rate — nearly double the brown leather setup."
            options:
              background: white-transparent
          - blocks:
              - type: text
                text: "\"Which areas of our showroom are working?\""
                size: h4
              - type: text
                text: Map customer dwell time across every zone and identify where engagement converts to sales.
                size: p-sm
              - type: chat
                conversation:
                  - user: "Which zones have the highest dwell time?"
                    bot: "<strong>Sofa collections</strong> average 4.2 min dwell — 3× higher than lighting. But lighting converts at 2× the rate."
                    image: /images/activation1.webp
                    followUpUser: "What's driving the lighting conversion?"
                    followUpBot: "<strong>Staff engagement.</strong> Lighting zones have 2.3× more staff interactions per visitor than sofas."
            options:
              background: white-transparent
          - blocks:
              - type: text
                text: "\"Are staff where customers need them most?\""
                size: h4
              - type: text
                text: Spot service gaps where customers linger but staff are absent — and link them to conversion drops.
                size: p-sm
              - type: chat
                conversation:
                  - user: "Where are staff missing customers?"
                    bot: "<strong>Zone 3 (dining)</strong> has a 40% service gap on weekends. Customers dwell 3 min but staff presence is under 20%."
                    image: /images/entrance3.webp
                    followUpUser: "How many extra staff do we need?"
                    followUpBot: "<strong>2 additional staff</strong> on Saturdays 12–4pm would close the gap and match weekday service levels."
            options:
              background: white-transparent

  # ── Slide 4: How It Works (reused from Discovery) ──
  - type: table
    title: How it works
    category: Process
    layout: grid
    rows:
      - cells:
          - blocks:
              - type: text
                text: 1 — Plug & Play
                size: h3
              - type: text
                text: Connects to any existing CCTV camera system in minutes.
                size: p-md
              - type: device
          - blocks:
              - type: text
                text: 2 — Analyse
                size: h3
              - type: text
                text: AI segments your staff, customers, ages & genders.
                size: p-md
              - type: heatmap
          - blocks:
              - type: text
                text: 3 — Answer
                size: h3
              - type: text
                text: Aura instantly answers how to fix store performance.
                size: p-md
              - type: chat

  # ── Slide 5: Clients & Social Proof ─────────────────
  - type: table
    category: Clients & Social Proof
    title: Trusted by global retailers.
    layout: grid
    rows:
      - cells:
          - blocks:
              - type: logos
                fit: fixed
                items:
                  - src: /images/logos/purple.svg
                    alt: Purple
              - type: text
                text: "60+ stores. Low-traffic furniture retailer — the closest comparable to BoConcept. 4-year partnership measuring zone performance and staff engagement."
                size: p-md
          - blocks:
              - type: logos
                fit: fixed
                items:
                  - src: /images/logos/adidas.svg
                    alt: Adidas
              - type: text
                text: Flagship and high-volume store formats across Europe. Footfall, demographic segmentation and conversion analytics.
                size: p-md
          - blocks:
              - type: logos
                fit: fixed
                items:
                  - src: /images/logos/gymshark.svg
                    alt: Gymshark
              - type: text
                text: Staff engagement and zone performance tracking across physical retail expansion.
                size: p-md
          - blocks:
              - type: logos
                fit: fixed
                items:
                  - src: /images/logos/decathlon.svg
                    alt: Decathlon
              - type: text
                text: 1,000+ locations. Product zone analytics and conversion tracking across high-volume retail.
                size: p-md

  # ── Slide 7: Next Steps (combined) ──────────────────
  - type: table
    category: Proposed Next Steps
    title: A contained, low-risk proof of concept for BoConcept.
    layout: grid
    rows:
      - cells:
          - blocks:
              - type: text
                text: 1 — Scoping
                size: h3
              - type: text
                text: "Week 1–2"
                size: h6
              - type: text
                text: Camera snapshot review. Floor plan analysis. Store selection for POC. Katie shares this overview with Cor and relevant HQ stakeholders.
                size: p-md
          - blocks:
              - type: text
                text: 2 — Legal & DPA
                size: h3
              - type: text
                text: "Week 2–4"
                size: h6
              - type: text
                text: Data Processing Agreement. Infrastructure security sign-off. MSA negotiation. BoConcept shares camera layouts from 3–5 candidate stores.
                size: p-md
          - blocks:
              - type: text
                text: 3 — Device Setup
                size: h3
              - type: text
                text: "Week 4–5"
                size: h6
              - type: text
                text: APU devices shipped. Plug-and-play install by your IT team. Under a day per store. Key metrics defined — zone performance, capture rate, staff engagement.
                size: p-md
          - blocks:
              - type: text
                text: 4 — Go Live
                size: h3
              - type: text
                text: "Week 6"
                size: h6
              - type: text
                text: AI training complete. Dashboard live. Customer success onboarding begins. Review at 8 weeks to assess results and build the business case for wider rollout.
                size: p-md

  # ── Slide 8: Ending ─────────────────────────────────
  - type: ending
    headline: "Questions?<br>Get in touch:"
    contacts:
      - name: Zachary Sutcliffe
        email: zachary@auravision.ai
---
