import type { ReactNode } from "react";

// Base JSON-LD wrapper
function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization Schema — inject in layout.tsx (global)
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KBwear",
    alternateName: ["KB wear", "KB-wear", "KB uniform"],
    url: "https://www.kb-wear.com",
    logo: "https://www.kb-wear.com/assets/logo.png",
    image: "https://www.kb-wear.com/assets/logo.png",
    description:
      "Leading uniform manufacturer in Pakistan providing custom corporate, industrial, and workwear uniforms. Trusted by TOTAL PARCO & ZIC Petroleum.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-309-9431613",
      contactType: "sales",
      email: "info@kb-wear.com",
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    },
    sameAs: [
      "https://linkedin.com/company/kbwear",
      "https://www.facebook.com/profile.php?id=61584525995921",
    ],
    foundingLocation: {
      "@type": "Place",
      name: "Lahore, Pakistan",
    },
  };

  return <JsonLdScript data={data} />;
}

// LocalBusiness Schema — inject in homepage
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "@id": "https://www.kb-wear.com/#localbusiness",
    name: "KBwear - Uniform Manufacturer Pakistan",
    image: "https://www.kb-wear.com/assets/logo.png",
    url: "https://www.kb-wear.com",
    telephone: "+92-309-9431613",
    email: "info@kb-wear.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
  };

  return <JsonLdScript data={data} />;
}

// WebSite Schema — inject in homepage
export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "KBwear",
    url: "https://www.kb-wear.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.kb-wear.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLdScript data={data} />;
}

// Breadcrumb Schema — inject on all inner pages
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLdScript data={data} />;
}

// Service Schema — inject on capabilities page
export function ServiceJsonLd({
  services,
}: {
  services: { name: string; description: string }[];
}) {
  const data = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "KBwear",
      url: "https://www.kb-wear.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
  }));

  return (
    <>
      {data.map((d, i) => (
        <JsonLdScript key={i} data={d} />
      ))}
    </>
  );
}

// ImageGallery Schema — inject on samples page
export function ImageGalleryJsonLd({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "KBwear Uniform Samples Gallery",
    description:
      "Browse 50+ professional uniform samples from KBwear, Pakistan's leading uniform manufacturer.",
    url: "https://www.kb-wear.com/samples",
    image: images.map((img) => ({
      "@type": "ImageObject",
      url: `https://www.kb-wear.com${img.src}`,
      name: img.alt,
      description: img.alt,
    })),
  };

  return <JsonLdScript data={data} />;
}

// FAQPage Schema — inject on contact page
export function FAQJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLdScript data={data} />;
}
