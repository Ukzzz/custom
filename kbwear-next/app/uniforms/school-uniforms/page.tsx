import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import { BreadcrumbJsonLd, ServiceJsonLd } from "../../components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Uniform Manufacturer Lahore Pakistan | Bulk Orders | KBwear",
  description: "KBwear manufactures durable school uniforms in bulk for schools and educational institutions in Lahore and across Pakistan. Comfortable fabrics, custom designs, competitive pricing.",
  keywords: "school uniforms lahore, school uniform manufacturer pakistan, bulk school uniforms, school dress pakistan, educational institution uniforms, custom school uniforms, children uniforms lahore, school uniform supplier",
  openGraph: {
    title: "School Uniform Manufacturer in Lahore, Pakistan | KBwear",
    description: "Bulk school uniform manufacturing for educational institutions across Pakistan.",
    url: "https://www.kb-wear.com/uniforms/school-uniforms",
    images: [{ url: "https://www.kb-wear.com/assets/logo.png" }],
  },
  alternates: { canonical: "https://www.kb-wear.com/uniforms/school-uniforms" },
};

export default function SchoolUniforms() {
  return (
    <main>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.kb-wear.com" },
        { name: "Uniforms", url: "https://www.kb-wear.com/uniforms/school-uniforms" },
        { name: "School Uniforms", url: "https://www.kb-wear.com/uniforms/school-uniforms" },
      ]} />
      <ServiceJsonLd services={[{ name: "School Uniform Manufacturing", description: "Bulk school uniform manufacturing for educational institutions in Lahore and across Pakistan." }]} />
      <section className="service-page-section">
        <div className="service-page-container">
          <Breadcrumbs items={[{ label: "School Uniforms" }]} />
          <div className="section-header" style={{ textAlign: "left", margin: "0 0 40px" }}>
            <div className="section-label">School Uniform Manufacturing</div>
            <h1 className="section-title" style={{ display: "block" }}>School Uniform Manufacturer in Lahore, Pakistan</h1>
          </div>
          <p className="service-intro">
            KBwear provides high-quality, durable school uniforms for educational institutions across Lahore and Pakistan. We understand that school uniforms need to be comfortable for active children, durable enough for daily wear, and affordable for parents. Our bulk manufacturing capabilities allow us to offer competitive per-unit pricing for schools of all sizes.
          </p>
          <div className="service-features">
            <div className="service-feature-card">
              <h3>Boys School Uniforms</h3>
              <p>Dress shirts, trousers, blazers, ties, and PE kits for boys. Manufactured with reinforced seams and stain-resistant fabrics that withstand daily school activities.</p>
            </div>
            <div className="service-feature-card">
              <h3>Girls School Uniforms</h3>
              <p>Shalwar kameez, pinafores, skirts, and dupattas. Modestly designed with comfortable fits, custom embroidery, and school color matching for institutions across Pakistan.</p>
            </div>
            <div className="service-feature-card">
              <h3>Sports &amp; PE Kits</h3>
              <p>Breathable, stretchy sports uniforms, track suits, and PE kits. Designed for physical activities with moisture-wicking fabrics and school branding options.</p>
            </div>
            <div className="service-feature-card">
              <h3>Winter Uniforms</h3>
              <p>Sweaters, cardigans, blazers, and warm jackets with school logos. Seasonal uniform production to prepare schools for Lahore&apos;s winter months.</p>
            </div>
          </div>
          <div className="service-content-block">
            <h2>Why Schools in Lahore Choose KBwear</h2>
            <ul>
              <li>Bulk pricing starting from as low as 50 units — ideal for small and large schools</li>
              <li>Child-friendly, breathable fabrics that are comfortable in Pakistan&apos;s hot summers</li>
              <li>Color-fast dyes that don&apos;t fade after repeated washing</li>
              <li>Custom embroidery with school logos, badges, and monograms</li>
              <li>Complete size range from small children to senior students</li>
              <li>Seasonal production for summer and winter uniform cycles</li>
              <li>Delivery to schools anywhere in Lahore, Punjab, and across Pakistan</li>
            </ul>
          </div>
          <div className="service-cta-box">
            <h2>Get School Uniform Pricing for Your Institution</h2>
            <p>Contact us with your school&apos;s requirements and student count for a customized quotation.</p>
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
