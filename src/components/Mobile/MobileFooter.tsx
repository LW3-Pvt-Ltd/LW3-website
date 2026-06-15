import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BODY: React.CSSProperties = {
  fontFamily: "'D-DIN', sans-serif",
  fontSize: '16px', fontWeight: 400, lineHeight: 1.6, color: '#ffffff', margin: 0,
}

const cols = [
  {
    heading: 'Product',
    items: [
      { label: 'Battery Passport', id: 'snap-bpap' },
      { label: 'Reverse Logistics', id: 'snap-ydnlyc' },
      { label: 'Compliance Automation', id: 'snap-uybpcer' },
    ],
  },
  {
    heading: 'Technology',
    items: [
      { label: 'Post Quantum Secure Blockchain', id: 'snap-madpp-0' },
      { label: 'Agentic AI', id: 'snap-madpp-0' },
    ],
  },
  {
    heading: 'About',
    items: [
      { label: 'What is LW3?', id: 'what-is-lw3' },
      { label: 'Brand Kit', id: 'brand' },
      { label: 'Awards', id: 'snap-bqegvir' },
      { label: 'Regulation', id: 'snap-gap' },
      { label: 'Contact us', id: 'contact' },
    ],
  },
]

export default function MobileFooter() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const navigate = useNavigate()

  function handleItem(id: string) {
    if (id === 'contact') { navigate('/contact'); return }
    if (id === 'what-is-lw3') { navigate('/what-is-lw3'); return }
    if (id === 'brand') { navigate('/brand'); return }
    sessionStorage.setItem('returnScrollY', '0')
    navigate('/', { state: { scrollTo: id } })
  }

  return (
    <div style={{ background: '#0A0A08', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
      {/* Logo + tagline */}
      <div style={{ padding: '36px 24px 24px' }}>
        <img src="/Latest updated logo.svg" alt="LW3" style={{ height: '32px', width: 'auto', marginBottom: '12px' }} draggable={false} />
        <p style={{ ...BODY, fontSize: '12px', color: 'rgba(255,255,255,0.45)', margin: 0, maxWidth: '260px' }}>
          Accelerating Sustainable Traceability. India's full-stack cryptographic battery passport platform.
        </p>
      </div>

      {/* Accordion sections */}
      {cols.map(col => (
        <div key={col.heading} style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <button
            onClick={() => setOpenSection(openSection === col.heading ? null : col.heading)}
            style={{
              width: '100%', background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '16px 24px', color: '#ffffff',
            }}
          >
            <span style={{ fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif", fontSize: '13px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{col.heading}</span>
            <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.4)', transform: openSection === col.heading ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s ease', lineHeight: 1 }}>›</span>
          </button>
          {openSection === col.heading && (
            <div style={{ padding: '0 24px 16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {col.items.map(it => (
                <button
                  key={it.label}
                  onClick={() => handleItem(it.id)}
                  style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.65)', textAlign: 'left', cursor: 'pointer', fontFamily: "'D-DIN', sans-serif", fontSize: '14px', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  {it.label}
                  <span style={{ opacity: 0.3, fontSize: '12px' }}>↗</span>
                </button>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Social icons */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '24px 24px 20px' }}>
        <p style={{ fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.45)', margin: '0 0 16px', letterSpacing: '0.04em' }}>
          The Battery Passport for Tomorrow's Economy
        </p>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {[
            { href: 'https://www.linkedin.com/company/lw3-private-limited/posts/?feedView=all', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
            { href: 'https://x.com/LW3India', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
            { href: 'https://www.instagram.com/lw3_pvt_ltd', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
            { href: 'https://www.youtube.com/channel/UCIWnQj24bl9fgRI0yj4-xkg', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
          ].map(({ href, icon }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.6, transition: 'opacity 0.2s' }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p style={{ ...BODY, fontSize: '11px', color: 'rgba(255,255,255,0.3)', margin: 0, padding: '16px 24px 36px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        DPIIT Reg. No. 121125 · Guwahati, Assam, India<br />Incubated at T-Hub, Hyderabad
      </p>
    </div>
  )
}
