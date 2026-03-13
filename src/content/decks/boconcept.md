---
title: BoConcept × Aura Vision
date: 2026-03-13
slides:
  # ── Slide 1: Cover ──────────────────────────────────
  - type: cover
    title: In-Store Video Analytics
    tagline: A tailored overview for Katie Nevins & the BoConcept HQ team
    clientLogo: /images/logos/boconcept.svg
    footer: "Aura Vision Labs Ltd · <a href='https://auravision.ai'>auravision.ai</a>"

  # ── Slide 2: The Challenge ──────────────────────────
  - type: table
    category: The Challenge
    title: Stores are operating blind
    subtitle: Footfall data tells you how many people enter. It tells you nothing about what happens inside.
    layout: table
    colWidths: [2, 2]
    rows:
      - cells:
          - blocks:
              - type: text
                text: No in-store visibility
                size: h4
                bg: blue
          - blocks:
              - type: text
                text: Staff and customer interactions go unmeasured. You cannot see who engages, where, or how often.
                size: p-md
                bg: white-transparent
      - cells:
          - blocks:
              - type: text
                text: Product placement is guesswork
                size: h4
                bg: purple
          - blocks:
              - type: text
                text: Which zones drive dwell time? Which windows convert passersby? Currently impossible to answer.
                size: p-md
                bg: white-transparent
      - cells:
          - blocks:
              - type: text
                text: Franchisee inconsistency
                size: h4
                bg: fuchsia
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
              - type: chat
                conversation:
                  - role: user
                    content: "Are our windows driving traffic inside?"
                    image: /images/entrance1.webp
                  - role: bot
                    content: "<i>Analysing window displays...</i>"
                  - role: bot
                    content: "<strong>Yes, partially.</strong> Capture rate rose 12% after the last window rotation, but 3 stores saw no change."
                  - role: user
                    content: "Which window display performed best?"
                  - role: bot
                    content: "<strong>The white sofa display</strong> drove a 19% capture rate — nearly double the brown leather setup."
            options:
              background: white-transparent
          - blocks:
              - type: text
                text: "\"Which areas of our showroom are working?\""
                size: h4
              - type: chat
                conversation:
                  - role: user
                    content: "Which areas of our showroom are working?"
                  - role: bot
                    content: "<i>Comparing all store areas...</i>"
                    image: /images/activation1.webp
                  - role: bot
                    content: "<strong>Sofa collections are working best</strong> with 4.2 min dwell time, 3× higher than lighting. But lighting converts at 2× the rate."
                  - role: user
                    content: "So should we move sofas closer to lighting?"
                  - role: bot
                    content: "<strong>Worth testing.</strong> Stores that placed accent lighting near sofas saw a 14% uplift in sofa conversion."
            options:
              background: white-transparent
          - blocks:
              - type: text
                text: "\"Are staff where customers need them most?\""
                size: h4
              - type: chat
                conversation:
                  - role: user
                    content: "Are staff where customers need them most?"
                  - role: bot
                    content: "<i>Gathering staff-customer ratios...</i>"
                    image: /images/entrance3.webp
                  - role: bot
                    content: "<strong>Zone 3 (dining)</strong> has a 40% service gap on weekends. Customers dwell 3 min but staff presence is under 20%."
                  - role: user
                    content: "Which stores have the biggest gap?"
                  - role: bot
                    content: "<strong>Copenhagen and Hamburg.</strong> Both show under 15% staff coverage in dining on Saturdays — well below the network average."
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

  # ── Slide 5: Revenue Impact ─────────────────
  - type: table
    category: Revenue Impact
    title: How our retailers achieve uplift
    layout: grid
    background: br
    rows:
      - cells:
          - blocks:
              - type: text
                text: Staffing
                size: h4
              - type: logos
                fit: fixed
                items:
                  - src: /images/logos/purple.svg
                    alt: Purple
              - type: highlight
                value: "£8M / yr"
                subtitle: across 78 US locations
              - type: text
                text: "24% more accurate staff allocations increased <strong>sales conversion 14.3% year-on-year</strong>."
                size: p-md
            options:
              background: blue
              gap: sm
          - blocks:
              - type: text
                text: Planning
                size: h4
              - type: logos
                fit: fixed
                items:
                  - src: /images/logos/vmo2.svg
                    alt: Virgin Media O2
              - type: highlight
                value: "£28M / 3yr"
                subtitle: across 308 UK locations
              - type: text
                text: "Elevating <strong>conversion by 4.4%</strong> with key product displays and <strong>7.0%</strong> with faster transaction times."
                size: p-md
            options:
              background: blue
              gap: sm
          - blocks:
              - type: text
                text: Design
                size: h4
              - type: logos
                fit: fixed
                items:
                  - src: /images/logos/adidas.svg
                    alt: Adidas
              - type: highlight
                value: "£1.6M / yr"
                subtitle: across 5 UAE locations
              - type: text
                text: "Boosted <strong>customer engagements 33%</strong> by A/B testing key product displays and activations."
                size: p-md
            options:
              background: blue
              gap: sm

  # ── Slide 7: Next Steps (combined) ──────────────────
  - type: table
    category: Proposal
    title: Low-risk proof of concept for BoConcept
    layout: table-striped
    colWidths: [2, 1, 4]
    rows:
      - cells:
          - blocks:
              - type: text
                text: Scoping
                size: h4
                bg: blue
          - blocks:
              - type: text
                text: "Week 1–2"
                size: h6
          - blocks:
              - type: text
                text: Camera snapshot review. Floor plan analysis. Store selection for POC. Katie shares this overview with Cor and relevant HQ stakeholders.
                size: p-sm
      - cells:
          - blocks:
              - type: text
                text: Legal & DPA
                size: h4
                bg: purple
          - blocks:
              - type: text
                text: "Week 2–4"
                size: h6
          - blocks:
              - type: text
                text: Data Processing Agreement. Infrastructure security sign-off. MSA negotiation. BoConcept shares camera layouts from 3–5 candidate stores.
                size: p-sm
      - cells:
          - blocks:
              - type: text
                text: Device Setup
                size: h4
                bg: fuchsia
          - blocks:
              - type: text
                text: "Week 4–5"
                size: h6
          - blocks:
              - type: text
                text: APU devices shipped. Plug-and-play install by your IT team. Under a day per store. Key metrics defined — zone performance, capture rate, staff engagement.
                size: p-sm
      - cells:
          - blocks:
              - type: text
                text: Go Live
                size: h4
                bg: red
          - blocks:
              - type: text
                text: "Week 6"
                size: h6
          - blocks:
              - type: text
                text: AI training complete. Dashboard live. Customer success onboarding begins. Review at 8 weeks to assess results and build the business case for wider rollout.
                size: p-sm

  # ── Slide 8: Ending ─────────────────────────────────
  - type: ending
    headline: "We'd love to explore this together.<br>Let's talk:"
    contacts:
      - name: Zachary Sutcliffe
        email: zachary@auravision.ai
        phone: "+44 77206 47963"
---
