import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Quote from './components/Quote';
import Testimonials from './components/Testimonials';
import InstagramGrid from './components/InstagramGrid';
import Footer from './components/Footer';
import ConsultModal from './components/ConsultModal';
import QuickViewModal from './components/QuickViewModal';
import Toast from './components/Toast';

export default function App() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [consultServiceId, setConsultServiceId] = useState('');
  const [selectedQuickViewService, setSelectedQuickViewService] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const handleOpenConsult = (serviceId = '') => {
    setConsultServiceId(serviceId);
    setIsConsultOpen(true);
  };

  const handleConfirmBooking = ({ name, service, date, time }) => {
    setToastMessage(`✨ Thank you, ${name}! Your consultation for ${service} on ${date} at ${time} has been reserved.`);
  };

  const handleShowToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div className="brand-app">
      {/* Background ambient light */}
      <div className="ambient-glow glow-1" aria-hidden="true" />
      <div className="ambient-glow glow-2" aria-hidden="true" />

      {/* Header */}
      <Header onOpenConsultModal={() => handleOpenConsult()} />

      <main id="main-content">
        {/* Hero Section precisely matching the provided screenshot */}
        <Hero onOpenConsultModal={() => handleOpenConsult()} />

        {/* About Section */}
        <About />

        {/* Services with dynamic categories and quick-view */}
        <Services 
          onSelectService={(service) => setSelectedQuickViewService(service)}
          onOpenConsultModal={(serviceId) => handleOpenConsult(serviceId)}
        />

        {/* Editorial Quote */}
        <Quote />

        {/* Testimonials Carousel */}
        <Testimonials />

        {/* Follow Us / Socials Architectural Gallery */}
        <InstagramGrid />
      </main>

      {/* Footer matching user screenshot */}
      <Footer 
        onOpenConsultModal={() => handleOpenConsult()} 
        onShowToast={handleShowToast} 
      />

      {/* Interactive Modals */}
      <ConsultModal 
        isOpen={isConsultOpen}
        initialServiceId={consultServiceId}
        onClose={() => setIsConsultOpen(false)}
        onConfirm={handleConfirmBooking}
      />

      <QuickViewModal 
        service={selectedQuickViewService}
        onClose={() => setSelectedQuickViewService(null)}
        onBook={(serviceId) => handleOpenConsult(serviceId)}
      />

      {/* Toast Notification */}
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage('')} 
      />
    </div>
  );
}
