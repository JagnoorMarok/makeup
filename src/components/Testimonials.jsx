import React, { useState, useEffect, useRef } from 'react';
import { testimonialsData } from '../data/servicesData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const trackRef = useRef(null);
  const touchStartX = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonialsData.length - cardsPerView);

  const prev = () => {
    setCurrentIndex(idx => Math.max(0, idx - 1));
  };

  const next = () => {
    setCurrentIndex(idx => Math.min(maxIndex, idx + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].screenX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <section className="feedback-section" id="reviews">
      <div className="container">
        <div className="feedback-header">
          <div>
            <span className="section-tag">Zerra Favorites</span>
            <h2 className="section-title">
              Stories from Our Beautiful Clients: <span className="serif-accent">Beauty Routine</span>
            </h2>
          </div>
          <div className="slider-controls" aria-label="Testimonial Navigation">
            <button 
              className="slider-nav-btn prev" 
              onClick={prev}
              disabled={currentIndex === 0}
              aria-label="Previous Testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11.25 14.25L6 9L11.25 3.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="slider-nav-btn next" 
              onClick={next}
              disabled={currentIndex >= maxIndex}
              aria-label="Next Testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M6.75 3.75L12 9L6.75 14.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div 
          className="feedback-carousel-viewport"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="feedback-track" 
            ref={trackRef}
            style={{
              transform: `translateX(calc(-${currentIndex} * (100% / ${cardsPerView} + (24px / ${cardsPerView}))))`
            }}
          >
            {testimonialsData.map((item, idx) => (
              <article key={idx} className="feedback-card">
                <div className="card-stars">★★★★★</div>
                <p className="feedback-quote">"{item.quote}"</p>
                <div className="client-meta">
                  <div className="client-info">
                    <h4 className="client-name">{item.name}</h4>
                    <span className="client-label">{item.title} • {item.service}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Indicator dots */}
        <div className="slider-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <span 
              key={i} 
              className={`dot ${i === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
