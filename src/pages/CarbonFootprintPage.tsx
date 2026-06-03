import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useLayoutEffect, lazy, Suspense } from 'react'
import AltNavbar from '../components/AltNav/AltNavbar'
import RelatedLinksFooter from '../components/Blog/RelatedLinksFooter'
import { setSeoMeta, injectArticleSchema, injectBreadcrumbSchema, carbonFootprintSeo } from '../lib/seo'

const CarbonFootprint1Content = lazy(() => import('../components/CarbonFootprint/CarbonFootprint1Content'))

const ARTICLE_COMPONENTS: Record<string, React.ComponentType> = {
  '1': CarbonFootprint1Content,
}

export default function CarbonFootprintPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const location = useLocation()
  const ArticleContent = ARTICLE_COMPONENTS[id ?? '1'] ?? ARTICLE_COMPONENTS['1']

  const handleBack = () => {
    const from = (location.state as { from?: string } | null)?.from
    if (from === 'blog') {
      const returnTo = (location.state as { returnTo?: string } | null)?.returnTo
      if (returnTo) navigate(returnTo)
      else navigate(-1)
    } else if (from === 'homepage-section') {
      navigate('/', { state: { scrollTo: (location.state as { scrollTo?: string } | null)?.scrollTo } })
    } else if (from === 'what-is-lw3') {
      const scrollSection = (location.state as { scrollSection?: string } | null)?.scrollSection
      navigate('/what-is-lw3', { state: { scrollSection } })
    }
    else navigate('/', { state: { scrollTo: 'snap-bqegvir' } })
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    setSeoMeta(carbonFootprintSeo)
    injectArticleSchema(carbonFootprintSeo.title, carbonFootprintSeo.description, 'https://www.lw3.world/carbon-footprint/1', '2026-05-01')
    injectBreadcrumbSchema([{ name: 'Home', url: 'https://www.lw3.world/' }, { name: 'Technology', url: 'https://www.lw3.world/' }, { name: 'Carbon Footprint Engine', url: 'https://www.lw3.world/carbon-footprint/1' }])
  }, [id])

  return (
    <div style={{ minHeight: '100vh', background: '#000' }}>
      <div className="hidden md:block"><AltNavbar visible={true} /></div>

      <div className="flex items-center md:hidden" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '60px', background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '0 20px', gap: '12px',
      }}>
        <button onClick={handleBack} style={{
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

      <div className="hidden md:block" style={{ paddingTop: '4.83vw' }}>
        <button onClick={handleBack} style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4em', padding: '1vw 8.14%',
          fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif", fontSize: 'clamp(10px, 0.84vw, 14px)',
          color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em', textTransform: 'uppercase',
          background: 'none', border: 'none', cursor: 'pointer',
        }}>← Back</button>
      </div>

      <div className="hidden md:block" style={{ padding: '0 8.14% clamp(48px, 6vw, 80px) 8.14%' }}>
        <Suspense fallback={<div style={{ color: '#fff', padding: '2vw' }}>Loading…</div>}>
          <ArticleContent />
        </Suspense>
        <RelatedLinksFooter currentPath="/carbon-footprint/1" />
      </div>

      <div className="md:hidden" style={{ paddingTop: '60px', padding: '60px 20px clamp(40px, 8vw, 60px)', overflowX: 'hidden' }}>
        <Suspense fallback={<div style={{ color: '#fff', padding: '24px' }}>Loading…</div>}>
          <ArticleContent />
        </Suspense>
      </div>
    </div>
  )
}
