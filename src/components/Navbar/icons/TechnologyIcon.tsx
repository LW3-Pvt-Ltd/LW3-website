// Wind turbine icon — matches Figma "technology" nav column
export default function TechnologyIcon() {
  return (
    <svg width="56" height="80" viewBox="0 0 56 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Vertical mast */}
      <line x1="28" y1="32" x2="28" y2="78" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      {/* Hub */}
      <circle cx="28" cy="30" r="2.5" stroke="white" strokeWidth="1.2" />
      {/* Blade 1 — up-left */}
      <path d="M27 28 C24 20 16 10 10 4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      {/* Blade 2 — up-right */}
      <path d="M29.5 29 C34 22 42 14 48 8" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      {/* Blade 3 — right */}
      <path d="M30 31.5 C38 33 46 34 54 34" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      {/* Base platform */}
      <line x1="20" y1="78" x2="36" y2="78" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
