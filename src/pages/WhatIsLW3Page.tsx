import { useNavigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import AltNavbar from '../components/AltNav/AltNavbar'
import SEOTextSection from '../components/SEOText/SEOTextSection'
import { setSeoMeta, injectOrganisationSchema } from '../lib/seo'

const whatIsLW3Seo = {
  title: 'What is LW3? | Logistics W3 Battery Passport Platform',
  description: 'LW3 is India\'s full-stack Battery Passport platform — combining post-quantum blockchain, agentic AI, and IoT for EU Battery Regulation, ESPR, and EUDR compliance. Discover our technology, regulatory alignment, and use cases.',
  canonicalUrl: 'https://www.lw3.world/what-is-lw3',
  ogType: 'website',
  keywords: 'what is LW3, Logistics W3, battery passport platform, digital product passport, post-quantum blockchain, agentic AI, EV battery traceability, EU battery regulation, ESPR, EUDR, CIRPASS, Battery Adhaar, circular economy',
}

export default function WhatIsLW3Page() {
  const navigate = useNavigate()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    setSeoMeta(whatIsLW3Seo)
    injectOrganisationSchema()
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#000' }}>
      {/* Desktop navbar */}
      <div className="hidden md:block">
        <AltNavbar visible={true} />
      </div>

      {/* Mobile top bar */}
      <div className="flex items-center md:hidden" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '60px', background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        padding: '0 20px', gap: '12px',
      }}>
        <button onClick={() => navigate('/')} style={{
          background: 'none', border: 'none', cursor: 'pointer', color: '#ffffff',
          display: 'flex', alignItems: 'center', gap: '6px',
          fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
          fontSize: '14px', letterSpacing: '0.06em', textTransform: 'uppercase', padding: 0,
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </button>
        <img src="/Latest updated logo.svg" alt="LW3 Logistics W3" style={{ height: '24px', width: 'auto', marginLeft: 'auto' }} draggable={false} />
      </div>

      {/* Desktop back link */}
      <div className="hidden md:block" style={{ paddingTop: '4.83vw' }}>
        <button onClick={() => navigate('/')} style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4em',
          padding: '1vw 8.14%',
          fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
          fontSize: 'clamp(10px, 0.84vw, 14px)',
          color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em',
          textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer',
        }}>
          ← Back
        </button>
      </div>

      {/* Page content */}
      <div style={{ paddingTop: '60px' }} className="md:hidden" />
      <SEOTextSection />
    </div>
  )
}
