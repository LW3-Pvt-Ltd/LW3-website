import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useLayoutEffect, lazy, Suspense } from 'react'
import AltNavbar from '../components/AltNav/AltNavbar'
import RelatedLinksFooter from '../components/Blog/RelatedLinksFooter'
import { setSeoMeta, injectArticleSchema, injectBreadcrumbSchema, blog1Seo, blog2Seo, blog3Seo } from '../lib/seo'

const Blog1Content  = lazy(() => import('../components/Blog/Blog1Content'))
const Blog2Content  = lazy(() => import('../components/Blog/Blog2Content'))
const Blog3Content  = lazy(() => import('../components/Blog/Blog3Content'))
const Blog4Content  = lazy(() => import('../components/Blog/Blog4Content'))
const Blog5Content  = lazy(() => import('../components/Blog/Blog5Content'))
const Blog6Content  = lazy(() => import('../components/Blog/Blog6Content'))
const Blog7Content  = lazy(() => import('../components/Blog/Blog7Content'))
const Blog8Content  = lazy(() => import('../components/Blog/Blog8Content'))
const PhygitalIOT1Content       = lazy(() => import('../components/PhygitalIOT/PhygitalIOT1Content'))
const NearZeroCarbon1Content    = lazy(() => import('../components/NearZeroCarbon/NearZeroCarbon1Content'))
const AgenticAI1Content         = lazy(() => import('../components/AgenticAI/AgenticAI1Content'))
const SupplyChainFinance1Content = lazy(() => import('../components/SupplyChainFinance/SupplyChainFinance1Content'))
const PostQuantum1Content       = lazy(() => import('../components/PostQuantum/PostQuantum1Content'))
const CarbonFootprint1Content   = lazy(() => import('../components/CarbonFootprint/CarbonFootprint1Content'))

// Canonical slug for each blog id
export const BLOG_SLUGS: Record<string, string> = {
  '1':  'compliant-by-design',
  '2':  'programmable-money-battery-passport',
  '3':  'intelligent-passport',
  '4':  'phygital-iot-identity',
  '5':  'near-zero-carbon-structure',
  '6':  'agentic-ai-intelligence',
  '7':  'supply-chain-finance',
  '8':  'post-quantum-secure-blockchain',
  '9':  'carbon-footprint-engine',
  '10': 'green-hydrogen-digital-product-passport',
  '11': 'global-product-traceability-regulations',
  '12': 'product-traceability-food',
  '13': 'traceability-product-safety',
  '14': 'battery-aadhaar-indian-traceability',
}

// Map old legacy paths to canonical blog ids
const LEGACY_PATH_TO_ID: Record<string, string> = {
  '/phygital-iot':       '4',
  '/phygital-iot/1':     '4',
  '/near-zero-carbon':   '5',
  '/near-zero-carbon/1': '5',
  '/agentic-ai':         '6',
  '/agentic-ai/1':       '6',
  '/supply-chain-finance':   '7',
  '/supply-chain-finance/1': '7',
  '/post-quantum':       '8',
  '/post-quantum/1':     '8',
  '/carbon-footprint':   '9',
  '/carbon-footprint/1': '9',
}

const BLOG_COMPONENTS: Record<string, React.ComponentType> = {
  '1':  Blog1Content,
  '2':  Blog2Content,
  '3':  Blog3Content,
  '4':  PhygitalIOT1Content,
  '5':  NearZeroCarbon1Content,
  '6':  AgenticAI1Content,
  '7':  SupplyChainFinance1Content,
  '8':  PostQuantum1Content,
  '9':  CarbonFootprint1Content,
  '10': Blog4Content,
  '11': Blog5Content,
  '12': Blog6Content,
  '13': Blog7Content,
  '14': Blog8Content,
}

const seoMap: Record<string, { title: string; description: string; canonicalUrl: string; ogType: string; keywords: string }> = {
  '1':  { ...blog1Seo, canonicalUrl: 'https://www.lw3.world/blog/1/compliant-by-design', ogType: blog1Seo.ogType ?? 'article', keywords: blog1Seo.keywords ?? '' },
  '2':  { ...blog2Seo, canonicalUrl: 'https://www.lw3.world/blog/2/programmable-money-battery-passport', ogType: blog2Seo.ogType ?? 'article', keywords: blog2Seo.keywords ?? '' },
  '3':  { ...blog3Seo, canonicalUrl: 'https://www.lw3.world/blog/3/intelligent-passport', ogType: blog3Seo.ogType ?? 'article', keywords: blog3Seo.keywords ?? '' },
  '4':  { title: 'Phygital IoT Identity | LW3', description: 'How LW3 combines physical IoT sensors with digital identity to create tamper-proof battery passports.', canonicalUrl: 'https://www.lw3.world/blog/4/phygital-iot-identity', ogType: 'article', keywords: 'phygital IoT, battery passport, digital identity, IoT sensors, LW3' },
  '5':  { title: 'Near Zero Carbon Structure | LW3', description: 'How near-zero carbon infrastructure is reshaping battery lifecycle management and EU compliance.', canonicalUrl: 'https://www.lw3.world/blog/5/near-zero-carbon-structure', ogType: 'article', keywords: 'near zero carbon, carbon structure, battery regulation, sustainability, LW3' },
  '6':  { title: 'Agentic AI Intelligence | LW3', description: 'How agentic AI transforms EU battery compliance from record-keeping to real-time intelligence.', canonicalUrl: 'https://www.lw3.world/blog/6/agentic-ai-intelligence', ogType: 'article', keywords: 'agentic AI, battery passport, AI compliance, real-time intelligence, LW3' },
  '7':  { title: 'Supply Chain Finance | LW3', description: 'How eRupee and USDC unlock financial traceability and an end-of-life battery marketplace.', canonicalUrl: 'https://www.lw3.world/blog/7/supply-chain-finance', ogType: 'article', keywords: 'supply chain finance, battery passport, eRupee, USDC, embedded finance, LW3' },
  '8':  { title: 'Post Quantum Secure Blockchain | LW3', description: 'How post-quantum cryptography secures battery passport data against future quantum threats.', canonicalUrl: 'https://www.lw3.world/blog/8/post-quantum-secure-blockchain', ogType: 'article', keywords: 'post quantum, blockchain, battery passport, PQC, CRYSTALS, LW3' },
  '9':  { title: 'Carbon Footprint Engine | LW3', description: 'How LW3\'s carbon footprint engine automates lifecycle emissions tracking for battery compliance.', canonicalUrl: 'https://www.lw3.world/blog/9/carbon-footprint-engine', ogType: 'article', keywords: 'carbon footprint, battery regulation, lifecycle emissions, LW3, EU compliance' },
  '10': { title: "Green Hydrogen's Digital Product Passport | LW3", description: 'How digital product passports are revolutionising the green hydrogen supply chain.', canonicalUrl: 'https://www.lw3.world/blog/10/green-hydrogen-digital-product-passport', ogType: 'article', keywords: 'green hydrogen, digital product passport, supply chain transparency, blockchain' },
  '11': { title: 'Global Product Traceability Regulations | LW3', description: 'Key insights on global traceability regulations for supply chain compliance.', canonicalUrl: 'https://www.lw3.world/blog/11/global-product-traceability-regulations', ogType: 'article', keywords: 'product traceability regulations, global supply chain, ESPR, EU battery regulation' },
  '12': { title: 'Product Traceability for Food | LW3', description: 'Ensuring food safety and supply chain transparency through product traceability.', canonicalUrl: 'https://www.lw3.world/blog/12/product-traceability-food', ogType: 'article', keywords: 'food traceability, food safety, supply chain transparency, blockchain, RFID' },
  '13': { title: 'How Traceability Enhances Product Safety | LW3', description: 'How blockchain, IoT, and digital passports protect products, consumers and brands.', canonicalUrl: 'https://www.lw3.world/blog/13/traceability-product-safety', ogType: 'article', keywords: 'product safety, traceability, blockchain, IoT, digital product passport' },
  '14': { title: 'Battery Aadhaar: Indian Battery Traceability | LW3', description: 'How Battery Aadhaar and Indian regulations are building a digital traceability framework.', canonicalUrl: 'https://www.lw3.world/blog/14/battery-aadhaar-indian-traceability', ogType: 'article', keywords: 'Battery Aadhaar, BPAN, India battery traceability, EU battery regulation, EV battery' },
}

export default function BlogPage() {
  const { id, slug } = useParams<{ id: string; slug: string }>()
  const navigate = useNavigate()
  const location = useLocation()

  // Resolve blog id — handle legacy paths like /phygital-iot/1
  const resolvedId = LEGACY_PATH_TO_ID[location.pathname] ?? id ?? '1'
  const canonicalSlug = BLOG_SLUGS[resolvedId]
  const BlogContent = BLOG_COMPONENTS[resolvedId] ?? BLOG_COMPONENTS['1']
  const currentPath = `/blog/${resolvedId}/${canonicalSlug}`

  // Redirect legacy paths and slugless URLs to canonical
  useLayoutEffect(() => {
    const isLegacy = !!LEGACY_PATH_TO_ID[location.pathname]
    const missingSlug = !slug && !isLegacy
    if (isLegacy || missingSlug) {
      navigate(`/blog/${resolvedId}/${canonicalSlug}`, { replace: true })
      return
    }
    window.scrollTo(0, 0)
    const seo = seoMap[resolvedId] ?? seoMap['1']
    setSeoMeta(seo)
    injectArticleSchema(seo.title, seo.description, seo.canonicalUrl, '2026-04-01')
    injectBreadcrumbSchema([
      { name: 'Home', url: 'https://www.lw3.world/' },
      { name: 'Insights', url: 'https://www.lw3.world/' },
      { name: seo.title.split(' | ')[0], url: seo.canonicalUrl },
    ])
  }, [resolvedId, slug])

  const handleBack = () => {
    const from = (location.state as { from?: string; scrollSection?: string } | null)?.from
    const scrollSection = (location.state as { scrollSection?: string } | null)?.scrollSection
    if (from === 'blog') {
      const returnTo = (location.state as { returnTo?: string } | null)?.returnTo
      if (returnTo) navigate(returnTo)
      else navigate(-1)
    } else if (from === 'homepage-section') {
      navigate('/', { state: { scrollTo: (location.state as { scrollTo?: string } | null)?.scrollTo } })
    } else if (from === 'what-is-lw3') {
      navigate('/what-is-lw3', { state: { scrollSection } })
    } else if (from) {
      navigate('/', { state: { scrollTo: from } })
    } else {
      navigate(-1)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#000' }}>
      <div className="hidden md:block">
        <AltNavbar visible={true} />
      </div>

      <div className="flex items-center md:hidden" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '60px', background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        padding: '0 20px', gap: '12px',
      }}>
        <button
          onClick={handleBack}
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

      <div className="hidden md:block" style={{ paddingTop: '4.83vw' }}>
        <button
          onClick={handleBack}
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

      <div className="hidden md:block" style={{ padding: '0 8.14% clamp(48px, 6vw, 80px) 8.14%' }}>
        <Suspense fallback={<div style={{ color: '#fff', padding: '2vw' }}>Loading…</div>}>
          <BlogContent />
        </Suspense>
        <RelatedLinksFooter currentPath={currentPath} />
      </div>

      <div className="md:hidden" style={{ paddingTop: '60px', padding: '60px 20px clamp(40px, 8vw, 60px)', overflowX: 'hidden' }}>
        <Suspense fallback={<div style={{ color: '#fff', padding: '24px' }}>Loading…</div>}>
          <BlogContent />
        </Suspense>
        <RelatedLinksFooter currentPath={currentPath} />
      </div>
    </div>
  )
}
