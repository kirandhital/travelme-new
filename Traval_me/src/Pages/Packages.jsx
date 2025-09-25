import React, { useState, useMemo } from "react";
import Navbar from "../Components/Navbar";
import { MapPin, Calendar, Star, Search } from "lucide-react";
import { motion } from "framer-motion";

// ✅ Replace these with your real images
import mo1 from "../assets/Ghandruk.jpg";
import mo2 from "../assets/mout.jpeg";
import mo3 from "../assets/mout.jpg";
import mo4 from "../assets/travel-bg.jpg";

export default function Packages() {
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);

  const packages = [
    {
      id: 1,
      title: "Annapurna Base Camp Trek",
      price: 650,
      days: 12,
      location: "Annapurna Region",
      rating: 4.8,
      image: mo1,
      short: "Trek through terraced villages and alpine scenery.",
    },
    {
      id: 2,
      title: "Everest Panorama Flight + Lukla",
      price: 480,
      days: 3,
      location: "Khumbu",
      rating: 4.7,
      image: mo2,
      short: "Short but spectacular — close-up views of Everest.",
    },
    {
      id: 3,
      title: "Langtang Valley Explorer",
      price: 520,
      days: 8,
      location: "Langtang",
      rating: 4.6,
      image: mo3,
      short: "Wildflowers, high passes and Tamang villages.",
    },
    {
      id: 4,
      title: "Cultural Kathmandu & Pokhara",
      price: 350,
      days: 5,
      location: "Kathmandu & Pokhara",
      rating: 4.5,
      image: mo4,
      short: "Temples, lakeside cafes and short scenic hikes.",
    },
  ];

  // Filtering trips
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return packages.filter((p) => {
      const matchesQuery =
        q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q);
      const matchesPrice = p.price >= minPrice && p.price <= maxPrice;
      return matchesQuery && matchesPrice;
    });
  }, [query, minPrice, maxPrice]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero / Search */}
        <section className="mb-10">
          <div className="rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg p-6 grid gap-4 sm:grid-cols-3 items-center">
            <div className="sm:col-span-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold">
                Explore Nepal — Handpicked Trips
              </h1>
              <p className="text-gray-600 mt-2">
                From Himalayan treks to cultural escapes — find the perfect
                itinerary.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative w-full">
                <Search className="absolute left-3 top-3 opacity-60" size={18} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search trip or location (e.g. Annapurna, Everest)"
                  className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
              </div>
            </div>
          </div>

          {/* Price Filter */}
          <div className="mt-4 flex gap-3 items-center text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <label className="font-medium">Price</label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value || 0))}
                className="w-24 px-2 py-1 rounded border"
                placeholder="min"
              />
              <span className="mx-1">—</span>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value || 2000))}
                className="w-24 px-2 py-1 rounded border"
                placeholder="max"
              />
            </div>

            <div className="ml-auto text-gray-500">
              {filtered.length} trips found
            </div>
          </div>
        </section>

        {/* Trip Cards */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((pkg) => (
              <motion.article
                key={pkg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-100"
              >
                <div className="relative h-56">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium flex items-center gap-2">
                    <MapPin size={14} />
                    <span>{pkg.location}</span>
                  </div>
                </div>

                <div className="p-5 flex flex-col gap-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{pkg.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{pkg.short}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">${pkg.price}</div>
                      <div className="text-xs text-gray-500">per person</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{pkg.days} days</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={14} />
                        <span>{pkg.rating}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 rounded-lg bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 transition">
                        Book
                      </button>
                      <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm hover:shadow">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
