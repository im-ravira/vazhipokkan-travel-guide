import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ImageSlider = ({ images, autoPlay = true, autoPlayInterval = 3000, Overlay = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        goToNext();
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [currentIndex, autoPlay, autoPlayInterval]);

  return (
    <div className="relative w-full md:h-screen h-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-none w-full md:h-screen h-80  relative">
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-full  object-cover"
            />
            {Overlay && (
              <div className="absolute md:bottom-10 bottom-1 md:left-10 left-1 bg-transparent  md:bg-gray-800 md:bg-opacity-75 md:p-6 p-2 rounded-lg shadow-lg max-w-xs">
                <h2 className="md:text-2xl text-base text-white font-extrabold md:mb-4 mb-1 mr-24 md:mr-0 md:block">"Discover more amazing sights and experiences."</h2>
                <Link to="/gallery"><button className="bg-orange-500 hover:bg-orange-600 text-white md:text-sm text-xs font-bold ml-2 md:ml-0 md:py-2 py-1 md:px-6 px-3 rounded">
                 Explore
                </button></Link>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white text-2xl px-3 py-1"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white text-2xl"
      >
        ❯
      </button>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-1 rounded-sm ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;


