import React from "react";

const DiamondImage = ({ src, alt }) => {
  return (
    <div className="relative w-full h-full sm:w-56 md:w-64 md:h-64 rotate-45 overflow-hidden rounded-3xl border-2 border-teal-400 shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-[15deg] hover:shadow-2xl hover:shadow-teal-300/50">
     
      <img
        src={src}
        alt={alt}
        className="absolute top-1/2 left-1/2 w-[150%] h-[150%] object-cover transform -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-xl transition-transform duration-500 ease-in-out hover:scale-110"
      />

 
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 rounded-3xl pointer-events-none"></div>

      <div className="absolute inset-0 rounded-3xl shadow-[0_0_30px_rgba(72,187,120,0.4)] opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default DiamondImage;
