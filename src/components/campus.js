import React from 'react';
import './campus.css';
import campusImg from './../assets/activities/profile.jpeg';
import birthday from './../assets/celebration.jpeg';
import annual from './../assets/activities/function.jpg';
import sports from './../assets/sports.jpeg';
import devotional from './../assets/practice.jpeg';
import exerciseImg from './../assets/excer.jpeg';
import labImg from './../assets/lab.jpeg';
import culturalImg from './../assets/play.jpeg';
import { FaSchool, FaBirthdayCake, FaTrophy, FaPrayingHands, FaFlask, FaDumbbell, FaTheaterMasks, FaStar, FaBuilding } from 'react-icons/fa';

const CampusPage = () => {
  return (
    <div className="infra-container">
      <h2 className="infra-title"><FaSchool className="infra-icon" /> Our Beautiful <strong>Campus</strong></h2>
      <p className="infra-text">
        Our campus is a lively space designed to inspire young minds. We celebrate education with energy, creativity, and care. Here's a glimpse into some memorable moments:
      </p>

      <div className="infra-gallery">
        <div className="infra-card">
          <img src={campusImg} alt="School Campus" />
          <p><FaBuilding color='orange' />Well-maintained green campus.</p>
        </div>
        <div className="infra-card">
          <img src={birthday} alt="Birthday Celebration" />
          <p><FaBirthdayCake color="#ff69b4" /> Birthday celebrations for every child.</p>
        </div>
        <div className="infra-card">
          <img src={annual} alt="Annual Function" />
          <p><FaStar color="#6495ed" /> Colorful annual functions & performances.</p>
        </div>
        <div className="infra-card">
          <img src={sports} alt="Sports Day" />
          <p><FaTrophy color="#f4c542" /> Enthusiastic participation in sports.</p>
        </div>
        <div className="infra-card">
          <img src={devotional} alt="Devotional Tour" />
          <p><FaPrayingHands color="#8a2be2" /> Devotional and cultural tours.</p>
        </div>
        {/* Last 3 cards */}
        <div className="infra-card">
          <img src={exerciseImg} alt="Exercise" />
          <p><FaDumbbell color='#f29d35' />Exercise keeps students active.</p>
        </div>

        <div className="infra-card">
          <img src={labImg} alt="Science Lab" />
          <p><FaFlask color='#38a169' />Hands-on lab experiences spark curiosity.</p>
        </div>

        <div className="infra-card">
          <img src={culturalImg} alt="Cultural Events" />
          <p><FaTheaterMasks color='#9f7aea'/>Cultural events foster creativity.</p>
        </div>
      </div>
    </div>
  );
};

export default CampusPage;
