import React from 'react';

export default function Footer({ onOpenConsultModal, onShowToast }) {
  const handleScheduleCall = (e) => {
    e.preventDefault();
    if (onOpenConsultModal) {
      onOpenConsultModal();
    } else if (onShowToast) {
      onShowToast('📅 Opening priority consultation booking...');
    }
  };

  const handleReachGlow = (e) => {
    e.preventDefault();
    if (onOpenConsultModal) {
      onOpenConsultModal();
    } else if (onShowToast) {
      onShowToast('✨ Step into your glow with Zerra Studio.');
    }
  };

  return (
    <footer className="zerra-footer-section" id="footer">
      <div className="footer-crimson-wrap">
        {/* Top Header: Editorial Invitation & Phone numbers */}
        <div className="footer-header-container">
          <div className="footer-headline-block">
            <h2 className="footer-journey-heading">
              <span className="heading-line">Your Beauty Journey Starts Here With</span>
              <span className="heading-line">Unmatched Expertise And Care!</span>
            </h2>
            <p className="footer-journey-subtext">
              Discover Zerra difference today and let us help you shine brighter than ever. Visit us to embrace beauty, confidence, and elegance!
            </p>
          </div>

          <div className="footer-contact-phones">
            <a href="tel:+15551234567" className="footer-phone-num">
              +1 (555) 123-4567
            </a>
            <span className="phone-divider-pipe" aria-hidden="true">|</span>
            <a href="tel:+15557654321" className="footer-phone-num">
              +1 (555) 765-4321
            </a>
          </div>
        </div>

        {/* Bottom Giant Cream Architectural Inset Card */}
        <div className="footer-cream-card-wrap">
          <div className="footer-cream-card">
            {/* Column 1: Where Beauty Awaits */}
            <div className="cream-card-column col-locations">
              <h3 className="cream-card-title">Where Beauty Awaits</h3>

              <div className="studio-location-entry">
                <h4 className="studio-name">• Downtown Luxe Studio</h4>
                <address className="studio-address-text">
                  <a 
                    href="https://maps.google.com/?q=225+East+57th+Street+New+York+NY+10022" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    225 East 57th Street, Suite 8C New York,<br />
                    NY 10022
                  </a>
                </address>
              </div>

              <div className="studio-location-entry">
                <h4 className="studio-name">• Downtown Luxe Studio</h4>
                <address className="studio-address-text">
                  <a 
                    href="https://maps.google.com/?q=1380+North+Clark+Street+Chicago+IL+60610" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    1380 North Clark Street, 2nd Floor<br />
                    Chicago, IL 60610
                  </a>
                </address>
              </div>
            </div>

            {/* Column 2: Everything You Need */}
            <div className="cream-card-column col-action-pills">
              <h3 className="cream-card-title">Everything You Need</h3>

              <div className="action-pill-buttons-group">
                <a href="#about" className="action-pill-card-btn">
                  <span className="pill-btn-label">WHO WE TRULY ARE</span>
                  <span className="pill-arrow-circle" aria-hidden="true">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                      <path d="M1.5 1.5L6.5 6L1.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>

                <a href="#services" className="action-pill-card-btn">
                  <span className="pill-btn-label">MEET THE EXPERTS</span>
                  <span className="pill-arrow-circle" aria-hidden="true">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                      <path d="M1.5 1.5L6.5 6L1.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>

                <a href="#services" className="action-pill-card-btn">
                  <span className="pill-btn-label">BEAUTY PACKAGES</span>
                  <span className="pill-arrow-circle" aria-hidden="true">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                      <path d="M1.5 1.5L6.5 6L1.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Column 3: Get Beauty Updates */}
            <div className="cream-card-column col-action-pills">
              <h3 className="cream-card-title">Get Beauty Updates</h3>

              <div className="action-pill-buttons-group">
                <button 
                  type="button" 
                  onClick={handleScheduleCall} 
                  className="action-pill-card-btn"
                >
                  <span className="pill-btn-label">SCHEDULE A CALL</span>
                  <span className="pill-arrow-circle" aria-hidden="true">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                      <path d="M1.5 1.5L6.5 6L1.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>

                <a 
                  href="mailto:info@example.com" 
                  className="action-pill-card-btn"
                >
                  <span className="pill-btn-label">INFO@EXAMPLE.COM</span>
                  <span className="pill-arrow-circle" aria-hidden="true">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                      <path d="M1.5 1.5L6.5 6L1.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>

                <button 
                  type="button" 
                  onClick={handleReachGlow} 
                  className="action-pill-card-btn"
                >
                  <span className="pill-btn-label">REACH YOUR GLOW</span>
                  <span className="pill-arrow-circle" aria-hidden="true">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                      <path d="M1.5 1.5L6.5 6L1.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
