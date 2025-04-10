import React from 'react';
import labImg from './../assets/lab.jpeg';
import sportsImg from './../assets/sports.jpeg';
import playImg from './../assets/play.jpeg';
import schoolImage from './../assets/school-image.jpg'
import children from './../assets/children.jpeg'
import boating from './../assets/tour2.jpeg'
import learningActivities from './../assets/lab.jpeg'
import sports from './../assets/activities/sports2.jpg'

const MainPage = () => {
  const facilities = [
    {
      image: labImg,
      label: 'Laboratory',
    },
    {
      image: sportsImg,
      label: 'Sports',
    },
    {
      image: playImg,
      label: 'Cultural Events',
    },
  ];

  return (
    <>
      <div className="hero-slider">
        <div className="slide active">
          <img
            src={schoolImage}
            alt="Sunrise Convent School Building"
          />
          <div className="slide-content">
            <h2>Welcome to Sunrise Convent School</h2>
            <p>Nurturing young minds to build a brighter future</p>
          </div>
        </div>
      </div>

      <div className="announcement-bar">
        <div className="container">
          <marquee behavior="scroll" direction="left" scrollAmount="5">
            <strong>
              Admission Open (Session 2025-26) : For Classes Nursery to XII.
              Contact: +91 63977 65965
            </strong>
          </marquee>
        </div>
      </div>

      <section className="about-section">
        <div className="container">
          <h2 className="section-title">
            We are Top <strong>Education Platform</strong> in Agra
          </h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                The campus has large open spaces as well as appropriately
                planned buildings, providing ample space for outdoor as well as
                indoor activities...
              </p>
              <p>
                Our central monitoring systems make the campus totally safe...
              </p>
              <p>
                The facilities at Sunrise Convent School have carefully been
                designed...
              </p>
            </div>
            <div className="about-image">
              <img
                src={children}
                alt="Students at Sunrise Convent School"
              />
            </div>
          </div>
          <div className="experience">
            <h3>We have 15+ years Experience in Education</h3>
          </div>
        </div>
      </section>

      {/* <section className="video-gallery">
        <div className="container">
          <h2 className="section-title">Video Gallery</h2>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/videoseries"
              title="School Videos"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section> */}

      {/* <section className="news-events">
        <div className="container">
          <div className="news-box">
            <h3>Upcoming Events/Latest News</h3>
            <div className="news-item">
              <p>
                <strong>
                  Admission Open (Session 2025-26) : For Classes Nursery to XII.
                </strong>
              </p>
            </div>
            <div className="news-item">
              <p>
                <strong>Annual Sports Day - Coming Soon</strong>
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="stats-counter">
        <div className="container">
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Highly Qualified Faculty</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">800+</div>
            <div className="stat-label">Happy Parents</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">12+</div>
            <div className="stat-label">Classrooms</div>
          </div>
        </div>
      </section>

      <section className="recent-events">
        <div className="container">
          <h2 className="section-title">Recent Events</h2>
          <div className="events-grid">
            <div className="event-card">
              <img
                src={boating}
                alt="Educational Tour"
              />
              <h3>Educational Tour to Historical Sites</h3>
            </div>
            <div className="event-card">
              <img
                src={learningActivities}
                alt="Learning Activities"
              />
              <h3>Interactive Learning Activities</h3>
            </div>
            <div className="event-card">
              <img
                src={sports}
                alt="Computer Lab"
              />
              <h3>Sports day activities</h3>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="curriculum-section">
        <div className="container">
          <h2 className="section-title">
            Our <strong>Curriculum</strong>
          </h2>
          <div className="curriculum-grid">
            <div className="curriculum-card">
              <img
                src="https://ei.study/wp-content/uploads/elementor/thumbs/4-1-qdcrno8zblz2tck9z8mvv0xz6in0c23ze9u49ht9gw.jpg"
                alt="Primary Section"
              />
              <h3>Pre-Primary Section</h3>
              <p>Pre-Primary section includes Nursery, LKG & UKG...</p>
              <span className="grade">Nursery to UKG</span>
            </div>
            <div className="curriculum-card">
              <img
                src="https://c8.alamy.com/comp/K6P0YM/indian-group-high-school-students-studying-in-classroom-education-K6P0YM.jpg"
                alt="Primary & Junior Section"
              />
              <h3>Primary & Junior Section</h3>
              <p>After graduating from the pre-primary...</p>
              <span className="grade">1st to 8th</span>
            </div>
            <div className="curriculum-card">
              <img
                src="https://www.microsoft.com/en-us/research/wp-content/uploads/2023/10/VeLLUM-BlogHeroFeature-1400x788-2.jpg"
                alt="Higher/Secondary Section"
              />
              <h3>Higher/Secondary Section</h3>
              <p>The smooth transition from childhood to adolescence...</p>
              <span className="grade">9th to 12th</span>
            </div>
          </div>
        </div>
      </section> */}

      <section className="facilities-section">
            <div className="container">
              <h2 className="section-title">
                Our <strong>Facilities</strong>
              </h2>
              <div className="facilities-grid">
                {facilities.map((item, idx) => (
                  <div className="facility-card" key={idx}>
                    <div className="facility-image">
                      <img src={item.image} alt={item.label} />
                    </div>
                    <h3>{item.label}</h3>
                   </div>
                ))}
              </div>
            </div>
          </section>

    </>
  );
};

export default MainPage;
