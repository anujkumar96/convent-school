import React from 'react';
import './laboratory.css';
import labImg1 from './../assets/lab2.png';
import labImg2 from './../assets/lab.jpeg'; 

const LaboratoriesPage = () => {
  return (
    <div className="lab-container">
      <h2 className="lab-title">Our Well-Equipped <strong>Laboratories</strong></h2>
      <p className="lab-description">
        Our modern labs provide hands-on experiences that engage students in scientific learning, encouraging exploration and innovation.
      </p>

      <div className="lab-gallery">
        {/* First Image */}
        <div className="lab-card">
          <img src={labImg1} alt="Laboratory 1" />
          <div className="lab-content">
            <p>Our labs offer a dynamic space for conducting a wide range of scientific experiments, fostering creativity and problem-solving skills.</p>
          </div>
        </div>

        {/* Second Image */}
        <div className="lab-card">
          <img src={labImg2} alt="Laboratory 2" />
          <div className="lab-content">
            <p>The labs are equipped with state-of-the-art tools to help students engage in practical learning, preparing them for real-world challenges.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaboratoriesPage;
