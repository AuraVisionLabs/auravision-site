const sharp = require('sharp');

async function generate() {
  // 1. Render wordmark SVG to a white PNG
  const logoWidth = 700;
  const wordmarkPng = await sharp('public/images/aura-vision-wordmark.svg')
    .resize(logoWidth)
    .ensureAlpha()
    .png()
    .toBuffer();

  const logoMeta = await sharp(wordmarkPng).metadata();
  const logoHeight = logoMeta.height;

  // "AI-Powered Retail Analytics" at 42px in Questrial is roughly 580px wide
  const lineWidth = 580;

  const bgSvg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#22d3ee" />
        <stop offset="100%" stop-color="#d946ef" />
      </linearGradient>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f172a" />
        <stop offset="40%" stop-color="#0f172a" />
        <stop offset="70%" stop-color="#1a1145" />
        <stop offset="100%" stop-color="#2a0e3a" />
      </linearGradient>
    </defs>

    <!-- Background with subtle gradient -->
    <rect width="1200" height="630" fill="url(#bgGrad)" />

    <!-- Gradient line — same width as tagline -->
    <rect x="100" y="350" width="${lineWidth}" height="3" fill="url(#lineGrad)" rx="1.5" />

    <!-- Tagline -->
    <text x="100" y="415" font-family="Questrial" font-weight="400" font-size="42" fill="white" opacity="0.7">AI-Powered Retail Analytics</text>
    <text x="100" y="465" font-family="Questrial" font-weight="400" font-size="32" fill="white" opacity="0.4">from your existing cameras</text>

    <!-- Domain -->
    <text x="100" y="560" font-family="Questrial" font-weight="400" font-size="28" fill="white" opacity="0.45">auravision.ai</text>
  </svg>`;

  const bgBuffer = await sharp(Buffer.from(bgSvg))
    .png()
    .toBuffer();

  const logoTop = 350 - logoHeight - 40;

  const result = await sharp(bgBuffer)
    .composite([
      {
        input: wordmarkPng,
        top: Math.max(logoTop, 100),
        left: 100,
      }
    ])
    .jpeg({ quality: 92 })
    .toFile('public/og-default.jpg');

  console.log('Created og-default.jpg', result);
}

generate().catch(err => console.error('Error:', err));
