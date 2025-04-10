import React from 'react';
import { FaBullseye, FaEye, FaHeart, FaUsers, FaGraduationCap } from 'react-icons/fa';
import './mission.css';

const MissionVision = () => {
  return (
    <section className="mission-vision-section">
      <div className="container">
        <h2 className="section-title">Our <strong>Mission</strong> & <strong>Vision</strong></h2>

        <div className="mv-grid">
  <div className="mv-card">
    <FaBullseye className="mv-icon" style={{ color: '#f4a261' }} /> {/* orange-ish for enthusiasm */}
    <h3>Our Mission</h3>
    <p>
      To foster holistic development through quality education, moral values, and innovation. 
      We aim to create a student-centric learning environment where academic excellence, creativity, 
      and personal integrity are nurtured.
    </p>
  </div>

  <div className="mv-card">
    <FaEye className="mv-icon" style={{ color: '#457b9d' }} />
    <h3>Our Vision</h3>
    <p>
      To empower students to become compassionate, confident, and competent individuals. 
      We envision our school as a place where future leaders are shaped through curiosity, 
      collaboration, and continuous learning.
    </p>
  </div>

  <div className="mv-card">
    <FaGraduationCap className="mv-icon" style={{ color: '#2a9d8f' }} />
    <h3>Our Aim</h3>
    <p>
      To inspire a love for learning and instill a sense of responsibility in every student, 
      guiding them to grow intellectually, socially, and emotionally while contributing 
      positively to society.
    </p>
  </div>
</div>

<h2 className="section-title sub-title">Our <strong>Core Values</strong></h2>
<div className="mv-grid">
  <div className="mv-card">
    <FaHeart className="mv-icon" style={{ color: '#e63946' }} />
    <h3>Integrity & Respect</h3>
    <p>
      We believe in nurturing respect for self and others, honesty in action, and ethical decision-making.
    </p>
  </div>
  <div className="mv-card">
    <FaUsers className="mv-icon" style={{ color: '#6a4c93' }} /> {/* deep purple for community & unity */}
    <h3>Community & Teamwork</h3>
    <p>
      We encourage a sense of belonging, teamwork, and contribution toward a peaceful and inclusive community.
    </p>
  </div>
  <div className="mv-card">
    <FaGraduationCap className="mv-icon" style={{ color: '#1d3557' }} /> {/* strong blue for learning */}
    <h3>Lifelong Learning</h3>
    <p>
      Education doesn’t end in the classroom. We prepare students to be curious, analytical, and always learning.
    </p>
  </div>
</div>


        <h2 className="section-title sub-title">Our <strong>Objectives</strong></h2>
        <ul className="mv-list">
          <li>✔ Deliver inclusive, value-based education.</li>
          <li>✔ Promote critical thinking and independent learning.</li>
          <li>✔ Build self-discipline and leadership skills.</li>
          <li>✔ Integrate technology with traditional teaching methodologies.</li>
          <li>✔ Ensure student safety, mental wellness, and emotional growth.</li>
        </ul>
      </div>
    </section>
  );
};

export default MissionVision;
