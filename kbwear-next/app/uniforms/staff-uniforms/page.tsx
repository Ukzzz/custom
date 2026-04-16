import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import { BreadcrumbJsonLd, ServiceJsonLd } from "../../components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staff Uniforms Pakistan | Professional Employee Uniforms | KBwear",
  description: "KBwear manufactures professional staff uniforms for businesses across Pakistan. Retail, healthcare, security & service industry uniforms. Custom branded staff wear manufactured in Lahore.",
  keywords: "staff uniforms pakistan, professional uniforms, employee uniforms lahore, retail staff uniforms, healthcare uniforms pakistan, security guard uniforms, service industry uniforms, custom staff wear",
  openGraph: {
    title: "Professional Staff Uniforms Manufacturer Pakistan | KBwear",
    description: "Custom staff uniforms for retail, healthcare, security, and service industries in Pakistan.",
    url: "https://www.kb-wear.com/uniforms/staff-uniforms",
    images: [{ url: "https://www.kb-wear.com/assets/logo.png" }],
  },
  alternates: { canonical: "https://www.kb-wear.com/uniforms/staff-uniforms" },
};

export default function StaffUniforms() {
  return (
    <main>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.kb-wear.com" },
        { name: "Uniforms", url: "https://www.kb-wear.com/uniforms/staff-uniforms" },
        { name: "Staff Uniforms", url: "https://www.kb-wear.com/uniforms/staff-uniforms" },
      ]} />
      <ServiceJsonLd services={[{ name: "Staff Uniform Manufacturing", description: "Professional staff uniform manufacturing for businesses across Pakistan." }]} />
      <section className="service-page-section">
        <div className="service-page-container">
          <Breadcrumbs items={[{ label: "Staff Uniforms" }]} />
          <div className="section-header" style={{ textAlign: "left", margin: "0 0 40px" }}>
            <div className="section-label">Staff Uniform Manufacturing</div>
            <h1 className="section-title" style={{ display: "block" }}>Professional Staff Uniforms Manufacturer in Pakistan</h1>
          </div>
          <p className="service-intro">
            Looking for professional staff uniforms in Pakistan? KBwear manufactures premium-quality staff uniforms for businesses of all sizes. Whether you need uniforms for your retail team, healthcare workers, security personnel, or service staff, we deliver custom-branded uniforms that project professionalism and build team identity. Our Lahore factory handles orders from 50 to 10,000+ units.
          </p>
          <div className="service-features">
            <div className="service-feature-card">
              <h3>Retail Staff Uniforms</h3>
              <p>Branded polo shirts, vests, aprons, and name badges for retail store employees. Designed to align with your store&apos;s brand identity and create a cohesive customer experience.</p>
            </div>
            <div className="service-feature-card">
              <h3>Healthcare Uniforms</h3>
              <p>Scrubs, lab coats, nurse uniforms, and medical staff attire. Manufactured with hygienic, easy-wash fabrics suitable for clinical and hospital environments in Pakistan.</p>
            </div>
            <div className="service-feature-card">
              <h3>Security Guard Uniforms</h3>
              <p>Professional security uniforms including tactical shirts, cargo trousers, belts, and accessories. Durable construction for demanding security and guard duty requirements.</p>
            </div>
            <div className="service-feature-card">
              <h3>Cleaning &amp; Maintenance</h3>
              <p>Practical, comfortable uniforms for cleaning crews, janitors, and maintenance staff. Stain-resistant and easy-care fabrics that maintain a tidy professional appearance.</p>
            </div>
          </div>
          <div className="service-content-block">
            <h2>Why Businesses Choose KBwear for Staff Uniforms</h2>
            <p>A well-uniformed staff creates a professional image, boosts team morale, and builds customer trust. KBwear makes it easy and affordable:</p>
            <ul>
              <li>Custom branding with logo embroidery, screen printing, and heat transfer options</li>
              <li>Wide range of fabric choices — from breathable cotton blends to technical performance fabrics</li>
              <li>Flexible order quantities starting from just 50 units</li>
              <li>Complete sizing solutions with custom tailoring available</li>
              <li>Quick turnaround of 2-4 weeks for standard orders</li>
              <li>Annual uniform refresh programs for recurring business needs</li>
              <li>Free delivery across Pakistan for bulk orders</li>
            </ul>
          </div>
          <div className="service-cta-box">
            <h2>Get Custom Staff Uniforms for Your Business</h2>
            <p>Tell us about your team size and requirements — free quotation within 24 hours.</p>
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
