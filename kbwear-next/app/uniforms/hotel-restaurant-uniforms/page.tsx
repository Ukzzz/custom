import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import { BreadcrumbJsonLd, ServiceJsonLd } from "../../components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel & Restaurant Uniforms Pakistan | Hospitality Attire | KBwear",
  description: "KBwear manufactures premium hotel and restaurant uniforms in Pakistan. Chef coats, waiter uniforms, housekeeping attire, front desk wear. Custom hospitality uniforms from Lahore.",
  keywords: "hotel uniforms pakistan, restaurant uniforms lahore, chef uniforms pakistan, waiter uniforms, hospitality uniforms, housekeeping uniforms, hotel staff uniforms, kitchen uniforms pakistan",
  openGraph: {
    title: "Hotel & Restaurant Uniform Manufacturer Pakistan | KBwear",
    description: "Premium hospitality uniforms for hotels and restaurants across Pakistan.",
    url: "https://www.kb-wear.com/uniforms/hotel-restaurant-uniforms",
    images: [{ url: "https://www.kb-wear.com/assets/logo.png" }],
  },
  alternates: { canonical: "https://www.kb-wear.com/uniforms/hotel-restaurant-uniforms" },
};

export default function HotelRestaurantUniforms() {
  return (
    <main>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.kb-wear.com" },
        { name: "Uniforms", url: "https://www.kb-wear.com/uniforms/hotel-restaurant-uniforms" },
        { name: "Hotel & Restaurant Uniforms", url: "https://www.kb-wear.com/uniforms/hotel-restaurant-uniforms" },
      ]} />
      <ServiceJsonLd services={[{ name: "Hotel & Restaurant Uniform Manufacturing", description: "Hospitality uniform manufacturing for hotels and restaurants in Pakistan." }]} />
      <section className="service-page-section">
        <div className="service-page-container">
          <Breadcrumbs items={[{ label: "Hotel & Restaurant Uniforms" }]} />
          <div className="section-header" style={{ textAlign: "left", margin: "0 0 40px" }}>
            <div className="section-label">Hospitality Uniform Manufacturing</div>
            <h1 className="section-title" style={{ display: "block" }}>Hotel &amp; Restaurant Uniform Manufacturer in Pakistan</h1>
          </div>
          <p className="service-intro">
            KBwear manufactures premium hospitality uniforms for Pakistan&apos;s hotels, restaurants, cafes, and catering companies. From five-star hotel chains to boutique restaurants, we create uniforms that enhance your brand image while providing comfort for staff during long service hours. Our Lahore factory produces chef coats, waiter uniforms, housekeeping attire, and front desk formal wear.
          </p>
          <div className="service-features">
            <div className="service-feature-card">
              <h3>Chef Coats &amp; Kitchen Wear</h3>
              <p>Professional double-breasted chef coats, kitchen trousers, and aprons. Manufactured with heat-resistant, breathable fabrics designed for commercial kitchens in Pakistan.</p>
            </div>
            <div className="service-feature-card">
              <h3>Waiter &amp; Server Uniforms</h3>
              <p>Elegant waiter vests, dress shirts, bow ties, and aprons. Designed to complement your restaurant&apos;s ambiance while allowing ease of movement during service.</p>
            </div>
            <div className="service-feature-card">
              <h3>Housekeeping Uniforms</h3>
              <p>Practical, comfortable housekeeping uniforms for hotel staff. Stain-resistant fabrics with professional cuts that maintain a polished appearance throughout long shifts.</p>
            </div>
            <div className="service-feature-card">
              <h3>Front Desk &amp; Concierge</h3>
              <p>Premium formal wear for reception, concierge, and bell staff. Tailored suits, blazers, and branded accessories that create a lasting first impression for hotel guests.</p>
            </div>
          </div>
          <div className="service-content-block">
            <h2>Serving Pakistan&apos;s Hospitality Industry</h2>
            <p>The hospitality industry demands uniforms that balance elegance with functionality. KBwear delivers on both fronts with:</p>
            <ul>
              <li>Custom designs that match your hotel or restaurant&apos;s brand identity and color palette</li>
              <li>Stain-resistant and easy-care fabrics for kitchen and service environments</li>
              <li>Heat-resistant materials for kitchen staff and chefs</li>
              <li>Comfortable cuts designed for extended wear during long service hours</li>
              <li>Complete uniform programs covering all departments from kitchen to front desk</li>
              <li>Seasonal uniform refresh programs for hotels and restaurant chains</li>
            </ul>
          </div>
          <div className="service-cta-box">
            <h2>Outfit Your Hotel or Restaurant Staff</h2>
            <p>Contact us to discuss custom hospitality uniform solutions for your establishment.</p>
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
