import { useState, useRef, useEffect } from 'react'
import HeroNavSection from './components/HeroNav/HeroNavSection'
import AltNavbar from './components/AltNav/AltNavbar'
import GapSection from './components/Gap/GapSection'
import RegulationSection from './components/Regulation/RegulationSection'
import BPAPSection from './components/BPAP/BPAPSection'
import MADPPSection from './components/MADPP/MADPPSection'
import UYBPCERSection from './components/UYBPCER/UYBPCERSection'
import KWWSOTWIDSection from './components/KWWSOTWID/KWWSOTWIDSection'
import YDNLYCSection from './components/YDNLYC/YDNLYCSection'
import InsightSection from './components/Insight/InsightSection'

import PartnersSection from './components/Partners/PartnersSection'
import BQEGVIRSection from './components/BQEGVIR/BQEGVIRSection'
import BatteryStorySection from './components/BatteryStory/BatteryStorySection'
import FooterSection from './components/Footer/FooterSection'

function App() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [altNavVisible, setAltNavVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setAltNavVisible(!entry.isIntersecting),
      { threshold: 0 }  // fires as soon as hero starts leaving / re-entering viewport
    )
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Alt navbar — fixed to top, appears when hero scrolls out */}
      <AltNavbar visible={altNavVisible} />

      {/* Hero — observed to trigger alt navbar */}
      <div ref={heroRef}>
        <HeroNavSection />
      </div>

      <GapSection />
      <BQEGVIRSection />
      <MADPPSection />
      <UYBPCERSection />
      <KWWSOTWIDSection />
      <YDNLYCSection />
      <InsightSection />
      <BPAPSection />
      <PartnersSection />
      <RegulationSection />

      <BatteryStorySection />
      <FooterSection />
    </div>
  )
}

export default App
