import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Product',    href: '#product' },
  { label: 'Technology', href: '#technology' },
  { label: 'Regulation', href: '#regulation' },
  { label: 'Traction',   href: '#traction' },
  { label: 'Team',       href: '#team' },
]

// New logo paths from nav new.svg (LW3 block + slash)
const LOGO_PATHS = [
  "M111.984 31H108V48.8843H111.984V31Z",
  "M127.125 31H123.141V52.6102H127.125V31Z",
  "M129.516 31H133.5V52.6102H130.862C130.118 52.6102 129.516 52.0119 129.516 51.274V31Z",
  "M139.875 31H135.891V52.6102H139.875V31Z",
  "M139.875 48.8848V52.6106H124.459C123.731 52.6106 123.141 51.999 123.141 51.2447V48.8848H139.875Z",
  "M120.75 52.6106V48.8848H111.984V52.6106H120.75Z",
  "M159 48.8845H155.016V43.6682H159V48.8845Z",
  "M155.016 48.8848H143.859V52.6106H151.589C153.416 52.6106 154.91 50.9629 155.016 48.8848Z",
  "M159 34.7256H155.016V39.9418H159V34.7256Z",
  "M155.016 43.6683V39.9424H147.844V43.6683H155.016Z",
  "M155.016 34.7259H143.859V31H151.589C153.416 31 154.91 32.6477 155.016 34.7259Z",
]
const SLASH_PATH = "M169.93 26.6348L162.301 58.1523H161L168.629 26.6348H169.93Z"

function Logo() {
  return (
    <svg width="65" height="34" viewBox="107 26 63 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      {LOGO_PATHS.map((d, i) => <path key={i} d={d} fill="white" />)}
      <path d={SLASH_PATH} fill="white" />
    </svg>
  )
}

export default function NavBar() {
  const [hoveredLink, setHoveredLink] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 50,
      backgroundColor: 'rgba(0,0,0,0.85)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(201,168,76,0.15)',
    }}>
      <div style={{
        maxWidth: 1905,
        margin: '0 auto',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
      }}>
        {/* Logo */}
        <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Logo />
        </a>

        {/* Desktop nav links */}
        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="desktop-nav">
          {NAV_LINKS.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={e => { e.preventDefault(); scrollTo(link.href) }}
              onMouseEnter={() => setHoveredLink(i)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                color: hoveredLink === i ? '#C9A84C' : '#F5F2EC',
                transition: 'color 0.2s ease',
                fontFamily: '"SF Pro Display", system-ui, sans-serif',
                fontSize: 15,
                fontWeight: 400,
                letterSpacing: '0.5px',
                textDecoration: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile 9-dot bento icon */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
          className="mobile-nav"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none', alignItems: 'center', justifyContent: 'center' }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            {[0,1,2].flatMap(row => [0,1,2].map(col => (
              <circle key={`${row}-${col}`} cx={3 + col * 8} cy={3 + row * 8} r={2.2} fill={menuOpen ? '#C9A84C' : 'white'} />
            )))}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-nav" style={{
          backgroundColor: 'rgba(0,0,0,0.97)',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}>
          {NAV_LINKS.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={e => { e.preventDefault(); setMenuOpen(false); scrollTo(link.href) }}
              style={{
                display: 'block',
                padding: '18px 32px',
                color: '#F5F2EC',
                textDecoration: 'none',
                fontFamily: '"SF Pro Display", system-ui, sans-serif',
                fontSize: 16,
                fontWeight: 400,
                letterSpacing: '0.5px',
                borderBottom: i < NAV_LINKS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
