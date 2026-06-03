// Blog 7 - "How Traceability Enhances Product Safety Standards: A Modern Guide"

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

export default function Blog7Content() {
  return (
    <article style={{ background: '#000', width: '100%', maxWidth: '1048px', margin: '0 auto', padding: '0', boxSizing: 'border-box', fontFamily: "'D-DIN', sans-serif", color: '#fff' }}>
      <header>
        <div style={{ paddingTop: 'clamp(20px, 3.27vw, 34px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', columnGap: '4px', rowGap: '8px' }}>
            <KickerTag>Product Safety</KickerTag>
            <KickerDot />
            <KickerTag>Traceability</KickerTag>
            <KickerDot />
            <KickerTag>Digital Passports</KickerTag>
          </div>
          <span style={{ display: 'block', fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(12px, 1.58vw, 16.5px)', color: '#fff', letterSpacing: '0.04em', marginTop: 'clamp(10px, 1.2vw, 16px)', whiteSpace: 'nowrap' }}>June 2026 · LW3 Insights</span>
        </div>
        <h1 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(28px, 5.26vw, 55px)', lineHeight: 1.36, letterSpacing: '-0.012em', color: '#fff', margin: '0', marginTop: 'clamp(14px, 2vw, 22px)', width: '100%' }}>
          How Traceability Enhances Product Safety Standards: A Modern Guide
        </h1>
        <div style={{ borderBottom: '1px solid #fff', paddingBottom: 'clamp(14px, 2vw, 24px)', marginTop: 'clamp(14px, 2vw, 22px)' }}>
          <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(14px, 2.1vw, 22px)', lineHeight: 1.86, color: '#fff', margin: 0 }}>
            Traceability is no longer a supply chain buzzword - it is a fundamental pillar of modern business survival. The difference between a swift resolution and a brand crisis comes down to one thing: knowing exactly where your products came from and where they went.
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

      <SectionHeading>What Is Traceability and Why Does It Matter?</SectionHeading>
      <BodyText>Traceability is the documented trail of a product's lifecycle - the ability to track every component, ingredient, or raw material from its origin, through the manufacturing process, and into the hands of the end consumer. Manual tracking is slow, error-prone, and impossible to scale. Automated tracking systems, powered by advanced software and scanning technologies, provide instant, reliable data that forms the backbone of a safe supply chain.</BodyText>
      <BodyText>When a company invests in modern tracking infrastructure, supply chain visibility benefits are immediate. You gain a complete view of your operation, enabling you to spot vulnerabilities before they become crises. The cost of poor visibility is staggering - excess inventory, lost goods, and delayed responses to safety issues that allow minor defects to become major recalls.</BodyText>

      <Callout>"The difference between a targeted recall and a brand crisis is measured in minutes - and traceability is what buys you those minutes."</Callout>

      <SectionHeading>Defending Against Contamination</SectionHeading>
      <BodyText>A primary way traceability enhances safety is by mitigating supply chain contamination risks. Whether a bacteria outbreak in fresh produce or a compromised component in an industrial product, finding the source quickly is critical. Modern traceability systems allow companies to pinpoint the exact affected units within minutes rather than days - isolating and recalling only the specific compromised batch rather than an entire product line.</BodyText>
      <BodyText><strong style={{ color: '#fff' }}>Batch and lot tracking best practices:</strong> Keep batches small so fewer products are affected if a recall is necessary. Standardise lot coding across all facilities and partners. Always tie batch numbers directly to specific raw material shipments. This discipline transforms recall management from a crisis into a controlled operation.</BodyText>

      <Divider />

      <SectionHeading>Blockchain and IoT: The Technological Engine</SectionHeading>
      <BodyText>Blockchain acts as a decentralised, immutable digital ledger. When a manufacturer records a production event, it enters the blockchain. As the product moves through the supply chain, new blocks are added. Because this information cannot be altered or deleted, it creates a tamper-proof record - the foundation of verifiable product safety.</BodyText>
      <BodyText>IoT devices such as smart sensors monitor temperature, humidity, and conditions in real time. If a sensitive shipment exceeds safe parameters, the IoT sensor alerts the manufacturer immediately - allowing intervention before an unsafe product reaches the consumer. The GS1 global data synchronisation network standardises barcodes and product data worldwide, ensuring that a product scanned in one country registers identical safety data in another.</BodyText>

      <SectionHeading>The Rise of Digital Product Passports</SectionHeading>
      <BodyText>Digital product passport technology is revolutionising how we interact with goods. These digital records travel with the product, accessible via a simple QR code scan. They provide regulators and consumers with comprehensive data on origins, safety certifications, and recycling instructions - drastically reducing the risk of counterfeit or unsafe goods entering the market.</BodyText>
      <BodyText>By authenticating raw material provenance, companies prove their goods are sourced responsibly. Organisations aligning with frameworks like ISO 22005 traceability standards signal a universally recognised baseline of safety and accountability. This level of transparency builds lasting consumer trust - when buyers can scan a product and see its entire history, brand loyalty follows.</BodyText>

      <Callout>"Traceability is the ultimate safety net - for your products, your customers, and your brand reputation."</Callout>

      <Divider />

      <SectionHeading>Key Actions for Your Business</SectionHeading>
      <BodyText><strong style={{ color: '#fff' }}>Audit your current system:</strong> Move away from spreadsheets and adopt automated tracking software that provides real-time visibility.</BodyText>
      <BodyText><strong style={{ color: '#fff' }}>Embrace standardisation:</strong> Utilise GS1 standards to ensure your data is globally recognised and interoperable with supply chain partners.</BodyText>
      <BodyText><strong style={{ color: '#fff' }}>Invest in preventative technology:</strong> IoT sensors for sensitive shipments and blockchain for your specific supply chain are no longer future investments - they are current necessities.</BodyText>
      <BodyText><strong style={{ color: '#fff' }}>Refine your recall plan:</strong> Practice real-time recall drills using batch and lot data to ensure your team is ready for any emergency. Traceability only protects you if your processes are prepared to use it.</BodyText>

      <Divider />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingBottom: 'clamp(32px, 4vw, 56px)' }}>
        {['Product Safety', 'Traceability', 'Blockchain', 'IoT', 'Digital Product Passport', 'Supply Chain', 'Product Recall'].map(tag => (
          <span key={tag} style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(10px, 1.05vw, 11px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '2px', padding: '4px 10px' }}>{tag}</span>
        ))}
      </div>
    </article>
  )
}
