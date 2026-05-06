import HeroSection from '@/components/HeroSection'
import GapSection from '@/components/GapSection'
import BPAPSection from '@/components/BPAPSection'
import RegulationSection from '@/components/RegulationSection'
import StatsPartnersSection from '@/components/StatsPartnersSection'
import IITPedigreeSection from '@/components/IITPedigreeSection'
import BQEGVIRSection from '@/components/BQEGVIRSection'
import HonestPictureSection from '@/components/HonestPictureSection'
import BPAP1Section from '@/components/BPAP1Section'
import NavBar from '@/components/NavBar'

function App() {
  return (
    <main style={{ backgroundColor: '#0A0A08', minHeight: '100vh' }}>
      <NavBar />
      <HeroSection />
      {/* Pull all sections up by one hero height so Gap overlaps the second half of Hero's sticky scroll space */}
      <div style={{ position: 'relative', zIndex: 1, marginTop: 'calc((1167 / 1905) * -100vw)' }}>
      <GapSection />
      <BPAPSection />
      <RegulationSection />
      <StatsPartnersSection />
      <IITPedigreeSection />
      <BQEGVIRSection />
      <HonestPictureSection />
      <BPAP1Section />
      </div>
    </main>
  )
}

export default App
