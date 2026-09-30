import React from 'react';

export default function Hero({ onOpenConsultModal }) {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const top = aboutSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handlePillClick = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      onOpenConsultModal();
    }
  };

  return (
    <section className="hero-viewport" id="hero">
      <div className="hero-card-frame">
        {/* Background Image of Luxury Model in Red Hat */}
        <div className="hero-bg-container">
          <img 
            src="/images/hero_woman_custom.jpg" 
            alt="Shobha Chawla Luxury Beauty Radiance" 
            className="hero-backdrop-img"
            loading="eager"
            fetchPriority="high"
          />
          <div className="hero-vignette-overlay"></div>
        </div>

        {/* Dynamic Horizontal Slicing Marquee Ribbon */}
        <div className="hero-marquee-wrapper" aria-hidden="true">
          <div className="hero-marquee-track">
            <span className="marquee-text">• Shobha Chawla</span>
            <span className="marquee-text">• Shobha Chawla</span>
            <span className="marquee-text">• Shobha Chawla</span>
            <span className="marquee-text">• Shobha Chawla</span>
            <span className="marquee-text">• Shobha Chawla</span>
            <span className="marquee-text">• Shobha Chawla</span>
            <span className="marquee-text">• Shobha Chawla</span>
            <span className="marquee-text">• Shobha Chawla</span>
          </div>
        </div>

        {/* Bottom Content Area */}
        <div className="hero-bottom-grid">
          {/* Bottom-Left Statement */}
          <div className="hero-statement-col">
            <h6 className="hero-welcome-tag">WELCOME TO SHOBHA CHAWLA:</h6>
            <p className="hero-welcome-body">
              We are more than just a salon, we are a haven for those who seek to embrace their individuality and radiate confidence.
            </p>
          </div>

          {/* Bottom-Right Category Pills (2 rows of 3 pills) */}
          <div className="hero-pills-col">
            <div className="pills-row">
              <button className="hero-badge-pill" onClick={() => handlePillClick('about')}>
                EXPERT ADVICE
              </button>
              <button className="hero-badge-pill" onClick={() => handlePillClick('instagram')}>
                GALLERY
              </button>
              <button className="hero-badge-pill" onClick={() => handlePillClick('services')}>
                PRODUCTS
              </button>
            </div>
            <div className="pills-row">
              <button className="hero-badge-pill" onClick={() => handlePillClick('services')}>
                PRICING
              </button>
              <button className="hero-badge-pill" onClick={() => handlePillClick('services')}>
                BEAUTY SERVICES
              </button>
              <button className="hero-badge-pill" onClick={() => handlePillClick('booking')}>
                SUPPORT
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Center Seamless Bulge with Circle around Arrow */}
        <button 
          className="hero-bottom-bulge" 
          onClick={scrollToAbout} 
          aria-label="Scroll to about section"
        >
          <svg className="bulge-svg" viewBox="0 0 280 72" fill="none" preserveAspectRatio="none">
            <path d="M0 72C80 72 105 8 140 8C175 8 200 72 280 72H0Z" fill="#FAF3E8"/>
          </svg>
          <span className="arrow-circle-ring">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 3V20M12 20L5 13M12 20L19 13" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
