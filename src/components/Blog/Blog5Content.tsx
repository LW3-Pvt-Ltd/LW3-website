// Blog 5 - "Global Product Traceability Regulations: Key Insights"

import VectorFieldInline from '../VectorField/VectorFieldInline'

function KickerTag({ children }: { children: React.ReactNode }) {
  return <span style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(10px, 1.15vw, 12px)', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '2px', padding: '3px 10px', display: 'inline-block' }}>{children}</span>
}
function KickerDot() {
  return <span style={{ display: 'inline-block', width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.4)', margin: '0 10px', verticalAlign: 'middle' }} />
}
function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(18px, 2.67vw, 28px)', lineHeight: 1.25, color: '#fff', margin: '0', marginTop: 'clamp(28px, 3.5vw, 42px)', marginBottom: 'clamp(10px, 1.2vw, 16px)', letterSpacing: '-0.01em' }}>{children}</h2>
}
function BodyText({ children }: { children: React.ReactNode }) {
  return <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(13px, 1.62vw, 17px)', lineHeight: 1.82, color: 'rgba(255,255,255,0.85)', margin: '0', marginTop: 'clamp(10px, 1.2vw, 16px)' }}>{children}</p>
}
function Divider() {
  return <div style={{ borderTop: '1px solid rgba(255,255,255,0.18)', margin: 'clamp(20px, 2.5vw, 32px) 0' }} />
}
function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: '3px solid #ffffff', paddingLeft: 'clamp(14px, 2vw, 22px)', margin: 'clamp(20px, 2.5vw, 32px) 0' }}>
      <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(14px, 1.91vw, 20px)', lineHeight: 1.72, color: '#ffffff', margin: 0, fontStyle: 'italic' }}>{children}</p>
    </div>
  )
}

export default function Blog5Content() {
  return (
    <article style={{ background: '#000', width: '100%', maxWidth: '1048px', margin: '0 auto', padding: '0', boxSizing: 'border-box', fontFamily: "'D-DIN', sans-serif", color: '#fff' }}>
      <header>
        <div style={{ paddingTop: 'clamp(20px, 3.27vw, 34px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', columnGap: '4px', rowGap: '8px' }}>
            <KickerTag>Traceability</KickerTag>
            <KickerDot />
            <KickerTag>Global Regulations</KickerTag>
            <KickerDot />
            <KickerTag>Supply Chain</KickerTag>
          </div>
          <span style={{ display: 'block', fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(12px, 1.58vw, 16.5px)', color: '#fff', letterSpacing: '0.04em', marginTop: 'clamp(10px, 1.2vw, 16px)', whiteSpace: 'nowrap' }}>June 2026 · LW3 Insights</span>
        </div>
        <h1 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(28px, 5.26vw, 55px)', lineHeight: 1.36, letterSpacing: '-0.012em', color: '#fff', margin: '0', marginTop: 'clamp(14px, 2vw, 22px)', width: '100%' }}>
          Global Product Traceability Regulations: Key Insights for Supply Chain Compliance
        </h1>
        <div style={{ borderBottom: '1px solid #fff', paddingBottom: 'clamp(14px, 2vw, 24px)', marginTop: 'clamp(14px, 2vw, 22px)' }}>
          <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(14px, 2.1vw, 22px)', lineHeight: 1.86, color: '#fff', margin: 0 }}>
            Product traceability regulations vary significantly across regions. Understanding the key differences - and where they converge - is essential for any business operating in global supply chains.
          </p>
        </div>
      </header>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'clamp(16px, 2vw, 24px)' }}>
        <div style={{ width: 'clamp(36px, 4.74vw, 50px)', height: 'clamp(36px, 4.74vw, 50px)', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: "'D-DIN-Bold', sans-serif", fontSize: 'clamp(14px, 1.72vw, 18px)', color: '#fff' }}>LW3</div>
        <div>
          <div style={{ fontFamily: "'D-DIN-Bold', sans-serif", fontSize: 'clamp(12px, 1.53vw, 16px)', color: '#fff' }}>LW3 Research</div>
          <div style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(11px, 1.34vw, 14px)', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>8 min read</div>
        </div>
      </div>

      <Divider />

      <SectionHeading>Why Traceability Regulations Matter</SectionHeading>
      <BodyText>Product traceability refers to the ability to track products from raw materials to the end consumer. It plays a crucial role in ensuring product safety, maintaining quality standards, and supporting regulatory compliance. Companies that are transparent enjoy greater consumer loyalty, while non-compliance can lead to legal penalties and loss of market access.</BodyText>
      <BodyText>Global traceability regulations are shaped by consumer safety priorities, technological advancements in blockchain and IoT, the need for uniform international trade standards, and rising consumer demand for transparency. Understanding these drivers helps businesses navigate complex regulatory landscapes effectively.</BodyText>

      <Callout>"Traceability is no longer optional - it is the entry ticket to global markets."</Callout>

      <SectionHeading>European Union: Comprehensive Traceability Frameworks</SectionHeading>
      <BodyText>The EU has the world's most robust traceability regulations, ensuring high consumer protection standards across food, pharmaceuticals, and sustainability. The General Food Law mandates comprehensive traceability from farm to fork. The Falsified Medicines Directive ensures medicines are traceable and authentic. The Ecodesign Directive and the EU Battery Regulation (2023/1542) extend traceability requirements to product sustainability and digital product passports.</BodyText>
      <BodyText>The EU's ESPR (Ecodesign for Sustainable Products Regulation) and the emerging Digital Product Passport framework represent the most ambitious expansion of traceability requirements globally - mandating lifecycle data for a wide range of products sold in the EU market.</BodyText>

      <Divider />

      <SectionHeading>United States: Sector-Specific Traceability Laws</SectionHeading>
      <BodyText>The United States focuses on sector-specific regulations tailored to each industry's risks. The Food Safety Modernization Act enhances traceability in the food sector to prevent contamination. The Drug Supply Chain Security Act requires tracking of pharmaceuticals from manufacture to distribution. The Conflict Minerals Rule demands traceability in sourcing raw materials for electronics.</BodyText>

      <SectionHeading>Asia-Pacific: Evolving Standards</SectionHeading>
      <BodyText>Asia-Pacific traceability standards are quickly evolving. China's Food Safety Law mandates detailed records of food supply chains. Japan's Pharmaceutical Affairs Law ensures traceability and quality control in pharmaceuticals. India's Battery Adhaar (BPAN) framework is establishing digital traceability for the battery sector, aligning with international DPP standards with 80% alignment achieved in pilot deployments.</BodyText>

      <VectorFieldInline />
      <SectionHeading>Technologies Powering Supply Chain Traceability</SectionHeading>
      <BodyText>Blockchain provides an immutable ledger ensuring secure, transparent records. IoT devices deliver real-time data on product conditions and locations. RFID tags enable precise identification throughout the supply chain. AI enhances data analysis to predict trends and improve traceability outcomes. Together, these technologies empower businesses to meet regulatory requirements while reducing costs.</BodyText>

      <Callout>"The convergence of blockchain, IoT, and digital product passports is creating a new standard for global supply chain accountability."</Callout>

      <Divider />

      <SectionHeading>Challenges in Meeting Regulatory Requirements</SectionHeading>
      <BodyText>Regulations vary widely across regions, requiring businesses to adapt to diverse standards. Not all companies have the resources to implement advanced traceability technology, creating disparities in compliance levels. Data standardisation remains a challenge - without unified formats, interoperability between systems becomes a significant barrier to effective traceability.</BodyText>
      <BodyText>Despite these challenges, the direction is clear. As international trade continues to grow and consumer expectations for transparency rise, product traceability will become the baseline requirement for market access - not just in the EU, but globally.</BodyText>

      <Divider />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingBottom: 'clamp(32px, 4vw, 56px)' }}>
        {['Product Traceability', 'Global Regulations', 'EU Battery Regulation', 'ESPR', 'Supply Chain', 'Digital Product Passport', 'Compliance'].map(tag => (
          <span key={tag} style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(10px, 1.05vw, 11px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '2px', padding: '4px 10px' }}>{tag}</span>
        ))}
      </div>
    </article>
  )
}
