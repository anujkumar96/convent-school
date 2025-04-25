import React from 'react';
import './footer.css'; 
import locationImage from './../assets/school-image.jpg';

const Footer = () => {
  return (
    <footer id="footer-section">
      <div className="footer-main">
        <div className="container">
          <div className="footer-section footer-info">
            <h3>Sunrise Convent School
            </h3>
            <p>Dauji Mandir Road, Shamshabad, Agra - 283125 (Murli Wala Kua)</p>
            <p>Agra, Uttar Pradesh</p>
            <p>Contact: <a href="tel:+916397765965">+91 63977 65965, +91 9528102067</a></p>
            <p>Email: <a href="mailto:sangeeta.sharma65965@gmail.com">sangeeta.sharma65965@gmail.com</a></p>
          </div>

          <div className="footer-section footer-links footer">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Admission</a></li>
              <li><a href="#">Facilities</a></li>
            </ul>
          </div>

          <div className="footer-section footer-location footer-links">
            <h3>Our Location</h3>
            <p>Click to view on <a href="https://www.google.co.in/maps/place/Sunrise+Convent+School/@27.0179948,78.1225931,17z/data=!3m1!4b1!4m6!3m5!1s0x39741296fde712bf:0x96ab6243930b60c!8m2!3d27.01799!4d78.125168!16s%2Fg%2F11fxdzls1w?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Google Maps</a></p>
            <a href="https://www.google.co.in/maps/place/Sunrise+Convent+School/@27.0179948,78.1225931,17z/data=!3m1!4b1!4m6!3m5!1s0x39741296fde712bf:0x96ab6243930b60c!8m2!3d27.01799!4d78.125168!16s%2Fg%2F11fxdzls1w?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
              <img src={locationImage} alt="Sunrise Convent School" className="footer-location-image" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2025 Shodhshala Innotech Pvt Ltd. All rights reserved.</p>
          <p><a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
