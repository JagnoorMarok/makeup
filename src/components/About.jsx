import React, { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef(null);
  const wrapTopRightRef = useRef(null);
  const wrapBottomLeftRef = useRef(null);
  const wrapDuoBackRef = useRef(null);
  const wrapDuoFrontRef = useRef(null);

  useEffect(() => {
    // Respect user motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let target = {
      topRight: 0,
      topRightRot: 0,
      bottomLeft: 0,
      bottomLeftRot: 0,
      duoBack: 0,
      duoBackRot: 0,
      duoFront: 0,
      duoFrontRot: 0,
    };
    let current = { ...target };
    let animationFrameId = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Soft-clamped scroll velocity (momentum impulse)
      scrollVelocity = Math.max(-45, Math.min(45, delta));

      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Only calculate if section is in or near viewport
      if (rect.bottom < -150 || rect.top > viewportHeight + 150) return;

      // Normalized progress of section through viewport (-0.5 to 0.5)
      const progress = (viewportHeight / 2 - (rect.top + rect.height / 2)) / (viewportHeight + rect.height);
      const clampedProgress = Math.max(-0.6, Math.min(0.6, progress));

      // Calculate organic momentum offsets: steady parallax + dynamic velocity inertia
      target = {
        // Top right: drifts smoothly upward on scroll down with a subtle tilt
        topRight: clampedProgress * -26 - scrollVelocity * 0.28,
        topRightRot: clampedProgress * 1.4 - scrollVelocity * 0.02,

        // Bottom left: drifts smoothly downward opposite to top right
        bottomLeft: clampedProgress * 22 + scrollVelocity * 0.24,
        bottomLeftRot: clampedProgress * -1.2 + scrollVelocity * 0.018,

        // Duo Back (cream splashing): deeper parallax float
        duoBack: clampedProgress * -32 - scrollVelocity * 0.32,
        duoBackRot: clampedProgress * 1.8 - scrollVelocity * 0.022,

        // Duo Front (model): forward layer momentum
        duoFront: clampedProgress * 24 + scrollVelocity * 0.25,
        duoFrontRot: clampedProgress * -1.5 + scrollVelocity * 0.02,
      };
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Smooth 60fps/120fps physics loop with exponential lerp easing
    const updatePhysics = () => {
      // Natural inertia decay when scroll slows or stops
      scrollVelocity *= 0.88;

      // Lerp current towards target with 0.12 damping factor
      const lerpFactor = 0.12;
      for (const key in target) {
        current[key] += (target[key] - current[key]) * lerpFactor;
      }

      // Mutate transforms directly on GPU layers with sub-pixel precision
      if (wrapTopRightRef.current) {
        wrapTopRightRef.current.style.transform = `translate3d(0, ${current.topRight.toFixed(2)}px, 0) rotate(${current.topRightRot.toFixed(2)}deg)`;
      }
      if (wrapBottomLeftRef.current) {
        wrapBottomLeftRef.current.style.transform = `translate3d(0, ${current.bottomLeft.toFixed(2)}px, 0) rotate(${current.bottomLeftRot.toFixed(2)}deg)`;
      }
      if (wrapDuoBackRef.current) {
        wrapDuoBackRef.current.style.transform = `translate3d(0, ${current.duoBack.toFixed(2)}px, 0) rotate(${current.duoBackRot.toFixed(2)}deg)`;
      }
      if (wrapDuoFrontRef.current) {
        wrapDuoFrontRef.current.style.transform = `translate3d(0, ${current.duoFront.toFixed(2)}px, 0) rotate(${current.duoFrontRot.toFixed(2)}deg)`;
      }

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section className="about-editorial-section" id="about" ref={sectionRef}>
      <div className="about-editorial-container">
        {/* Top-Right Floating Image with Momentum Wrapper */}
        <div className="editorial-momentum-wrap wrap-top-right" ref={wrapTopRightRef}>
          <div className="editorial-img-card img-top-right">
            <img 
              src="/images/about_img_3.webp" 
              alt="Spa Treatment Mask Application" 
              loading="lazy" 
            />
          </div>
        </div>

        {/* Text Column (Subtitle + 5-Line Editorial Statement in Red) */}
        <div className="about-text-content">
          <p className="about-kicker-red">
            Welcome to Shobha Chawla, where beauty transcends boundaries<br />
            and confidence becomes your signature.
          </p>

          <h2 className="about-statement-red">
            <span className="editorial-line">Founded with a passion for elegance</span>
            <span className="editorial-line">and artistry, our salon is a sanctuary for</span>
            <span className="editorial-line">those who seek to enhance their natural</span>
            <span className="editorial-line">beauty and embrace their unique style.</span>
            <span className="editorial-line">Our mission is to bring radiance.</span>
          </h2>
        </div>

        {/* Bottom Floating Images Composition */}
        <div className="about-bottom-images-row">
          {/* Bottom-Left Image with Momentum Wrapper */}
          <div className="editorial-momentum-wrap wrap-bottom-left" ref={wrapBottomLeftRef}>
            <div className="editorial-img-card img-bottom-left">
              <img 
                src="/images/about_img_4.webp" 
                alt="Radiant Skin Close-up" 
                loading="lazy" 
              />
            </div>
          </div>

          {/* Bottom-Right Staggered Overlapping Duo */}
          <div className="editorial-duo-cluster">
            {/* Back image with Momentum Wrapper */}
            <div className="editorial-momentum-wrap wrap-duo-back" ref={wrapDuoBackRef}>
              <div className="editorial-img-card img-duo-back">
                <img 
                  src="/images/about_img_2.webp" 
                  alt="Cosmetic Cream Jar Splashing" 
                  loading="lazy" 
                />
              </div>
            </div>

            {/* Front overlapping image with Momentum Wrapper */}
            <div className="editorial-momentum-wrap wrap-duo-front" ref={wrapDuoFrontRef}>
              <div className="editorial-img-card img-duo-front">
                <img 
                  src="/images/about_img_1.webp" 
                  alt="Radiant Model Skincare Treatment" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
