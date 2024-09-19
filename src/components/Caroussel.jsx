// Carousel.js
import React, { useState, useEffect } from "react";
import {assets} from '../assets/assets'

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000); // Change d'image toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Durée de la transition

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative caroussel">
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-1 rounded">
        <img src={assets.back_icon} alt="" width={50} className="cursor-pointer"/>
      </button>
      <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-auto"
        />
      </div>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded">
      <img src={assets.back_icon} alt="" width={50} className="rotate-180 cursor-pointer"/>

      </button>
    </div>
  );
};

export default Carousel;