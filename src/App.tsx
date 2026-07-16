import { useState, useRef, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useScrollSnap } from './hooks/useScrollSnap'
import { setSeoMeta, homepageSeo, injectOrganisationSchema, injectWebSiteSchema } from './lib/seo'
import HeroNavSection from './components/HeroNav/HeroNavSection'
import AltNavbar from './components/AltNav/AltNavbar'
import NeedAndRegulationSection from './components/NeedAndRegulation/NeedAndRegulationSection'
import BPAPSection from './components/BPAP/BPAPSection'
import MADPPSection from './components/MADPP/MADPPSection'
import UYBPCERSection from './components/UYBPCER/UYBPCERSection'
import YDNLYCSection from './components/YDNLYC/YDNLYCSection'
import InsightSection from './components/Insight/InsightSection'
import PartnersSection from './components/Partners/PartnersSection'
import BQEGVIRSection from './components/BQEGVIR/BQEGVIRSection'
import BatteryStorySection from './components/BatteryStory/BatteryStorySection'
import FooterSection from './components/Footer/FooterSection'
import WhatIsLW3Page from './pages/WhatIsLW3Page'
import BrandPage from './pages/BrandPage'
import BookDemoPage from './pages/BookDemoPage'
import ContactPage from './pages/ContactPage'
import DemoPage from './pages/DemoPage'
import BookPilotPage from './pages/BookPilotPage'
import BlogPage from './pages/BlogPage'
import BookDemoModal from './components/BookDemo/BookDemoModal'
import ContactModal from './components/Contact/ContactModal'
import BookPilotModal from './components/BookPilot/BookPilotModal'
import MobileApp from './components/Mobile/MobileApp'

const SNAP_IDS = [
  'snap-hero',
  'snap-gap',
  'snap-bqegvir',
  'snap-madpp-0', 'snap-madpp-1', 'snap-madpp-2',
  'snap-uybpcer',
  // 'snap-kwwsotwid',
  'snap-ydnlyc',
  'snap-insight',
  'snap-bpap',
  'snap-partners',
  // 'snap-regulation',
  'snap-battery',
  'snap-footer',
]

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [altNavVisible, setAltNavVisible] = useState(false)
  const location = useLocation()

  useScrollSnap(SNAP_IDS, ['snap-bqegvir'])

  // Set SEO meta tags and instant jump to section when navigating back from blog pages
  useEffect(() => {
    setSeoMeta(homepageSeo)
    injectOrganisationSchema()
    injectWebSiteSchema()
    const returnY = sessionStorage.getItem('returnScrollY')
    if (returnY !== null) {
      sessionStorage.removeItem('returnScrollY')
      requestAnimationFrame(() => window.scrollTo(0, parseInt(returnY)))
      return
    }
    const state = location.state as { scrollTo?: string; restoreScrollY?: number } | null
    if (state?.scrollTo) {
      const el = document.getElementById(state.scrollTo)
      if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY)
    } else if (state?.restoreScrollY !== undefined) {
      window.scrollTo(0, state.restoreScrollY)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setAltNavVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="hidden md:block min-h-screen bg-black text-white">
        <AltNavbar visible={altNavVisible} />
        <div id="snap-hero" ref={heroRef}><HeroNavSection /></div>
        <div id="snap-gap"><NeedAndRegulationSection /></div>
        <div id="snap-bqegvir" style={{ position: 'relative' }}>
          <BQEGVIRSection />
          <div id="snap-bqegvir-2" style={{ position: 'absolute', top: '58%' }} />
        </div>
        <MADPPSection />
        <div id="snap-uybpcer"><UYBPCERSection /></div>
        {/* <div id="snap-kwwsotwid"><KWWSOTWIDSection /></div> */}
        <div id="snap-ydnlyc"><YDNLYCSection /></div>
        <div id="snap-insight"><InsightSection /></div>
        <div id="snap-bpap"><BPAPSection /></div>
        <div id="snap-partners"><PartnersSection /></div>
        {/* <div id="snap-regulation"><RegulationSection /></div> */}
        <div id="snap-battery"><BatteryStorySection /></div>
        <div id="snap-footer"><FooterSection /></div>
      </div>
      <div className="md:hidden">
        <MobileApp />
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <BookDemoModal />
      <ContactModal />
      <BookPilotModal />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id/:slug" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/phygital-iot/:id" element={<BlogPage />} />
        <Route path="/phygital-iot" element={<BlogPage />} />
        <Route path="/near-zero-carbon/:id" element={<BlogPage />} />
        <Route path="/near-zero-carbon" element={<BlogPage />} />
        <Route path="/agentic-ai/:id" element={<BlogPage />} />
        <Route path="/agentic-ai" element={<BlogPage />} />
        <Route path="/supply-chain-finance/:id" element={<BlogPage />} />
        <Route path="/supply-chain-finance" element={<BlogPage />} />
        <Route path="/carbon-footprint/:id" element={<BlogPage />} />
        <Route path="/carbon-footprint" element={<BlogPage />} />
        <Route path="/post-quantum/:id" element={<BlogPage />} />
        <Route path="/post-quantum" element={<BlogPage />} />
        <Route path="/what-is-lw3" element={<WhatIsLW3Page />} />
        <Route path="/brand" element={<BrandPage />} />
        <Route path="/book-demo" element={<BookDemoPage />} />
        <Route path="/ev/battery/passport/demo" element={<DemoPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book-pilot" element={<BookPilotPage />} />
      </Routes>
    </>
  )
}

export default App
