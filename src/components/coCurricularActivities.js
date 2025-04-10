import React from 'react';
import './coCurricularActivities.css';
import { FaPaintBrush, FaMusic, FaRunning, FaTheaterMasks } from 'react-icons/fa';

const CoCurricularActivities = () => {
  return (
    <section className="co-curricular-section">
      <div className="container">
        <h2 className="section-title">Our Co-Curricular <strong>Activities</strong></h2>

        <div className="co-curricular-grid">
          <div className="co-curricular-card">
            <FaPaintBrush className="co-curricular-icon" style={{ color: '#e76f51' }} /> {/* Art - coral/orange */}
            <h3>Art & Craft</h3>
            <p>
              Our students are encouraged to explore their artistic talents in various mediums. From painting to sculpture,
              we nurture creativity and imagination through hands-on experiences.
            </p>
          </div>
          <div className="co-curricular-card">
            <FaMusic className="co-curricular-icon" style={{ color: '#3a86ff' }} /> {/* Music - blue */}
            <h3>Music & Dance</h3>
            <p>
              The school offers music and dance programs to help students discover their rhythm. Whether it's classical music,
              modern dance, or choir, we encourage expression through sound and movement.
            </p>
          </div>
          <div className="co-curricular-card">
            <FaRunning className="co-curricular-icon" style={{ color: '#2a9d8f' }} /> {/* Sports - green/teal */}
            <h3>Sports & Athletics</h3>
            <p>
              Physical fitness and sportsmanship are important aspects of a well-rounded education. Our sports facilities include
              various indoor and outdoor games, from football to basketball, running, and more.
            </p>
          </div>
          <div className="co-curricular-card">
            <FaTheaterMasks className="co-curricular-icon" style={{ color: '#9c27b0' }} /> {/* Theater - purple */}
            <h3>Drama & Theater</h3>
            <p>
              Drama classes allow students to express themselves and enhance their communication skills. Through plays, skits,
              and improvisation, students build confidence and teamwork.
            </p>
          </div>
        </div>

        <div className="additional-activities-list">
          <h3>Additional Activities</h3>
          <div className="activities-grid">
            <div className="activity-card">✔ Debate Club</div>
            <div className="activity-card">✔ School Magazine</div>
            <div className="activity-card">✔ Public Speaking</div>
            <div className="activity-card">✔ Gardening Club</div>
            <div className="activity-card">✔ Science Exhibitions</div>
            <div className="activity-card">✔ Outdoor Activities</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoCurricularActivities;
