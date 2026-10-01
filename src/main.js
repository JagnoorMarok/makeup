/**
 * SHOBHA CHAWLA LUXURY BEAUTY & COSMETICS
 * Main Application Logic & Interactive Systems
 */

// Comprehensive Luxury Services Dataset
const servicesData = [
  {
    id: 'design-manicure',
    name: 'Design Manicure',
    price: '₹2,500',
    priceFull: 'from ₹2,500',
    duration: '45 min',
    specialist: 'Olivia Bennett',
    specialistRole: 'Senior Nail Artist',
    image: '/images/service_manicure.jpg',
    category: ['popular', 'top-rated'],
    description: 'Precision cuticle sculpting, hand massage with botanical oils, and artistic gel lacquering tailored to your personal aesthetic.',
    highlights: [
      'Gentle non-toxic Japanese gel formula',
      'Artisanal hand and cuticle rejuvenation',
      'Long-lasting chip-resistant high gloss'
    ]
  },
  {
    id: 'treatments-spa',
    name: 'Treatments & Spa',
    price: '₹5,500',
    priceFull: 'from ₹5,500',
    duration: '60 min',
    specialist: 'Emma Collins',
    specialistRole: 'Holistic Esthetician',
    image: '/images/service_spa.jpg',
    category: ['popular', 'special'],
    description: 'Deep-tissue facial tension relief, aromatic stone therapy, and restorative cellular hydration to reset mind and skin.',
    highlights: [
      'Aromatherapeutic custom essential oils',
      'Lymphatic drainage contour massage',
      'Deep thermal hydration treatment'
    ]
  },
  {
    id: 'brow-shaping',
    name: 'Brow Shaping',
    price: '₹3,500',
    priceFull: 'from ₹3,500',
    duration: '35 min',
    specialist: 'Amelia Brooks',
    specialistRole: 'Brow & Lash Architect',
    image: '/images/service_brows.jpg',
    category: ['popular', 'trending'],
    description: 'Harmonious brow mapping according to your facial structure, gentle waxing or threading, and bespoke color tinting.',
    highlights: [
      'Golden-ratio facial measurement',
      'Hypoallergenic conditioning tint',
      'Keratin strengthening brow lamination'
    ]
  },
  {
    id: 'hair-treatments',
    name: 'Hair Treatments',
    price: '₹8,000',
    priceFull: 'from ₹8,000',
    duration: '75 min',
    specialist: 'Evelyn Harris',
    specialistRole: 'Master Hair Stylist & Colorist',
    image: '/images/service_hair.jpg',
    category: ['popular', 'top-rated'],
    description: 'Intense peptide reconstruction, scalp stimulation massage, and gloss seal to bestow glass-like radiance and strength.',
    highlights: [
      'Micro-peptide bond builder infusion',
      'Stimulating botanical scalp exfoliation',
      'Diamond gloss finish with UV protection'
    ]
  },
  {
    id: 'bright-makeup',
    name: 'Bright Makeup',
    price: '₹11,000',
    priceFull: 'from ₹11,000',
    duration: '75 min',
    specialist: 'Chloe Vance',
    specialistRole: 'Editorial Makeup Artist',
    image: '/images/hero_thumb1.webp',
    category: ['trending', 'special'],
    description: 'Luminous skin preparation, delicate sculpting, and radiant eye artistry for special celebrations, galas, and photography.',
    highlights: [
      'Airbrush luminous complexion base',
      'Custom lash cluster placement',
      '18-hour setting elixir with gold flecks'
    ]
  },
  {
    id: 'glow-facial',
    name: 'Hydra-Radiance Facial',
    price: '₹9,000',
    priceFull: 'from ₹9,000',
    duration: '60 min',
    specialist: 'Emma Collins',
    specialistRole: 'Holistic Esthetician',
    image: '/images/quote_woman.webp',
    category: ['special', 'top-rated'],
    description: 'Triple-phase vortex infusion of hyaluronic acid, glycolic glow peel, and oxygenated mist for instant red-carpet vitality.',
    highlights: [
      'Non-invasive vacuum pore purification',
      'Pure marine collagen mask',
      'Cryo-globe firming facial massage'
    ]
  },
  {
    id: 'head-spa',
    name: 'Japanese Head Spa',
    price: '₹7,500',
    priceFull: 'from ₹7,500',
    duration: '60 min',
    specialist: 'Evelyn Harris',
    specialistRole: 'Master Hair Stylist',
    image: '/images/about_portrait.webp',
    category: ['trending'],
    description: 'Waterfall rinse therapy, warm botanical herb vapor, and meridian pressure points to alleviate stress and stimulate hair growth.',
    highlights: [
      'Microscopic scalp analysis',
      'Continuous circular rain shower basin',
      'Camellia oil neck & shoulder release'
    ]
  },
  {
    id: 'lash-luxe',
    name: 'Lash Couture Tint',
    price: '₹5,200',
    priceFull: 'from ₹5,200',
    duration: '45 min',
    specialist: 'Amelia Brooks',
    specialistRole: 'Brow & Lash Architect',
    image: '/images/insta_6.webp',
    category: ['special'],
    description: 'Dramatic upward curl lift paired with deep onyx conditioning dye that eliminates the need for daily mascara.',
    highlights: [
      'Silk protein nourishing treatment',
      'Custom curl rod sizing',
      'Up to 8-week lasting lift'
    ]
  }
];

// Initialize on DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initNavigation();
  initServicesSection();
  initFeedbackSlider();
  initModals();
  initNewsletter();
});

/* ==========================================================================
   STICKY HEADER & SCROLL BEHAVIOR
   ========================================================================== */
function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   NAVIGATION & MOBILE DRAWER
   ========================================================================== */
function initNavigation() {
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  const drawerConsultBtn = document.getElementById('drawerConsultBtn');

  // Toggle mobile drawer
  function openDrawer() {
    mobileDrawer?.classList.add('open');
    mobileDrawer?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer?.classList.remove('open');
    mobileDrawer?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  mobileToggle?.addEventListener('click', openDrawer);
  drawerCloseBtn?.addEventListener('click', closeDrawer);
  drawerBackdrop?.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  drawerConsultBtn?.addEventListener('click', () => {
    closeDrawer();
    openBookingModal();
  });

  // All Pages Dropdown for Desktop
  const allPagesBtn = document.getElementById('allPagesBtn');
  const dropdownParent = allPagesBtn?.closest('.dropdown-parent');

  allPagesBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownParent?.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!dropdownParent?.contains(e.target)) {
      dropdownParent?.classList.remove('active');
    }
  });

  // Smooth scroll with offset for anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = document.getElementById('siteHeader')?.offsetHeight || 80;
        const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight - 10;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ==========================================================================
   SERVICES SECTION (FILTERING & CARD RENDERING)
   ========================================================================== */
function initServicesSection() {
  const container = document.getElementById('servicesList');
  const tabButtons = document.querySelectorAll('.service-tab-btn');
  if (!container) return;

  let currentCategory = 'popular';

  function renderServices(cat) {
    const filtered = servicesData.filter(s => s.category.includes(cat));

    container.innerHTML = filtered.map((service, idx) => `
      <div class="service-card-row" data-id="${service.id}" role="button" tabindex="0" aria-label="View ${service.name} details">
        <div class="service-left-group">
          <span class="service-index">0${idx + 1}</span>
          <div class="service-thumb">
            <img src="${service.image}" alt="${service.name}" loading="lazy" />
          </div>
          <div class="service-meta">
            <h3 class="service-name">${service.name}</h3>
            <span class="service-specialist">By <strong>${service.specialist}</strong> (${service.duration})</span>
          </div>
        </div>
        <div class="service-right-group">
          <span class="service-price-pill">${service.priceFull}</span>
          <button class="service-explore-btn" aria-label="Explore ${service.name}">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 11.5L11.5 2.5M11.5 2.5H4.5M11.5 2.5V9.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    `).join('');

    // Attach click handlers to open quick-view modal
    container.querySelectorAll('.service-card-row').forEach(row => {
      row.addEventListener('click', () => {
        const id = row.getAttribute('data-id');
        openQuickViewModal(id);
      });
      row.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const id = row.getAttribute('data-id');
          openQuickViewModal(id);
        }
      });
    });
  }

  // Handle Tab Switch
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      currentCategory = btn.getAttribute('data-category') || 'popular';
      renderServices(currentCategory);
    });
  });

  // Initial render
  renderServices(currentCategory);

  // Inquire package button
  document.getElementById('customRitualBtn')?.addEventListener('click', () => {
    openBookingModal('custom-package');
  });
}

/* ==========================================================================
   FEEDBACK / TESTIMONIALS CAROUSEL
   ========================================================================== */
function initFeedbackSlider() {
  const track = document.getElementById('feedbackTrack');
  const prevBtn = document.getElementById('sliderPrevBtn');
  const nextBtn = document.getElementById('sliderNextBtn');
  const dotsContainer = document.getElementById('sliderDots');
  if (!track) return;

  const cards = track.querySelectorAll('.feedback-card');
  const totalCards = cards.length;
  let currentIndex = 0;

  function getCardsPerView() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  function getMaxIndex() {
    return Math.max(0, totalCards - getCardsPerView());
  }

  function updateDots() {
    if (!dotsContainer) return;
    const maxIdx = getMaxIndex();
    dotsContainer.innerHTML = '';
    for (let i = 0; i <= maxIdx; i++) {
      const dot = document.createElement('span');
      dot.className = `dot ${i === currentIndex ? 'active' : ''}`;
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateSlider() {
    const maxIdx = getMaxIndex();
    if (currentIndex > maxIdx) currentIndex = maxIdx;
    if (currentIndex < 0) currentIndex = 0;

    const cardWidth = cards[0]?.offsetWidth || 340;
    const gap = 24;
    const offset = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;

    // Update buttons state
    if (prevBtn) prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
    if (nextBtn) nextBtn.style.opacity = currentIndex >= maxIdx ? '0.5' : '1';

    updateDots();
  }

  prevBtn?.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextBtn?.addEventListener('click', () => {
    if (currentIndex < getMaxIndex()) {
      currentIndex++;
      updateSlider();
    }
  });

  // Touch / Swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      if (currentIndex < getMaxIndex()) {
        currentIndex++;
        updateSlider();
      }
    } else if (touchEndX - touchStartX > 50) {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    updateSlider();
  });

  updateSlider();
}

/* ==========================================================================
   MODALS (BOOKING & SERVICE QUICK VIEW)
   ========================================================================== */
function initModals() {
  const bookingModal = document.getElementById('bookingModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const openConsultModalBtn = document.getElementById('openConsultModalBtn');
  const ctaBookBtn = document.getElementById('ctaBookBtn');
  const heroFeaturedCard = document.getElementById('heroFeaturedCard');

  // Open booking modal triggers
  openConsultModalBtn?.addEventListener('click', () => openBookingModal());
  ctaBookBtn?.addEventListener('click', () => openBookingModal());
  heroFeaturedCard?.addEventListener('click', () => openBookingModal('bright-makeup'));

  modalCloseBtn?.addEventListener('click', closeBookingModal);

  bookingModal?.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
      closeBookingModal();
    }
  });

  // Service Quick View Close
  const quickViewModal = document.getElementById('serviceQuickViewModal');
  const quickViewCloseBtn = document.getElementById('quickViewCloseBtn');

  quickViewCloseBtn?.addEventListener('click', closeQuickViewModal);
  quickViewModal?.addEventListener('click', (e) => {
    if (e.target === quickViewModal) {
      closeQuickViewModal();
    }
  });

  // Close modals on Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBookingModal();
      closeQuickViewModal();
    }
  });

  // Date input minimum today
  const bookingDate = document.getElementById('bookingDate');
  if (bookingDate) {
    const today = new Date().toISOString().split('T')[0];
    bookingDate.min = today;
    bookingDate.value = today;
  }

  // Booking Form Submit
  const bookingForm = document.getElementById('bookingForm');
  bookingForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const service = document.getElementById('bookingService')?.value;
    const name = document.getElementById('clientName')?.value;
    const date = document.getElementById('bookingDate')?.value;
    const time = document.getElementById('bookingTime')?.value;

    closeBookingModal();
    showToast(`✨ Thank you, ${name}! Your consultation request for ${service} on ${date} at ${time} has been reserved.`);
    bookingForm.reset();
  });
}

function openBookingModal(serviceId = '') {
  const bookingModal = document.getElementById('bookingModal');
  const bookingService = document.getElementById('bookingService');

  if (serviceId && bookingService) {
    const exists = Array.from(bookingService.options).some(opt => opt.value === serviceId);
    if (exists) {
      bookingService.value = serviceId;
    }
  }

  bookingModal?.classList.add('open');
  bookingModal?.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  const bookingModal = document.getElementById('bookingModal');
  bookingModal?.classList.remove('open');
  bookingModal?.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function openQuickViewModal(serviceId) {
  const service = servicesData.find(s => s.id === serviceId);
  if (!service) return;

  const content = document.getElementById('quickViewContent');
  if (!content) return;

  content.innerHTML = `
    <div class="quickview-image-frame">
      <img src="${service.image}" alt="${service.name}" />
    </div>
    <div class="quickview-details">
      <div>
        <span class="quickview-category">Signature Treatment</span>
        <h3 class="quickview-title">${service.name}</h3>
        <p class="quickview-desc">${service.description}</p>
        <ul class="quickview-highlights">
          ${service.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
      <div class="quickview-footer">
        <div>
          <span class="quickview-price">${service.priceFull}</span>
          <span class="service-specialist" style="display:block">with ${service.specialist} (${service.duration})</span>
        </div>
        <button class="btn btn-consult" id="quickViewBookBtn" data-service="${service.id}">
          <span>Reserve Ritual</span>
          <span class="btn-arrow-circle">→</span>
        </button>
      </div>
    </div>
  `;

  document.getElementById('quickViewBookBtn')?.addEventListener('click', () => {
    closeQuickViewModal();
    openBookingModal(service.id);
  });

  const modal = document.getElementById('serviceQuickViewModal');
  modal?.classList.add('open');
  modal?.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeQuickViewModal() {
  const modal = document.getElementById('serviceQuickViewModal');
  modal?.classList.remove('open');
  modal?.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ==========================================================================
   NEWSLETTER SUBSCRIPTION & TOAST SYSTEM
   ========================================================================== */
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  const input = document.getElementById('newsletterEmail');
  const feedback = document.getElementById('newsletterFeedback');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input?.value.trim();

    if (!email || !email.includes('@') || !email.includes('.')) {
      if (feedback) {
        feedback.textContent = 'Please provide a valid email address.';
        feedback.className = 'form-feedback error';
      }
      return;
    }

    if (feedback) {
      feedback.textContent = 'Welcome to the Shobha Chawla inner circle. Check your inbox!';
      feedback.className = 'form-feedback success';
    }

    showToast('💌 Subscribed successfully! Welcome to Shobha Chawla Beauty Studio.');
    form.reset();

    setTimeout(() => {
      if (feedback) feedback.textContent = '';
    }, 5000);
  });
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}
