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
        <div className="error-illustration">🔍</div>
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-description">
          Sorry, the page you're looking for doesn't exist or has been moved. Let's help you get back on track.
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
