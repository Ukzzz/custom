import SampleGallery from "../components/SampleGallery";
import RevealWrapper from "../components/RevealWrapper";
import { BreadcrumbJsonLd } from "../components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uniform Samples Gallery - KBwear | 50+ Custom Corporate & Industrial Uniforms Pakistan",
  description: "Browse KBwear's extensive uniform samples gallery with 50+ designs. Professional corporate uniforms, industrial workwear, safety uniforms, and custom-designed uniforms made in Pakistan. View our portfolio now!",
  keywords: "KBwear samples, KB wear gallery, uniform samples Pakistan, corporate uniform designs, industrial workwear gallery, custom uniform portfolio, uniform pictures, workwear samples, professional uniform examples, Lahore uniform samples",
  openGraph: {
    title: "Uniform Samples Gallery - KBwear | 50+ Custom Uniforms",
    description: "Browse 50+ professional uniform samples from KBwear, Pakistan's leading uniform manufacturer.",
    url: "https://www.kb-wear.com/samples",
    images: [{ url: "https://www.kb-wear.com/assets/sample-1.png" }],
  },
  alternates: {
    canonical: "https://www.kb-wear.com/samples",
  },
};

export default function Samples() {
  return (
    <main>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.kb-wear.com" },
        { name: "Samples", url: "https://www.kb-wear.com/samples" },
      ]} />
      <section className="samples-section">
        <div className="samples-container">
          <div className="section-header">
            <RevealWrapper>
              <div className="section-label">Our Uniform Samples</div>
              <h2 className="section-title">Uniform Sample Gallery</h2>
              <p className="section-description">
                Explore our portfolio of professionally designed and manufactured uniforms. Each sample represents our commitment to quality and attention to detail.
              </p>
            </RevealWrapper>
          </div>

          {/* Gallery Grid */}
          <SampleGallery />
        </div>
      </section>
    </main>
  );
}
