import React from 'react';
import './overview.css';
import photoSession from './../assets/photosession.jpeg'

const Overview = () => {
  return (
    <>
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

      {/* Memoirs Section */}
      <section
        style={{
          padding: "40px 20px",
          backgroundColor: "#f9f9f9"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "20px",
            fontFamily: "'Segoe UI', sans-serif"
          }}
        >
          School Memoirs 📸
        </h2>
        <div
          style={{
            maxWidth: "100%",
            overflow: "hidden",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}
        >
          <img
            src={photoSession} // update the path if needed
            alt="Class Photo Session"
            style={{
              width: "100%",
              height: "auto",
              display: "block"
            }}
          />
        </div>
        <p
          style={{
            textAlign: "center",
            marginTop: "15px",
            fontSize: "1rem",
            color: "#555",
            marginBottom:'20px'
          }}
        >
          A timeless capture from our Class Photo Day – celebrating unity, smiles, and memories that last a lifetime.
        </p>
      </section>
    </>
  );
};

export default Overview;
