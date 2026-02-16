"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const menu = document.getElementById("mobile-menu");
      const btn = document.getElementById("mobile-menu-btn");
      
      if (isMobileMenuOpen && menu && btn && !menu.contains(target) && !btn.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav id="navbar" className={isScrolled ? "scrolled" : ""}>
        <div className="nav-container">
          <Link href="/" className="logo">
            <Image
              src="/assets/logo.png"
              alt="KBwear uniform manufacturer Pakistan logo"
              width={42}
              height={42}
              className="logo-img"
              priority
            />
            <span className="logo-text">KBwear</span>
          </Link>
          <ul>
            <li><Link href="/facility">Facility</Link></li>
            <li><Link href="/capabilities">Capabilities</Link></li>
            <li><Link href="/clients">Clients</Link></li>
            <li><Link href="/process">Process</Link></li>
            <li><Link href="/samples">Samples</Link></li>
            <li><Link href="/contact" className="nav-cta">Get Started</Link></li>
          </ul>
          <div className="nav-actions">
            <button
              className="mobile-menu-btn"
              id="mobile-menu-btn"
              aria-label="Open menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`} id="mobile-menu">
        <ul>
          <li><Link href="/facility" onClick={() => setIsMobileMenuOpen(false)}>Facility</Link></li>
          <li><Link href="/capabilities" onClick={() => setIsMobileMenuOpen(false)}>Capabilities</Link></li>
          <li><Link href="/clients" onClick={() => setIsMobileMenuOpen(false)}>Clients</Link></li>
          <li><Link href="/process" onClick={() => setIsMobileMenuOpen(false)}>Process</Link></li>
          <li><Link href="/samples" onClick={() => setIsMobileMenuOpen(false)}>Samples</Link></li>
          <li><Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link></li>
        </ul>
      </div>
    </>
  );
}
