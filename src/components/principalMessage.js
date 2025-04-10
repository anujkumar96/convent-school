import React from 'react'
import principalImage from'./../assets/principal.jpeg'

const PrincipalMessage = () => {
  return (
    <section className="toppers-section">
    <div className="container">
      <h2 className="section-title">
        Our School Management <strong>Lead</strong>
      </h2>
  
      <div className="principal-message">
        <div className="principal-photo">
          <img
            src={principalImage}
            alt="Mrs. Sangeeta Sharma"
          />
        </div>
  
        <div className="principal-text">
          <h3>Mrs. Sangeeta Sharma</h3>
          <h4>Principal's Message</h4>
          <p>Dear Students, Parents, and Well-Wishers,</p>
          <p>
            At Sunrise Convent School, we believe that education is a shared
            commitment between dedicated teachers, motivated students, and
            supportive parents. Our aim is not only to impart knowledge but also
            to instill values, discipline, and a sense of responsibility.
          </p>
          <p>
            We nurture curiosity, encourage creativity, and celebrate growth in
            all forms. I am proud to lead a team that works tirelessly to ensure
            each child reaches their full potential in a safe and inspiring
            environment.
          </p>
          <p>
            Let us work together to empower our students to dream big, act with
            integrity, and shine with confidence.
          </p>
        </div>
      </div>
    </div>
  </section>
)
}

export default PrincipalMessage