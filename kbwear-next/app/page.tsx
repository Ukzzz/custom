import Link from "next/link";
import { Metadata } from "next";
import { LocalBusinessJsonLd, WebSiteJsonLd } from "./components/JsonLd";

export const metadata: Metadata = {
  title:
    "KBwear - Uniform Manufacturer in Pakistan | Custom Corporate & Industrial Uniforms",
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
