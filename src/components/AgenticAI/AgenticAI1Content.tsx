// Agentic AI Intelligence Article 1

import VectorFieldInline from '../VectorField/VectorFieldInline'

function KickerTag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontFamily: "'D-DIN', sans-serif",
      fontSize: 'clamp(10px, 1.15vw, 12px)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#fff',
      background: 'rgba(255,255,255,0.12)',
      border: '1px solid rgba(255,255,255,0.25)',
      borderRadius: '2px',
      padding: '3px 10px',
      display: 'inline-block',
    }}>{children}</span>
  )
}

function KickerDot() {
  return <span style={{ display: 'inline-block', width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.4)', margin: '0 10px', verticalAlign: 'middle' }} />
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
      fontSize: 'clamp(18px, 2.67vw, 28px)',
      lineHeight: 1.25,
      color: '#fff',
      margin: '0',
      marginTop: 'clamp(28px, 3.5vw, 42px)',
      marginBottom: 'clamp(10px, 1.2vw, 16px)',
      letterSpacing: '-0.01em',
    }}>{children}</h2>
  )
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: "'D-DIN', sans-serif",
      fontSize: 'clamp(13px, 1.62vw, 17px)',
      lineHeight: 1.82,
      color: 'rgba(255,255,255,0.85)',
      margin: '0',
      marginTop: 'clamp(10px, 1.2vw, 16px)',
    }}>{children}</p>
  )
}

function Divider() {
  return <div style={{ borderTop: '1px solid rgba(255,255,255,0.18)', margin: 'clamp(20px, 2.5vw, 32px) 0' }} />
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      borderLeft: '3px solid #ffffff',
      paddingLeft: 'clamp(14px, 2vw, 22px)',
      margin: 'clamp(20px, 2.5vw, 32px) 0',
    }}>
      <p style={{
        fontFamily: "'D-DIN', sans-serif",
        fontSize: 'clamp(14px, 1.91vw, 20px)',
        lineHeight: 1.72,
        color: '#ffffff',
        margin: 0,
        fontStyle: 'italic',
      }}>{children}</p>
    </div>
  )
}

export default function AgenticAI1Content() {
  return (
    <article style={{
      background: '#000',
      width: '100%',
      maxWidth: '1048px',
      margin: '0 auto',
      padding: '0',
      boxSizing: 'border-box',
      fontFamily: "'D-DIN', sans-serif",
      color: '#fff',
    }}>
      <header>
      {/* Kicker row */}
      <div style={{ paddingTop: 'clamp(20px, 3.27vw, 34px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', columnGap: '4px', rowGap: '8px' }}>
          <KickerTag>Agentic AI</KickerTag>
          <KickerDot />
          <KickerTag>Intelligence</KickerTag>
          <KickerDot />
          <KickerTag>Battery Passport</KickerTag>
        </div>
        <span style={{
          display: 'block',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: 'clamp(12px, 1.58vw, 16.5px)',
          color: '#fff',
          letterSpacing: '0.04em',
          marginTop: 'clamp(10px, 1.2vw, 16px)',
          whiteSpace: 'nowrap',
        }}>May 2026 · LW3 Insights</span>
      </div>

      {/* Title */}
      <h1 style={{
        fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
        fontSize: 'clamp(28px, 5.26vw, 55px)',
        lineHeight: 1.36,
        letterSpacing: '-0.012em',
        color: '#fff',
        margin: '0',
        marginTop: 'clamp(14px, 2vw, 22px)',
        width: '100%',
      }}>
        Agentic AI Intelligence: Autonomous Decision-Making Across the Battery Lifecycle
      </h1>

      {/* Hero image */}
      <div style={{ width: '100%', marginTop: 'clamp(20px, 2.5vw, 32px)' }}>
        <img
          src="/Agentic AI.webp"
          alt="Agentic AI Intelligence"
          style={{ width: '100%', height: 'auto', display: 'block' }}
          draggable={false}
        />
      </div>

      {/* Standfirst */}
      <div style={{
        borderBottom: '1px solid #fff',
        paddingBottom: 'clamp(14px, 2vw, 24px)',
        marginTop: 'clamp(14px, 2vw, 22px)',
      }}>
        <p style={{
          fontFamily: "'D-DIN', sans-serif",
          fontSize: 'clamp(14px, 2.1vw, 22px)',
          lineHeight: 1.86,
          color: '#fff',
          margin: 0,
        }}>
          LW3's Agentic AI layer does not just analyse battery data - it acts on it. From automated compliance checks to real-time anomaly detection and second-life routing decisions, autonomous AI agents work continuously across the Battery Passport ecosystem to reduce human overhead and increase accuracy.
        </p>
      </div>

      </header>

      {/* Byline */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'clamp(16px, 2vw, 24px)' }}>
        <div style={{
          width: 'clamp(36px, 4.74vw, 50px)',
          height: 'clamp(36px, 4.74vw, 50px)',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
          fontFamily: "'D-DIN-Bold', sans-serif",
          fontSize: 'clamp(14px, 1.72vw, 18px)',
          color: '#fff',
        }}>LW3</div>
        <div>
          <div style={{ fontFamily: "'D-DIN-Bold', sans-serif", fontSize: 'clamp(12px, 1.53vw, 16px)', color: '#fff' }}>LW3 Research</div>
          <div style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(11px, 1.34vw, 14px)', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>7 min read</div>
        </div>
      </div>

      <Divider />

      <SectionHeading>What Is Agentic AI?</SectionHeading>
      <BodyText>
        Agentic AI refers to artificial intelligence systems that do not simply respond to queries - they pursue goals autonomously over time, taking sequences of actions, using tools, and adapting to changing conditions without requiring human input at each step. In contrast to a chatbot or a classification model, an agentic system can monitor a data stream, detect an anomaly, trigger a compliance check, escalate to a human if needed, and log the entire decision trail - all without a human in the loop.
      </BodyText>
      <BodyText>
        LW3 deploys agentic AI across the Battery Passport lifecycle to handle the volume and complexity of decisions that battery supply chains generate. A single battery pack can generate thousands of data points per day. No human team can process that at scale - but agentic AI can.
      </BodyText>

      <Callout>
        "Agentic AI turns the Battery Passport from a compliance document into an active participant in the supply chain - one that monitors, decides, and acts continuously."
      </Callout>

      <SectionHeading>Core Agent Functions in LW3's Architecture</SectionHeading>
      <BodyText>
        <strong style={{ color: '#fff' }}>Compliance Agent:</strong> Continuously monitors each battery's passport against the latest EU Battery Regulation requirements, CIRPASS schema updates, and customer-specific compliance rules. When a threshold is breached or a data field falls out of tolerance, the agent raises a flag, logs the event, and initiates the appropriate remediation workflow.
      </BodyText>
      <BodyText>
        <strong style={{ color: '#fff' }}>Anomaly Detection Agent:</strong> Analyses real-time IoT sensor streams for patterns that deviate from the battery's expected state-of-health trajectory. Early detection of thermal events, accelerated degradation, or unusual charge behaviour allows intervention before safety issues arise.
      </BodyText>
      <BodyText>
        <strong style={{ color: '#fff' }}>Second-Life Routing Agent:</strong> At end-of-first-life, this agent evaluates the battery's on-chain history - cycle count, peak temperatures, SoH curve - and determines the optimal second-life application: stationary storage, lower-demand mobility, or direct recycling. Routing decisions are logged to the passport with the supporting data.
      </BodyText>
      <BodyText>
        <strong style={{ color: '#fff' }}>Carbon Optimisation Agent:</strong> Monitors the carbon footprint trajectory of each battery and surfaces actionable recommendations - switching to a lower-carbon logistics route, changing a charging schedule to align with grid renewable peaks, or flagging a supplier whose emission intensity has increased above threshold.
      </BodyText>

      <Divider />

      <VectorFieldInline />
      <SectionHeading>Post-Quantum Secure Agent Communication</SectionHeading>
      <BodyText>
        Every action taken by an LW3 AI agent is cryptographically signed before being written to the Battery Passport. This creates an auditable, tamper-evident record of every automated decision - who or what made it, when, on the basis of what data, and with what outcome. In the post-quantum security model, these signatures use NIST-standardised lattice-based algorithms, ensuring that the audit trail remains verifiable even as quantum computing advances.
      </BodyText>
      <BodyText>
        This matters for regulatory compliance: under the EU Battery Regulation, automated decisions affecting compliance status must be traceable and explainable. LW3's signed agent action log satisfies this requirement by design.
      </BodyText>

      <Callout>
        "Every automated decision is signed, timestamped, and on-chain. Regulators can audit the AI's reasoning, not just its output."
      </Callout>

      <SectionHeading>Human-AI Collaboration Model</SectionHeading>
      <BodyText>
        Agentic AI in LW3's system is not designed to replace human judgement - it is designed to handle routine decisions at machine speed so that humans can focus on exceptions, strategy, and edge cases that genuinely require domain expertise. Agents escalate to human operators when confidence is below threshold, when a decision falls outside the defined policy space, or when regulatory requirements mandate human sign-off.
      </BodyText>
      <BodyText>
        The escalation log is also written to the Battery Passport, creating a complete record of both automated and human decisions across the battery's lifetime.
      </BodyText>

      <Divider />

      <SectionHeading>Scaling Intelligence Across Fleets</SectionHeading>
      <BodyText>
        The commercial case for agentic AI becomes clearest at fleet scale. A single EV manufacturer deploying 100,000 battery packs annually generates compliance monitoring, anomaly detection, and end-of-life routing requirements for each of those packs - continuously, for 10 to 15 years. Manual processes cannot scale to that volume. LW3's agent architecture scales horizontally, processing each passport independently while sharing learned patterns across the fleet to improve detection accuracy over time.
      </BodyText>
      <BodyText>
        Fleet-level intelligence also enables aggregate insights - identifying systematic degradation patterns linked to specific manufacturing batches, usage profiles, or geographic conditions - that no single-battery analysis could surface.
      </BodyText>

      <Divider />

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingBottom: 'clamp(32px, 4vw, 56px)' }}>
        {['Agentic AI', 'Intelligence', 'Battery Passport', 'Automation', 'Post-Quantum', 'Compliance', 'Second Life'].map(tag => (
          <span key={tag} style={{
            fontFamily: "'D-DIN', sans-serif",
            fontSize: 'clamp(10px, 1.05vw, 11px)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '2px',
            padding: '4px 10px',
          }}>{tag}</span>
        ))}
      </div>
    </article>
  )
}
