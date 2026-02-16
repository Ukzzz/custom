import RevealWrapper from "../components/RevealWrapper";
import CountUp from "../components/CountUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients - KBwear | Trusted by TOTAL PARCO & ZIC Petroleum Pakistan",
  description: "KBwear serves Pakistan's leading corporations including TOTAL PARCO and ZIC Petroleum. Over 10,000+ custom uniforms delivered with 100% quality assurance. Trusted uniform manufacturer.",
  keywords: "KBwear clients, KB wear customers, TOTAL PARCO uniforms, ZIC Petroleum workwear, corporate uniform clients Pakistan, industrial uniform clients, oil company uniforms, petroleum industry workwear, trusted uniform manufacturer, 10000 uniforms delivered",
  openGraph: {
    title: "Our Clients - KBwear | Trusted by TOTAL PARCO & ZIC Petroleum",
    description: "KBwear serves Pakistan's leading corporations including TOTAL PARCO and ZIC Petroleum. Over 10,000+ uniforms delivered with 100% quality assurance.",
    url: "https://kb-wear.com/clients.html",
    images: [{ url: "https://kb-wear.com/assets/logo.png" }],
  },
};

const clients = [
  {
    name: "TOTAL PARCO",
    description: "Leading petroleum company trusted us for their complete uniform requirements with exceptional quality standards in Pakistan."
  },
  {
    name: "ZIC Petroleum",
    description: "Comprehensive uniform solutions meeting their stringent safety and branding specifications for industrial workwear."
  },
  {
    name: "Major Corporations",
    description: "Serving various industry leaders across Pakistan with premium uniform manufacturing excellence."
  }
];

export default function Clients() {
  return (
    <main>
      <section id="clients" className="clients-section">
        <div className="clients-container">
          <div className="section-header">
            <RevealWrapper>
              <div className="section-label" style={{ color: "var(--secondary)" }}>Trusted by Industry Leaders</div>
              <h2 className="section-title" style={{ color: "white" }}>Our Prestigious Clients in Pakistan</h2>
              <p className="section-description" style={{ color: "rgba(255,255,255,0.8)" }}>
                Delivering excellence in uniform manufacturing to Pakistan's leading corporations like TOTAL PARCO and ZIC Petroleum.
              </p>
            </RevealWrapper>
          </div>
          <div className="clients-grid">
            {clients.map((client, index) => (
              <RevealWrapper key={index} className="client-logo-card" delay={index * 100}>
                <h3>{client.name}</h3>
                <p>{client.description}</p>
              </RevealWrapper>
            ))}
          </div>
          <RevealWrapper className="achievements-banner">
            <h3>Production Excellence</h3>
            <div className="achievement-number">
              <CountUp end={10000} suffix="+" />
            </div>
            <div className="achievement-label"> Uniforms Successfully Delivered in Pakistan</div>
          </RevealWrapper>
        </div>
      </section>
    </main>
  );
}
