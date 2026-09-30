import React from 'react';

export default function QuickViewModal({ service, onClose, onBook }) {
  if (!service) return null;

  return (
    <div className="modal-backdrop open" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card quickview-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">&times;</button>
        <div className="quickview-body">
          <div className="quickview-image-frame">
            <img src={service.image} alt={service.name} />
          </div>
          <div className="quickview-details">
            <div>
              <span className="quickview-category">Signature Treatment</span>
              <h3 className="quickview-title">{service.name}</h3>
              <p className="quickview-desc">{service.description}</p>
              <ul className="quickview-highlights">
                {service.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
            <div className="quickview-footer">
              <div>
                <span className="quickview-price">{service.priceFull}</span>
                <span className="service-specialist" style={{ display: 'block' }}>
                  with {service.specialist} ({service.duration})
                </span>
              </div>
              <button 
                className="btn btn-consult" 
                onClick={() => {
                  onClose();
                  onBook(service.id);
                }}
              >
                <span>Reserve Ritual</span>
                <span className="btn-arrow-circle">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
