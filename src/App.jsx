import HeroSection from '@/components/HeroSection'
import GapSection from '@/components/GapSection'
import BPAPSection from '@/components/BPAPSection'
import RegulationSection from '@/components/RegulationSection'
import StatsPartnersSection from '@/components/StatsPartnersSection'
import IITPedigreeSection from '@/components/IITPedigreeSection'
import BQEGVIRSection from '@/components/BQEGVIRSection'
import BPAP1Section from '@/components/BPAP1Section'
import FooterSection from '@/components/FooterSection'
function App() {
  return (
    <main style={{ backgroundColor: '#0A0A08', minHeight: '100vh' }}>
      <HeroSection />
      <GapSection />
      <BPAPSection />
      <RegulationSection />
      <StatsPartnersSection />
      <IITPedigreeSection />
      <BQEGVIRSection />
      <BPAP1Section />
      <FooterSection />
    </main>
  )
}

export default App
