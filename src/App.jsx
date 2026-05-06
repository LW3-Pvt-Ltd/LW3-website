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
      <GapSection />
      <BPAPSection />
      <RegulationSection />
      <StatsPartnersSection />
      <IITPedigreeSection />
      <BQEGVIRSection />
      <HonestPictureSection />
      <BPAP1Section />
    </main>
  )
}

export default App
