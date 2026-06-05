// What is LW3 - desktop unchanged from last commit, mobile-only additions below
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VectorFieldInline from '../VectorField/VectorFieldInline'

const METRICS = [
  { value: '5',    label: 'Global Recognitions' },
  { value: '3',    label: 'Awards Won' },
  { value: '80%',  label: 'BPAN Alignment in Pilots' },
  { value: '2',    label: 'Continents Served (India & EU)' },
  { value: '2027', label: 'EU Battery Passport Mandatory Deadline' },
]

const TECH_ARTICLES = [
  { label: 'Post Quantum Secure Blockchain', path: '/post-quantum/1' },
  { label: 'Phygital Identity (IoT)',        path: '/phygital-iot/1' },
  { label: 'Carbon Footprint Engine',        path: '/carbon-footprint/1' },
  { label: 'Agentic AI Intelligence',        path: '/agentic-ai/1' },
  { label: 'Near Zero Carbon Infrastructure',path: '/near-zero-carbon/1' },
  { label: 'Supply Chain Finance',           path: '/supply-chain-finance/1' },
]

const REGULATIONS = [
  'EU Battery Regulation (2023/1542)',
  'ESPR - Ecodesign for Sustainable Products',
  'EUDR - EU Deforestation Regulation',
  'CIRPASS EU Standardisation',
  'India Battery Adhaar (BPAN)',
  'Battery Waste Management Rules',
  'EU Post-Quantum Cryptography Mandate',
  'NIS2 Directive',
]

const USE_CASES = [
  'EV Battery Traceability',
  'Digital Product Passport Compliance',
  'Carbon Footprint Declaration',
  'Second-Life Battery Assessment',
  'Supply Chain Finance & Working Capital',
  'Product Recall Management',
  'Battery Waste Management',
  'Circular Economy Reporting',
]

const INSIGHTS_BLOGS = [
  { id: '1', title: 'Compliant by Design', desc: "How LW3's Battery Passport meets Europe's twin regulatory frontier - EU Battery Regulation and post-quantum cryptography mandates simultaneously." },
  { id: '2', title: 'Programmable Money Meets the Battery Passport', desc: 'How eRupee and USDC unlock financial traceability and an end-of-life marketplace for batteries.' },
  { id: '3', title: 'The Intelligent Passport', desc: 'How Agentic AI transforms EU Battery Compliance from record-keeping to real-time intelligence.' },
]

const INDUSTRY_BLOGS = [
  { id: '4', title: "Green Hydrogen's Digital Product Passport", desc: 'How digital product passports are revolutionising the green hydrogen supply chain - enhancing transparency, traceability, and certification.' },
  { id: '5', title: 'Global Product Traceability Regulations', desc: 'Key insights on product traceability regulations across the EU, US, and Asia-Pacific and what they mean for global supply chain compliance.' },
  { id: '6', title: 'Product Traceability for Food', desc: 'Tracking food products from origin to consumer - ensuring safety, building trust, and enabling rapid response when things go wrong.' },
  { id: '7', title: 'How Traceability Enhances Product Safety', desc: 'Traceability is a fundamental pillar of modern business survival. Blockchain, IoT, and digital passports are reshaping safety standards.' },
  { id: '8', title: 'Indian Battery Traceability: Battery Adhaar', desc: 'How Battery Adhaar and Indian regulations are building digital traceability infrastructure for battery manufacturers going global.' },
]

export default function SEOTextSection() {
  const navigate = useNavigate()
  const [regOpen, setRegOpen] = useState(false)
  const [useCaseOpen, setUseCaseOpen] = useState(false)

  const navBlog = (id: string, section: string) => navigate(`/blog/${id}`, { state: { from: 'what-is-lw3', scrollSection: section } })
  const navTech = (path: string) => navigate(path, { state: { from: 'what-is-lw3', scrollSection: 'core-technology' } })

  return (
    <section style={{ background: '#000', position: 'relative', overflow: 'hidden' }}>

      {/* ── Hero block — same on all sizes ── */}
      <div className="pt-0 md:pt-12" style={{ paddingLeft: '8.14%', paddingRight: '8.14%', paddingBottom: 'clamp(20px, 2.5vw, 32px)' }}>
        <p style={{ fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif", fontSize: 'clamp(11px, 0.84vw, 13px)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: '0 0 clamp(12px, 1.5vw, 20px)' }}>About</p>
        <h2 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(32px, 4.2vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 clamp(20px, 2.5vw, 36px)', maxWidth: '820px' }}>What is LW3?</h2>
        <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(14px, 1.15vw, 17px)', lineHeight: 1.85, color: 'rgba(255,255,255,0.65)', margin: 0, maxWidth: '680px' }}>
          LW3 is India's full-stack Battery Passport platform - built for the EU Battery Regulation (2023/1542), ESPR, and EUDR compliance. We combine post-quantum secure blockchain, agentic AI intelligence, and phygital IoT identity to deliver a digital product passport that meets the strictest regulatory requirements for EV batteries, industrial batteries, and energy storage systems. Our platform enables complete product traceability, carbon footprint tracking, and supply chain transparency - from raw material extraction through to second-life and recycling.
        </p>
      </div>

      {/* ── DESKTOP Metrics strip — 5 cols ── */}
      <div className="hidden md:grid" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', gridTemplateColumns: 'repeat(5, 1fr)', padding: 'clamp(28px, 3.5vw, 48px) 8.14%', gap: '0' }}>
        {METRICS.map(({ value, label }, i) => (
          <div key={label} style={{ borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none', paddingLeft: i > 0 ? 'clamp(20px, 2.5vw, 40px)' : '0' }}>
            <div style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(28px, 3.67vw, 52px)', lineHeight: 1, color: '#fff', letterSpacing: '-0.02em', marginBottom: '8px' }}>{value}</div>
            <div style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(11px, 0.84vw, 13px)', lineHeight: 1.4, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
          </div>
        ))}
      </div>

      {/* ── MOBILE Metrics — 2-col square boxes ── */}
      <div className="md:hidden flex" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', gap: '12px', padding: '24px 20px', alignItems: 'flex-start' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {METRICS.slice(0, 3).map(({ value, label }) => (
            <div key={label} style={{ aspectRatio: '1', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '12px' }}>
              <div style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: '28px', lineHeight: 1, color: '#fff', letterSpacing: '-0.02em' }}>{value}</div>
              <div style={{ fontFamily: "'D-DIN', sans-serif", fontSize: '10px', lineHeight: 1.4, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em', textAlign: 'center' }}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {METRICS.slice(3).map(({ value, label }) => (
            <div key={label} style={{ aspectRatio: '1', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '12px' }}>
              <div style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: '28px', lineHeight: 1, color: '#fff', letterSpacing: '-0.02em' }}>{value}</div>
              <div style={{ fontFamily: "'D-DIN', sans-serif", fontSize: '10px', lineHeight: 1.4, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em', textAlign: 'center' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP Three columns ── */}
      <div id="core-technology" className="hidden md:grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(24px, 3vw, 48px)', padding: 'clamp(40px, 5vw, 64px) 8.14% clamp(48px, 6vw, 80px)' }}>
        <div>
          <h3 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(11px, 0.84vw, 13px)', color: 'rgba(255,255,255,0.4)', margin: '0 0 clamp(16px, 1.5vw, 24px)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Core Technology</h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {TECH_ARTICLES.map(({ label, path }) => (
              <li key={label}><button onClick={() => navTech(path)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(13px, 1.05vw, 15px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, transition: 'color 0.2s ease' }} onMouseEnter={e => (e.currentTarget.style.color = '#fff')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>→ {label}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(11px, 0.84vw, 13px)', color: 'rgba(255,255,255,0.4)', margin: '0 0 clamp(16px, 1.5vw, 24px)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Regulatory Alignment</h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {REGULATIONS.map(item => <li key={item} style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(13px, 1.05vw, 15px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{item}</li>)}
          </ul>
        </div>
        <div>
          <h3 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(11px, 0.84vw, 13px)', color: 'rgba(255,255,255,0.4)', margin: '0 0 clamp(16px, 1.5vw, 24px)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Use Cases</h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {USE_CASES.map(item => <li key={item} style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(13px, 1.05vw, 15px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{item}</li>)}
          </ul>
        </div>
      </div>

      {/* ── MOBILE Regulatory Alignment accordion ── */}
      <div id="core-technology" className="block md:hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '0 20px' }}>
        <button onClick={() => setRegOpen(o => !o)} style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', borderBottom: regOpen ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>
          <h3 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: 0, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Regulatory Alignment</h3>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '16px', transform: regOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s ease', lineHeight: 1 }}>›</span>
        </button>
        {regOpen && <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '16px' }}>{REGULATIONS.map(item => <div key={item} style={{ fontFamily: "'D-DIN', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item}</div>)}</div>}
      </div>

      {/* ── MOBILE Use Cases accordion ── */}
      <div className="block md:hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '0 20px' }}>
        <button onClick={() => setUseCaseOpen(o => !o)} style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', borderBottom: useCaseOpen ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>
          <h3 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: 0, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Use Cases</h3>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '16px', transform: useCaseOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s ease', lineHeight: 1 }}>›</span>
        </button>
        {useCaseOpen && <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '16px' }}>{USE_CASES.map(item => <div key={item} style={{ fontFamily: "'D-DIN', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item}</div>)}</div>}
      </div>

      {/* ── MOBILE Core Technology rows ── */}
      <div className="block md:hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '20px 20px 0' }}>
        <h3 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: '0 0 12px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Core Technology</h3>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {TECH_ARTICLES.map(({ label, path }) => (
            <li key={label} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <button onClick={() => navTech(path)} style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 0', fontFamily: "'D-DIN', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.65)', textAlign: 'left', whiteSpace: 'nowrap', overflow: 'hidden', transition: 'color 0.2s ease' }}>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</span>
                <span style={{ opacity: 0.35, flexShrink: 0, marginLeft: '12px' }}>↗</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* ── DESKTOP From Our Insights ── */}
      <div id="from-insights" className="hidden md:block" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: 'clamp(40px, 5vw, 64px) 8.14% clamp(20px, 2.5vw, 32px)' }}>
        <h3 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(11px, 0.84vw, 13px)', color: 'rgba(255,255,255,0.4)', margin: '0 0 clamp(24px, 3vw, 40px)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>From Our Insights</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(20px, 2.5vw, 36px)' }}>
          {[
            { id: '1', tag1: 'Regulatory Intelligence', tag2: 'Post-Quantum Security', title: 'Compliant by Design', desc: "How LW3's Battery Passport meets Europe's twin regulatory frontier - EU Battery Regulation and post-quantum cryptography mandates simultaneously." },
            { id: '2', tag1: 'Embedded Finance', tag2: 'Battery Passport', title: 'Programmable Money Meets the Battery Passport', desc: 'How eRupee and USDC unlock financial traceability and an end-of-life marketplace for batteries.' },
            { id: '3', tag1: 'Agentic AI', tag2: 'Battery Regulation', title: 'The Intelligent Passport', desc: 'How Agentic AI transforms EU Battery Compliance from record-keeping to real-time intelligence.' },
          ].map(({ id, tag1, tag2, title, desc }) => (
            <div key={id} style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 'clamp(16px, 2vw, 24px)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(9px, 0.73vw, 11px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#000', background: '#fff', padding: '2px 8px' }}>{tag1}</span>
                <span style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(9px, 0.73vw, 11px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#000', background: '#fff', padding: '2px 8px' }}>{tag2}</span>
              </div>
              <div style={{ fontFamily: "'D-DINCondensed-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(14px, 1.26vw, 20px)', lineHeight: 1.2, color: '#fff' }}>{title}</div>
              <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(12px, 0.94vw, 14px)', lineHeight: 1.6, color: 'rgba(255,255,255,0.55)', margin: 0, flexGrow: 1 }}>{desc}</p>
              <button onClick={() => navBlog(id, 'from-insights')} style={{ alignSelf: 'flex-start', background: 'none', border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.6)', fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(10px, 0.84vw, 12px)', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 14px', cursor: 'pointer', transition: 'all 0.2s ease' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff' }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}>Read More</button>
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE From Our Insights carousel ── */}
      <div id="from-insights" className="block md:hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '24px 0 16px' }}>
        <h3 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: '0 0 16px', letterSpacing: '0.15em', textTransform: 'uppercase', paddingLeft: '20px' }}>From Our Insights</h3>
        <div style={{ display: 'flex', overflowX: 'auto', gap: '12px', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '8px', scrollbarWidth: 'none' }}>
          {INSIGHTS_BLOGS.map(({ id, title, desc }) => (
            <div key={id} style={{ border: '1px solid rgba(255,255,255,0.15)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', flexShrink: 0, width: '260px', boxSizing: 'border-box' }}>
              <div style={{ fontFamily: "'D-DINCondensed-Bold', 'D-DIN', sans-serif", fontSize: '18px', lineHeight: 1.2, color: '#fff' }}>{title}</div>
              <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,0.55)', margin: 0, flexGrow: 1 }}>{desc}</p>
              <button onClick={() => navBlog(id, 'from-insights')} style={{ alignSelf: 'flex-start', background: 'none', border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.6)', fontFamily: "'D-DIN', sans-serif", fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 14px', cursor: 'pointer' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff' }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}>Read More</button>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP Image — padded ── */}
      <div className="hidden md:block" style={{ margin: 'clamp(16px, 2vw, 28px) 8.14% clamp(32px, 4vw, 56px)', height: 'clamp(160px, 20vw, 320px)', overflow: 'hidden' }}>
        <img src="/what is lw3 image.webp" alt="What is LW3" draggable={false} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>

      {/* ── MOBILE Image — edge to edge ── */}
      <div className="block md:hidden" style={{ margin: '16px 0 24px', height: '180px', overflow: 'hidden' }}>
        <img src="/what is lw3 image.webp" alt="What is LW3" draggable={false} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>

      {/* ── DESKTOP Industry Perspectives ── */}
      <div id="industry-perspectives" className="hidden md:block" style={{ padding: '0 8.14% clamp(40px, 5vw, 64px)' }}>
        <h3 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(11px, 0.84vw, 13px)', color: 'rgba(255,255,255,0.4)', margin: '0 0 clamp(24px, 3vw, 40px)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Industry Perspectives</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(20px, 2.5vw, 36px)' }}>
          {[
            { id: '4', tag1: 'Digital Product Passport', tag2: 'Green Hydrogen', title: "Green Hydrogen's Digital Product Passport", desc: 'How digital product passports are revolutionising the green hydrogen supply chain - enhancing transparency, traceability, and certification.' },
            { id: '5', tag1: 'Traceability', tag2: 'Global Regulations', title: 'Global Product Traceability Regulations', desc: 'Key insights on product traceability regulations across the EU, US, and Asia-Pacific and what they mean for global supply chain compliance.' },
            { id: '6', tag1: 'Food Safety', tag2: 'Traceability', title: 'Product Traceability for Food', desc: 'Tracking food products from origin to consumer - ensuring safety, building trust, and enabling rapid response when things go wrong.' },
            { id: '7', tag1: 'Product Safety', tag2: 'Digital Passports', title: 'How Traceability Enhances Product Safety', desc: 'Traceability is a fundamental pillar of modern business survival. Blockchain, IoT, and digital passports are reshaping safety standards.' },
            { id: '8', tag1: 'Battery Adhaar', tag2: 'India', title: 'Indian Battery Traceability: Battery Adhaar', desc: 'How Battery Adhaar and Indian regulations are building digital traceability infrastructure for battery manufacturers going global.' },
          ].map(({ id, tag1, tag2, title, desc }) => (
            <div key={id} style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 'clamp(16px, 2vw, 24px)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(9px, 0.73vw, 11px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#000', background: '#fff', padding: '2px 8px' }}>{tag1}</span>
                <span style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(9px, 0.73vw, 11px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#000', background: '#fff', padding: '2px 8px' }}>{tag2}</span>
              </div>
              <div style={{ fontFamily: "'D-DINCondensed-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(14px, 1.26vw, 20px)', lineHeight: 1.2, color: '#fff' }}>{title}</div>
              <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(12px, 0.94vw, 14px)', lineHeight: 1.6, color: 'rgba(255,255,255,0.55)', margin: 0, flexGrow: 1 }}>{desc}</p>
              <button onClick={() => navBlog(id, 'industry-perspectives')} style={{ alignSelf: 'flex-start', background: 'none', border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.6)', fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(10px, 0.84vw, 12px)', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 14px', cursor: 'pointer', transition: 'all 0.2s ease' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff' }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}>Read More</button>
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE Industry Perspectives carousel ── */}
      <div id="industry-perspectives" className="block md:hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '24px 0 40px' }}>
        <h3 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: '0 0 16px', letterSpacing: '0.15em', textTransform: 'uppercase', paddingLeft: '20px' }}>Industry Perspectives</h3>
        <div style={{ display: 'flex', overflowX: 'auto', gap: '12px', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '8px', scrollbarWidth: 'none' }}>
          {INDUSTRY_BLOGS.map(({ id, title, desc }) => (
            <div key={id} style={{ border: '1px solid rgba(255,255,255,0.15)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', flexShrink: 0, width: '260px', boxSizing: 'border-box' }}>
              <div style={{ fontFamily: "'D-DINCondensed-Bold', 'D-DIN', sans-serif", fontSize: '18px', lineHeight: 1.2, color: '#fff' }}>{title}</div>
              <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,0.55)', margin: 0, flexGrow: 1 }}>{desc}</p>
              <button onClick={() => navBlog(id, 'industry-perspectives')} style={{ alignSelf: 'flex-start', background: 'none', border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.6)', fontFamily: "'D-DIN', sans-serif", fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 14px', cursor: 'pointer' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff' }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}>Read More</button>
            </div>
          ))}
        </div>
      </div>

      {/* ── Vector field break before awards ── */}
      <div style={{ padding: '0 8.14%' }}>
        <VectorFieldInline />
      </div>

      {/* ── Awards strip — same on all sizes ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: 'clamp(24px, 3vw, 40px) 8.14%' }}>
        <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(12px, 0.94vw, 14px)', lineHeight: 1.8, color: 'rgba(255,255,255,0.35)', margin: 0 }}>
          DPIIT Reg. No. 121125 - Incubated at T-Hub, Hyderabad - Top 3 Global - Cardano Venture Hub (Feb 2023) - Global Startup Pitch Winner (Dec 2023) - India-EU EV Battery Technologies Winner (Sep 2024) - TechBBQ Copenhagen Top 10 (Aug 2025) - Forbes DGEMS S200 Cohort (Nov 2025) - CIRPASS EU Standardisation Contributor
        </p>
      </div>

    </section>
  )
}
