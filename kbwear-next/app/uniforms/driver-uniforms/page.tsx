import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import { BreadcrumbJsonLd, ServiceJsonLd } from "../../components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Driver Uniforms Pakistan | Chauffeur & Fleet Uniforms | KBwear",
  description: "KBwear manufactures professional driver uniforms in Pakistan. Custom chauffeur wear, fleet driver uniforms for petroleum companies, logistics & delivery services. Manufactured in Lahore.",
  keywords: "driver uniform pakistan, chauffeur uniform, fleet driver uniforms, petroleum driver uniform, delivery driver uniforms, professional driver wear pakistan, transport uniforms lahore, logistics uniforms",
  openGraph: {
    title: "Professional Driver Uniforms Manufacturer Pakistan | KBwear",
    description: "Custom driver uniforms for petroleum companies, logistics and fleet management in Pakistan.",
    url: "https://www.kb-wear.com/uniforms/driver-uniforms",
    images: [{ url: "https://www.kb-wear.com/assets/logo.png" }],
  },
  alternates: { canonical: "https://www.kb-wear.com/uniforms/driver-uniforms" },
};

export default function DriverUniforms() {
  return (
    <main>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.kb-wear.com" },
        { name: "Uniforms", url: "https://www.kb-wear.com/uniforms/driver-uniforms" },
        { name: "Driver Uniforms", url: "https://www.kb-wear.com/uniforms/driver-uniforms" },
      ]} />
      <ServiceJsonLd services={[{ name: "Driver Uniform Manufacturing", description: "Professional driver uniform manufacturing for petroleum companies and logistics businesses in Pakistan." }]} />
      <section className="service-page-section">
        <div className="service-page-container">
          <Breadcrumbs items={[{ label: "Driver Uniforms" }]} />
          <div className="section-header" style={{ textAlign: "left", margin: "0 0 40px" }}>
            <div className="section-label">Driver Uniform Manufacturing</div>
            <h1 className="section-title" style={{ display: "block" }}>Professional Driver Uniforms Manufacturer in Pakistan</h1>
          </div>
          <p className="service-intro">
            KBwear specializes in manufacturing professional driver uniforms for Pakistan&apos;s leading petroleum companies, logistics firms, and corporate fleet operators. Our driver uniforms are designed for comfort during long shifts, durability in tough conditions, and a professional appearance that represents your brand on the road. We currently manufacture driver uniforms for TOTAL PARCO, ZIC Petroleum, and FLOW Petroleum.
          </p>
          <div className="service-features">
            <div className="service-feature-card">
              <h3>Petroleum Company Drivers</h3>
              <p>Branded uniforms for fuel tanker drivers, station attendants, and petroleum fleet operators. Manufactured with safety-compliant fabrics and company branding as per TOTAL PARCO and ZIC Petroleum specifications.</p>
            </div>
            <div className="service-feature-card">
              <h3>Corporate Chauffeur Wear</h3>
              <p>Elegant, professional chauffeur uniforms including dress shirts, trousers, blazers, and caps. Designed to project a premium image for executive transportation services.</p>
            </div>
            <div className="service-feature-card">
              <h3>Delivery &amp; Logistics</h3>
              <p>Comfortable, branded uniforms for delivery riders and logistics drivers. Weather-resistant jackets, breathable polo shirts, and cargo trousers designed for daily wear.</p>
            </div>
            <div className="service-feature-card">
              <h3>Transport &amp; Bus Fleets</h3>
              <p>Standardized uniforms for public and private transport operators, bus drivers, and fleet management companies across Pakistan with durable, easy-care fabrics.</p>
            </div>
          </div>
          <div className="service-content-block">
            <h2>Why Pakistan&apos;s Top Companies Trust KBwear for Driver Uniforms</h2>
            <p>Driver uniforms need to withstand daily wear, outdoor exposure, and constant movement. KBwear understands these demands because we&apos;ve been manufacturing driver uniforms for Pakistan&apos;s petroleum industry leaders since our founding.</p>
            <ul>
              <li>Breathable, wrinkle-resistant fabrics ideal for Pakistan&apos;s hot climate</li>
              <li>Reinforced seams and stress points for maximum durability</li>
              <li>Custom logo embroidery and company color matching</li>
              <li>Reflective strips and safety features for night driving visibility</li>
              <li>Easy-care fabrics that maintain appearance after repeated washing</li>
              <li>Available in all sizes with custom sizing options for large fleets</li>
            </ul>
          </div>
          <div className="service-cta-box">
            <h2>Order Driver Uniforms for Your Fleet</h2>
            <p>Get custom driver uniforms that represent your brand professionally. Free quote within 24 hours.</p>
            <Link href="/contact" className="btn btn-primary">
              <span>Request Free Quote</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
