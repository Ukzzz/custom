import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import { BreadcrumbJsonLd, ServiceJsonLd } from "../../components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Uniforms Manufacturer Pakistan | Custom Office Wear | KBwear",
  description: "KBwear manufactures premium custom corporate uniforms in Pakistan. Professional office wear, executive suits, branded attire for banks, offices & corporations. Factory in Lahore. Get a free quote!",
  keywords: "corporate uniforms pakistan, custom corporate uniforms, office uniforms lahore, professional uniforms pakistan, executive suits manufacturer, branded corporate wear, office staff uniforms, business uniforms pakistan, corporate dress code pakistan",
  openGraph: {
    title: "Corporate Uniforms Manufacturer Pakistan | KBwear",
    description: "Premium custom corporate uniforms manufactured in Lahore, Pakistan. Professional office wear and branded attire for businesses.",
    url: "https://www.kb-wear.com/uniforms/corporate-uniforms",
    images: [{ url: "https://www.kb-wear.com/assets/logo.png" }],
  },
  alternates: {
    canonical: "https://www.kb-wear.com/uniforms/corporate-uniforms",
  },
};

export default function CorporateUniforms() {
  return (
    <main>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.kb-wear.com" },
        { name: "Uniforms", url: "https://www.kb-wear.com/uniforms/corporate-uniforms" },
        { name: "Corporate Uniforms", url: "https://www.kb-wear.com/uniforms/corporate-uniforms" },
      ]} />
      <ServiceJsonLd services={[{ name: "Corporate Uniform Manufacturing", description: "Custom corporate uniform manufacturing services in Lahore, Pakistan. Professional office wear, executive suits, and branded attire for businesses." }]} />
      <section className="service-page-section">
        <div className="service-page-container">
          <Breadcrumbs items={[{ label: "Corporate Uniforms" }]} />
          <div className="section-header" style={{ textAlign: "left", margin: "0 0 40px" }}>
            <div className="section-label">Corporate Uniform Manufacturing</div>
            <h1 className="section-title" style={{ display: "block" }}>Custom Corporate Uniforms Manufacturer in Pakistan</h1>
          </div>

          <p className="service-intro">
            KBwear is Pakistan&apos;s leading corporate uniform manufacturer, based in Lahore. We design and produce premium-quality corporate uniforms for banks, multinational corporations, government offices, and private businesses across Pakistan. From formal executive suits to everyday office wear, our custom corporate uniforms are tailored to represent your brand with professionalism and consistency.
          </p>

          <div className="service-features">
            <div className="service-feature-card">
              <h3>Executive Suits &amp; Blazers</h3>
              <p>Premium tailored executive suits, blazers, and formal wear manufactured with high-quality fabrics. Perfect for management teams, C-suite executives, and client-facing staff in banks and corporations.</p>
            </div>
            <div className="service-feature-card">
              <h3>Office Staff Uniforms</h3>
              <p>Comfortable, branded daily wear for office employees including dress shirts, polo shirts, trousers, and skirts. Designed for full-day comfort with corporate color branding and logo embroidery.</p>
            </div>
            <div className="service-feature-card">
              <h3>Reception &amp; Front Desk</h3>
              <p>Stylish, professional uniforms for reception and customer-facing roles. First impressions matter — our front desk uniforms project confidence and brand identity to every visitor.</p>
            </div>
            <div className="service-feature-card">
              <h3>Custom Branding &amp; Embroidery</h3>
              <p>Company logo embroidery, custom color matching, branded buttons, and name badge placements. We ensure your corporate identity is represented down to the smallest detail.</p>
            </div>
          </div>

          <div className="service-content-block">
            <h2>Why Choose KBwear for Corporate Uniforms?</h2>
            <p>With over 100,000 uniforms delivered to Pakistan&apos;s top corporations including TOTAL PARCO and ZIC Petroleum, KBwear understands the demands of corporate uniform programs. Here&apos;s what sets us apart:</p>
            <ul>
              <li>Premium fabric sourcing from certified mills — wrinkle-resistant, breathable fabrics ideal for Pakistan&apos;s climate</li>
              <li>CAD-integrated precision cutting for consistent sizing across large orders</li>
              <li>In-house design team that works with your brand guidelines to create custom corporate looks</li>
              <li>Scalable production from 50 to 10,000+ units per order</li>
              <li>ISO-compliant quality control with multi-stage inspection</li>
              <li>Nationwide delivery across all cities in Pakistan with real-time tracking</li>
            </ul>
          </div>

          <div className="service-content-block">
            <h2>Our Corporate Uniform Manufacturing Process</h2>
            <p>Every corporate uniform order follows our proven 6-step manufacturing process. We begin with a detailed consultation to understand your brand requirements, company colors, and employee sizing. Our design team then creates mock-ups and samples for your approval before full-scale production begins at our Lahore factory.</p>
            <p>From fabric selection and precision cutting to expert stitching, quality control, and professional packaging, every step is optimized for quality and consistency. We typically deliver standard corporate uniform orders within 2-4 weeks.</p>
          </div>

          <div className="service-content-block">
            <h2>Industries We Serve with Corporate Uniforms</h2>
            <p>Our corporate uniform clients span diverse sectors across Pakistan:</p>
            <ul>
              <li>Banks and financial institutions</li>
              <li>Petroleum and energy companies (TOTAL PARCO, ZIC, FLOW)</li>
              <li>IT companies and tech firms</li>
              <li>Government offices and public sector organizations</li>
              <li>Real estate and property management firms</li>
              <li>Telecom and retail chains</li>
            </ul>
          </div>

          <div className="service-cta-box">
            <h2>Get a Free Corporate Uniform Quote</h2>
            <p>Contact us today with your requirements and receive a detailed quotation within 24 hours.</p>
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
