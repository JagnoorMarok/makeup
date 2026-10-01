import React, { useState } from 'react';

export default function ConsultModal({ isOpen, initialServiceId, onClose, onConfirm }) {
  const [service, setService] = useState(initialServiceId || 'bright-makeup');
  const [stylist, setStylist] = useState('first-available');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('10:00');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm({ name, service, date, time });
    onClose();
  };

  return (
    <div className="modal-backdrop open" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">&times;</button>
        
        <div className="modal-header">
          <span className="modal-kicker">Personalized Beauty Consultation</span>
          <h3 className="modal-title">Consult & Shine with Shobha Chawla</h3>
          <p className="modal-desc">
            Select your desired luxury ritual, choose your preferred master stylist, and pick an appointment window.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="serviceSelect">Select Luxury Service</label>
            <select id="serviceSelect" value={service} onChange={(e) => setService(e.target.value)} required>
              <option value="bright-makeup">Bright Makeup (From ₹11,000) — 75 min</option>
              <option value="design-manicure">Design Manicure (From ₹2,500) — 45 min</option>
              <option value="treatments-spa">Treatments & Spa (From ₹5,500) — 60 min</option>
              <option value="brow-shaping">Brow Shaping & Tint (From ₹3,500) — 30 min</option>
              <option value="hair-treatments">Luminous Hair Ritual (From ₹8,000) — 90 min</option>
              <option value="glow-facial">Hydra-Radiance Facial (From ₹9,000) — 60 min</option>
              <option value="head-spa">Japanese Head Spa (From ₹7,500) — 60 min</option>
              <option value="custom-package">Customized Day of Indulgence Package</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="stylistSelect">Select Master Specialist</label>
            <select id="stylistSelect" value={stylist} onChange={(e) => setStylist(e.target.value)} required>
              <option value="olivia">Olivia Bennett — Senior Manicurist & Nail Artist</option>
              <option value="emma">Emma Collins — Holistic Spa & Esthetics Specialist</option>
              <option value="amelia">Amelia Brooks — Brow & Lash Architecture Lead</option>
              <option value="evelyn">Evelyn Harris — Master Hair Stylist & Colorist</option>
              <option value="first-available">First Available Specialist</option>
            </select>
          </div>

          <div className="form-row-2">
            <div className="form-group">
              <label htmlFor="dateInput">Preferred Date</label>
              <input 
                type="date" 
                id="dateInput"
                value={date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setDate(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="timeSelect">Preferred Time</label>
              <select id="timeSelect" value={time} onChange={(e) => setTime(e.target.value)} required>
                <option value="10:00">10:00 AM — Morning Glow</option>
                <option value="12:30">12:30 PM — Midday Radiance</option>
                <option value="15:00">03:00 PM — Afternoon Serenity</option>
                <option value="17:30">05:30 PM — Evening Pampering</option>
              </select>
            </div>
          </div>

          <div className="form-row-2">
            <div className="form-group">
              <label htmlFor="nameInput">Full Name</label>
              <input 
                type="text" 
                id="nameInput"
                placeholder="e.g. Sophia Loren" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneInput">Phone Number</label>
              <input 
                type="tel" 
                id="phoneInput"
                placeholder="+1 (555) 000-0000" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="emailInput">Email Address</label>
            <input 
              type="email" 
              id="emailInput"
              placeholder="you@domain.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="notesInput">Special requests or skin sensitivities</label>
            <textarea 
              id="notesInput"
              rows={2} 
              placeholder="Let us know any preferences, allergies, or questions..." 
              value={notes} 
              onChange={(e) => setNotes(e.target.value)} 
            />
          </div>

          <button type="submit" className="btn btn-consult btn-submit-booking w-full">
            <span>Confirm Consultation Request</span>
            <span className="btn-arrow-circle">✓</span>
          </button>
        </form>
      </div>
    </div>
  );
}
