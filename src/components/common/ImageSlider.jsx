import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ImageSlider = ({ images, autoPlay = true, autoPlayInterval = 4000, Overlay = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

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
  }, [goToNext, autoPlay, autoPlayInterval]);

  return (
    <section className="relative w-full h-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-none w-full h-[396px] md:h-[60vh] lg:h-screen object-cover relative">
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-full object-cover"
            />
            {Overlay && (
              <div className="absolute lg:bottom-10 md:bottom-20 bottom-14 md:left-10 left-4 bg-gray-800/50 lg:px-10 lg:py-6 md:px-6 md:py-4 px-4 py-2 rounded-xl shadow-lg max-w-[14rem] md:max-w-80 lg:max-w-md">
                <div className="text-base md:text-[1.4rem] lg:text-[1.8rem] lg:leading-9 text-white font-extrabold mb-2 md:mb-4 font-dmSerifDisplay text-center">
                  &quot;Discover more amazing <br /> sights in Tamil Nadu.&quot;
                </div>
                <Link to="/gallery">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white md:text-base text-xs font-bold ml-6 lg:ml-10 md:ml-8 md:py-[0.38rem] lg:py-2 py-[0.35rem] md:px-14 lg:px-20 px-10 rounded">
                    Explore
                  </button>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-[47%] max-sm:top-[45%] left-5 md:left-10 transform -translate-y-1/2 text-white text-2xl px-3 py-1"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute top-[47%] max-sm:top-[45%] right-5 md:right-10 transform -translate-y-1/2 text-white text-2xl"
      >
        ❯
      </button>
      <div className="absolute lg:bottom-6 md:bottom-10 max-sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-[0.35rem] rounded-sm ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  autoPlay: PropTypes.bool,
  autoPlayInterval: PropTypes.number,
  Overlay: PropTypes.bool,
};

export default ImageSlider;