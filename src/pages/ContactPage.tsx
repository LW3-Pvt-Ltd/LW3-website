import { useState, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setSeoMeta } from '../lib/seo'
import AltNavbar from '../components/AltNav/AltNavbar'
import FooterSection from '../components/Footer/FooterSection'
import MobileFooter from '../components/Mobile/MobileFooter'
import WhatsAppButton from '../components/WhatsAppButton'

const seo = {
  title: 'Contact | LW3 - Logistics W3',
  description: 'Get in touch with LW3 — battery passport and compliance platform.',
  canonicalUrl: 'https://www.lw3.world/contact',
  ogType: 'website',
  keywords: 'LW3 contact, Logistics W3 contact, battery passport contact',
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

export default function ContactPage() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [organisation, setOrganisation] = useState('')
  const [subject, setSubject] = useState('')
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
        body: JSON.stringify({ formType: 'Contact Us', name, email, organisation, subject, message }),
      })
      if (res.ok) {
        setStatus('success')
        setName(''); setEmail(''); setOrganisation(''); setSubject(''); setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const submitBtn = status === 'success' ? (
    <div style={{ textAlign: 'center', padding: '24px 0' }}>
      <p style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: '1.1rem', color: '#1D9E75', marginBottom: '8px' }}>Message sent.</p>
      <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>We'll get back to you within one business day.</p>
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
      {status === 'sending' ? 'Sending...' : 'Send message'}
    </button>
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
          }}>Contact</p>
          <h1 style={{
            fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(32px, 3vw, 52px)',
            fontWeight: 700, color: '#ffffff', margin: '0 0 12px', lineHeight: 1.05,
          }}>Get in touch.</h1>
          <p style={{
            fontFamily: "'D-DIN', sans-serif", fontSize: '16px',
            color: 'rgba(255,255,255,0.4)', marginBottom: '48px', lineHeight: 1.6, maxWidth: '520px',
          }}>
            We typically respond within one business day.
          </p>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '40px' }} />
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={LABEL}>Name</label>
                <input style={INPUT} placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div>
                <label style={LABEL}>Organisation</label>
                <input style={INPUT} placeholder="Company or institution" value={organisation} onChange={e => setOrganisation(e.target.value)} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={LABEL}>Email</label>
                <input type="email" style={INPUT} placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div>
                <label style={LABEL}>Subject</label>
                <input style={INPUT} placeholder="How can we help?" value={subject} onChange={e => setSubject(e.target.value)} />
              </div>
            </div>
            <div>
              <label style={LABEL}>Message</label>
              <textarea
                rows={5}
                placeholder="Tell us what you're working on..."
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

        <div style={{ padding: '80px 24px 64px' }}>
          <p style={{
            fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif", fontSize: '11px',
            letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '10px',
          }}>Contact</p>
          <h1 style={{
            fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: '2.2rem',
            fontWeight: 700, color: '#ffffff', margin: '0 0 12px', lineHeight: 1.05,
          }}>Get in touch.</h1>
          <p style={{
            fontFamily: "'D-DIN', sans-serif", fontSize: '14px',
            color: 'rgba(255,255,255,0.4)', marginBottom: '36px', lineHeight: 1.6,
          }}>
            We typically respond within one business day.
          </p>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '32px' }} />
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={LABEL}>Name</label>
              <input style={INPUT} placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
              <label style={LABEL}>Organisation</label>
              <input style={INPUT} placeholder="Company or institution" value={organisation} onChange={e => setOrganisation(e.target.value)} />
            </div>
            <div>
              <label style={LABEL}>Email</label>
              <input type="email" style={INPUT} placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <label style={LABEL}>Subject</label>
              <input style={INPUT} placeholder="How can we help?" value={subject} onChange={e => setSubject(e.target.value)} />
            </div>
            <div>
              <label style={LABEL}>Message</label>
              <textarea
                rows={4}
                placeholder="Tell us what you're working on..."
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
