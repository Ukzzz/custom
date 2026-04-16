"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h4>KBwear</h4>
            <p>
              Leading uniform manufacturer in Pakistan providing end-to-end solutions from raw materials to
              finished custom corporate and industrial uniforms. Trusted by Pakistan&apos;s top corporations
              including TOTAL PARCO and ZIC Petroleum.
            </p>
          </div>
          <div className="footer-section">
            <h5>Company</h5>
            <Link href="/facility">Our Facility</Link>
            <Link href="/uniform-manufacturer-lahore">Lahore Factory</Link>
            <Link href="/capabilities">Capabilities</Link>
            <Link href="/clients">Clients</Link>
            <Link href="/process">Process</Link>
          </div>
          <div className="footer-section">
            <h5>Services</h5>
            <Link href="/uniforms/corporate-uniforms">Corporate Uniforms</Link>
            <Link href="/uniforms/industrial-workwear">Industrial Workwear</Link>
            <Link href="/uniforms/driver-uniforms">Driver Uniforms</Link>
            <Link href="/uniforms/school-uniforms">School Uniforms</Link>
            <Link href="/uniforms/hotel-restaurant-uniforms">Hotel &amp; Restaurant</Link>
            <Link href="/uniforms/staff-uniforms">Staff Uniforms</Link>
          </div>
          <div className="footer-section">
            <h5>Connect With Us</h5>
            <a href="mailto:info@kb-wear.com">info@kb-wear.com</a>
            <a href="https://wa.me/923254004551" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href="https://linkedin.com/company/kbwear" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.facebook.com/profile.php?id=61584525995921" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} KBwear Manufacturing. All rights reserved. | Leading Uniform Manufacturer with Excellence in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
