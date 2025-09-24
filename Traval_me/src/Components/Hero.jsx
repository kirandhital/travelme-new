import React, { useState, useEffect } from "react";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

const Hero = () => {
  const slides = [
    {
      url: "src/assets/mout.jpg",
      title: "ABC",
      subtitle: "Complete Your Dream.",
    },
    {
      url: "src/assets/Hmal.jpg",
      title: "Mt. Everest",
      subtitle: "Let’s Visit.",
    },
    {
      url: "src/assets/Ghandruk.jpg",
      title: "Feel the Travel",
      subtitle: "Enjoy Your Life.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 sec per slide
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-12 px-4 relative group overflow-hidden">
      {/* Background Image */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-1000 shadow-2xl relative transition-all ease-in-out"
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 rounded-2xl"></div>

        {/* Text & Buttons */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-300 animate-fadeIn">
            {slides[currentIndex].title}
          </h1>
          <p className="text-lg md:text-2xl mb-6 drop-shadow-md text-sky-300 animate-fadeIn delay-200">
            {slides[currentIndex].subtitle}
          </p>
          <div className="flex justify-center gap-4">
           
            <button className="bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 shadow-lg">
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <div
        onClick={prevSlide}
        className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-5 text-4xl text-white bg-black/30 p-2 rounded-full cursor-pointer hover:bg-black/50 transition-all"
      >
        <MdKeyboardDoubleArrowLeft size={30} />
      </div>

      {/* Right Arrow */}
      <div
        onClick={nextSlide}
        className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 right-5 text-4xl text-white bg-black/30 p-2 rounded-full cursor-pointer hover:bg-black/50 transition-all"
      >
        <MdOutlineKeyboardDoubleArrowRight size={30} />
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer h-3 w-3 rounded-full transition-all duration-500 ${
              index === currentIndex ? "bg-white scale-125" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
