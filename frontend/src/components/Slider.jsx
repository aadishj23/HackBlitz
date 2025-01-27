import React, { useState, useEffect } from "react";

const images = [
  "/src/assets/images/image1.jpg",
    "/src/assets/images/image2.jpg",
    "/src/assets/images/image3.jpg",
    "/src/assets/images/image4.jpg",
    "/src/assets/images/image5.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const Prev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(Next, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="relative w-full h-80 md:h-96 overflow-hidden">
        <h1 className="text-white text-center text-2xl max-w-2xl mx-auto mb-6 p-4">
        GLIMPSES OF PREVIOUS EDITION
      </h1>
      <div
        className="flex transition-transform duration-1000"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 mx-2">
            <div className="w-full h-80 flex justify-center md:h-96">
            <img src={image} alt={`carousel ${index}`} className=" min-w-min h-full object-fill shadow-orange-500 shadow-2xl border-y-4 border-orange-300" />
            </div>
           
          </div>
        ))}
      </div>
      <button
        onClick={Prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={Next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
