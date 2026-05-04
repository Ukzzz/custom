"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "../styles/samples.css";

import samples from "../../samples.json";

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
              <Image
                src={sample.src}
                alt={sample.alt}
                width={0}
                height={0}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div id="imageModal" className="modal" style={{ display: "flex", alignItems: "center", justifyContent: "center" }} onClick={closeModal}>
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
