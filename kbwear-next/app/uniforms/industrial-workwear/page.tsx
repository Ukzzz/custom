import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import { BreadcrumbJsonLd, ServiceJsonLd } from "../../components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Workwear Manufacturer Pakistan | Safety Uniforms | KBwear",
  description: "KBwear manufactures durable industrial workwear and safety uniforms in Lahore, Pakistan. Hi-vis vests, flame-resistant clothing, factory uniforms & construction workwear. ISO-certified quality.",
  keywords: "industrial workwear pakistan, safety uniforms lahore, factory uniforms pakistan, construction workwear, hi-vis vests pakistan, flame resistant clothing, industrial safety wear, worker uniforms, manufacturing uniforms pakistan",
  openGraph: {
    title: "Industrial Workwear & Safety Uniforms Manufacturer | KBwear",
    description: "Durable industrial workwear and safety uniforms manufactured in Lahore, Pakistan.",
    url: "https://www.kb-wear.com/uniforms/industrial-workwear",
    images: [{ url: "https://www.kb-wear.com/assets/logo.png" }],
  },
  alternates: { canonical: "https://www.kb-wear.com/uniforms/industrial-workwear" },
};

export default function IndustrialWorkwear() {
  return (
    <main>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.kb-wear.com" },
        { name: "Uniforms", url: "https://www.kb-wear.com/uniforms/industrial-workwear" },
        { name: "Industrial Workwear", url: "https://www.kb-wear.com/uniforms/industrial-workwear" },
      ]} />
      <ServiceJsonLd services={[{ name: "Industrial Workwear Manufacturing", description: "Industrial workwear and safety uniform manufacturing in Lahore, Pakistan." }]} />
      <section className="service-page-section">
        <div className="service-page-container">
          <Breadcrumbs items={[{ label: "Industrial Workwear" }]} />
          <div className="section-header" style={{ textAlign: "left", margin: "0 0 40px" }}>
            <div className="section-label">Industrial Workwear Manufacturing</div>
            <h1 className="section-title" style={{ display: "block" }}>Industrial Workwear &amp; Safety Uniforms Manufacturer in Pakistan</h1>
          </div>
          <p className="service-intro">
            KBwear manufactures heavy-duty industrial workwear and safety uniforms designed for Pakistan&apos;s most demanding work environments. From petroleum refineries and construction sites to manufacturing floors and warehouses, our industrial uniforms are built to protect workers while maintaining comfort and durability throughout long shifts.
          </p>
          <div className="service-features">
            <div className="service-feature-card">
              <h3>High-Visibility Workwear</h3>
              <p>Reflective hi-vis vests, jackets, and coveralls meeting international safety standards. Essential for construction sites, road workers, and outdoor industrial environments across Pakistan.</p>
            </div>
            <div className="service-feature-card">
              <h3>Flame-Resistant Clothing</h3>
              <p>FR-rated coveralls and uniforms for petroleum, welding, and electrical industries. Manufactured with certified flame-resistant fabrics for maximum worker safety.</p>
            </div>
            <div className="service-feature-card">
              <h3>Factory Floor Uniforms</h3>
              <p>Durable, comfortable workwear for manufacturing and assembly line workers. Designed for ease of movement with reinforced seams and stain-resistant fabrics.</p>
            </div>
            <div className="service-feature-card">
              <h3>Coveralls &amp; Boiler Suits</h3>
              <p>Full-body protective coveralls for maintenance crews, mechanics, and industrial technicians. Available in multiple fabric weights and color options with custom branding.</p>
            </div>
          </div>
          <div className="service-content-block">
            <h2>Safety Standards &amp; Certifications</h2>
            <p>At KBwear, worker safety is our top priority. Our industrial workwear is manufactured using internationally certified fabrics and meets rigorous quality standards:</p>
            <ul>
              <li>ISO-compliant manufacturing processes with multi-stage quality inspection</li>
              <li>Flame-resistant fabrics certified for petroleum and energy industry use</li>
              <li>High-visibility materials meeting EN 20471 reflective strip standards</li>
              <li>Reinforced stitching for maximum durability in harsh industrial conditions</li>
              <li>Chemical and stain-resistant fabric options for specialized environments</li>
            </ul>
          </div>
          <div className="service-content-block">
            <h2>Industries We Supply Industrial Workwear To</h2>
            <ul>
              <li>Petroleum &amp; energy companies (TOTAL PARCO, ZIC Petroleum, FLOW)</li>
              <li>Construction and civil engineering firms</li>
              <li>Manufacturing and assembly plants</li>
              <li>Automotive and mechanical workshops</li>
              <li>Warehouse and logistics operations</li>
              <li>Mining and extraction industries</li>
            </ul>
          </div>
          <div className="service-cta-box">
            <h2>Order Industrial Workwear Today</h2>
            <p>Protect your workforce with KBwear&apos;s premium industrial workwear. Contact us for a free quote.</p>
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
