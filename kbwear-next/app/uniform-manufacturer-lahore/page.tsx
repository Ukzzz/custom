import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import { BreadcrumbJsonLd } from "../components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uniform Manufacturer in Lahore | #1 Factory in Punjab | KBwear",
  description: "KBwear is the top uniform manufacturer in Lahore, Punjab. Custom corporate, industrial, school & driver uniforms from our factory at Dallu Khurd Rd, Gajjumata, Lahore. Visit our facility today!",
  keywords: "uniform manufacturer lahore, uniform factory lahore, uniform company lahore, uniform supplier lahore, uniform stitching lahore, lahore garment factory, punjab uniform manufacturer, uniform makers lahore, best uniform company lahore",
  openGraph: {
    title: "Top Uniform Manufacturer in Lahore | KBwear Factory",
    description: "KBwear - Lahore's leading uniform manufacturer with state-of-the-art factory at Dallu Khurd Rd, Gajjumata, Lahore.",
    url: "https://www.kb-wear.com/uniform-manufacturer-lahore",
    images: [{ url: "https://www.kb-wear.com/assets/logo.png" }],
  },
  alternates: { canonical: "https://www.kb-wear.com/uniform-manufacturer-lahore" },
};

export default function UniformManufacturerLahore() {
  return (
    <main>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.kb-wear.com" },
        { name: "Uniform Manufacturer Lahore", url: "https://www.kb-wear.com/uniform-manufacturer-lahore" },
      ]} />
      <section className="service-page-section">
        <div className="service-page-container">
          <Breadcrumbs items={[{ label: "Uniform Manufacturer Lahore" }]} />
          <div className="section-header" style={{ textAlign: "left", margin: "0 0 40px" }}>
            <div className="section-label">Lahore&apos;s Premier Uniform Factory</div>
            <h1 className="section-title" style={{ display: "block" }}>Top Uniform Manufacturer in Lahore, Pakistan</h1>
          </div>
          <p className="service-intro">
            KBwear is Lahore&apos;s premier uniform manufacturing company, operating from our state-of-the-art factory at Dallu Khurd Rd, Gajjumata, Lahore. As one of the largest uniform manufacturers in Punjab, we produce custom corporate uniforms, industrial workwear, school uniforms, driver uniforms, and hospitality attire for businesses across Pakistan. Our Lahore factory combines modern manufacturing technology with skilled craftsmanship to deliver premium-quality uniforms at competitive prices.
          </p>

          <div className="service-content-block">
            <h2>Why Lahore is Pakistan&apos;s Uniform Manufacturing Hub</h2>
            <p>Lahore has been Pakistan&apos;s garment manufacturing capital for decades. The city&apos;s textile infrastructure, skilled labor force, and proximity to raw material suppliers make it the ideal location for uniform manufacturing. KBwear leverages these advantages to offer:</p>
            <ul>
              <li>Direct access to Punjab&apos;s finest fabric mills and suppliers — reducing costs and lead times</li>
              <li>A highly skilled workforce trained in precision garment manufacturing</li>
              <li>Strategic location for nationwide distribution — central to Karachi, Islamabad, and Peshawar</li>
              <li>State-of-the-art factory with CAD-integrated cutting, industrial stitching, and quality control</li>
              <li>Lower production costs compared to Karachi, passed directly to our clients</li>
            </ul>
          </div>

          <div className="service-content-block">
            <h2>Our Lahore Factory — A Complete Uniform Manufacturing Facility</h2>
            <p>Our manufacturing facility at Dallu Khurd Rd, Gajjumata, Lahore is equipped with end-to-end production capabilities. Every uniform is manufactured in-house, from raw fabric to finished product, ensuring complete quality control:</p>
            <p>We welcome factory visits and tours. <Link href="/contact" style={{ color: "var(--secondary)", fontWeight: 600 }}>Contact us to schedule a visit</Link> and see our production process firsthand.</p>
          </div>

          <div className="service-features">
            <div className="service-feature-card">
              <h3>100,000+ Uniforms Delivered</h3>
              <p>Over one hundred thousand uniforms manufactured and delivered to corporations across Pakistan from our Lahore factory.</p>
            </div>
            <div className="service-feature-card">
              <h3>Trusted by Industry Leaders</h3>
              <p>TOTAL PARCO, ZIC Petroleum, and FLOW Petroleum trust KBwear for their complete uniform requirements.</p>
            </div>
            <div className="service-feature-card">
              <h3>24/7 Production Capacity</h3>
              <p>Our Lahore factory operates around the clock to meet tight deadlines and handle large-scale enterprise orders.</p>
            </div>
            <div className="service-feature-card">
              <h3>Nationwide Delivery</h3>
              <p>From Lahore to every corner of Pakistan — reliable logistics with real-time tracking for all uniform shipments.</p>
            </div>
          </div>

          <div className="service-content-block">
            <h2>Uniform Types We Manufacture in Lahore</h2>
            <p>KBwear&apos;s Lahore factory produces the full spectrum of professional uniforms:</p>
            <ul>
              <li><Link href="/uniforms/corporate-uniforms" style={{ color: "var(--secondary)", fontWeight: 600 }}>Corporate Uniforms</Link> — Office wear, executive suits, and branded corporate attire</li>
              <li><Link href="/uniforms/industrial-workwear" style={{ color: "var(--secondary)", fontWeight: 600 }}>Industrial Workwear</Link> — Safety uniforms, hi-vis vests, and flame-resistant clothing</li>
              <li><Link href="/uniforms/driver-uniforms" style={{ color: "var(--secondary)", fontWeight: 600 }}>Driver Uniforms</Link> — Petroleum and fleet driver uniforms</li>
              <li><Link href="/uniforms/school-uniforms" style={{ color: "var(--secondary)", fontWeight: 600 }}>School Uniforms</Link> — Bulk school uniform orders for educational institutions</li>
              <li><Link href="/uniforms/hotel-restaurant-uniforms" style={{ color: "var(--secondary)", fontWeight: 600 }}>Hotel &amp; Restaurant Uniforms</Link> — Chef coats, waiter and housekeeping uniforms</li>
              <li><Link href="/uniforms/staff-uniforms" style={{ color: "var(--secondary)", fontWeight: 600 }}>Staff Uniforms</Link> — Retail, healthcare, and security uniforms</li>
            </ul>
          </div>

          <div className="service-cta-box">
            <h2>Get a Free Quote from Lahore&apos;s #1 Uniform Manufacturer</h2>
            <p>Contact KBwear today and receive a detailed quotation within 24 hours. Factory visits welcome.</p>
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
