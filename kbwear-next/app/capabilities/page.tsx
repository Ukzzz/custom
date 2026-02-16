import RevealWrapper from "../components/RevealWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Capabilities - KBwear Custom Uniform Manufacturing Services Pakistan",
  description: "KBwear's comprehensive uniform manufacturing capabilities: premium fabric sourcing, custom design services, advanced manufacturing, scalable production, ISO-quality assurance, and nationwide logistics in Pakistan.",
  keywords: "KBwear capabilities, KB wear services, uniform manufacturing services, custom uniform design, bulk uniform production, quality assurance uniforms, fabric sourcing Pakistan, corporate uniform services, industrial workwear manufacturer",
  openGraph: {
    title: "Our Capabilities - KBwear Custom Uniform Manufacturing Services",
    description: "Comprehensive uniform manufacturing capabilities from design to delivery in Pakistan.",
    url: "https://kb-wear.com/capabilities.html",
    images: [{ url: "https://kb-wear.com/assets/logo.png" }],
  },
};

const capabilities = [
  {
    icon: "🧵",
    title: "Premium Sourcing",
    description: "Direct partnerships with certified mills ensuring consistent quality, competitive pricing, and sustainable materials for uniforms in Pakistan."
  },
  {
    icon: "⚙️",
    title: "Advanced Manufacturing",
    description: "State-of-the-art machinery combined with master craftsmanship for superior quality and efficiency in industrial uniforms."
  },
  {
    icon: "🎨",
    title: "Custom Design Services",
    description: "Dedicated design team creating custom uniforms that perfectly represent your brand identity and values in Pakistan."
  },
  {
    icon: "📊",
    title: "Scalable Production",
    description: "Flexible capacity handling orders from small batches to large-scale enterprise requirements for workwear uniforms."
  },
  {
    icon: "✅",
    title: "Quality Assurance",
    description: "ISO-compliant systems with rigorous testing protocols ensuring zero-defect delivery standards for corporate uniforms."
  },
  {
    icon: "🚚",
    title: "Logistics Excellence",
    description: "Reliable supply chain management with real-time tracking and flexible delivery options nationwide in Pakistan."
  }
];

export default function Capabilities() {
  return (
    <main>
      <section id="capabilities" className="capabilities-section">
        <div className="capabilities-container">
          <div className="section-header">
            <RevealWrapper>
              <div className="section-label">Complete Manufacturing Solutions</div>
              <h2 className="section-title">Our Core Capabilities as a Uniform Manufacturer in Pakistan</h2>
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
