"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "../styles/samples.css";

const samples = [
  {
    "src": "/assets/sample-1.png",
    "alt": "KBwear custom corporate uniform sample - professional workwear Pakistan"
  },
  {
    "src": "/assets/sample-2.png",
    "alt": "KBwear industrial uniform design - quality workwear manufactured in Lahore"
  },
  {
    "src": "/assets/sample-3.png",
    "alt": "Professional office uniform by KBwear - corporate attire Pakistan"
  },
  {
    "src": "/assets/sample-4.png",
    "alt": "KB wear factory worker uniform - industrial safety workwear"
  },
  {
    "src": "/assets/sample-5.png",
    "alt": "KBwear custom made staff uniform - business attire manufacturer Pakistan"
  },
  {
    "src": "/assets/sample-6.png",
    "alt": "KB-wear petroleum industry uniform - oil company workwear sample"
  },
  {
    "src": "/assets/sample-7.png",
    "alt": "KBwear corporate dress code uniform - executive wear Pakistan"
  },
  {
    "src": "/assets/sample-8.png",
    "alt": "KB wear branded company uniform - quality stitching Lahore"
  },
  {
    "src": "/assets/sample-9.png",
    "alt": "KBwear manufacturing worker uniform - industrial clothing Pakistan"
  },
  {
    "src": "/assets/sample-10.png",
    "alt": "KB wear safety uniform design - protective workwear sample"
  },
  {
    "src": "/assets/sample-11.png",
    "alt": "KBwear professional service uniform - hospitality workwear Pakistan"
  },
  {
    "src": "/assets/sample-12.png",
    "alt": "KB-wear custom logo uniform - branded corporate attire"
  },
  {
    "src": "/assets/sample-13.png",
    "alt": "KBwear technician uniform sample - maintenance workwear Lahore"
  },
  {
    "src": "/assets/sample-14.png",
    "alt": "KBwear retail staff uniform - store employee workwear Pakistan"
  },
  {
    "src": "/assets/sample-15.png",
    "alt": "KB wear security guard uniform - protection services attire"
  },
  {
    "src": "/assets/sample-16.png",
    "alt": "KBwear construction worker uniform - heavy duty workwear Lahore"
  },
  {
    "src": "/assets/sample-17.png",
    "alt": "KB-wear logistics company uniform - delivery personnel attire"
  },
  {
    "src": "/assets/sample-18.png",
    "alt": "KBwear healthcare uniform sample - medical staff workwear"
  },
  {
    "src": "/assets/sample-19.png",
    "alt": "KB wear hotel staff uniform - restaurant service attire Pakistan"
  },
  {
    "src": "/assets/sample-20.png",
    "alt": "KBwear driver uniform design - transport company workwear"
  },
  {
    "src": "/assets/sample-21.png",
    "alt": "KB-wear engineering firm uniform - technical workwear Lahore"
  },
  {
    "src": "/assets/sample-22.png",
    "alt": "KBwear bank employee uniform - financial services attire Pakistan"
  },
  {
    "src": "/assets/sample-23.png",
    "alt": "KBwear warehouse staff uniform - industrial work clothing Pakistan"
  },
  {
    "src": "/assets/sample-24.png",
    "alt": "KB wear telecom company uniform - utility worker attire"
  },
  {
    "src": "/assets/sample-25.png",
    "alt": "KBwear education sector uniform - school administration attire Lahore"
  },
  {
    "src": "/assets/sample-26.png",
    "alt": "KB-wear sales team uniform - marketing staff workwear Pakistan"
  },
  {
    "src": "/assets/sample-27.png",
    "alt": "KBwear IT company uniform - tech sector workwear"
  },
  {
    "src": "/assets/sample-28.png",
    "alt": "KB wear event staff uniform - hospitality service attire"
  },
  {
    "src": "/assets/sample-29.png",
    "alt": "KBwear pharmaceutical company uniform - lab coat workwear Pakistan"
  },
  {
    "src": "/assets/sample-30.png",
    "alt": "KB-wear airline ground staff uniform - aviation workwear"
  },
  {
    "src": "/assets/sample-31.png",
    "alt": "KBwear food industry uniform - catering staff workwear Lahore"
  },
  {
    "src": "/assets/sample-32.png",
    "alt": "KB wear cleaning service uniform - housekeeping attire Pakistan"
  },
  {
    "src": "/assets/sample-33.png",
    "alt": "KBwear manufacturing plant uniform - production line workwear"
  },
  {
    "src": "/assets/sample-34.png",
    "alt": "KBwear energy sector uniform - power company workwear Pakistan"
  },
  {
    "src": "/assets/sample-35.png",
    "alt": "KB wear agriculture worker uniform - farming industry attire"
  },
  {
    "src": "/assets/sample-36.png",
    "alt": "KBwear real estate staff uniform - property agent workwear Lahore"
  },
  {
    "src": "/assets/sample-37.png",
    "alt": "KB-wear textile company uniform - fabric industry attire Pakistan"
  },
  {
    "src": "/assets/sample-40.png",
    "alt": "KBwear call center uniform - customer service workwear"
  },
  {
    "src": "/assets/sample-41.png",
    "alt": "KB wear industrial mechanic uniform - workshop attire Pakistan"
  },
  {
    "src": "/assets/sample-42.png",
    "alt": "KBwear courier company uniform - delivery service workwear Lahore"
  },
  {
    "src": "/assets/sample-43.png",
    "alt": "KB-wear shopping mall staff uniform - retail workwear Pakistan"
  },
  {
    "src": "/assets/sample-44.png",
    "alt": "KBwear sports facility uniform - gym staff attire"
  },
  {
    "src": "/assets/sample-45.png",
    "alt": "KBwear insurance company uniform - office staff workwear Pakistan"
  },
  {
    "src": "/assets/sample-46.png",
    "alt": "KB wear media company uniform - broadcasting staff attire"
  },
  {
    "src": "/assets/sample-47.png",
    "alt": "KBwear custom embroidered uniform - branded workwear Lahore"
  },
  {
    "src": "/assets/sample-48.png",
    "alt": "KB-wear civil engineering uniform - field worker attire Pakistan"
  },
  {
    "src": "/assets/sample-49.png",
    "alt": "KBwear executive suit uniform - premium corporate workwear"
  },
  {
    "src": "/assets/sample-50.png",
    "alt": "KB wear TOTAL PARCO style uniform - petroleum company attire"
  },
  {
    "src": "/assets/sample-51.png",
    "alt": "KBwear ZIC Petroleum style uniform - oil industry workwear Pakistan"
  }
];

export default function SampleGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % samples.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + samples.length) % samples.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  return (
    <>
      <div className="samples-grid" id="galleryGrid">
        {samples.map((sample, index) => (
          <div key={index} className="sample-card" onClick={() => openModal(index)}>
            <div className="sample-image">
              <img
                src={sample.src}
                alt={sample.alt}
                loading="lazy"
                width="400"
                height="auto"
              />
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div id="imageModal" className="modal" style={{ display: "block" }} onClick={closeModal}>
          <span className="modal-close" onClick={closeModal}>&times;</span>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Image
              id="modalImage"
              className="modal-image"
              src={samples[currentIndex].src}
              alt={samples[currentIndex].alt}
              width={800}
              height={600}
              style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '80vh' }}
              unoptimized // Allow full size rendering without layout constraints if needed, or use specific dimensions
            />
            <span className="modal-nav modal-prev" onClick={prevImage}>&#10094;</span>
            <span className="modal-nav modal-next" onClick={nextImage}>&#10095;</span>
          </div>
        </div>
      )}
    </>
  );
}
