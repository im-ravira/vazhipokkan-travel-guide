import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    
    { name: "Marina Beach", src: "./src/assets/gallery/marina.webp" },
    { name: "Bragadeeshwarar Temple", src: "./src/assets/gallery/Bragadeeshwarar-temple.webp" },
    { name: "Hogenakkal Falls", src: "./src/assets/gallery/Hogenakkal.webp" },
    { name: "Mukurthi National Park", src: "./src/assets/gallery/Mukurthi-national-park.webp" },
    { name: "Ooty Hills", src: "./src/assets/gallery/Ooty.webp" },
  ];

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
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentIndex]); // Re-run the effect when currentIndex changes

  return (
    <div className="relative w-full md:h-screen h-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-none w-full h-screen">
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white text-2xl  px-3 py-1"
      >
        ❮
      </button>
      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white text-2xl"
      >
        ❯
      </button>
      {/* Dashes */}
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




