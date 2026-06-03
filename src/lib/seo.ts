/**
 * SEO utilities for managing meta tags and structured data
 */

interface SEOConfig {
  title: string
  description: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  twitterHandle?: string
  keywords?: string
}

const SITE_NAME = 'Logistics W3'
const SITE_URL = 'https://www.lw3.world'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

export function setSeoMeta(config: SEOConfig) {
  document.title = config.title
  updateMetaTag('og:title', config.title)
  updateMetaTag('twitter:title', config.title)

  updateMetaTag('description', config.description)
  updateMetaTag('og:description', config.description)
  updateMetaTag('twitter:description', config.description)

  if (config.keywords) updateMetaTag('keywords', config.keywords)

  const canonical = config.canonicalUrl || SITE_URL
  updateLinkTag('canonical', canonical)
  updateMetaTag('og:url', canonical)

  updateMetaTag('og:site_name', SITE_NAME)
  updateMetaTag('og:type', config.ogType || 'website')
  updateMetaTag('og:image', config.ogImage || DEFAULT_OG_IMAGE)

  updateMetaTag('twitter:card', 'summary_large_image')
  if (config.twitterHandle) updateMetaTag('twitter:creator', config.twitterHandle)
  updateMetaTag('twitter:image', config.ogImage || DEFAULT_OG_IMAGE)
}

function updateMetaTag(name: string, content: string) {
  let element = document.querySelector(`meta[name="${name}"]`) ||
                document.querySelector(`meta[property="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    const isProperty = name.startsWith('og:') || name.startsWith('twitter:')
    isProperty ? element.setAttribute('property', name) : element.setAttribute('name', name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function updateLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

const BASE_KEYWORDS = 'battery passport, digital product passport, circular economy, EU battery regulation, post-quantum security, supply chain transparency, product traceability, sustainability reporting, product lifecycle management, eu green deal, environmentally friendly, blockchain, LW3, Logistics W3, EV battery traceability, Battery Adhaar, BPAN, ESPR regulation, EUDR, supply chain visibility, product recall management, IoT quality assurance, product authentication, traceability regulations, end-to-end supply chain transparency, green hydrogen digital product passport, battery waste management, supply chain traceability'

// ── Page SEO configs ──────────────────────────────────────────────

export const homepageSeo: SEOConfig = {
  title: 'Battery Passport & Digital Product Passport | Logistics W3',
  description: 'LW3 builds EU-compliant Battery Passports with post-quantum blockchain security, carbon footprint tracking, and agentic AI - enabling circular economy and supply chain transparency.',
  canonicalUrl: SITE_URL,
  ogType: 'website',
  keywords: BASE_KEYWORDS,
}

export const blog1Seo: SEOConfig = {
  title: 'Compliant by Design: Battery Passport Meets EU Regulatory Frontier | LW3',
  description: 'How LW3\'s Battery Passport satisfies the EU Battery Regulation and post-quantum cryptography mandates simultaneously. A digital product passport built for circular economy compliance.',
  canonicalUrl: `${SITE_URL}/blog/1`,
  ogType: 'article',
  keywords: 'battery passport, EU battery regulation, post-quantum cryptography, digital product passport, circular economy, sustainability reporting, product traceability',
}

export const blog2Seo: SEOConfig = {
  title: 'Programmable Money Meets the Battery Passport | LW3',
  description: 'How programmable finance and blockchain-based Battery Passports combine to unlock supply chain finance, working capital, and sustainability-linked lending across the EV battery value chain.',
  canonicalUrl: `${SITE_URL}/blog/2`,
  ogType: 'article',
  keywords: 'battery passport, supply chain finance, programmable money, blockchain, circular economy, digital product passport, supply chain transparency',
}

export const blog3Seo: SEOConfig = {
  title: 'Agentic AI Transforms EU Battery Compliance | LW3',
  description: 'How LW3\'s agentic AI turns EU Battery Regulation compliance from a manual burden into an automated, continuously monitored process across the full battery product lifecycle.',
  canonicalUrl: `${SITE_URL}/blog/3`,
  ogType: 'article',
  keywords: 'agentic AI, battery compliance, EU battery regulation, product lifecycle management, digital product passport, sustainability reporting, circular economy',
}

export const phygitalIOTSeo: SEOConfig = {
  title: 'Phygital Identity & IoT: Battery Lifecycle Management | LW3',
  description: 'LW3\'s Phygital IOT layer anchors physical battery identity on-chain - tamper-proof, machine-readable, and globally verifiable. Post-quantum secure IoT for digital product passport compliance.',
  canonicalUrl: `${SITE_URL}/phygital-iot/1`,
  ogType: 'article',
  keywords: 'phygital identity, IoT, battery passport, product traceability, digital product passport, post-quantum security, product lifecycle management, circular economy',
}

export const nearZeroCarbonSeo: SEOConfig = {
  title: 'Near Zero Carbon Infrastructure for Battery Supply Chains | LW3',
  description: 'LW3\'s Carbon Infrastructure makes every gram of CO2 in the battery supply chain measurable, attributable, and verifiable - directly inside the EU-compliant Battery Passport.',
  canonicalUrl: `${SITE_URL}/near-zero-carbon/1`,
  ogType: 'article',
  keywords: 'near zero carbon, carbon footprint, battery supply chain, sustainability reporting, eu green deal, environmentally friendly, circular economy, digital product passport, CIRPASS',
}

export const agenticAISeo: SEOConfig = {
  title: 'Agentic AI Intelligence for Battery Lifecycle Automation | LW3',
  description: 'LW3\'s Agentic AI autonomously monitors compliance, detects anomalies, and routes batteries to second life - continuously, at scale, across the full product lifecycle management system.',
  canonicalUrl: `${SITE_URL}/agentic-ai/1`,
  ogType: 'article',
  keywords: 'agentic AI, battery AI, product lifecycle management, circular economy, battery compliance, supply chain transparency, digital product passport, automation',
}

export const supplyChainFinanceSeo: SEOConfig = {
  title: 'Supply Chain Finance Against Verified Battery Passport Data | LW3',
  description: 'LW3 uses verified Battery Passport data to unlock dynamic invoice discounting, asset-backed lending, and supply chain finance - bridging the capital gap in battery supply chains.',
  canonicalUrl: `${SITE_URL}/supply-chain-finance/1`,
  ogType: 'article',
  keywords: 'supply chain finance, battery passport, supply chain transparency, circular economy, digital product passport, working capital, blockchain, product traceability',
}

export const carbonFootprintSeo: SEOConfig = {
  title: 'Carbon Footprint Engine: Verified Battery Lifecycle Emissions | LW3',
  description: 'LW3\'s Carbon Footprint Engine calculates, verifies, and anchors battery lifecycle CO2 emissions to ISO 14040 standards - fulfilling EU Battery Regulation carbon declaration requirements.',
  canonicalUrl: `${SITE_URL}/carbon-footprint/1`,
  ogType: 'article',
  keywords: 'carbon footprint, battery lifecycle, LCA, ISO 14040, sustainability reporting, eu green deal, environmentally friendly, digital product passport, EU battery regulation',
}

export const postQuantumSeo: SEOConfig = {
  title: 'Post Quantum Secure Blockchain for Battery Passports | LW3',
  description: 'LW3 builds Battery Passports on NIST post-quantum cryptography (CRYSTALS-Dilithium) - protecting 15-year battery lifecycle records against quantum computing threats.',
  canonicalUrl: `${SITE_URL}/post-quantum/1`,
  ogType: 'article',
  keywords: 'post-quantum security, blockchain, battery passport, CRYSTALS-Dilithium, digital product passport, product traceability, supply chain transparency, Cardano',
}

// ── JSON-LD structured data ───────────────────────────────────────

export function injectWebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Logistics W3',
    url: SITE_URL,
    description: 'LW3 builds post-quantum secure, EU-compliant Battery Passports enabling circular economy and supply chain transparency across the global EV battery lifecycle.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
  injectJsonLd('website-schema', schema)
}

export function injectOrganisationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Logistics W3',
    alternateName: 'LW3',
    url: SITE_URL,
    logo: `${SITE_URL}/Latest updated logo.svg`,
    description: 'LW3 builds post-quantum secure, EU-compliant Battery Passports enabling circular economy and supply chain transparency across the global EV battery lifecycle.',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'hello@lw3.world',
    },
  }
  injectJsonLd('org-schema', schema)
}

export function injectArticleSchema(title: string, description: string, url: string, datePublished: string) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: '2026-06-01',
    author: { '@type': 'Organization', name: 'LW3 Research', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Logistics W3',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/Latest updated logo.svg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }
  injectJsonLd('article-schema', schema)
}

export function injectBreadcrumbSchema(items: { name: string; url: string }[]) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
  injectJsonLd('breadcrumb-schema', schema)
}

function injectJsonLd(id: string, data: object) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.setAttribute('type', 'application/ld+json')
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}
