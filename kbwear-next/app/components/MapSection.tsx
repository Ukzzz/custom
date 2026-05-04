"use client";

import React from "react";

const MapSection = () => {
  const lat = 31.407543;
  const lng = 74.360679;
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3405.811804746658!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI0JzI3LjIiTiA3NMKwMjEnMzguNCJF!5e0!3m2!1sen!2s!4v1714800000000!5m2!1sen!2s`;

  return (
    <div className="map-section-content">
      <div className="section-header map-header">
        <div className="section-label">Factory Tour</div>
        <h2 className="section-title">Visit Our Production Facility</h2>
        <p className="section-description">
          Experience Lahore&apos;s leading uniform manufacturing process firsthand. Our state-of-the-art factory at Dallu Khurd Rd is open for client visits.
        </p>
      </div>
      
      <div className="map-main-area">
        <div className="map-container-wrapper">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KBwear Factory Location"
          ></iframe>
        </div>
        
        <div className="map-overlay-card">
          <h3>KBwear Factory</h3>
          <p>Dallu Khurd Rd, Gajjumata, Lahore, Punjab. Pakistan&apos;s most advanced uniform stitching unit.</p>
          <div className="map-card-actions">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary map-directions-btn"
            >
              <span>Get Directions</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>


  );
};

export default MapSection;
