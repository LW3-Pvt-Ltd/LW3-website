// Pie chart + bar segments — matches Figma "statistics" nav column
export default function StatisticsIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Outer square */}
      <rect x="2" y="2" width="52" height="52" stroke="white" strokeWidth="1.2" />
      {/* Pie chart — large quarter circle (upper-left quadrant, rotated 180°) */}
      <path d="M27 27 L27 6 A21 21 0 0 0 6 27 Z" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
      {/* Inner arc of the pie quarter */}
      <path d="M27 27 L27 14 A13 13 0 0 0 14 27 Z" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
      {/* Right bar segments */}
      <rect x="32" y="2" width="22" height="26" stroke="white" strokeWidth="1.2" />
      <rect x="32" y="28" width="22" height="26" stroke="white" strokeWidth="1.2" />
      {/* Bottom left rectangle */}
      <rect x="2" y="54" width="52" height="24" stroke="white" strokeWidth="1.2" />
    </svg>
  )
}
