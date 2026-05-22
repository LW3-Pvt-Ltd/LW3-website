// NavbarCSS — vectors (logo, icons, background) come from navbar-vectors.svg
// Only the column text is CSS — same font, size, weight as the original SVG design.
// Background image: swap in /public/navbar-bg.jpg later (one line change below).

// ── Nav data ─────────────────────────────────────────────
const NAV_COLUMNS = [
  {
    title: 'Technology',
    links: ['Aug 2022', 'Mar 2025', 'Sep 2025', 'Battery Passport'],
    // Col 1 text starts right of icon box at x≈690/1905 = 36.22vw
    left: '36.22vw',
  },
  {
    title: 'Regulations',
    links: ['Jan 2026', 'Feb 2027', 'Dec 2027'],
    left: '52.55vw',
  },
  {
    title: 'Statistics',
    links: ['Blockchain Transaction Payments', 'Consumer Performance', 'Battery Volume'],
    left: '69.92vw',
  },
  {
    title: 'Our Pilots',
    links: ['Packages', 'View Projects'],
    left: '87.56vw',
  },
]

// Navbar height on 1905px canvas: 163.667px → 163.667/1905*100 = 8.59vw
const NAV_H = '8.59vw'

// Title y: ~23px from top of 163.667px navbar → 14.06% of nav height
const TITLE_TOP = '14.06%'

// Sub-links start y: ~130px from top → 79.4% of nav height
const LINKS_TOP = '79.4%'

export default function NavbarCSS() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 overflow-hidden"
      style={{ height: NAV_H }}
    >

      {/* ── SVG vector layer: logo + icon boxes + backdrop ── */}
      {/* Background: once the image is ready, add:
          style={{ backgroundImage: "url('/navbar-bg.jpg')", backgroundSize: 'cover' }}
          to this div and remove the bg-black */}
      <div className="absolute inset-0 bg-black/80" style={{ backdropFilter: 'blur(10.7px)' }}>
        <img
          src="/navbar-vectors.svg"
          alt=""
          className="w-full h-full"
          style={{ objectFit: 'fill' }}
          draggable={false}
        />
      </div>

      {/* ── CSS text layer: column titles + sub-links ─────── */}
      {NAV_COLUMNS.map((col) => (
        <div
          key={col.title}
          className="absolute"
          style={{ left: col.left, top: 0, height: '100%' }}
        >
          {/* Column title */}
          <span
            className="absolute text-white uppercase leading-none"
            style={{
              top: TITLE_TOP,
              fontFamily: 'D-DINCondensed-Bold, D-DINCondensed, sans-serif',
              fontSize: '1.15vw',
              letterSpacing: '0.12em',
              whiteSpace: 'nowrap',
            }}
          >
            {col.title}
          </span>

          {/* Sub-links stacked below */}
          <ul
            className="absolute flex flex-col"
            style={{ top: LINKS_TOP, gap: '0.18vw' }}
          >
            {col.links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block text-white/60 hover:text-white transition-colors duration-150 uppercase leading-none"
                  style={{
                    fontFamily: 'D-DINCondensed, sans-serif',
                    fontSize: '0.78vw',
                    letterSpacing: '0.08em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

    </header>
  )
}
