import React from 'react';

export default function Quote() {
  return (
    <section className="quote-editorial-section" id="quote">
      <div className="quote-editorial-container">
        
        {/* Top-Right Tilted Cosmetic Card: Lipsticks */}
        <div className="quote-tilted-card card-top-right">
          <img 
            src="/images/quote_cosmetics.webp" 
            alt="Shobha Chawla Luxury Lipsticks" 
            loading="lazy" 
          />
        </div>

        {/* Bottom-Left Tilted Radiant Model Card */}
        <div className="quote-tilted-card card-bottom-left">
          <img 
            src="/images/quote_woman.webp" 
            alt="Radiant Glowing Complexion" 
            loading="lazy" 
          />
        </div>

        {/* Center Content Block */}
        <div className="quote-center-block">
          {/* Top Rolled Towel & Flower Emblem */}
          <div className="quote-emblem-wrap">
            <img 
              src="/images/flower.svg" 
              alt="Shobha Chawla Emblem" 
              className="quote-emblem-icon" 
            />
          </div>

          {/* 3-Line Large Editorial Quote in White */}
          <blockquote className="founder-quote-editorial">
            <span className="quote-editorial-line">“Our passion isn’t beauty, it’s making</span>
            <span className="quote-editorial-line">people truly fall in love with</span>
            <span className="quote-editorial-line">themselves.”</span>
          </blockquote>

          {/* Author Attribution */}
          <div className="quote-attribution-row">
            <span className="author-name-text">Shobha Chawla</span>
            <span className="author-bullet-separator">•</span>
            <span className="author-title-text">Founder</span>
          </div>
        </div>

      </div>
    </section>
  );
}
