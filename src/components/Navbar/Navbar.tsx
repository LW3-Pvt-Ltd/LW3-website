import { useState, useEffect } from 'react'
import NavbarSVG from './NavbarSVG'

// Mobile nav data — mirrors the Figma columns
const MOBILE_NAV = [
  {
    title: 'Technology',
    links: [
      { label: 'aug 2022', href: '#' },
      { label: 'Mar 2025', href: '#' },
      { label: 'Sep 2025', href: '#' },
      { label: 'Battery Passport', href: '#' },
    ],
  },
  {
    title: 'Regulations',
    links: [
      { label: 'Jan 2026', href: '#' },
      { label: 'Feb 2027', href: '#' },
      { label: 'Dec 2027', href: '#' },
    ],
  },
  {
    title: 'Statistics',
    links: [
      { label: 'Blockchain Transaction Payments', href: '#' },
      { label: 'Consumer Performance', href: '#' },
      { label: 'Battery Volume', href: '#' },
    ],
  },
  {
    title: 'Our Pilots',
    links: [
      { label: 'Packages', href: '#' },
      { label: 'View Projects', href: '#' },
    ],
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Close drawer on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ══════════════════════════════════════════
          DESKTOP (xl+): Exact Figma SVG design
          ══════════════════════════════════════════
          NavbarSVG renders all logo, text and icons
          as Figma-exact vector paths.
          Background: SVG references /navbar-bg.jpg
          — drop that file in /public when ready.   */}
      <div className="hidden xl:block relative">
        <NavbarSVG />
      </div>

      {/* ══════════════════════════════════════════
          MOBILE (<xl): CSS navbar + drawer         */}
      <div className="xl:hidden">

        {/* Mobile top bar */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{
            background: 'rgba(0,0,0,0.92)',
            backdropFilter: 'blur(18px) saturate(140%)',
            WebkitBackdropFilter: 'blur(18px) saturate(140%)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Logo mark — SVG, no CSS */}
          <a href="/" aria-label="Logistics W3">
            <svg
              width="110"
              height="38"
              viewBox="0 0 237 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* LW3 box mark */}
              <rect x="0.5" y="0.5" width="79" height="86" stroke="white" strokeWidth="1.5"/>
              <line x1="20" y1="18" x2="20" y2="68" stroke="white" strokeWidth="1.5"/>
              <line x1="40" y1="18" x2="40" y2="68" stroke="white" strokeWidth="1.5"/>
              <line x1="60" y1="18" x2="60" y2="68" stroke="white" strokeWidth="1.5"/>
              <line x1="20" y1="68" x2="60" y2="68" stroke="white" strokeWidth="1.5"/>
              {/* Tagline */}
              <text
                x="94"
                y="34"
                fill="white"
                fontSize="14"
                fontFamily="-apple-system, 'SF Pro Display', sans-serif"
                fontWeight="500"
                letterSpacing="0.5"
              >
                accelerating
              </text>
              <text
                x="94"
                y="56"
                fill="white"
                fontSize="14"
                fontFamily="-apple-system, 'SF Pro Display', sans-serif"
                fontWeight="300"
                letterSpacing="0.3"
              >
                sustainable traceability
              </text>
            </svg>
          </a>

          {/* Hamburger — SVG, no CSS */}
          <button
            className="flex flex-col gap-[5px] w-7 h-6 justify-center items-end"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-[1.5px] bg-white transition-all duration-300 ${
                mobileOpen ? 'w-6 translate-y-[6.5px] rotate-45' : 'w-6'
              }`}
            />
            <span
              className={`block h-[1.5px] bg-white transition-all duration-300 ${
                mobileOpen ? 'opacity-0 w-0' : 'w-4'
              }`}
            />
            <span
              className={`block h-[1.5px] bg-white transition-all duration-300 ${
                mobileOpen ? 'w-6 -translate-y-[6.5px] -rotate-45' : 'w-5'
              }`}
            />
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ background: 'rgba(0,0,0,0.96)', backdropFilter: 'blur(20px)' }}
        >
          <div className="px-5 py-6 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10">
            {MOBILE_NAV.map((col) => (
              <div key={col.title}>
                <p
                  className="text-white text-[10px] uppercase tracking-[0.22em] mb-3 leading-none"
                  style={{ fontFamily: 'D-DINCondensed-Bold, D-DINCondensed, sans-serif' }}
                >
                  {col.title}
                </p>
                <ul className="flex flex-col gap-[10px]">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/55 text-[10px] uppercase tracking-[0.1em] hover:text-white transition-colors duration-150 leading-snug block"
                        style={{ fontFamily: 'D-DINCondensed, sans-serif' }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

    </header>
  )
}
