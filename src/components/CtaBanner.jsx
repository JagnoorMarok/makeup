import React from 'react';

export default function CtaBanner({ onOpenConsultModal }) {
  return (
    <section className="cta-banner-section" id="booking">
      <div className="cta-banner-card container">
        <div className="cta-backdrop-img">
          <img src="/images/cta_cosmetics.jpg" alt="Shobha Chawla Luxury Sanctuary" loading="lazy" />
        </div>
        <div className="cta-overlay-content">
          <div className="cta-tag-wrap">
            <span className="cta-pill">Begin Your Transformation</span>
          </div>

          <h2 className="cta-banner-title">
            Your Beauty Journey Starts Here With Unmatched Expertise And Care!
          </h2>

          <p className="cta-banner-desc">
            Discover the Shobha Chawla difference today and let us help you shine brighter than ever. Visit us to embrace beauty, confidence, and elegance!
          </p>

          <div className="cta-buttons-row">
            <button className="btn btn-consult btn-large" onClick={onOpenConsultModal}>
              <span>Book Appointment</span>
              <span className="btn-arrow-circle">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <div className="cta-phone-links">
              <a href="tel:+15551234567" className="cta-phone-pill">
                <span className="phone-icon">📞</span>
                <span>+1 (555) 123-4567</span>
              </a>
              <a href="tel:+15557654321" className="cta-phone-pill">
                <span className="phone-icon">📞</span>
                <span>+1 (555) 765-4321</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
