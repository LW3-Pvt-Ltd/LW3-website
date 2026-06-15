import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { setSeoMeta } from '../lib/seo'

const seo = {
  title: 'Book a Demo | LW3 - Logistics W3',
  description: 'Request a demo of LW3 battery passport and compliance platform.',
  canonicalUrl: 'https://www.lw3.world/book-demo',
  ogType: 'website',
  keywords: 'LW3 demo, battery passport demo, logistics W3 demo',
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          color: value ? '#ffffff' : 'rgba(255,255,255,0.3)',
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
                padding: '14px 16px',
                fontFamily: "'D-DIN', sans-serif",
                fontSize: '15px',
                color: value === opt ? '#ffffff' : 'rgba(255,255,255,0.65)',
                background: value === opt ? 'rgba(255,255,255,0.08)' : 'transparent',
                cursor: 'pointer',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
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

const INTEREST_OPTIONS = [
  'Battery Passport', 'Reverse Logistics', 'Compliance Engine',
  'Carbon Reporting', 'Full Platform',
]

export default function BookDemoPage() {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [interest, setInterest] = useState('')
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
      const res = await fetch('https://formspree.io/f/xqeowwla', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, company, email, role, interest, message }),
      })
      if (res.ok) {
        setStatus('success')
        setName(''); setCompany(''); setEmail(''); setRole(''); setInterest(''); setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0A0A08', color: '#ffffff', padding: '48px 24px 64px' }}>

      {/* Logo */}
      <div style={{ marginBottom: '40px' }}>
        <img src="/Latest updated logo.svg" alt="LW3" style={{ height: '28px', width: 'auto' }} />
      </div>

      {/* Header */}
      <p style={{
        fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
        fontSize: '11px',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.35)',
        marginBottom: '10px',
      }}>Request</p>

      <h1 style={{
        fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
        fontSize: '2.2rem',
        fontWeight: 700,
        color: '#ffffff',
        margin: '0 0 12px',
        lineHeight: 1.05,
      }}>Book a demo.</h1>

      <p style={{
        fontFamily: "'D-DIN', sans-serif",
        fontSize: '14px',
        color: 'rgba(255,255,255,0.4)',
        marginBottom: '36px',
        lineHeight: 1.6,
      }}>
        Tell us about your use case and we'll set up a session tailored to your needs.
      </p>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '32px' }} />

      {/* Form */}
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
          <label style={LABEL}>Primary Interest</label>
          <CustomSelect options={INTEREST_OPTIONS} value={interest} onChange={setInterest} />
        </div>

        <div>
          <label style={LABEL}>Message</label>
          <textarea
            rows={4}
            placeholder="Tell us where you are in your compliance journey..."
            style={{ ...INPUT, resize: 'none', fontFamily: "'D-DIN', sans-serif" }}
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <p style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: '1.1rem', color: '#1D9E75', marginBottom: '8px' }}>Inquiry sent.</p>
            <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>We'll be in touch within one business day.</p>
          </div>
        ) : (
          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              width: '100%',
              padding: '18px',
              background: '#f0ede8',
              border: 'none',
              borderRadius: '0',
              fontFamily: "'D-DIN', sans-serif",
              fontSize: '1rem',
              color: '#0d0e1a',
              cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              opacity: status === 'sending' ? 0.6 : 1,
              marginTop: '8px',
            }}
          >
            {status === 'sending' ? 'Sending...' : 'Send inquiry'}
          </button>
        )}

        {status === 'error' && (
          <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: '13px', color: '#FF6663', textAlign: 'center' }}>
            Something went wrong. Email us at abhijit.pegu@logisticsw3.com
          </p>
        )}

      </form>
    </div>
  )
}
