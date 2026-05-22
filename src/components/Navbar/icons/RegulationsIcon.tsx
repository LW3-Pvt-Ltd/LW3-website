// Circular gauge / regulation dial — matches Figma "regulations" nav column
export default function RegulationsIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Outer circle */}
      <circle cx="40" cy="40" r="34" stroke="white" strokeWidth="1.2" />
      {/* Inner circle */}
      <circle cx="40" cy="40" r="22" stroke="white" strokeWidth="1.2" />
      {/* Center dot */}
      <circle cx="40" cy="40" r="3" stroke="white" strokeWidth="1.2" />
      {/* Gauge needle — pointing upper-right */}
      <line x1="40" y1="40" x2="57" y2="18" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      {/* Tick marks around outer ring */}
      <line x1="40" y1="6" x2="40" y2="12" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="74" y1="40" x2="68" y2="40" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="6" y1="40" x2="12" y2="40" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="40" y1="74" x2="40" y2="68" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      {/* Diagonal ticks */}
      <line x1="64" y1="16" x2="60" y2="20" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <line x1="16" y1="16" x2="20" y2="20" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <line x1="64" y1="64" x2="60" y2="60" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <line x1="16" y1="64" x2="20" y2="60" stroke="white" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}
