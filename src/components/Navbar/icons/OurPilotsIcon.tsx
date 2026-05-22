// Abstract geometric shapes — matches Figma "our pilots" nav column
export default function OurPilotsIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Large circle — left */}
      <circle cx="22" cy="38" r="20" stroke="white" strokeWidth="1.2" />
      {/* Small circle — upper right */}
      <circle cx="54" cy="20" r="12" stroke="white" strokeWidth="1.2" />
      {/* Magnifying glass handle */}
      <line x1="62" y1="28" x2="74" y2="42" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      {/* Rectangle — lower right */}
      <rect x="44" y="44" width="30" height="18" stroke="white" strokeWidth="1.2" />
      {/* Inner detail — small square inside large circle */}
      <rect x="14" y="30" width="16" height="16" stroke="white" strokeWidth="1" />
    </svg>
  )
}
