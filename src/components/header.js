// Header.jsx
import React, { useState } from 'react';
import './header.css';
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaHome
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import schoolImage from './../assets/school-image.jpg';
import AdmissionModal from './addmisson';

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const isActive = (path) => location.pathname === path;
  const isSubActive = (paths = []) => paths.some((path) => location.pathname.startsWith(path));

  const handleScrollToFooter = (e) => {
    e.preventDefault();
    const section = document.querySelector('#footer-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return  <>
    <div className="announcement-bar">
        <div className="container">
          <marquee behavior="scroll" direction="left" scrollAmount="5">
            <strong>
              Admission Open </strong> (Session 2025-26) : For Classes Pre-Nursery to X.
              Contact: +91 63977 65965
            
          </marquee>
        </div>
      </div>
    <header>
      <div className="main-header">
        <div className="container">
          <div className="logo-container">
            <img src={schoolImage} alt="Sunrise Convent School Logo" className="logo" />
            <div className="school-name">
              <h1>Sunrise Convent School</h1>
              <p className="tagline">Knowledge | Excellence | Character</p>
            </div>
          </div>
         
        </div>
      </div>

      <nav className="main-nav">
        <div className="container">
          <ul className="nav-menu">
            <li>
              <Link to="/" className={isActive('/') ? 'active' : ''}>
                <FaHome style={{ marginRight: '5px' }} /> Home
              </Link>
            </li>

            <li className="menu-item-has-children">
              <a href="#" className={isSubActive(['/overview', '/mission-vision', '/principal-message']) ? 'active' : ''}>About Us</a>
              <ul className="sub-menu">
                <li><Link to="/overview" className={isActive('/overview') ? 'active' : ''}>Overview</Link></li>
                <li><Link to="/mission-vision" className={isActive('/mission-vision') ? 'active' : ''}>Mission & Vision</Link></li>
                <li><Link to="/principal-message" className={isActive('/principal-message') ? 'active' : ''}>Principal's Message</Link></li>
              </ul>
            </li>

            <li className="menu-item-has-children">
              <a href="#" className="inactive">Academic</a>
              <ul className="sub-menu">
                <li><a href="https://cbseacademic.nic.in/curriculum_2025.html">Curriculum</a></li>
                <li><a href="https://cbseacademic.nic.in/SQP_CLASSXII_2023-24.html">Academic Calendar</a></li>
                <li><a href="https://cbseacademic.nic.in/SQP_CLASSX_2023-24.html">Teaching Methodology</a></li>
              </ul>
            </li>

            <li className="menu-item-has-children">
              <a href="#" className={isSubActive(['/curricular-activities', '/sports']) ? 'active' : ''}>Co-Curricular</a>
              <ul className="sub-menu">
                <li><Link to="/curricular-activities" className={isActive('/curricular-activities') ? 'active' : ''}>Co-Curricular Activities</Link></li>
                <li><Link to="/sports" className={isActive('/sports') ? 'active' : ''}>Sports</Link></li>
              </ul>
            </li>

            <li>
              <a href="#" onClick={openModal}>Admission Process</a>
            </li>

            <li className="menu-item-has-children">
              <a href="#" className={isSubActive(['/campus', '/lab','/miscellaneous']) ? 'active' : ''}>Infrastructure</a>
              <ul className="sub-menu">
                <li><Link to="/campus" className={isActive('/campus') ? 'active' : ''}>Campus</Link></li>
                <li><Link to="/lab" className={isActive('/lab') ? 'active' : ''}>Laboratories</Link></li>
                <li><Link to="/miscellaneous" className={isActive('/miscellaneous') ? 'active' : ''}>Miscellaneous</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/gallery" className={isActive('/gallery') ? 'active' : ''}>Gallery</Link>
            </li>

            <li>
              <a href="#footer-section" onClick={handleScrollToFooter}>Contact Us</a>
            </li>
          </ul>
          <AdmissionModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </nav>
    </header>
  </>
};

export default Header;
