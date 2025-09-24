import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import DiamondImage from "../Components/DiamondImage";
import moutainImg from "../assets/Hmal.jpg";
import Himal from "../assets/mout.jpeg";
import Upper from "../assets/upper.jpeg";
import Ghandruk from "../assets/Ghandruk.jpg";
const attractions = [
  {
    img: moutainImg,
    text: "Highest mountain on Earth, located in Himalayas, extreme cold, challenging.",
    alt: "Mt-everest",
  },
  {
    img: Himal,
    text: "Glacier: Slow-moving ice mass, shapes landscapes, melts, forms rivers, cold...",
    alt: "Mount  of glacier",
    
  },
  {
    img: Upper,
    text: "Explore More for us ",
    alt: "island",
  },
  {
    img: Ghandruk,
    text: "Hike nepal  mountains...",
    alt: "Volcanic mountain in nepal",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="bg-white w-full">
        <div className="min-h-screen text-black flex flex-col items-center py-16 px-6 sm:px-12 font-[Inter]">
          <h2 className="text-teal-400 font-light text-xl sm:text-2xl mb-2 italic">
            Why visit?
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-16 text-center leading-tight tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-sky-500">
            Most Attractive Places <br /> in Nepal
          </h1>

          <div className="relative w-full max-w-6xl">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-teal-400 to-sky-500 rounded-full opacity-50"></div>

            <div className="space-y-32 relative z-10">
              {attractions.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 relative ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-teal-400 rounded-full border-2 border-white z-20 shadow-lg animate-pulse"></div>

                  <div
                    className={`flex-2 flex justify-center ${
                      index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    <DiamondImage src={item.img} alt={item.alt} />
                  </div>

                
                  <p
                    className={`flex-1 max-w-lg text-gray-700 text-lg md:text-xl leading-relaxed ${
                      index % 2 === 0
                        ? "text-center md:text-left"
                        : "text-center md:text-right"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
