import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { openRegulationTab } from '../NeedAndRegulation/NeedAndRegulationSection'

// ── Shared styles ─────────────────────────────────────────────────────────────
const H1: React.CSSProperties = {
  fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
  fontSize: '36px', fontWeight: 700, lineHeight: 1.05,
  color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.01em', margin: 0,
}
const H2: React.CSSProperties = {
  fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
  fontSize: '28px', fontWeight: 700, lineHeight: 1.1,
  color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.01em', margin: 0,
}
const BODY: React.CSSProperties = {
  fontFamily: "'D-DIN', sans-serif",
  fontSize: '16px', fontWeight: 400, lineHeight: 1.6, color: '#ffffff', margin: 0,
}
const LABEL_SM: React.CSSProperties = {
  fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
  fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.5)',
}
const CTA: React.CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  width: '100%', padding: '16px',
  border: '1px solid #ffffff', background: 'transparent', color: '#ffffff',
  fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
  fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase',
  cursor: 'pointer', transition: 'background 0.2s, color 0.2s',
}
const CTA_FILLED: React.CSSProperties = {
  ...CTA, background: '#f0ede8', border: 'none', color: '#0d0e1a',
}
const TEAL_BADGE: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', padding: '4px 10px',
  background: 'rgba(29,158,117,0.15)', border: '1px solid rgba(29,158,117,0.30)',
  fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
  fontSize: '11px', letterSpacing: '0.06em', color: '#ffffff', whiteSpace: 'nowrap',
}
const SECTION: React.CSSProperties = {
  minHeight: '100dvh', background: '#000000', padding: '80px 24px 40px',
  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
  boxSizing: 'border-box', borderTop: '1px solid rgba(255,255,255,0.2)',
}

// ── Regulation items (hero rotation) ─────────────────────────────────────────
const REGULATION_ITEMS = [
  'Regulation (EU) 2023/1542', 'BPAN Draft Guidelines (upcoming)',
  'EU DPP Mandatory Deadline', 'ESPR Regulation:(EU) 2024/1781',
  'CRMA Regulation:(EU) 2024/1252',
]

// ── MADPP tabs ────────────────────────────────────────────────────────────────
const MADPP_TABS = [
  {
    id: 'snap-madpp-0', label: 'MADPP',
    heading: 'Most Advanced Digital Product Passport',
    desc: 'Secure your present compliance and prepare for future regulations on a unified platform across multiple regions.',
    stats: [
      { label: 'Smart Contracts Deployed', value: '10+', badge: '100% on main net' },
      { label: 'Throughput', value: '10K TPS', badge: '+30%' },
      { label: 'Transaction Finality', value: '<3 S', badge: '2.8 S' },
      { label: 'DPP Issued', value: '20K', badge: '3, 5' },
    ],
    note: 'Leveraging asymmetric benefits for our partners via embedded emerging technologies PQS AI agent and post web UX.',
  },
  {
    id: 'snap-madpp-1', label: 'RTWF',
    heading: 'Real Time Work Flow',
    desc: 'See the anatomy of your workflows: every step taken, skipped, repeated, or delayed, displayed with precision.',
    stats: [
      { label: 'Monthly Battery Passport', value: '5400', badge: '' },
      { label: 'Average Mint Time', value: '2.8 sec', badge: 'per BPT' },
      { label: 'Average Error', value: '0.2%', badge: '' },
    ],
    note: '',
  },
  {
    id: 'snap-madpp-2', label: 'DDAt',
    heading: 'Data Driven Automation',
    desc: 'Prioritize the highest-impact reverse logistics workflows, eliminate manual custody handovers, and achieve EPR compliance with measurable, blockchain-verified ROI.',
    stats: [
      { label: 'Automation in Reverse Logistics', value: '30%', badge: '' },
      { label: 'Component Circularity', value: '2.8%', badge: '' },
    ],
    rows: [
      { label: 'Custody Transfer — QR scan to on-chain', pill: 'HIGH 94', pillColor: '#FF6663', savings: '96.0 h/mo' },
      { label: 'EPR compliance report generation', pill: 'HIGH 88', pillColor: '#FF6663', savings: '87.1 h/mo' },
      { label: 'Smart contract deposit & payout (E-INR)', pill: 'HIGH 82', pillColor: '#FF6663', savings: '63.3 h/mo' },
      { label: 'Battery passport field population', pill: 'MED 71', pillColor: '#FFDF2D', savings: '48.5 h/mo' },
      { label: 'CO₂e footprint calculation (CFF/PEF)', pill: 'MED 66', pillColor: '#FFDF2D', savings: '38.2 h/mo' },
      { label: 'Battery passport full automation', pill: 'FULL 100', pillColor: '#1D9E75', savings: '23.1 h/mo' },
    ],
    note: '',
  },
]

// ── Regulation timeline ───────────────────────────────────────────────────────
const TIMELINE = [
  { date: 'AUG 2023', label: 'EUBR enters force',                  tab: 'eubr'       as const },
  { date: 'FEB 2025', label: 'Carbon Declarations',                 tab: 'ibpan'      as const },
  { date: 'NOW',      label: 'Implementation window',               tab: 'implwindow' as const },
  { date: 'FEB 2027', label: 'Full DPP mandatory',                  tab: 'eudpp'      as const },
  { date: '2026–30',  label: 'EU Post-quantum cryptography mandate', tab: 'pqmandate'  as const },
  { date: '2030',     label: 'Circular Economy Phase',              tab: 'circular'   as const },
]

// ── Awards ────────────────────────────────────────────────────────────────────
const AWARDS = [
  { label: 'Global Startup Pitch Winner',           href: 'https://www.prnewswire.com/in/news-releases/algorand-awards-10-000-to-the-winner-of-creating-impact-pitch-competition-for-innovation-in-blockchain-302004296.html' },
  { label: 'India-EU EV Battery Technologies Winner', href: 'https://research-and-innovation.ec.europa.eu/news/all-research-and-innovation-news/six-companies-selected-europe-and-india-during-battery-recycling-technologies-matchmaking-event-2024-07-16_en' },
  { label: 'Forbes DGEMS S200 Cohort',              href: 'https://ms.forbesindia.com/dgems-forbes/select-200-of-2025/' },
  { label: 'TechBBQ Copenhagen Top 10',             href: 'https://www.linkedin.com/posts/lw3-private-limited_techbbq2025-nordicindia-circulareconomy-activity-7365292411100573696-TM3J/' },
  { label: 'CIRPASS EU Standardisation',            href: 'https://cirpassproject.eu/' },
  { label: 'Top 3 Global Cardano Venture Hub',      href: 'https://cardanofoundation.org/' },
]

// ── Blog insights ─────────────────────────────────────────────────────────────
const BLOGS = [
  { id: '1', slug: 'compliant-by-design', title: 'Compliant by design', desc: "How LW3's Battery Passport Meets Europe's Twin Regulatory Frontier", img: '/1 Insight you can act on Data you can trust.webp', tags: ['Regulatory Intelligence', 'Post-Quantum Security'] },
  { id: '2', slug: 'programmable-money-battery-passport', title: 'Programmable Money Meets the Battery Passport', desc: 'How eRupee and USDC Unlock Financial Traceability and an EoL Marketplace', img: '/2 Insight you can act on Data you can trust.webp', tags: ['Embedded Finance', 'Battery Passport'] },
  { id: '3', slug: 'intelligent-passport', title: 'The Intelligent Passport', desc: 'How Agentic AI Transforms EU Battery Compliance from Record-Keeping to Real-Time Intelligence', img: '/3 Insight you can act on Data you can trust.webp', tags: ['Agentic AI', 'Battery Regulation'] },
]

// ══════════════════════════════════════════════════════════════════════════════
// NAV OVERLAY
// ══════════════════════════════════════════════════════════════════════════════
function MobileNavOverlay({ onClose, scrollTo }: { onClose: () => void; scrollTo: (id: string) => void }) {
  const [expanded, setExpanded] = useState<string | null>(null)
  const navigate = useNavigate()

  const NAV_GROUPS = [
    {
      label: 'Product',
      items: [
        { label: 'Battery Passport', id: 'snap-bpap' },
        { label: 'Reverse Logistics', id: 'snap-ydnlyc' },
        { label: 'Compliance Automation', id: 'snap-uybpcer' },
      ],
    },
    {
      label: 'Technology',
      items: [
        { label: 'Agentic AI Intelligence', id: 'snap-madpp-0' },
        { label: 'PQ Secure Blockchain', id: 'snap-madpp-0' },
      ],
    },
    {
      label: 'Regulation',
      items: TIMELINE.map(t => ({ label: t.label, id: 'snap-gap', tab: t.tab })),
    },
    {
      label: 'About',
      items: [
        { label: 'What is LW3?', id: 'what-is-lw3' },
        { label: 'Brand Kit', id: 'brand' },
        { label: 'Awards', id: 'snap-bqegvir' },
        { label: 'Contact us', id: 'contact' },
      ],
    },
  ]

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: '#000000', display: 'flex', flexDirection: 'column',
      overflowY: 'auto',
    }}>
      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }}>
        <img src="/Latest updated logo.svg" alt="LW3" style={{ height: '32px', width: 'auto' }} draggable={false} />
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#ffffff', fontSize: '28px', cursor: 'pointer', lineHeight: 1, padding: '4px' }}>×</button>
      </div>

      {/* Nav groups */}
      <div style={{ flex: 1, padding: '16px 24px' }}>
        {NAV_GROUPS.map(group => (
          <div key={group.label} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <button
              onClick={() => setExpanded(expanded === group.label ? null : group.label)}
              style={{
                width: '100%', background: 'none', border: 'none', color: '#ffffff',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '18px 0',
                fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
                fontSize: '18px', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
              }}
            >
              {group.label}
              <span style={{ fontSize: '16px', opacity: 0.5, transform: expanded === group.label ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}>›</span>
            </button>
            {expanded === group.label && (
              <div style={{ paddingBottom: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {group.items.map(item => (
                  <button
                    key={item.label}
                    onClick={() => {
                      onClose()
                      if (item.id === 'contact') { navigate('/contact'); return }
                      if (item.id === 'what-is-lw3') { navigate('/what-is-lw3'); return }
                      if (item.id === 'brand') { navigate('/brand'); return }
                      scrollTo(item.id)
                      if ('tab' in item && item.tab) openRegulationTab(item.tab)
                    }}
                    style={{
                      background: 'none', border: 'none', color: 'rgba(255,255,255,0.65)',
                      textAlign: 'left', padding: '10px 0 10px 16px',
                      fontFamily: "'D-DIN', sans-serif", fontSize: '15px', cursor: 'pointer',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom CTAs */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', flexShrink: 0 }}>
        <button onClick={() => { onClose(); navigate('/book-demo') }} style={{ ...CTA_FILLED, fontSize: '14px' }}>Book a Demo</button>
        <button onClick={() => { onClose(); navigate('/contact') }} style={{ ...CTA, fontSize: '14px' }}>Contact Us</button>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// NAV BAR
// ══════════════════════════════════════════════════════════════════════════════
function MobileNavBar({ onMenu }: { onMenu: () => void }) {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: '60px', background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 24px',
    }}>
      <img src="/Latest updated logo.svg" alt="LW3" style={{ height: '28px', width: 'auto' }} draggable={false} />
      <button
        onClick={onMenu}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}
        aria-label="Menu"
      >
        <span style={{ display: 'block', width: '22px', height: '2px', background: '#ffffff' }} />
        <span style={{ display: 'block', width: '22px', height: '2px', background: '#ffffff' }} />
        <span style={{ display: 'block', width: '22px', height: '2px', background: '#ffffff' }} />
      </button>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// HERO
// ══════════════════════════════════════════════════════════════════════════════
function MobileHero() {
  const navigate = useNavigate()
  const [regIdx, setRegIdx] = useState(0)
  const [typed, setTyped] = useState('')
  const TYPING = ['Post Quantum Secured', 'Agentic AI']

  useEffect(() => {
    const t = setInterval(() => setRegIdx(i => (i + 1) % REGULATION_ITEMS.length), 3000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    let ti = 0, ci = 0
    let timer: ReturnType<typeof setTimeout>
    const type = () => {
      const cur = TYPING[ti]
      if (ci <= cur.length) { setTyped(cur.slice(0, ci++)); timer = setTimeout(type, 80) }
      else {
        timer = setTimeout(() => { setTyped(''); timer = setTimeout(() => { ti = (ti + 1) % TYPING.length; ci = 0; type() }, 400) }, 1500)
      }
    }
    type()
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{
      minHeight: '100dvh', background: '#000', position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      padding: '80px 24px 48px', boxSizing: 'border-box', scrollSnapAlign: 'start',
    }}>
      {/* Background video */}
      <video style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} autoPlay loop muted playsInline>
        <source src="/section1.webm" type="video/webm" />
        <source src="/section1.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p style={{ ...LABEL_SM, color: '#ffffff', opacity: 0.8, margin: 0, minHeight: '18px' }}>{typed}</p>
        <h1 style={{ ...H1, fontSize: '48px', letterSpacing: '2px' }}>Battery<br />Passport</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
          <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '16px', color: '#ffffff', flexShrink: 0 }}>for</span>
          <span style={{ fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif", fontSize: '13px', letterSpacing: '0.05em', color: '#ffffff', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {REGULATION_ITEMS[regIdx]}
          </span>
        </div>
        <p style={{ ...BODY, fontSize: '15px', color: 'rgba(255,255,255,0.8)', maxWidth: '340px' }}>
          Digital compliance infrastructure to issue, manage & verify battery passports to meet Global Battery Regulation requirements.
        </p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
          <button onClick={() => navigate('/book-demo')} style={{ ...CTA_FILLED, width: 'auto', padding: '14px 28px', fontSize: '13px' }}>Book a Demo</button>
          <button onClick={() => navigate('/contact')} style={{ ...CTA, width: 'auto', padding: '14px 24px', fontSize: '13px' }}>Contact Us</button>
        </div>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// NEED & REGULATION
// ══════════════════════════════════════════════════════════════════════════════
const REG_TAB_DATA: Record<string, { heading: string; subheading?: string; body: string; badge: string; knowMore?: boolean }> = {
  eubr:       { heading: 'EU Battery Regulation (2023/1542)', body: 'Replaces EU Battery Directive. Legal framework mandating battery passports for all EV, LMT, and industrial batteries over 2 kWh.', badge: 'LW3 Compliant' },
  ibpan:      { heading: 'India Battery Aadhaar (BPAN)', body: "India's national battery identity framework aligning with international DPP standards. LW3 achieved 80% alignment in pilot deployments.", badge: '80% Aligned in Pilots' },
  implwindow: { heading: 'Implementation Window', subheading: 'The Critical Preparation Phase', body: 'This is the active compliance window – the period to build the data infrastructure, supply chain traceability systems, and reporting pipelines needed before DPP mandates land. Companies that act now will be positioned to meet the Feb 2027 deadline.', badge: 'LW3 Targeted Completion', knowMore: true },
  eudpp:      { heading: 'EU DPP Mandatory Deadline', body: 'All EV, LMT and industrial batteries sold in or exported to the EU must carry a fully compliant digital product passport from this date.', badge: 'LW3 Targeted Completion' },
  pqmandate:  { heading: 'EU Post-quantum Cryptography Mandate', subheading: 'Quantum-Safe Infrastructure Required', body: 'Critical digital infrastructure — including DPP data platforms, battery registries, and authentication systems — must transition to post-quantum cryptographic standards.', badge: 'LW3 Targeted Completion' },
  circular:   { heading: 'Full Lifecycle Transparency', body: 'Mandatory disclosure of recycled content percentages, battery collection rates, and material recovery efficiency. Producers must demonstrate closed-loop accountability from raw material sourcing through to end-of-life processing.', badge: 'LW3 Targeted Completion' },
}

function MobileNeedReg() {
  const [view, setView] = useState<'penalty' | 'timeline' | 'detail'>('penalty')
  const [activeTab, setActiveTab] = useState<string | null>(null)

  return (
    <div style={{ ...SECTION, background: '#000', position: 'relative' }}>
      {/* Background video */}
      <video style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} autoPlay loop muted playsInline>
        <source src="/section2.webm" type="video/webm" />
        <source src="/section2.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} />

      <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Toggle */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {(['penalty', 'timeline'] as const).map(v => (
            <button key={v} onClick={() => setView(v)} style={{
              padding: '8px 16px', border: '1px solid rgba(255,255,255,0.4)',
              background: view === v || (view === 'detail' && v === 'timeline') ? '#ffffff' : 'transparent',
              color: view === v || (view === 'detail' && v === 'timeline') ? '#000000' : '#ffffff',
              fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
              fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer',
            }}>{v === 'penalty' ? 'The Risk' : 'Timeline'}</button>
          ))}
        </div>

        {view === 'penalty' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif", fontSize: '80px', fontWeight: 700, lineHeight: 1, color: '#ffffff' }}>4%</span>
              <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '28px', color: '#ffffff' }}>of</span>
            </div>
            <p style={{ ...LABEL_SM, color: '#ffffff', opacity: 1, fontSize: '13px' }}>Global Turnover</p>
            <h2 style={{ ...H2, fontSize: '24px' }}>GDPR Moment for Supply Chain is Here</h2>
            <p style={{ ...BODY, fontSize: '15px', color: 'rgba(255,255,255,0.85)' }}>
              Non-compliance with ESPR/EUDR regulations is subject to GDPR-style enforcement carrying financial penalties of up to 4% of global annual turnover, compounded by market bans and mandatory product recalls.
            </p>
          </div>
        ) : view === 'timeline' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {TIMELINE.map((item, i) => (
                <button
                  key={item.date}
                  onClick={() => { setActiveTab(item.tab); setView('detail') }}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                    padding: '14px 0', borderBottom: i < TIMELINE.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px',
                  }}
                >
                  <div>
                    <p style={{ ...LABEL_SM, color: 'rgba(255,255,255,0.6)', margin: '0 0 4px' }}>{item.date}</p>
                    <p style={{ fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif", fontSize: '16px', color: '#ffffff', margin: 0 }}>{item.label}</p>
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '18px', flexShrink: 0 }}>›</span>
                </button>
              ))}
              <p style={{ ...BODY, fontSize: '13px', color: 'rgba(255,255,255,0.55)', marginTop: '16px' }}>
                LW3 is a participant in the EU-funded CIRPASS standardisation initiative, featured in the Final Report D3.1 Annex V9 (March 2024).
              </p>
            </div>
          ) : activeTab && REG_TAB_DATA[activeTab] ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <button onClick={() => setView('timeline')} style={{
                background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center',
                gap: '6px', color: 'rgba(255,255,255,0.6)', fontFamily: "'D-DIN', sans-serif", fontSize: '13px', padding: 0,
              }}>‹ Back</button>
              <div>
                <h3 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: '20px', color: '#ffffff', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.01em' }}>
                  {REG_TAB_DATA[activeTab].heading}
                </h3>
                {REG_TAB_DATA[activeTab].subheading && (
                  <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '15px', color: 'rgba(255,255,255,0.7)', margin: '0 0 16px' }}>
                    {REG_TAB_DATA[activeTab].subheading}
                  </p>
                )}
              </div>
              <p style={{ ...BODY, fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                {REG_TAB_DATA[activeTab].body}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                <span style={{
                  display: 'inline-block', alignSelf: 'flex-start',
                  border: '1px solid rgba(29,158,117,0.6)', padding: '6px 14px', borderRadius: '2px',
                  fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif", fontSize: '12px',
                  color: 'rgba(29,158,117,1)', letterSpacing: '0.08em', textTransform: 'uppercase',
                }}>
                  {REG_TAB_DATA[activeTab].badge}
                </span>
                {REG_TAB_DATA[activeTab].knowMore && (
                  <a href="https://www.globalbattery.org/battery-passport/" target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-block', border: '1px solid #ffffff', padding: '6px 14px',
                    color: '#ffffff', textDecoration: 'none',
                    fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif", fontSize: '12px',
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                  }}>
                    Know More
                  </a>
                )}
              </div>
            </div>
          ) : null}
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// BQEGVIR — Built for the Quantum Era
// ══════════════════════════════════════════════════════════════════════════════
function MobileBQEGVIR() {
  const navigate = useNavigate()
  const TECHNOLOGIES = [
    { name: 'Phygital Identity', sub: 'IoT Layer',             path: '/blog/4/phygital-iot-identity' },
    { name: 'Near Zero Carbon Infrastructure', sub: '',         path: '/blog/5/near-zero-carbon-structure' },
    { name: 'Post Quantum Secure Blockchain', sub: 'PQC Standards', path: '/blog/8/post-quantum-secure-blockchain' },
    { name: 'Carbon Footprint Engine', sub: '',                 path: '/blog/9/carbon-footprint-engine' },
    { name: 'Agentic AI', sub: 'Real-time intelligence',       path: '/blog/6/agentic-ai-intelligence' },
    { name: 'Supply Chain Finance', sub: '',                    path: '/blog/7/supply-chain-finance' },
  ]
  return (
    <div style={{ ...SECTION, minHeight: 'auto', padding: '0', gap: '0', position: 'relative', overflow: 'hidden' }}>
      {/* Top bg image */}
      <div style={{ position: 'relative', width: '100%' }}>
        <img src="/bqegvir-top-bg.webp" alt="" draggable={false}
          style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
        <div style={{ position: 'absolute', inset: 0, padding: '80px 24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <h2 style={H2}>Built for the Quantum Era</h2>
          <p style={{ ...BODY, fontSize: '14px', color: 'rgba(255,255,255,0.75)', marginTop: '8px' }}>
            A full-stack cryptographic battery passport platform built for the circular economy.
          </p>
        </div>
      </div>

      {/* Technology grid */}
      <div style={{ padding: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', background: '#000' }}>
        {TECHNOLOGIES.map(t => (
          <button key={t.name} onClick={() => navigate(t.path)} style={{
            border: '1px solid rgba(255,255,255,0.2)', padding: '14px 12px',
            display: 'flex', flexDirection: 'column', gap: '4px',
            background: 'none', cursor: 'pointer', textAlign: 'left',
          }}>
            <p style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: '13px', color: '#ffffff', margin: 0, lineHeight: 1.2 }}>{t.name}</p>
            {t.sub && <p style={{ ...LABEL_SM, fontSize: '10px', margin: 0 }}>{t.sub}</p>}
          </button>
        ))}
      </div>

      {/* Bottom bg image + awards */}
      <div style={{ position: 'relative' }}>
        <img src="/bottom BQE GVIR.webp" alt="" draggable={false}
          style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} />
        <div style={{ position: 'absolute', inset: 0, padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
          <h2 style={{ ...H2, fontSize: '20px', margin: 0 }}>Globally Validated, India-Rooted</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {AWARDS.map(a => (
              <a key={a.label} href={a.href} target="_blank" rel="noopener noreferrer" style={{ ...TEAL_BADGE, fontSize: '11px', padding: '4px 10px', textDecoration: 'none', cursor: 'pointer' }}>{a.label}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// MADPP — tabs (MADPP / RTWF / DDAt)
// ══════════════════════════════════════════════════════════════════════════════
function MobileMADPP() {
  const navigate = useNavigate()
  const [active, setActive] = useState(0)
  const tab = MADPP_TABS[active]
  return (
    <div style={{ ...SECTION, position: 'relative', overflow: 'hidden' }}>
      <img src="/MADPP background.webp" alt="" draggable={false}
        style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.25 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', gap: '20px' }}>

        {/* Tab selector */}
        <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
          {MADPP_TABS.map((t, i) => (
            <button key={t.label} onClick={() => setActive(i)} style={{
              flex: 1, padding: '10px 4px', border: '1px solid rgba(255,255,255,0.3)',
              background: active === i ? '#ffffff' : 'transparent',
              color: active === i ? '#000' : '#ffffff',
              fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
              fontSize: '12px', letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer',
            }}>{t.label}</button>
          ))}
        </div>

        {/* Heading + desc */}
        <div style={{ flexShrink: 0 }}>
          <h2 style={H2}>{tab.heading}</h2>
          <p style={{ ...BODY, color: 'rgba(255,255,255,0.8)', marginTop: '10px' }}>{tab.desc}</p>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {tab.stats.map(s => (
            <div key={s.label} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}>
              <p style={{ ...LABEL_SM, fontSize: '11px', margin: 0 }}>{s.label}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontFamily: "'Winter Sans Trial', sans-serif", fontSize: '22px', color: '#ffffff' }}>{s.value}</span>
                {s.badge && <span style={{ ...TEAL_BADGE, fontSize: '10px' }}>{s.badge}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* DDAt automation rows */}
        {'rows' in tab && tab.rows && (
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0' }}>
            <p style={{ ...LABEL_SM, marginBottom: '8px' }}>Automation Impact</p>
            {tab.rows.map(r => (
              <div key={r.label} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', gap: '8px',
              }}>
                <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.8)', margin: 0, flex: 1, lineHeight: 1.3 }}>{r.label}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                  <span style={{ fontFamily: "'D-DINCondensed', sans-serif", fontSize: '10px', color: r.pillColor, border: `1px solid ${r.pillColor}`, padding: '2px 6px', whiteSpace: 'nowrap' }}>{r.pill}</span>
                  <span style={{ ...TEAL_BADGE, fontSize: '10px', background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)' }}>{r.savings}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Insight note */}
        {tab.note && (
          <p style={{ ...BODY, fontSize: '12px', color: 'rgba(255,255,255,0.5)', flexShrink: 0 }}>{tab.note}</p>
        )}

        <button onClick={() => navigate('/book-demo')} style={CTA}>Book a Demo</button>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// UYBPCER — Understand Your Battery Passport Compliance Effort Reduction
// ══════════════════════════════════════════════════════════════════════════════
function MobileUYBPCER() {
  const navigate = useNavigate()
  const features = [
    {
      label: 'For EUBR Compliance',
      items: [
        'Identification and basic information',
        'Performance and durability data',
        'Material composition and sourcing',
        'Battery carbon footprint calculation',
        'Traceability',
      ],
    },
    {
      label: 'Advanced Features',
      items: [
        'Co-pilot',
        'Vehicle passport readiness',
        'AI based performance class',
        'Multi-region interoperability',
      ],
    },
    {
      label: 'Post Quantum Layer',
      items: [
        'Post quantum secured smart contracts',
        'Embedded Finance',
        'Agentic AI assistance',
      ],
    },
    {
      label: 'Third Party Compliance',
      items: [
        'Through accredited, notified bodies and auditors in EU',
      ],
    },
    {
      label: 'Reverse Logistics',
      items: [
        'Handle time reduction',
        'Custody transfer QR scan to on-chain',
        'EPR compliance report generation',
      ],
    },
  ]
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div style={{ ...SECTION, position: 'relative', overflow: 'hidden' }}>
      <img src="/UYBPCER background.webp" alt="" draggable={false}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '37%', objectFit: 'cover', opacity: 0.5 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 40%, #000 100%)' }} />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '8px', flexShrink: 0 }}>
        <h2 style={{ ...H2, fontSize: '22px' }}>Understand Your Battery Passport Compliance Effort Reduction</h2>
        <p style={{ ...BODY, fontSize: '14px', color: 'rgba(255,255,255,0.75)', marginTop: '8px' }}>
          Prioritize the highest-impact reverse logistics workflows, eliminate manual custody handovers, and achieve EPR compliance with measurable, blockchain-verified ROI.
        </p>
      </div>
      <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', gap: '0', justifyContent: 'center' }}>
        {features.map((f, i) => (
          <div key={f.label} style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
            <button onClick={() => setOpen(open === i ? null : i)} style={{
              width: '100%', background: 'none', border: 'none', color: '#ffffff',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '14px 0', cursor: 'pointer',
              fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
              fontSize: '15px', letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>
              {f.label}
              <span style={{ opacity: 0.5, transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s', fontSize: '20px', flexShrink: 0 }}>›</span>
            </button>
            {open === i && (
              <div style={{ paddingBottom: '14px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {f.items.map(it => (
                  <p key={it} style={{ ...BODY, fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0, paddingLeft: '12px' }}>• {it}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/book-demo')} style={{ ...CTA, position: 'relative', zIndex: 1 }}>Book a Demo</button>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// YDNLYC — Your Data Never Leaves Your Control
// ══════════════════════════════════════════════════════════════════════════════
function MobileYDNLYC() {
  const navigate = useNavigate()
  return (
    <div style={{ ...SECTION, position: 'relative', overflow: 'hidden' }}>
      <img src="/YDNLYC background.webp" alt="" draggable={false}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right', opacity: 0.6 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }} />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '20px', flex: 1, justifyContent: 'center' }}>
        <h2 style={H1}>Your Data Never Leaves Your Control</h2>
        <p style={{ ...BODY, color: 'rgba(255,255,255,0.8)' }}>
          Encrypted in transit and at rest. Configurable access permissions. Full compliance with global privacy standards - so your team can move fast without cutting corners on security.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '8px' }}>
          {['Encrypted at rest', 'Encrypted in transit', 'Access controls', 'Privacy compliant'].map(f => (
            <div key={f} style={{ border: '1px solid rgba(255,255,255,0.4)', padding: '16px 14px', backdropFilter: 'blur(4px)' }}>
              <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: '14px', color: '#ffffff', margin: 0 }}>{f}</p>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => navigate('/book-demo')} style={{ ...CTA, position: 'relative', zIndex: 1 }}>Book a Demo</button>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// INSIGHT — blog cards
// ══════════════════════════════════════════════════════════════════════════════
function MobileInsight() {
  return (
    <div style={{
      height: '100dvh',
      background: '#000000',
      borderTop: '1px solid rgba(255,255,255,0.2)',
      display: 'flex', flexDirection: 'column',
      boxSizing: 'border-box', overflow: 'hidden',
    }}>
      <div style={{ padding: '80px 24px 16px', flexShrink: 0 }}>
        <p style={{ ...LABEL_SM, marginBottom: '12px' }}>LW3 Insights</p>
        <h2 style={H2}>Insight you can act on</h2>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 24px 40px', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {BLOGS.map((b) => (
            <Link key={b.id} to={`/blog/${b.id}/${b.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex', flexDirection: 'column', overflow: 'hidden',
              }}>
                <img src={b.img} alt="" draggable={false}
                  style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {b.tags.map(tag => (
                      <span key={tag} style={{
                        fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
                        fontSize: '11px', letterSpacing: '0.06em', textTransform: 'uppercase',
                        color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)',
                        padding: '3px 8px', whiteSpace: 'nowrap',
                      }}>{tag}</span>
                    ))}
                  </div>
                  <p style={{ ...LABEL_SM, marginTop: '8px', marginBottom: '2px' }}>April 2026 · LW3 Insights</p>
                  <h3 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: '16px', color: '#ffffff', margin: 0, lineHeight: 1.2 }}>{b.title}</h3>
                  <p style={{ ...BODY, fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.4 }}>{b.desc}</p>
                  <p style={{ ...LABEL_SM, color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>Read more →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// BPAP — Agentic Battery Passport
// ══════════════════════════════════════════════════════════════════════════════
function MobileBPAP() {
  const navigate = useNavigate()
  const features = [
    'Material to market visibility',
    'Structured compliance records',
    'Product-level emissions intelligence',
    'End-of-life and reverse flow coordination',
  ]
  return (
    <div style={{ ...SECTION, position: 'relative', overflow: 'hidden' }}>
      <video style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} autoPlay loop muted playsInline>
        <source src="/section3.webm" type="video/webm" />
        <source src="/section3.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '4px', flexShrink: 0 }}>
        <p style={{ ...LABEL_SM, margin: 0 }}>Agentic</p>
        <h1 style={{ ...H1 }}>Battery<br />Passport</h1>
      </div>
      <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0' }}>
        {features.map((f, i) => (
          <div key={f} style={{
            padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.12)',
            display: 'flex', alignItems: 'center', gap: '12px',
          }}>
            <span style={{ fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.4)', flexShrink: 0 }}>0{i + 1}</span>
            <p style={{ fontFamily: "'D-DINCondensed-Bold', 'D-DIN', sans-serif", fontSize: '16px', color: '#ffffff', margin: 0, lineHeight: 1.3 }}>{f}</p>
          </div>
        ))}
      </div>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '12px' }}>
        <button onClick={() => navigate('/book-demo')} style={{ ...CTA_FILLED, flex: 1 }}>Book a Demo</button>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// PARTNERS
// ══════════════════════════════════════════════════════════════════════════════
function MobilePartners() {
  return (
    <div style={{ ...SECTION, minHeight: 'auto', gap: '24px', padding: '48px 24px' }}>
      <h2 style={H2}>Our Partners</h2>
      <div style={{ overflow: 'hidden', position: 'relative', height: '120px' }}>
        <style>{`
          @keyframes mobilePartnersSlide {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .mobile-partners-track {
            display: flex;
            flex-direction: row;
            width: max-content;
            animation: mobilePartnersSlide 20s linear infinite;
          }
          .mobile-partners-track img {
            height: 120px;
            width: auto;
            display: block;
            flex-shrink: 0;
          }
        `}</style>
        <div className="mobile-partners-track">
          <img src="/Carousel frame.svg" alt="Partners" draggable={false} />
          <img src="/Carousel frame.svg" alt="" draggable={false} />
        </div>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// BATTERY STORY
// ══════════════════════════════════════════════════════════════════════════════
function MobileBatteryStory() {
  const navigate = useNavigate()
  const boxes = [
    { label: 'Upstream', sub: 'Supply Chain Due Diligence' },
    { label: 'Midstream', sub: 'Battery Passport EU Central Registry' },
    { label: 'Downstream', sub: 'Refurbishing, Repurposing, Recycling' },
  ]
  return (
    <div style={{ ...SECTION, position: 'relative', overflow: 'hidden' }}>
      <img src="/Battery Story background.webp" alt="" draggable={false}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
      <div style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>
        <h2 style={H1}>Battery<br />Story</h2>
        <p style={{ ...BODY, fontSize: '15px', color: 'rgba(255,255,255,0.75)', marginTop: '16px' }}>
          End-to-end battery lifecycle traceability — from raw material sourcing to end-of-life recovery.
        </p>
      </div>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, justifyContent: 'center' }}>
        {boxes.map(b => (
          <div key={b.label} style={{ border: '1px solid #ffffff', padding: '20px', display: 'flex', flexDirection: 'column', gap: '6px', backdropFilter: 'blur(4px)' }}>
            <p style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: '18px', color: '#ffffff', margin: 0 }}>{b.label}</p>
            <p style={{ ...BODY, fontSize: '14px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>{b.sub}</p>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/book-pilot')} style={{ ...CTA_FILLED, position: 'relative', zIndex: 1 }}>Book a Pilot</button>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// FOOTER
// ══════════════════════════════════════════════════════════════════════════════
function MobileFooter({ scrollTo }: { scrollTo: (id: string) => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null)
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
  const navigate = useNavigate()
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
              padding: '16px 24px',
              color: '#ffffff',
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
                  onClick={() => {
                    if (it.id === 'contact') { navigate('/contact'); return }
                    if (it.id === 'what-is-lw3') { navigate('/what-is-lw3'); return }
                    if (it.id === 'brand') { navigate('/brand'); return }
                    scrollTo(it.id)
                  }}
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
            { href: '#', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
          ].map(({ href, icon }, i) => (
            <a key={i} href={href} target={href === '#' ? undefined : '_blank'} rel="noopener noreferrer"
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

// ══════════════════════════════════════════════════════════════════════════════
// ROOT MOBILE APP
// ══════════════════════════════════════════════════════════════════════════════
export default function MobileApp() {
  const [navOpen, setNavOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  const scrollTo = (id: string) => {
    setNavOpen(false)
    const el = document.getElementById('mobile-' + id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (target) {
      const el = document.getElementById('mobile-' + target)
      if (el) el.scrollIntoView({ behavior: 'instant' })
    }
  }, [])

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#000', zIndex: 0 }}>
      <MobileNavBar onMenu={() => setNavOpen(true)} />
      {navOpen && <MobileNavOverlay onClose={() => setNavOpen(false)} scrollTo={scrollTo} />}

      {/* Scrollable sections */}
      <style>{`
        .mobile-scroll::-webkit-scrollbar { display: none; }
        .mobile-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <div
        ref={containerRef}
        className="mobile-scroll"
        style={{
          height: '100dvh', overflowY: 'scroll',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div id="mobile-snap-hero"><MobileHero /></div>
        <div id="mobile-snap-gap"><MobileNeedReg /></div>
        <div id="mobile-snap-bqegvir"><MobileBQEGVIR /></div>
        <div id="mobile-snap-madpp-0"><MobileMADPP /></div>
        <div id="mobile-snap-uybpcer"><MobileUYBPCER /></div>
        <div id="mobile-snap-ydnlyc"><MobileYDNLYC /></div>
        <div id="mobile-snap-insight"><MobileInsight /></div>
        <div id="mobile-snap-bpap"><MobileBPAP /></div>
        <div id="mobile-snap-partners"><MobilePartners /></div>
        <div id="mobile-snap-battery"><MobileBatteryStory /></div>
        <div id="mobile-snap-footer"><MobileFooter scrollTo={scrollTo} /></div>
        {/* Invisible SEO links — all 14 pages always in DOM for Google mobile indexing */}
        <div aria-hidden="true" style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0, overflow: 'hidden' }}>
          {[
            ['/blog/1/compliant-by-design', 'Compliant by Design'],
            ['/blog/2/programmable-money-battery-passport', 'Programmable Money Meets the Battery Passport'],
            ['/blog/3/intelligent-passport', 'The Intelligent Passport'],
            ['/blog/4/phygital-iot-identity', 'Phygital Identity IoT'],
            ['/blog/5/near-zero-carbon-structure', 'Near Zero Carbon Infrastructure'],
            ['/blog/6/agentic-ai-intelligence', 'Agentic AI Intelligence'],
            ['/blog/7/supply-chain-finance', 'Supply Chain Finance'],
            ['/blog/8/post-quantum-secure-blockchain', 'Post Quantum Secure Blockchain'],
            ['/blog/9/carbon-footprint-engine', 'Carbon Footprint Engine'],
            ['/blog/10/green-hydrogen-digital-product-passport', "Green Hydrogen's Digital Product Passport"],
            ['/blog/11/global-product-traceability-regulations', 'Global Product Traceability Regulations'],
            ['/blog/12/product-traceability-food', 'Product Traceability for Food'],
            ['/blog/13/traceability-product-safety', 'How Traceability Enhances Product Safety'],
            ['/blog/14/battery-aadhaar-indian-traceability', 'Battery Aadhaar Indian Battery Traceability'],
            ['/what-is-lw3', 'What is LW3'],
          ].map(([path, label]) => (
            <Link key={path} to={path} tabIndex={-1}>{label}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
