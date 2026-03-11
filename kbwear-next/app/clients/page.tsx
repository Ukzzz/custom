import RevealWrapper from "../components/RevealWrapper";
import CountUp from "../components/CountUp";
import Breadcrumbs from "../components/Breadcrumbs";
import { BreadcrumbJsonLd } from "../components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients - KBwear | Trusted by TOTAL PARCO & ZIC Petroleum Pakistan",
  description: "KBwear serves Pakistan's leading corporations including TOTAL PARCO and ZIC Petroleum. Over 100,000+ custom uniforms delivered with 100% quality assurance. Trusted uniform manufacturer.",
  keywords: "KBwear clients, KB wear customers, TOTAL PARCO uniforms, ZIC Petroleum workwear, corporate uniform clients Pakistan, industrial uniform clients, oil company uniforms, petroleum industry workwear, trusted uniform manufacturer, 100000 uniforms delivered",
  openGraph: {
    title: "Our Clients - KBwear | Trusted by TOTAL PARCO & ZIC Petroleum",
    description: "KBwear serves Pakistan's leading corporations including TOTAL PARCO and ZIC Petroleum. Over 100,000+ uniforms delivered with 100% quality assurance.",
    url: "https://www.kb-wear.com/clients",
    images: [{ url: "https://www.kb-wear.com/assets/logo.png" }],
  },
  alternates: {
    canonical: "https://www.kb-wear.com/clients",
  },
};

const clients = [
  {
    name: "TOTAL PARCO",
    logo: "/assets/total.png",
    description: "Leading petroleum company trusted us for their complete uniform requirements with exceptional quality standards in Pakistan."
  },
  {
    name: "ZIC Petroleum",
    logo: "/assets/zic.png",
    description: "Comprehensive uniform solutions meeting their stringent safety and branding specifications for industrial workwear."
  },
  {
    name: "FLOW Petroleum",
    logo: "/assets/flow.png",
    description: "Serving various industry leaders across Pakistan with premium uniform manufacturing excellence."
  }
];

export default function Clients() {
  return (
    <main>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.kb-wear.com" },
        { name: "Clients", url: "https://www.kb-wear.com/clients" },
      ]} />
      <section id="clients" className="clients-section">
        <div className="clients-container">
          <Breadcrumbs items={[{ label: "Clients" }]} />
          
          <div className="section-header">
            <RevealWrapper>
              <div style={{ display: "block", marginBottom: "20px" }}>
                <div className="section-label" style={{ color: "var(--secondary)", margin: 0 }}>Our Trusted Partners</div>
              </div>
              <h2 className="section-title" style={{ color: "white", display: "inline-block" }}>Prestigious Clients</h2>
              <p className="section-description" style={{ color: "rgba(255,255,255,0.8)" }}>
                Delivering excellence in uniform manufacturing to Pakistan's leading corporations. We take pride in our long-standing relationships with industry giants.
              </p>
            </RevealWrapper>
          </div>

          <div className="clients-grid">
            {clients.map((client, index) => (
              <RevealWrapper key={index} className="client-logo-card" delay={index * 150}>
                {client.logo ? (
                  <div className="client-logo-wrapper">
                    <img src={client.logo} alt={client.name} className="client-logo-img" />
                  </div>
                ) : (
                  <h3>{client.name}</h3>
                )}
                <p>{client.description}</p>
              </RevealWrapper>
            ))}
          </div>

          <RevealWrapper className="achievements-banner" delay={500}>
            <h3>Production Excellence</h3>
            <div className="achievement-number">
              <CountUp end={100000} suffix="+" />
            </div>
            <div className="achievement-label">Uniforms Successfully Delivered Across Pakistan</div>
          </RevealWrapper>

        </div>
      </section>
    </main>
  );
}
