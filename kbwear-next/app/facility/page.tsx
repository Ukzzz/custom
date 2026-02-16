import Image from "next/image";
import RevealWrapper from "../components/RevealWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Facility - KBwear Uniform Manufacturing Factory in Pakistan",
  description: "Explore KBwear's state-of-the-art uniform manufacturing facility in Lahore, Pakistan. Modern raw material storage, precision cutting, advanced stitching, quality control, and efficient distribution.",
  keywords: "KBwear facility, KB wear factory, uniform factory Pakistan, garment factory Lahore, uniform manufacturing plant, stitching facility Pakistan, industrial uniform factory, cutting department, quality control uniforms",
  openGraph: {
    title: "Our Facility - KBwear Uniform Manufacturing Factory in Pakistan",
    description: "State-of-the-art uniform manufacturing facility in Lahore with cutting-edge technology.",
    url: "https://kb-wear.com/facility.html",
    images: [{ url: "https://kb-wear.com/assets/facility-stitching.png" }],
  },
};

const facilityItems = [
  {
    title: "Raw Material Storage",
    description: "Controlled warehouses maintaining premium fabric quality with advanced inventory management systems for uniform production in Pakistan.",
    image: "/assets/facility-raw.png",
    alt: "Raw material storage for uniform manufacturing"
  },
  {
    title: "Precision Cutting Department",
    description: "CAD-integrated automated cutting machines ensuring zero waste and perfect pattern accuracy for industrial uniforms.",
    image: "/assets/facility-cutting.png",
    alt: "Precision cutting department for custom uniforms"
  },
  {
    title: "Advanced Stitching Floor",
    description: "Industrial-grade sewing stations operated by master craftsmen with decades of expertise in uniform stitching services.",
    image: "/assets/facility-stitching.png",
    alt: "Advanced stitching floor for corporate uniforms"
  },
  {
    title: "Quality Control Laboratory",
    description: "Multi-stage inspection systems ensuring every garment meets international quality standards for custom uniforms Pakistan.",
    image: "/assets/facility-quality.png",
    alt: "Quality control laboratory for uniforms"
  },
  {
    title: "Finishing & Pressing",
    description: "Professional finishing equipment delivering crisp, presentation-ready uniforms for corporate clients.",
    image: "/assets/facility-finishing.png",
    alt: "Finishing and pressing station"
  },
  {
    title: "Packaging & Distribution",
    description: "Modern packaging facilities with custom branding and efficient logistics coordination nationwide in Pakistan.",
    image: "/assets/facility-distribution.png",
    alt: "Packaging and distribution for uniform manufacturer"
  }
];

export default function Facility() {
  return (
    <main>
      <section id="facility" className="facility-section">
        <div className="facility-container">
          <div className="section-header">
            <RevealWrapper>
              <div className="section-label">State-of-the-Art Infrastructure</div>
              <h2 className="section-title">Our Uniform Manufacturing Facility in Pakistan</h2>
              <p className="section-description">
                World-class uniform manufacturing capabilities equipped with cutting-edge technology and operated by highly skilled professionals for custom uniforms and industrial workwear.
              </p>
            </RevealWrapper>
          </div>
          <div className="facility-grid">
            {facilityItems.map((item, index) => (
              <RevealWrapper key={index} className="facility-item" delay={index * 100}>
                <div className="facility-image">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="facility-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
