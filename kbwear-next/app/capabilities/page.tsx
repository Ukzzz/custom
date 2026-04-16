import RevealWrapper from "../components/RevealWrapper";
import { ServiceJsonLd, BreadcrumbJsonLd } from "../components/JsonLd";
import Breadcrumbs from "../components/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Uniform Services | Design, Production & Delivery | KBwear",
  description: "KBwear's comprehensive uniform manufacturing capabilities: premium fabric sourcing, custom design services, advanced manufacturing, scalable production, ISO-quality assurance, and nationwide logistics in Pakistan.",
  keywords: "KBwear capabilities, KB wear services, uniform manufacturing services, custom uniform design, bulk uniform production, quality assurance uniforms, fabric sourcing Pakistan, corporate uniform services, industrial workwear manufacturer",
  openGraph: {
    title: "Our Capabilities - KBwear Custom Uniform Manufacturing Services",
    description: "Comprehensive uniform manufacturing capabilities from design to delivery in Pakistan.",
    url: "https://www.kb-wear.com/capabilities",
    images: [{ url: "https://www.kb-wear.com/assets/logo.png" }],
  },
  alternates: {
    canonical: "https://www.kb-wear.com/capabilities",
  },
};

const capabilities = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L12 22" />
        <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
        <path d="M16 6c2 0 4 1 4 3s-2 3-4 3" />
        <path d="M8 6C6 6 4 7 4 9s2 3 4 3" />
      </svg>
    ),
    title: "Premium Sourcing",
    description: "Direct partnerships with certified mills ensuring consistent quality, competitive pricing, and sustainable materials for uniforms in Pakistan."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: "Advanced Manufacturing",
    description: "State-of-the-art machinery combined with master craftsmanship for superior quality and efficiency in industrial uniforms."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="10.5" r="2.5" />
        <circle cx="8.5" cy="7.5" r="2.5" />
        <circle cx="6.5" cy="12.5" r="2.5" />
        <path d="M12 22c-4.97 0-9-2.24-9-5v-.09c1.52.87 3.02 1.44 4.68 1.76a15.93 15.93 0 0 0 8.64 0c1.66-.32 3.16-.89 4.68-1.76V17c0 2.76-4.03 5-9 5z" />
      </svg>
    ),
    title: "Custom Design Services",
    description: "Dedicated design team creating custom uniforms that perfectly represent your brand identity and values in Pakistan."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
    title: "Scalable Production",
    description: "Flexible capacity handling orders from small batches to large-scale enterprise requirements for workwear uniforms."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Quality Assurance",
    description: "ISO-compliant systems with rigorous testing protocols ensuring zero-defect delivery standards for corporate uniforms."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Logistics Excellence",
    description: "Reliable supply chain management with real-time tracking and flexible delivery options nationwide in Pakistan."
  }
];

export default function Capabilities() {
  return (
    <main>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.kb-wear.com" },
        { name: "Capabilities", url: "https://www.kb-wear.com/capabilities" },
      ]} />
      <ServiceJsonLd services={capabilities.map(c => ({ name: c.title, description: c.description }))} />
      <section id="capabilities" className="capabilities-section">
        <div className="capabilities-container">
          <Breadcrumbs items={[{ label: "Capabilities" }]} />
          <div className="section-header">
            <RevealWrapper>
              <div className="section-label">Complete Manufacturing Solutions</div>
              <h1 className="section-title">Our Core Capabilities as a Uniform Manufacturer in Pakistan</h1>
              <p className="section-description">
                Comprehensive services covering every aspect of custom uniform production from concept to delivery for corporate and industrial needs.
              </p>
            </RevealWrapper>
          </div>
          <div className="capabilities-grid">
            {capabilities.map((cap, index) => (
              <RevealWrapper key={index} className="capability-card" delay={index * 100}>
                <div className="capability-icon">{cap.icon}</div>
                <h3>{cap.title}</h3>
                <p>{cap.description}</p>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
