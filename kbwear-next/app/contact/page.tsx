import RevealWrapper from "../components/RevealWrapper";
import CountUp from "../components/CountUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact KBwear - Get Free Uniform Quote in 24 Hours | Pakistan",
  description: "Contact KBwear for custom uniform manufacturing in Pakistan. Email info@kb-wear.com or call +92 309 9431613. 24-hour response time. Get your free quote today for corporate and industrial uniforms!",
  keywords: "contact KBwear, KB wear contact, uniform quote Pakistan, get started uniforms, custom uniform inquiry, KBwear phone number, uniform manufacturer email, Lahore uniform contact, free uniform quote, bulk order inquiry",
  openGraph: {
    title: "Contact KBwear - Get Started | Free Quote in 24 Hours",
    description: "Contact KBwear for custom uniform manufacturing in Pakistan. 24-hour response time. Get your free quote today!",
    url: "https://kb-wear.com/contact.html",
    images: [{ url: "https://kb-wear.com/assets/logo.png" }],
  },
};

export default function Contact() {
  return (
    <main>
      <section id="contact" className="contact-section">
        <div className="contact-background">
          <div className="contact-grid-pattern"></div>
          <div className="contact-glow contact-glow-1"></div>
          <div className="contact-glow contact-glow-2"></div>
        </div>

        <div className="contact-container">
          <RevealWrapper className="contact-header">
            <h2 className="contact-title">
              Get In Touch With <span className="gradient-text">KBwear</span>
            </h2>
            <p className="contact-subtitle">
              Pakistan's leading uniform manufacturer. Reach out through any of these channels.
            </p>
          </RevealWrapper>

          <div className="contact-info-grid-modern">
            <RevealWrapper className="info-card-modern" delay={0}>
              <div className="info-card-glow"></div>
              <div className="info-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h4>Email Us</h4>
              <a href="mailto:info@kb-wear.com" className="info-link">info@kb-wear.com</a>
              <p className="info-description">Get a response within 24 hours</p>
            </RevealWrapper>

            <RevealWrapper className="info-card-modern" delay={100}>
              <div className="info-card-glow"></div>
              <div className="info-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h4>Call Us</h4>
              <a href="tel:+923099431613" className="info-link">+92 309 9431613</a>
              <p className="info-description">Mon-Sat, 9AM - 6PM PKT</p>
            </RevealWrapper>

            <RevealWrapper className="info-card-modern" delay={200}>
              <div className="info-card-glow"></div>
              <div className="info-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <h4>LinkedIn</h4>
              <a href="https://linkedin.com/company/kbwear" target="_blank" rel="noopener noreferrer" className="info-link">
                Connect With Us
              </a>
              <p className="info-description">Follow for updates</p>
            </RevealWrapper>
          </div>

          <div className="contact-stats">
            <div className="stat-item">
              <div className="stat-value">
                <CountUp end={24} className="counter" />hrs
              </div>
              <div className="stat-label">Response Time</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">
                <CountUp end={10000} suffix="+" className="counter" />
              </div>
              <div className="stat-label">Uniforms Delivered </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">
                <CountUp end={100} suffix="%" className="counter" />
              </div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
