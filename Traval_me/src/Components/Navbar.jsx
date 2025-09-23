import React, { useState } from "react";
import { Menu, X, Home, Info, Phone } from "lucide-react"; 
import { HiMap } from "react-icons/hi";
import { LuPackageSearch } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home", icon: <Home size={18} /> },
    { href: "#destinations", label: "Destinations", icon: <HiMap size={18} /> },
    { href: "#packages", label: "Packages", icon: <LuPackageSearch size={18} /> },
    { href: "#about", label: "About", icon: <Info size={18} /> },
    { href: "#contact", label: "Contact", icon: <Phone size={18} /> },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/40 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        >
          TravelGo
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium items-center">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="flex items-center gap-2 hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
                  {link.icon}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Button */}
        <a
          href="#book"
          className="hidden md:inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Book Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/90 backdrop-blur-md shadow-lg px-6 py-4 transform transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="flex items-center gap-2 hover:text-blue-600 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#book"
              className="w-full text-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300 block"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
