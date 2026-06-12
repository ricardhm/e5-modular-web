import sharp from 'sharp'
import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const boltPath = 'M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z'

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="50%" cy="0%" r="60%">
      <stop offset="0%" stop-color="#716bb6" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#09090b" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="#716bb6" fill-opacity="0.06"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#09090b"/>
  <rect width="1200" height="630" fill="url(#dots)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Left accent bar -->
  <rect x="80" y="80" width="3" height="470" fill="#716bb6" opacity="0.4"/>

  <!-- Bolt icon -->
  <g transform="translate(112, 200) scale(5.2)">
    <path d="${boltPath}" fill="#716bb6"/>
  </g>

  <!-- E5 Modular wordmark -->
  <text x="112" y="168" font-family="system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif"
    font-size="22" font-weight="400" fill="#716bb6" letter-spacing="6" text-transform="uppercase">
    E5 MODULAR
  </text>

  <!-- Divider -->
  <line x1="112" y1="490" x2="520" y2="490" stroke="#27272a" stroke-width="1"/>

  <!-- Tagline line 1 -->
  <text x="112" y="530" font-family="system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif"
    font-size="18" font-weight="400" fill="#71717a" letter-spacing="0.3">
    En 14 días, con los datos que ya tienen, le decimos
  </text>
  <!-- Tagline line 2 -->
  <text x="112" y="556" font-family="system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif"
    font-size="18" font-weight="400" fill="#71717a" letter-spacing="0.3">
    exactamente cuánto está perdiendo su empresa — y por qué.
  </text>

  <!-- Right side: headline -->
  <text x="620" y="220" font-family="system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif"
    font-size="52" font-weight="800" fill="#fafafa" letter-spacing="-1.5">
    En 14 días,
  </text>
  <text x="620" y="284" font-family="system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif"
    font-size="52" font-weight="800" fill="#fafafa" letter-spacing="-1.5">
    le decimos
  </text>
  <text x="620" y="348" font-family="system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif"
    font-size="52" font-weight="800" fill="#a78bfa" letter-spacing="-1.5">
    exactamente cuánto
  </text>
  <text x="620" y="412" font-family="system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif"
    font-size="52" font-weight="800" fill="#fafafa" letter-spacing="-1.5">
    está perdiendo.
  </text>

  <!-- Badge pill -->
  <rect x="620" y="456" width="220" height="36" rx="18" fill="#716bb6" fill-opacity="0.15" stroke="#716bb6" stroke-opacity="0.4" stroke-width="1"/>
  <text x="730" y="479" font-family="system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif"
    font-size="13" font-weight="500" fill="#a78bfa" text-anchor="middle" letter-spacing="1">
    Mosaico™ · 14 días
  </text>

  <!-- URL -->
  <text x="1120" y="596" font-family="system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif"
    font-size="14" font-weight="400" fill="#3f3f46" text-anchor="end" letter-spacing="0.5">
    e5modular.com
  </text>
</svg>
`

const outputPath = resolve(__dirname, '../public/og-image.png')

await sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath)

console.log('✓ og-image.png generated at public/og-image.png')
