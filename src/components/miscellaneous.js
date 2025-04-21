import React from 'react';
import './miscellaneous.css';
import libraryImg from './../assets/library.jpeg';
import republicDay from './../assets/republicday.jpeg';
import sportsDay from './../assets/sportsdaygroup.jpeg';
import eLearning from './../assets/elearning.jpeg';
import religiousevents from './../assets/religiousevent.jpeg';

const events = [
  {
    title: 'Library',
    description: 'Our school library offers a vast collection of books, e-resources, and a peaceful reading environment for students.',
    image: libraryImg,
  },
  {
    title: 'Republic Day Celebrations',
    description: 'Our Republic Day celebrations feature flag hoisting, cultural performances, and inspiring speeches.',
    image: republicDay,
  },
  {
    title: 'E-Learning Classes',
    description: 'Our school embraces digital education with interactive e-learning sessions to enhance student engagement.',
    image: eLearning,
  },
  {
    title: 'Sports Events',
    description: 'Annual sports events encourage teamwork, discipline, and physical fitness through a variety of indoor and outdoor games.',
    image: sportsDay,
  },
  {
    title: 'Religious/Cultural Events',
    description: 'We celebrate various religious and cultural festivals to promote inclusivity and cultural understanding.',
    image: religiousevents,
  },
];

const Miscellaneous = () => {
  return (
    <div className="misc-page">
      <h1 className="page-title">Miscellaneous</h1>
      {events.map((event, index) => (
        <div
          key={index}
          className={`event-section ${index % 2 === 0 ? 'bg-light' : 'bg-white'}`}
        >
          <div className={`event-content ${index % 2 !== 0 ? 'reverse' : ''}`}>
                <img
                src={event.image}
                alt={`Image of ${event.title}`}
                className="event-image"
                role="img"
              />
            <div className="event-text">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Miscellaneous;
