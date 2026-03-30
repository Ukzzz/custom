import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact KBwear - Get Free Uniform Quote in 24 Hours | Pakistan",
  description: "Contact KBwear for custom uniform manufacturing in Pakistan. Email info@kb-wear.com or call +92 325 4004551. 24-hour response time. Get your free quote today for corporate and industrial uniforms!",
  keywords: "contact KBwear, KB wear contact, uniform quote Pakistan, get started uniforms, custom uniform inquiry, KBwear phone number, uniform manufacturer email, Lahore uniform contact, free uniform quote, bulk order inquiry",
  openGraph: {
    title: "Contact KBwear - Get Started | Free Quote in 24 Hours",
    description: "Contact KBwear for custom uniform manufacturing in Pakistan. 24-hour response time. Get your free quote today!",
    url: "https://www.kb-wear.com/contact",
    images: [{ url: "https://www.kb-wear.com/assets/logo.png" }],
  },
  alternates: {
    canonical: "https://www.kb-wear.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
