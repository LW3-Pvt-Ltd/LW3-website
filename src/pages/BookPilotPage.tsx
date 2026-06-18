import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setSeoMeta } from '../lib/seo'
import AltNavbar from '../components/AltNav/AltNavbar'
import FooterSection from '../components/Footer/FooterSection'
import MobileFooter from '../components/Mobile/MobileFooter'
import WhatsAppButton from '../components/WhatsAppButton'

const seo = {
  title: 'Book a Pilot | LW3 - Logistics W3',
  description: 'Start a pilot programme with LW3 — battery passport and compliance platform.',
  canonicalUrl: 'https://www.lw3.world/book-pilot',
  ogType: 'website',
  keywords: 'LW3 pilot, battery passport pilot, logistics W3 pilot programme',
}

const LABEL: React.CSSProperties = {
  display: 'block',
  fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
  fontSize: '11px',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.4)',
  marginBottom: '8px',
}

const INPUT: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '0',
  padding: '14px 16px',
  fontFamily: "'D-DIN', sans-serif",
  fontSize: '16px',
  color: '#ffffff',
  outline: 'none',
  boxSizing: 'border-box',
  WebkitAppearance: 'none',
}

const CHEVRON = (
  <svg width="11" height="7" viewBox="0 0 12 8" fill="none">
    <path d="M1 1l5 5 5-5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
  </svg>
)

function CustomSelect({ options, value, onChange }: {
  options: string[]
  value: string
  onChange: (v: string) => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  return (
    <div ref={ref} style={{ position: 'relative', width: '100%' }}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          ...INPUT,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          cursor: 'pointer', color: value ? '#ffffff' : 'rgba(255,255,255,0.3)',
        }}
      >
        <span>{value || 'Select'}</span>
        <span style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}>
          {CHEVRON}
        </span>
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 2px)', left: 0, right: 0,
          background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.12)',
          zIndex: 100, boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
        }}>
          {options.map(opt => (
            <div
              key={opt}
              onClick={() => { onChange(opt); setOpen(false) }}
              style={{
                padding: '14px 16px', fontFamily: "'D-DIN', sans-serif", fontSize: '15px',
                color: value === opt ? '#ffffff' : 'rgba(255,255,255,0.65)',
                background: value === opt ? 'rgba(255,255,255,0.08)' : 'transparent',
                cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const ROLE_OPTIONS = [
  'Battery Manufacturer', 'EV OEM', 'Recycler / Reverse Logistics',
  'Compliance Officer', 'ESG / Sustainability', 'Government / Policy', 'Other',
]

const BATTERY_OPTIONS = [
  'EV Battery', 'LMT Battery', 'Industrial Battery', 'Stationary Storage', 'Not Sure Yet',
]

export default function BookPilotPage() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [batteryType, setBatteryType] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    setSeoMeta(seo)
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'Book a Pilot', name, company, email, role, batteryType, message }),
      })
      if (res.ok) {
        setStatus('success')
        setName(''); setCompany(''); setEmail(''); setRole(''); setBatteryType(''); setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const submitBtn = status === 'success' ? (
    <div style={{ textAlign: 'center', padding: '24px 0' }}>
      <p style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: '1.1rem', color: '#1D9E75', marginBottom: '8px' }}>Pilot request submitted.</p>
      <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>Our team will reach out within two business days to scope the engagement.</p>
    </div>
  ) : (
    <button
      type="submit"
      disabled={status === 'sending'}
      style={{
        width: '100%', padding: '18px', background: '#f0ede8', border: 'none', borderRadius: '0',
        fontFamily: "'D-DIN', sans-serif", fontSize: '1rem', color: '#0d0e1a',
        cursor: status === 'sending' ? 'not-allowed' : 'pointer',
        opacity: status === 'sending' ? 0.6 : 1, marginTop: '8px',
      }}
    >
      {status === 'sending' ? 'Sending...' : 'Submit pilot request'}
    </button>
  )

  const mobileTopBar = (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: '60px', background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      padding: '0 20px', display: 'flex', alignItems: 'center', gap: '12px',
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
      <img src="/Latest updated logo.svg" alt="LW3" style={{ height: '24px', width: 'auto', marginLeft: 'auto' }} draggable={false} />
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', background: '#0A0A08', color: '#ffffff' }}>

      {/* ── Desktop ── */}
      <div className="hidden md:block">
        <AltNavbar visible={true} />
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: 'max(6vw, 80px) 48px 100px' }}>
          <p style={{
            fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif", fontSize: '11px',
            letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '10px',
          }}>Pilot Programme</p>
          <h1 style={{
            fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(32px, 3vw, 52px)',
            fontWeight: 700, color: '#ffffff', margin: '0 0 12px', lineHeight: 1.05,
          }}>Book a pilot.</h1>
          <p style={{
            fontFamily: "'D-DIN', sans-serif", fontSize: '16px',
            color: 'rgba(255,255,255,0.4)', marginBottom: '48px', lineHeight: 1.6, maxWidth: '520px',
          }}>
            Pilots typically run 8–12 weeks. Our team will reach out within two business days to scope the engagement.
          </p>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '40px' }} />
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={LABEL}>Name</label>
                <input style={INPUT} placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div>
                <label style={LABEL}>Company</label>
                <input style={INPUT} placeholder="Company name" value={company} onChange={e => setCompany(e.target.value)} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={LABEL}>Work Email</label>
                <input type="email" style={INPUT} placeholder="Work email" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div>
                <label style={LABEL}>Role</label>
                <CustomSelect options={ROLE_OPTIONS} value={role} onChange={setRole} />
              </div>
            </div>
            <div>
              <label style={LABEL}>Battery Type</label>
              <CustomSelect options={BATTERY_OPTIONS} value={batteryType} onChange={setBatteryType} />
            </div>
            <div>
              <label style={LABEL}>Pilot Objective</label>
              <textarea
                rows={4}
                placeholder="Describe your pilot goals, timelines, or any specific compliance requirements..."
                style={{ ...INPUT, resize: 'none', fontFamily: "'D-DIN', sans-serif" }}
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>
            {submitBtn}
            {status === 'error' && (
              <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: '13px', color: '#FF6663', textAlign: 'center' }}>
                Something went wrong. Please try again.
              </p>
            )}
            <WhatsAppButton />
          </form>
        </div>
        <FooterSection />
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden">
        {mobileTopBar}
        <div style={{ padding: '80px 24px 64px' }}>
          <p style={{
            fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif", fontSize: '11px',
            letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '10px',
          }}>Pilot Programme</p>
          <h1 style={{
            fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: '2.2rem',
            fontWeight: 700, color: '#ffffff', margin: '0 0 12px', lineHeight: 1.05,
          }}>Book a pilot.</h1>
          <p style={{
            fontFamily: "'D-DIN', sans-serif", fontSize: '14px',
            color: 'rgba(255,255,255,0.4)', marginBottom: '36px', lineHeight: 1.6,
          }}>
            Pilots typically run 8–12 weeks.
          </p>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '32px' }} />
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={LABEL}>Name</label>
              <input style={INPUT} placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
              <label style={LABEL}>Company</label>
              <input style={INPUT} placeholder="Company name" value={company} onChange={e => setCompany(e.target.value)} />
            </div>
            <div>
              <label style={LABEL}>Work Email</label>
              <input type="email" style={INPUT} placeholder="Work email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <label style={LABEL}>Role</label>
              <CustomSelect options={ROLE_OPTIONS} value={role} onChange={setRole} />
            </div>
            <div>
              <label style={LABEL}>Battery Type</label>
              <CustomSelect options={BATTERY_OPTIONS} value={batteryType} onChange={setBatteryType} />
            </div>
            <div>
              <label style={LABEL}>Pilot Objective</label>
              <textarea
                rows={4}
                placeholder="Describe your pilot goals, timelines, or any specific compliance requirements..."
                style={{ ...INPUT, resize: 'none', fontFamily: "'D-DIN', sans-serif" }}
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>
            {submitBtn}
            {status === 'error' && (
              <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: '13px', color: '#FF6663', textAlign: 'center' }}>
                Something went wrong. Please try again.
              </p>
            )}
            <WhatsAppButton />
          </form>
        </div>
        <MobileFooter />
      </div>

    </div>
  )
}
