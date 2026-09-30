import React from 'react';

const galleryCards = [
  {
    id: 1,
    img: '/images/gallery_1.webp',
    alt: 'Brunette beauty model with radiant skin',
    shape: 'card-rect',
  },
  {
    id: 2,
    img: '/images/gallery_2.webp',
    alt: 'Shobha Chawla luxury red lipstick on silk',
    shape: 'arch-down',
  },
  {
    id: 3,
    img: '/images/gallery_3.webp',
    alt: 'Smiling model applying skincare treatment',
    shape: 'card-rect',
  },
  {
    id: 4,
    img: '/images/gallery_4.webp',
    alt: 'Haute crimson fragrance bottle',
    shape: 'arch-up',
  },
  {
    id: 5,
    img: '/images/gallery_5.webp',
    alt: 'Editorial dew and rose blush complexion',
    shape: 'card-rect',
  },
  {
    id: 6,
    img: '/images/gallery_6.webp',
    alt: 'Luxe salon suite with red fluted bottles and gold fixtures',
    shape: 'arch-down',
  },
  {
    id: 7,
    img: '/images/gallery_7.webp',
    alt: 'Editorial model with bold red lips and sleek hair',
    shape: 'card-rect',
  },
];

export default function InstagramGrid() {
  return (
    <section className="follow-gallery-section" id="social-gallery">
      {/* Top Header Area on Cream Background */}
      <div className="follow-gallery-top">
        {/* Decorative painterly lipstick smear */}
        <div className="brush-smear-wrapper" aria-hidden="true">
          <img 
            src="/images/brush_smear.webp" 
            alt="" 
            className="brush-smear-img" 
          />
        </div>

        <div className="follow-header-container">
          <div className="follow-tag-col">
            <span className="follow-us-tag">FOLLOW US</span>
          </div>

          <nav className="follow-links-nav" aria-label="Social media links">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="follow-social-link"
            >
              Instagram
            </a>
            <a 
              href="https://pinterest.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="follow-social-link"
            >
              Pinterest
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="follow-social-link"
            >
              Facebook
            </a>
          </nav>
        </div>
      </div>

      {/* 7-Card Architectural Ribbon bridging cream and red */}
      <div className="follow-gallery-ribbon-wrap">
        <div className="follow-gallery-ribbon">
          {galleryCards.map((card) => (
            <div 
              key={card.id} 
              className={`gallery-card-item ${card.shape}`}
            >
              <img 
                src={card.img} 
                alt={card.alt} 
                loading="lazy" 
                className="gallery-card-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
