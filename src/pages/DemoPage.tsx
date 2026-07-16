import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { setSeoMeta } from '../lib/seo'
import AltNavbar from '../components/AltNav/AltNavbar'
import FooterSection from '../components/Footer/FooterSection'
import MobileFooter from '../components/Mobile/MobileFooter'
import WhatsAppButton from '../components/WhatsAppButton'

const seo = {
  title: 'Demo | LW3 - Logistics W3',
  description: 'See LW3\'s battery passport and compliance platform in action.',
  canonicalUrl: 'https://www.lw3.world/ev/battery/passport/demo',
  ogType: 'website',
  keywords: 'LW3 demo, battery passport demo video, logistics W3 product demo',
}

function TypewriterHeading({ text, style }: { text: string; style: React.CSSProperties }) {
  const [display, setDisplay] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const obj = { i: 0 }
    setDisplay('')
    setDone(false)
    const tween = gsap.to(obj, {
      i: text.length,
      duration: text.length * 0.045,
      ease: 'none',
      onUpdate: () => setDisplay(text.slice(0, Math.round(obj.i))),
      onComplete: () => setDone(true),
    })
    return () => { tween.kill() }
  }, [text])

  return (
    <h1 style={style}>
      {display}
      <span
        style={{
          display: 'inline-block',
          width: '0.06em',
          marginLeft: '0.08em',
          background: '#ffffff',
          opacity: done ? 0 : 1,
          animation: done ? 'none' : 'demoCursorBlink 0.9s step-end infinite',
        }}
      >&nbsp;</span>
    </h1>
  )
}

const PlayIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M8 5v14l11-7L8 5z" fill="#0d0e1a" />
  </svg>
)

function VideoStage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const play = () => {
    setPlaying(true)
    videoRef.current?.play()
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 9',
        background: '#111',
        border: '1px solid rgba(255,255,255,0.1)',
        overflow: 'hidden',
      }}
    >
      <video
        ref={videoRef}
        controls={playing}
        playsInline
        poster="/demo-poster.jpg"
        onPause={() => setPlaying(false)}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', background: '#0a0a08' }}
      >
        <source src="/demo-video.webm" type="video/webm" />
      </video>

      {!playing && (
        <button
          onClick={play}
          aria-label="Play demo video"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.25)',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              width: '76px',
              height: '76px',
              borderRadius: '50%',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            }}
          >
            <span style={{ marginLeft: '4px', display: 'flex' }}>
              <PlayIcon />
            </span>
          </span>
        </button>
      )}
    </div>
  )
}

function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    gsap.set(el, { opacity: 0, y: 50 })
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) gsap.to(el, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
      else gsap.set(el, { opacity: 0, y: 50 })
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return <div ref={ref}>{children}</div>
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

function BookDemoForm({ mobile = false }: { mobile?: boolean }) {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [interest, setInterest] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'Book a Demo (Demo Page)', name, company, email, role, interest, message }),
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
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={mobile ? undefined : { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <label style={LABEL}>Name</label>
          <input style={INPUT} placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div style={mobile ? { marginTop: '20px' } : undefined}>
          <label style={LABEL}>Company</label>
          <input style={INPUT} placeholder="Company name" value={company} onChange={e => setCompany(e.target.value)} />
        </div>
      </div>

      <div>
        <label style={LABEL}>Work Email</label>
        <input type="email" style={INPUT} placeholder="Work email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>

      <div style={mobile ? undefined : { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <label style={LABEL}>Role</label>
          <CustomSelect options={ROLE_OPTIONS} value={role} onChange={setRole} />
        </div>
        <div style={mobile ? { marginTop: '20px' } : undefined}>
          <label style={LABEL}>Primary Interest</label>
          <CustomSelect options={INTEREST_OPTIONS} value={interest} onChange={setInterest} />
        </div>
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
            width: '100%', padding: '18px', background: mobile ? '#f0ede8' : '#ffffff', border: 'none', borderRadius: '0',
            fontFamily: "'D-DIN', sans-serif", fontSize: '1rem', color: '#0d0e1a',
            cursor: status === 'sending' ? 'not-allowed' : 'pointer',
            opacity: status === 'sending' ? 0.6 : 1, marginTop: '8px',
          }}
        >
          {status === 'sending' ? 'Sending...' : 'Book Demo'}
        </button>
      )}

      {status === 'error' && (
        <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: '13px', color: '#FF6663', textAlign: 'center' }}>
          Something went wrong. Please try again.
        </p>
      )}
      <WhatsAppButton />
    </form>
  )
}

export default function DemoPage() {
  const navigate = useNavigate()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    setSeoMeta(seo)
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#0A0A08', color: '#ffffff' }}>
      <style>{`@keyframes demoCursorBlink { 0%, 50% { opacity: 1; } 50.01%, 100% { opacity: 0; } }`}</style>

      {/* ── Desktop ── */}
      <div className="hidden md:block">
        <AltNavbar visible={true} />
        <div className="hidden md:block" style={{ paddingTop: '4.83vw' }}>
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4em',
              padding: '1vw 8.14%',
              fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
              fontSize: 'clamp(10px, 0.84vw, 14px)',
              color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              background: 'none', border: 'none', cursor: 'pointer',
            }}
          >
            ← Back
          </button>
        </div>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px 100px' }}>
          <p style={{
            fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif", fontSize: '11px',
            letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '10px',
          }}>Demo</p>
          <TypewriterHeading text="Watch the passport come to life" style={{
            fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(32px, 3vw, 52px)',
            fontWeight: 700, color: '#ffffff', margin: '0 0 12px', lineHeight: 1.05,
          }} />
          <p style={{
            fontFamily: "'D-DIN', sans-serif", fontSize: '16px',
            color: 'rgba(255,255,255,0.4)', marginBottom: '48px', lineHeight: 1.6, maxWidth: '560px',
          }}>
            A walkthrough of the battery passport and compliance platform, straight from the product.
          </p>
          <VideoStage />

          <ScrollReveal>
            <h2 style={{
              fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(24px, 2.2vw, 36px)',
              fontWeight: 700, color: '#ffffff', margin: '64px 0 32px', lineHeight: 1.1, textAlign: 'center',
            }}>Bring this to your fleet</h2>
            <div style={{ maxWidth: '640px', margin: '0 auto' }}>
              <BookDemoForm />
            </div>
          </ScrollReveal>
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
          <button
            onClick={() => navigate('/')}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#ffffff', display: 'flex', alignItems: 'center', gap: '6px',
              fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
              fontSize: '14px', letterSpacing: '0.06em', textTransform: 'uppercase', padding: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back
          </button>
          <img src="/Latest updated logo.svg" alt="LW3" style={{ height: '24px', width: 'auto', marginLeft: 'auto' }} draggable={false} />
        </div>

        <div style={{ padding: '80px 20px 64px' }}>
          <p style={{
            fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif", fontSize: '11px',
            letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '10px',
          }}>Demo</p>
          <TypewriterHeading text="Watch the passport come to life" style={{
            fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: '2.2rem',
            fontWeight: 700, color: '#ffffff', margin: '0 0 12px', lineHeight: 1.05,
          }} />
          <p style={{
            fontFamily: "'D-DIN', sans-serif", fontSize: '14px',
            color: 'rgba(255,255,255,0.4)', marginBottom: '32px', lineHeight: 1.6,
          }}>
            A walkthrough of the battery passport and compliance platform, straight from the product.
          </p>
          <VideoStage />

          <ScrollReveal>
            <h2 style={{
              fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: '1.6rem',
              fontWeight: 700, color: '#ffffff', margin: '48px 0 24px', lineHeight: 1.1, textAlign: 'center',
            }}>Bring this to your fleet</h2>
            <BookDemoForm mobile />
          </ScrollReveal>
        </div>
        <MobileFooter />
      </div>

    </div>
  )
}
