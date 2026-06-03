// Blog page — renders CSS-based blog content components (converted from Figma design)
// Blog 1: node 1:720 | Blog 2: node 1:796 | Blog 3: node 1:888

import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useLayoutEffect, lazy, Suspense } from 'react'
import AltNavbar from '../components/AltNav/AltNavbar'
import RelatedLinksFooter from '../components/Blog/RelatedLinksFooter'
import { setSeoMeta, injectArticleSchema, injectBreadcrumbSchema, blog1Seo, blog2Seo, blog3Seo } from '../lib/seo'

const Blog1Content = lazy(() => import('../components/Blog/Blog1Content'))
const Blog2Content = lazy(() => import('../components/Blog/Blog2Content'))
const Blog3Content = lazy(() => import('../components/Blog/Blog3Content'))
const Blog4Content = lazy(() => import('../components/Blog/Blog4Content'))
const Blog5Content = lazy(() => import('../components/Blog/Blog5Content'))
const Blog6Content = lazy(() => import('../components/Blog/Blog6Content'))
const Blog7Content = lazy(() => import('../components/Blog/Blog7Content'))
const Blog8Content = lazy(() => import('../components/Blog/Blog8Content'))

const blog4Seo = { title: "Green Hydrogen's Digital Product Passport | LW3", description: 'How digital product passports are revolutionising the green hydrogen supply chain - enhancing transparency, traceability, and certification for a sustainable future.', canonicalUrl: 'https://www.lw3.world/blog/4', ogType: 'article', keywords: 'green hydrogen, digital product passport, supply chain transparency, blockchain, circular economy' }
const blog5Seo = { title: 'Global Product Traceability Regulations: Key Insights | LW3', description: 'Product traceability regulations vary across regions. Understanding EU, US and Asia-Pacific differences is essential for global supply chain compliance.', canonicalUrl: 'https://www.lw3.world/blog/5', ogType: 'article', keywords: 'product traceability regulations, global supply chain, ESPR, EU battery regulation, compliance' }
const blog6Seo = { title: 'Product Traceability for Food: Safety & Transparency | LW3', description: 'Ensuring food safety and supply chain transparency through product traceability - technologies, regulations, and benefits for businesses and consumers.', canonicalUrl: 'https://www.lw3.world/blog/6', ogType: 'article', keywords: 'food traceability, food safety, supply chain transparency, blockchain, RFID, IoT' }
const blog7Seo = { title: 'How Traceability Enhances Product Safety Standards | LW3', description: 'Traceability is a fundamental pillar of modern business survival. Discover how blockchain, IoT, and digital passports protect products, consumers and brands.', canonicalUrl: 'https://www.lw3.world/blog/7', ogType: 'article', keywords: 'product safety, traceability, blockchain, IoT, digital product passport, product recall' }
const blog8Seo = { title: 'Indian Battery Traceability: Battery Adhaar & Regulations | LW3', description: 'How Battery Adhaar and Indian regulations are building a digital traceability framework for battery manufacturers preparing for EU Battery Regulation compliance.', canonicalUrl: 'https://www.lw3.world/blog/8', ogType: 'article', keywords: 'Battery Adhaar, BPAN, India battery traceability, EU battery regulation, digital product passport, EV battery' }

const BLOG_COMPONENTS: Record<string, React.ComponentType> = {
  '1': Blog1Content,
  '2': Blog2Content,
  '3': Blog3Content,
  '4': Blog4Content,
  '5': Blog5Content,
  '6': Blog6Content,
  '7': Blog7Content,
  '8': Blog8Content,
}

const BLOG_SEO_MAP: Record<string, typeof blog1Seo> = {
  '4': blog4Seo, '5': blog5Seo, '6': blog6Seo, '7': blog7Seo, '8': blog8Seo,
}

export default function BlogPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const location = useLocation()
  const BlogContent = BLOG_COMPONENTS[id ?? '1'] ?? BLOG_COMPONENTS['1']

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

  const seoMap: Record<string, typeof blog1Seo> = { '1': blog1Seo, '2': blog2Seo, '3': blog3Seo, ...BLOG_SEO_MAP }
  const articleUrls: Record<string, string> = {
    '1': 'https://www.lw3.world/blog/1',
    '2': 'https://www.lw3.world/blog/2',
    '3': 'https://www.lw3.world/blog/3',
    '4': 'https://www.lw3.world/blog/4',
    '5': 'https://www.lw3.world/blog/5',
    '6': 'https://www.lw3.world/blog/6',
    '7': 'https://www.lw3.world/blog/7',
    '8': 'https://www.lw3.world/blog/8',
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    const seo = seoMap[id ?? '1'] ?? blog1Seo
    setSeoMeta(seo)
    injectArticleSchema(seo.title, seo.description, articleUrls[id ?? '1'] ?? articleUrls['1'], '2026-04-01')
    injectBreadcrumbSchema([{ name: 'Home', url: 'https://www.lw3.world/' }, { name: 'Insights', url: 'https://www.lw3.world/' }, { name: seo.title.split(' | ')[0], url: articleUrls[id ?? '1'] ?? articleUrls['1'] }])
  }, [id])

  return (
    <div style={{ minHeight: '100vh', background: '#000' }}>
      {/* Desktop navbar — hidden on mobile */}
      <div className="hidden md:block">
        <AltNavbar visible={true} />
      </div>

      {/* Mobile top bar — fixed, back arrow + logo */}
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

      {/* Desktop back link — sits below navbar */}
      <div className="hidden md:block" style={{ paddingTop: '4.83vw' }}>
        <button
          onClick={handleBack}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4em',
            padding: '1vw 8.14%',
            fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
            fontSize: 'clamp(10px, 0.84vw, 14px)',
            color: 'rgba(255,255,255,0.6)',
            textDecoration: 'none',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          ← Back
        </button>
      </div>

      {/* Blog content */}
      <div className="hidden md:block" style={{ padding: '0 8.14% clamp(48px, 6vw, 80px) 8.14%' }}>
        <Suspense fallback={<div style={{ color: '#fff', padding: '2vw' }}>Loading…</div>}>
          <BlogContent />
        </Suspense>
        <RelatedLinksFooter currentPath={`/blog/${id}`} />
      </div>

      {/* Mobile blog content — padded below fixed top bar */}
      <div className="md:hidden" style={{ paddingTop: '60px', padding: '60px 20px clamp(40px, 8vw, 60px)', overflowX: 'hidden' }}>
        <Suspense fallback={<div style={{ color: '#fff', padding: '24px' }}>Loading…</div>}>
          <BlogContent />
        </Suspense>
      </div>
    </div>
  )
}
