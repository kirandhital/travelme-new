import React from "react";
import Navbar from "../Components/Navbar";
import { Globe, Hotel, Car, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import bgImage from "../assets/travel-bg.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <section
        className="min-h-screen w-full flex items-center justify-center px-6 py-12 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-5xl w-full bg-white/20 backdrop-blur-lg shadow-2xl rounded-2xl p-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
            Travel Agency Services
          </h1>
          <p className="text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            At <span className="font-semibold text-teal-200">Your Travel Partner</span>, we believe travel is more than just reaching a destination – it’s about creating unforgettable memories. 
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/packages"
              className="flex flex-col items-center p-6 rounded-xl bg-white/20 backdrop-blur-md hover:bg-white/30 transition"
            >
              <Globe className="w-10 h-10 text-teal-200 mb-3" />
              <h3 className="text-lg font-semibold">Customized Packages</h3>
              <p className="text-sm mt-2">
                Tailor-made trips to match your interests and budget.
              </p>
            </Link>

            <Link
              to="/packages"
              className="flex flex-col items-center p-6 rounded-xl bg-white/20 backdrop-blur-md hover:bg-white/30 transition"
            >
              <Hotel className="w-10 h-10 text-teal-200 mb-3" />
              <h3 className="text-lg font-semibold">Hotel & Resort Booking</h3>
              <p className="text-sm mt-2">
                Comfortable stays with the best deals and top-rated options.
              </p>
            </Link>

            <Link
              to="/packages"
              className="flex flex-col items-center p-6 rounded-xl bg-white/20 backdrop-blur-md hover:bg-white/30 transition"
            >
              <Car className="w-10 h-10 text-teal-200 mb-3" />
              <h3 className="text-lg font-semibold">Transport & Tours</h3>
              <p className="text-sm mt-2">
                Easy transport and guided tours for hassle-free travel.
              </p>
            </Link>

            <Link
              to="/contact"
              className="flex flex-col items-center p-6 rounded-xl bg-white/20 backdrop-blur-md hover:bg-white/30 transition"
            >
              <Clock className="w-10 h-10 text-teal-200 mb-3" />
              <h3 className="text-lg font-semibold">24/7 Support</h3>
              <p className="text-sm mt-2">
                Reliable support at every step of your journey.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
