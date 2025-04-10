import React from 'react';
import './sports.css';
import { FaFootballBall } from 'react-icons/fa';
import { FaBasketballBall } from 'react-icons/fa';
import { FaBaseballBall } from 'react-icons/fa';
import { GiBadmintonRacket } from 'react-icons/gi';
import { GiTennisRacket } from 'react-icons/gi'; // Replaces missing GiBadmintonRacket


const Sports = () => {
  const sports = [
    {
      name: 'Football',
      icon: <FaFootballBall size={50} color="#4CAF50" />, // Green
      description: 'Football is one of the most popular sports at Sunrise Convent School, with a dedicated team and a spacious field.',
    },
    {
      name: 'Basketball',
      icon: <FaBasketballBall size={50} color="#FF9800" />, // Orange
      description: 'We have a state-of-the-art basketball court. Our students compete regularly in district and state-level tournaments.',
    },
    {
      name: 'Cricket',
      icon: <FaBaseballBall size={50} color="#2196F3" />, // Blue
      description: 'Our cricket team is one of the best in the region, with many players having represented the district.',
    },
    {
      name: 'Badminton',
      icon: <GiTennisRacket size={50} color="#9C27B0" />, // Purple
      description: 'The badminton courts at Sunrise Convent School provide students with an excellent platform to improve their skills.',
    },
  ];

  return (
    <div className="sports-section">
      <h2>Sports at <strong>Sunrise Convent School</strong></h2>
      <p>Explore the various sports we offer at our school.</p>
      
      <div className="sports-grid">
        {sports.map((sport, index) => (
          <div key={index} className="sport-card">
            <div className="sport-icon">{sport.icon}</div>
            <h3>{sport.name}</h3>
            <p>{sport.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;
