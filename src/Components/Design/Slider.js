import React, { useState } from 'react';
import  "./slider.css";

const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  
  return (
    <div className="slideshow">
      <button className="grayButton" onClick={prevSlide}>
        Show Next Image
      </button>
      <p>Click on the "show next image" button to see all images in slideshow</p>
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
    </div>
  );
};

export default Slideshow;
