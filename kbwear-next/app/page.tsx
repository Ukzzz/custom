import Link from "next/link";
import { Metadata } from "next";
import { LocalBusinessJsonLd, WebSiteJsonLd } from "./components/JsonLd";

export const metadata: Metadata = {
  title:
    "KBwear | #1 Uniform Manufacturer in Lahore, Pakistan",
  description:
    "KBwear: Leading uniform manufacturer in Pakistan offering custom corporate, industrial, and workwear uniforms. Trusted by TOTAL PARCO & ZIC Petroleum for end-to-end production. Get a free quote today!",
  keywords:
    "KBwear, KB wear, KB-wear, uniform manufacturer Pakistan, custom uniforms Pakistan, corporate uniforms manufacturer, industrial uniforms Pakistan, workwear uniforms, stitching services Pakistan, TOTAL PARCO uniforms, ZIC Petroleum uniforms, Lahore uniform factory, best uniform company Pakistan, professional workwear, office uniforms, factory uniforms, school uniforms Pakistan",
  alternates: {
    canonical: "https://www.kb-wear.com",
  },
  openGraph: {
    type: "website",
    title:
      "KBwear - Uniform Manufacturer in Pakistan | Custom Corporate & Industrial Uniforms",
    description:
      "Leading uniform manufacturer in Pakistan providing end-to-end solutions for custom corporate and industrial uniforms. Trusted by TOTAL PARCO and ZIC Petroleum.",
    siteName: "KBwear",
    url: "https://www.kb-wear.com",
    images: [
      {
        url: "https://www.kb-wear.com/assets/logo.png",
        width: 512,
        height: 512,
        alt: "KBwear Logo - Uniform Manufacturer Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "KBwear - Uniform Manufacturer in Pakistan | Custom Corporate & Industrial Uniforms",
    description:
      "Premier uniform manufacturer in Pakistan specializing in custom corporate, industrial, and workwear uniforms. Trusted partner for TOTAL PARCO and ZIC Petroleum.",
    images: ["https://www.kb-wear.com/assets/logo.png"],
  },
};

export default function Home() {
  return (
    <main>
      <LocalBusinessJsonLd />
      <WebSiteJsonLd />
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginRight: '6px' }}>
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Pakistan&apos;s Premier Uniform Manufacturer
            </div>
            <h1>
              Enterprise-Grade <span className="highlight">Uniform Manufacturing in Pakistan</span>
            </h1>
            <p>
              From raw material sourcing to final delivery, KBwear provides complete end-to-end uniform
              manufacturing solutions for Pakistan&apos;s leading corporations, specializing in custom corporate
              uniforms and industrial workwear.
            </p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">
                <span>Start Your Project</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/facility" className="btn btn-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
                <span>Tour Facility</span>
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <div className="stat-number">100K+</div>
                <div className="stat-label">Uniforms Delivered</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className="stat-number">100%</div>
                <div className="stat-label">Quality Assured</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                </div>
                <div className="stat-number">ISO</div>
                <div className="stat-label">Certified Standards</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div className="stat-number">24/7</div>
                <div className="stat-label">Production Capacity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose KBwear */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <div className="section-header">
            <div className="section-label">Why KBwear</div>
            <h2 className="section-title">Why Leading Corporations Choose KBwear</h2>
            <p className="section-description">
              As Pakistan&apos;s trusted uniform manufacturer based in Lahore, we combine decades of garment manufacturing expertise with modern production technology to deliver uniforms that represent your brand with excellence.
            </p>
          </div>
          <div className="why-choose-grid">
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3>ISO-Certified Quality</h3>
              <p>Every uniform undergoes multi-stage quality inspection. We maintain ISO-compliant standards across our entire production line in Lahore, ensuring zero-defect delivery to clients like TOTAL PARCO and ZIC Petroleum.</p>
            </div>
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>Fast Turnaround</h3>
              <p>Our Lahore factory operates at full capacity with 24/7 production capability. Standard orders are completed in 2-4 weeks, with rush options available for urgent corporate uniform requirements across Pakistan.</p>
            </div>
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3>Competitive Pricing</h3>
              <p>Direct partnerships with certified fabric mills allow us to offer factory-direct pricing without compromising quality. From small batches of 50 to enterprise orders of 10,000+, we scale to your budget.</p>
            </div>
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <h3>Nationwide Delivery</h3>
              <p>Reliable supply chain management with real-time tracking covering all of Pakistan. Whether you&apos;re in Karachi, Islamabad, or Peshawar, your uniforms arrive on time, every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="industries-section">
        <div className="industries-container">
          <div className="section-header">
            <div className="section-label">Industries We Serve</div>
            <h2 className="section-title">Custom Uniforms for Every Industry in Pakistan</h2>
            <p className="section-description">
              From petroleum companies to hospitality chains, KBwear manufactures specialized uniforms tailored to the unique requirements of each industry sector.
            </p>
          </div>
          <div className="industries-grid">
            <Link href="/uniforms/corporate-uniforms" className="industry-card">
              <div className="industry-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3>Corporate Uniforms</h3>
              <p>Professional office wear, executive suits, and branded corporate attire for businesses across Pakistan.</p>
            </Link>
            <Link href="/uniforms/industrial-workwear" className="industry-card">
              <div className="industry-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M12 18v-6" />
                  <path d="M9 15h6" />
                </svg>
              </div>
              <h3>Industrial Workwear</h3>
              <p>Durable safety uniforms, hi-vis vests, and flame-resistant workwear for factories and construction sites.</p>
            </Link>
            <Link href="/uniforms/driver-uniforms" className="industry-card">
              <div className="industry-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <h3>Driver Uniforms</h3>
              <p>Professional chauffeur and fleet driver uniforms for petroleum companies and logistics businesses in Pakistan.</p>
            </Link>
            <Link href="/uniforms/school-uniforms" className="industry-card">
              <div className="industry-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <h3>School Uniforms</h3>
              <p>Durable, comfortable school uniforms in bulk quantities for educational institutions across Lahore and Pakistan.</p>
            </Link>
            <Link href="/uniforms/hotel-restaurant-uniforms" className="industry-card">
              <div className="industry-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                  <line x1="6" y1="1" x2="6" y2="4" />
                  <line x1="10" y1="1" x2="10" y2="4" />
                  <line x1="14" y1="1" x2="14" y2="4" />
                </svg>
              </div>
              <h3>Hotel &amp; Restaurant</h3>
              <p>Chef coats, waiter uniforms, housekeeping attire, and front-desk uniforms for the hospitality industry.</p>
            </Link>
            <Link href="/uniforms/staff-uniforms" className="industry-card">
              <div className="industry-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Staff Uniforms</h3>
              <p>General-purpose staff uniforms for retail, healthcare, security, and service industry employees.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="section-header">
            <div className="section-label">Frequently Asked Questions</div>
            <h2 className="section-title">Common Questions About Our Uniform Manufacturing</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What types of uniforms does KBwear manufacture?</h3>
              <p>KBwear manufactures a wide range of uniforms including corporate office wear, industrial workwear, driver uniforms, school uniforms, hotel and restaurant attire, and specialized petroleum industry uniforms. We serve companies like TOTAL PARCO, ZIC Petroleum, and FLOW Petroleum with custom-designed uniforms tailored to their brand standards.</p>
            </div>
            <div className="faq-item">
              <h3>What is the minimum order quantity for custom uniforms?</h3>
              <p>We handle orders from as few as 50 units to large-scale enterprise orders of 10,000+ uniforms. Our flexible production capacity in Lahore allows us to accommodate businesses of all sizes across Pakistan, from startups to large corporations.</p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to manufacture custom uniforms?</h3>
              <p>Standard orders typically take 2-4 weeks from design approval to delivery. Timelines vary based on order complexity, quantity, and customization requirements. We provide exact production schedules after initial consultation and design finalization.</p>
            </div>
            <div className="faq-item">
              <h3>Does KBwear deliver uniforms across Pakistan?</h3>
              <p>Yes, KBwear provides nationwide delivery across all major cities in Pakistan including Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, and Quetta. We use reliable logistics partners with real-time tracking for all shipments.</p>
            </div>
            <div className="faq-item">
              <h3>How can I get a free quote for custom uniforms?</h3>
              <p>You can request a free quote by visiting our contact page, emailing info@kb-wear.com.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Request a Quote CTA Banner */}
      <section className="quote-cta-section">
        <div className="quote-cta-container">
          <div className="quote-cta-content">
            <div className="quote-cta-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="15" y2="15" />
              </svg>
            </div>
            <div className="quote-cta-text">
              <h2>Request a Free Quote</h2>
              <p>Custom pricing for every scale — from small batches to enterprise-level orders. Get a personalized quotation within 24 hours.</p>
            </div>
            <Link href="/contact" className="btn btn-primary quote-cta-btn">
              <span>Get Custom Quote</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
