import Link from "next/link";
import { Metadata } from "next";
import "./styles/error.css";

export const metadata: Metadata = {
  title: "404 - Page Not Found | KBwear",
  description: "The page you're looking for could not be found. Return to KBwear's main website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-illustration">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-description">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s help you get back on track.
        </p>
        <div className="error-actions">
          <Link href="/" className="error-btn error-btn-primary">
            Go to Home
          </Link>
          <Link href="/contact" className="error-btn error-btn-secondary">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
