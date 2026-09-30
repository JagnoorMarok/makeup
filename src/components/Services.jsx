import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';

export default function Services({ onSelectService, onOpenConsultModal }) {
  const [activeCategory, setActiveCategory] = useState('popular');

  // Filter services according to the active tab
  const getFilteredServices = () => {
    if (activeCategory === 'popular') {
      return servicesData.filter(s => ['design-manicure', 'treatments-spa', 'brow-shaping'].includes(s.id));
    }
    if (activeCategory === 'special') {
      return servicesData.filter(s => s.category.includes('special'));
    }
    if (activeCategory === 'trending') {
      return servicesData.filter(s => s.category.includes('trending'));
    }
    if (activeCategory === 'top-rated') {
      return servicesData.filter(s => s.category.includes('top-rated'));
    }
    return servicesData.slice(0, 3);
  };

  const displayedServices = getFilteredServices();
  const brightMakeupService = servicesData.find(s => s.id === 'bright-makeup') || servicesData[4];

  return (
    <section className="services-editorial-section" id="services">
      <div className="services-editorial-container">
        
        {/* Top Header: Title & Count Badge */}
        <div className="services-title-bar">
          <h2 className="services-main-heading">
            <span>Explore Our Exclusive</span>
            <span>Luxury Services</span>
          </h2>
          <span className="services-total-count">(15+)</span>
        </div>

        {/* Hairline Divider */}
        <div className="services-hairline-divider" />

        {/* Sub-header Navigation / Kicker */}
        <div className="services-sub-kicker-bar">
          <span className="services-kicker-tag">YOUR NATURAL BEAUTY</span>
          <button 
            type="button" 
            className="services-view-all-btn"
            onClick={() => setActiveCategory(activeCategory === 'all' ? 'popular' : 'all')}
          >
            VIEW ALL OFFERINGS
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.2M9.5 2.5V7.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Featured Hero Banner Card */}
        <div 
          className="services-featured-card"
          onClick={() => onSelectService(brightMakeupService)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectService(brightMakeupService);
            }
          }}
          aria-label="View Bright Makeup Service Details"
        >
          <img 
            src="/images/service_bright_makeup.jpg" 
            alt="Bright Makeup Luxury Service" 
            className="featured-hero-image"
          />
          
          {/* Floating Pill Card in Bottom Right */}
          <div className="featured-floating-pill">
            <div className="pill-text-content">
              <h3 className="pill-service-title">Bright Makeup</h3>
              <span className="pill-service-subtitle">EXPERT PRO • FROM $135</span>
            </div>
            <div className="pill-arrow-divider" />
            <div className="pill-arrow-wrap">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="services-hairline-divider divider-after-hero" />

        {/* Filter Categories Bar */}
        <div className="services-category-filter-bar">
          <button 
            type="button"
            className={`filter-btn-popular ${activeCategory === 'popular' ? 'is-active' : ''}`}
            onClick={() => setActiveCategory('popular')}
          >
            POPULAR SERVICES
          </button>

          <div className="filter-tabs-group">
            <button 
              type="button"
              className={`filter-tab-item ${activeCategory === 'special' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('special')}
            >
              SPECIAL OFFER
            </button>
            <button 
              type="button"
              className={`filter-tab-item ${activeCategory === 'trending' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('trending')}
            >
              TRENDING NOW
            </button>
            <button 
              type="button"
              className={`filter-tab-item ${activeCategory === 'top-rated' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('top-rated')}
            >
              TOP RATED
            </button>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="services-hairline-divider" />

        {/* Editorial Service Rows */}
        <div className="services-rows-container">
          {displayedServices.map((service) => (
            <div 
              key={service.id}
              className="service-editorial-row-item"
              onClick={() => onSelectService(service)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectService(service);
                }
              }}
              aria-label={`View details for ${service.name}`}
            >
              <h3 className="service-editorial-name">{service.name}</h3>
              
              <div className="service-editorial-meta-group">
                <span className="service-editorial-price-badge">
                  {service.priceFull ? service.priceFull.toUpperCase() : `FROM ${service.price}`}
                </span>
                <span className="service-editorial-specialist">
                  BY {service.specialist.toUpperCase()}
                </span>
                <span className="service-editorial-arrow">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2.5 10.5L10.5 2.5M10.5 2.5H4.5M10.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
