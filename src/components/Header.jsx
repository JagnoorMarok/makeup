import React, { useState, useEffect } from 'react';

export default function Header({ onOpenConsultModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.querySelector(targetId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`brand-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          {/* Logo with Flower Emblem */}
          <a href="#" className="brand-logo" onClick={(e) => handleNavClick(e, '#hero')}>
            <span className="logo-text">Shobha Chawla</span>
            <svg className="logo-flower" width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 3C12 3 15 8 15 13C15 17 12 20 12 20C12 20 9 17 9 13C9 8 12 3 12 3Z" stroke="#F1BA0A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 11C14.5 7 19.5 7.5 21 11C22 13.5 20.5 17 16 18.5C14 19 12 20 12 20" stroke="#F1BA0A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 11C9.5 7 4.5 7.5 3 11C2 13.5 3.5 17 8 18.5C10 19 12 20 12 20" stroke="#F1BA0A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Navigation Links in Uppercase Red (Without "ALL PAGES") */}
          <nav className="desktop-navigation" aria-label="Main Navigation">
            <ul className="nav-menu">
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="nav-item-link">ABOUT</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="nav-item-link">SERVICES</a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleNavClick(e, '#services')} className="nav-item-link">PRICING</a>
              </li>
              <li>
                <a href="#blog" onClick={(e) => handleNavClick(e, '#instagram')} className="nav-item-link">BLOG</a>
              </li>
            </ul>
          </nav>

          {/* Right Action: Red Pill Consult & Shine */}
          <div className="header-actions">
            <button className="btn-consult-pill" onClick={onOpenConsultModal}>
              CONSULT & SHINE
            </button>

            {/* Mobile Hamburger */}
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line short"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay">
          <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="mobile-drawer-body">
            <div className="mobile-drawer-top">
              <span className="logo-text">Shobha Chawla</span>
              <button className="close-btn" onClick={() => setMobileMenuOpen(false)}>&times;</button>
            </div>
            <nav className="mobile-nav-links">
              <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>ABOUT</a>
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>SERVICES</a>
              <a href="#pricing" onClick={(e) => handleNavClick(e, '#services')}>PRICING</a>
              <a href="#blog" onClick={(e) => handleNavClick(e, '#instagram')}>BLOG</a>
              <a href="#reviews" onClick={(e) => handleNavClick(e, '#reviews')}>STORIES</a>
              <a href="#locations" onClick={(e) => handleNavClick(e, '#locations')}>LOCATIONS</a>
            </nav>
            <button 
              className="btn-consult-pill full-width" 
              onClick={() => { setMobileMenuOpen(false); onOpenConsultModal(); }}
            >
              CONSULT & SHINE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
