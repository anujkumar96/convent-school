import React, { useState } from 'react';
import './gallery.css';
import children from'./../assets/children.jpeg'
import play from'./../assets/play.jpeg'
import excercise from'./../assets/excer.jpeg'
import celebration from'./../assets/celebration.jpeg'
import lab from'./../assets/lab.jpeg'
import sports from './../assets/sports.jpeg'
import tour from'./../assets/tour1.jpeg'
import tour2 from'./../assets/tour2.jpeg'


const images = [
  children,
  play,
  excercise,
  celebration,
  lab,
  sports,
  tour,
  tour2
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">
        School <strong>Gallery</strong>
      </h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              onClick={() => setSelectedImage(img)}
              className="gallery-img"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged view" className="lightbox-img" />
            <button className="close-lightbox" onClick={() => setSelectedImage(null)}>
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
