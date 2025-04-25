import React from 'react';
import './addmission.css';
import { FaPhoneAlt, FaEnvelope, FaTimes } from 'react-icons/fa';

const AdmissionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Admission Process</h2>
        <p>
          For more information or if you have any questions regarding admissions,
          please contact us through the following methods:
        </p>
        <div className="contact-info">

          <p><FaPhoneAlt className="contact-icon" color='#457b9d' /> <span><strong> Phone:</strong> +91 63977 65965, +91 9528102067</span></p>
          <p><FaEnvelope className="contact-icon" color='#F1A208 '/><span><strong>  Email:</strong> sangeeta.sharma65965@gmail.com</span> </p>
        </div>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
      </div>
  );
};

export default AdmissionModal;
