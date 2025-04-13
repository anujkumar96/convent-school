import React from 'react';
import './overview.css';

const Overview = () => {
  return (
    <section className="school-overview">
      <div className="container">
        <h2 className="section-title">
          Welcome to <strong>Sunrise Convent School</strong>
        </h2>
        <p className="overview-intro">
          At Sunrise Convent School, we strive to provide a nurturing environment that fosters academic excellence,
          holistic development, and strong moral values. We believe in empowering every student to reach their fullest potential.
        </p>

        <div className="overview-highlights">
          <div className="highlight-box">
            <h3>25+ Years of Excellence</h3>
            <p>Serving the community with quality education and a passion for learning.</p>
          </div>
          <div className="highlight-box">
            <h3>Modern Infrastructure</h3>
            <p>Smart classrooms, science labs, and a digital library to support progressive learning.</p>
          </div>
          <div className="highlight-box">
            <h3>Holistic Growth</h3>
            <p>Focus on academics, sports, arts, and values for all-round development.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
