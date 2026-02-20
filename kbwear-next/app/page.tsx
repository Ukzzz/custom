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
            <div className="hero-badge">🏭 Pakistan&apos;s Premier Uniform Manufacturer</div>
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
                <div className="stat-icon">📦</div>
                <div className="stat-number">100K+</div>
                <div className="stat-label">Uniforms Delivered</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">✓</div>
                <div className="stat-number">100%</div>
                <div className="stat-label">Quality Assured</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🏆</div>
                <div className="stat-number">ISO</div>
                <div className="stat-label">Certified Standards</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⚡</div>
                <div className="stat-number">24/7</div>
                <div className="stat-label">Production Capacity</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
