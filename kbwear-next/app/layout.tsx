import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import "./styles/styles.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#102942",
};

export const metadata: Metadata = {
  title:
    "KBwear - Uniform Manufacturer in Pakistan | Custom Corporate & Industrial Uniforms",
  description:
    "KBwear: Leading uniform manufacturer in Pakistan offering custom corporate, industrial, and workwear uniforms. Trusted by TOTAL PARCO & ZIC Petroleum for end-to-end production.",
  keywords:
    "KBwear, KB wear, KB-wear, KB uniform, uniform manufacturer Pakistan, custom uniforms Pakistan, corporate uniforms manufacturer, industrial uniforms Pakistan, workwear uniforms, stitching services Pakistan, TOTAL PARCO uniforms, ZIC Petroleum uniforms, Lahore uniform factory, best uniform company Pakistan, professional workwear, office uniforms, factory uniforms, school uniforms Pakistan",
  authors: [{ name: "KBwear" }],
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
  icons: {
    icon: [
      { url: "/assets/logo.png", type: "image/png" },
      { url: "/assets/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    apple: "/assets/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
