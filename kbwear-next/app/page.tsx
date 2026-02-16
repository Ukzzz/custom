import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">🏭 Pakistan's Premier Uniform Manufacturer</div>
            <h1>
              Enterprise-Grade <span className="highlight">Uniform Manufacturing in Pakistan</span>
            </h1>
            <p>
              From raw material sourcing to final delivery, KBwear provides complete end-to-end uniform
              manufacturing solutions for Pakistan's leading corporations, specializing in custom corporate
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
                <div className="stat-number">10K+</div>
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
