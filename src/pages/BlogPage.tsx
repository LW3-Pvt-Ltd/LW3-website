// Blog page — renders CSS-based blog content components (converted from Figma design)
// Blog 1: node 1:720 | Blog 2: node 1:796 | Blog 3: node 1:888

import { useParams, useNavigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import AltNavbar from '../components/AltNav/AltNavbar'
import Blog1Content from '../components/Blog/Blog1Content'
import Blog2Content from '../components/Blog/Blog2Content'
import Blog3Content from '../components/Blog/Blog3Content'

const BLOG_COMPONENTS: Record<string, React.ComponentType> = {
  '1': Blog1Content,
  '2': Blog2Content,
  '3': Blog3Content,
}

export default function BlogPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const BlogContent = BLOG_COMPONENTS[id ?? '1'] ?? BLOG_COMPONENTS['1']

  const handleBack = () => {
    navigate('/', { state: { scrollTo: 'snap-insight' } })
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  return (
    <div style={{ minHeight: '100vh', background: '#000' }}>
      {/* Navbar — always visible on blog pages */}
      <AltNavbar visible={true} />

      {/* Back link — sits below navbar */}
      <div style={{ paddingTop: '4.83vw' }}>
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

      {/* Blog content — padded to match site margins, max-width centred */}
      <div style={{ padding: '0 8.14% clamp(48px, 6vw, 80px) 8.14%' }}>
        <BlogContent />
      </div>
    </div>
  )
}
