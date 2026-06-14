// Footer section — solid #0A0A08 background, CSS layout
// Canvas: 1905 × 319.21
//
// Logo SVG (footer-logo.svg): left=9.03%, top=14.72%, width=10.92%
// Description (p): left=9.03%, top=34.93% — D-DIN Regular 13px → 0.68vw
// Copyright (div): left=9.03%, top=74.93% — D-DIN Regular 13px → 0.68vw
// Columns: left=31.70%/54.38%/77.06%, top=20.37% — headers D-DINCondensed-Bold 0.84vw
// List items: D-DIN Regular 0.68vw, gap 30.59px → top steps of 9.58%

import { useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { openContact } from '../Contact/ContactModal'

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY)
}

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/lw3-private-limited/posts/?feedView=all',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/LW3India',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/lw3_pvt_ltd',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCIWnQj24bl9fgRI0yj4-xkg',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
]

const cols = [
  {
    left: '31.70%',
    heading: 'Product',
    items: [
      { label: 'Battery Passport',       target: 'snap-bpap'    },
      { label: 'Reverse Logistics',      target: 'snap-ydnlyc'  },
      { label: 'Compliance Automation',  target: 'snap-uybpcer' },
    ],
  },
  {
    left: '50.47%',
    heading: 'Technology',
    items: [
      { label: 'Post Quantum Secure Blockchain', target: 'snap-madpp-0' },
      { label: 'Agentic AI',                     target: 'snap-madpp-0' },
    ],
  },
  {
    left: '69.24%',
    heading: 'About',
    items: [
      { label: 'What is LW3?', target: 'what-is-lw3'   },
      { label: 'Brand Kit',    target: 'brand'          },
      { label: 'Awards',       target: 'snap-bqegvir-2' },
      { label: 'Regulation',   target: 'snap-gap'       },
      { label: 'Contact us',   target: 'contact'        },
    ],
  },
]

// List item y positions (abs y on canvas): 103.5, 134.09, 164.69, 195.28
const ITEM_TOPS = ['32.43%', '42.01%', '51.60%', '61.18%']

const TEXT_SM: React.CSSProperties = {
  position: 'absolute',
  fontFamily: "'D-DIN', sans-serif",
  fontSize: '0.68vw',
  lineHeight: 1.6,
  color: '#ffffff',
}

export default function FooterSection() {
  const navigate = useNavigate()
  const location = useLocation()
  const footerRef = useRef<HTMLElement>(null)

  function goToSection(target: string) {
    if (location.pathname === '/') {
      scrollTo(target)
    } else {
      navigate('/', { state: { scrollTo: target } })
    }
  }

  useEffect(() => {
    const el = footerRef.current
    if (!el) return
    gsap.set(el, { opacity: 0 })
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) gsap.to(el, { opacity: 1, duration: 1.1, ease: 'power2.out' })
      else gsap.set(el, { opacity: 0 })
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <footer
      ref={footerRef}
      className="relative w-full"
      style={{ aspectRatio: '1905 / 319.21', background: '#0A0A08' }}
    >
      {/* LW3 logo */}
      <img
        src="/Latest updated logo.svg"
        alt="LW3 - Logistics W3"
        draggable={false}
        style={{
          position: 'absolute',
          left: '9.03%',
          top: '14.72%',
          width: '10.92%',
          height: 'auto',
        }}
      />

      {/* Description */}
      <div style={{ ...TEXT_SM, left: '9.03%', top: '34.93%', maxWidth: '13.02%' }}>
        Accelerating Sustainable Traceability. India's full-stack cryptographic battery
        passport platform — built for the circular economy.
      </div>

      {/* Copyright / registration */}
      <div style={{ ...TEXT_SM, left: '9.03%', top: '74.93%' }}>
        DPIIT Reg. No. 121125 · Guwahati, Assam, India<br />
        Incubated at T-Hub, Hyderabad
      </div>

      {/* Social column */}
      <div>
        <span style={{ position: 'absolute', left: '88%', top: '20.37%', fontFamily: "'D-DINCondensed-Bold', sans-serif", fontSize: '0.84vw', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#ffffff' }}>
          Social
        </span>
        {SOCIAL_LINKS.map(({ label, href, icon }, j) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...TEXT_SM,
              left: '88%',
              top: ITEM_TOPS[j],
              textDecoration: 'none',
              opacity: 0.7,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4vw',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7' }}
          >
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', borderRadius: '3px', padding: '0.2vw', flexShrink: 0 }}>
              {icon}
            </span>
            {label}
          </a>
        ))}
      </div>

      {/* Footer columns */}
      {cols.map((col) => (
        <div key={col.heading}>
          {/* Column heading */}
          <span
            style={{
              position: 'absolute',
              left: col.left,
              top: '20.37%',
              fontFamily: "'D-DINCondensed-Bold', sans-serif",
              fontSize: '0.84vw',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#ffffff',
            }}
          >
            {col.heading}
          </span>

          {/* List items */}
          {col.items.map(({ label, target }, j) => (
            <a
              key={label}
              href="#"
              onClick={(e) => { e.preventDefault(); if (target === 'contact') openContact(); else if (target === 'what-is-lw3') navigate('/what-is-lw3', { state: { scrollY: window.scrollY } }); else if (target === 'brand') { navigate('.', { replace: true, state: { restoreScrollY: window.scrollY } }); navigate('/brand'); } else goToSection(target) }}
              style={{
                ...TEXT_SM,
                left: col.left,
                top: ITEM_TOPS[j],
                textDecoration: 'none',
                opacity: 0.7,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.textDecoration = 'underline'; e.currentTarget.style.textUnderlineOffset = '3px' }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.textDecoration = 'none' }}
            >
              {label}
            </a>
          ))}
        </div>
      ))}
    </footer>
  )
}
