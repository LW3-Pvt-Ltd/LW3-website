/**
 * LogoSVG — LW3 logo mark placeholder.
 * Replace the SVG paths below with the real logo artwork when provided.
 * All paths use fill/stroke only — no CSS classes, no Tailwind.
 */
export default function LogoSVG() {
  return (
    <svg
      width="120"
      height="36"
      viewBox="0 0 120 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logistics W3"
    >
      {/* ── Logo mark — geometric L+W3 monogram ── */}
      {/* Replace everything below with the real logo SVG paths */}

      {/* "L" vertical stroke */}
      <line x1="6" y1="4" x2="6" y2="26" stroke="white" strokeWidth="2" strokeLinecap="round" />
      {/* "L" horizontal stroke */}
      <line x1="6" y1="26" x2="16" y2="26" stroke="white" strokeWidth="2" strokeLinecap="round" />

      {/* "W" shape */}
      <polyline
        points="20,4 24,22 28,12 32,22 36,4"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* "3" shape */}
      <path
        d="M42 8 C42 8 50 6 50 12 C50 16 44 17 44 17 C44 17 50 18 50 23 C50 29 42 28 42 28"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Divider */}
      <line x1="60" y1="8" x2="60" y2="28" stroke="white" strokeOpacity="0.3" strokeWidth="1" />

      {/* Wordmark — "Logistics W3" */}
      <text
        x="68"
        y="18"
        fill="white"
        fontSize="11"
        fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
        fontWeight="500"
        letterSpacing="1.5"
        dominantBaseline="middle"
      >
        Logistics W3
      </text>

      {/* Tagline */}
      <text
        x="68"
        y="28"
        fill="rgba(255,255,255,0.4)"
        fontSize="7"
        fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
        fontWeight="400"
        letterSpacing="2"
        dominantBaseline="middle"
      >
        BATTERY PASSPORT
      </text>
    </svg>
  )
}
