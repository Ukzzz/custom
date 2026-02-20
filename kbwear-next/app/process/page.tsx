import RevealWrapper from "../components/RevealWrapper";
import { BreadcrumbJsonLd } from "../components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uniform Manufacturing Process - KBwear Step-by-Step Production Pakistan",
  description: "Discover KBwear's uniform manufacturing process: premium material sourcing, custom design & pattern, precision cutting, expert stitching, quality control, and professional packaging with nationwide delivery in Pakistan.",
  keywords: "KBwear process, KB wear manufacturing, uniform production process, garment manufacturing steps, fabric cutting, uniform stitching, quality control uniforms, uniform packaging, Lahore uniform production, how uniforms are made",
  openGraph: {
    title: "Uniform Manufacturing Process - KBwear Pakistan",
    description: "Step-by-step uniform manufacturing process from material sourcing to delivery.",
    url: "https://www.kb-wear.com/process",
    images: [{ url: "https://www.kb-wear.com/assets/logo.png" }],
  },
  alternates: {
    canonical: "https://www.kb-wear.com/process",
  },
};

const processes = [
  {
    number: "1",
    title: "Material Sourcing",
    description: "Premium fabric selection from certified suppliers worldwide for high-quality uniforms Pakistan."
  },
  {
    number: "2",
    title: "Design & Pattern",
    description: "Custom design development and precision pattern creation for corporate uniforms."
  },
  {
    number: "3",
    title: "Cutting",
    description: "CAD-controlled cutting for perfect accuracy and minimal waste in industrial workwear."
  },
  {
    number: "4",
    title: "Stitching",
    description: "Expert assembly with industrial-grade machinery for durable stitching services Pakistan."
  },
  {
    number: "5",
    title: "Quality Control",
    description: "Rigorous multi-point inspection and testing protocols for custom uniforms."
  },
  {
    number: "6",
    title: "Packaging & Delivery",
    description: "Professional packaging with on-time nationwide delivery for uniform manufacturer Pakistan."
  }
];

export default function Process() {
  return (
    <main>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.kb-wear.com" },
        { name: "Process", url: "https://www.kb-wear.com/process" },
      ]} />
      <section id="process" className="process-section">
        <div className="process-container">
          <div className="section-header">
            <RevealWrapper>
              <div className="section-label">Our Manufacturing Process</div>
              <h2 className="section-title">From Raw Material to Perfection in Uniform Manufacturing</h2>
              <p className="section-description">
                A systematic approach ensuring excellence at every stage of custom uniform production in Pakistan.
              </p>
            </RevealWrapper>
          </div>
          <div className="process-grid">
            {processes.map((proc, index) => (
              <RevealWrapper key={index} className="process-card" delay={index * 100}>
                <div className="process-number">{proc.number}</div>
                <h4>{proc.title}</h4>
                <p>{proc.description}</p>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
