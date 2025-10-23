"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const industries = [
  { image: "/industry/1.jpg", name: "Agriculture" },
  { image: "/industry/3.jpeg", name: "Oil & Gas Industry" },
  { image: "/industry/4.png", name: "Plastics & Polymers" },
  { image: "/industry/5.jpg", name: "Building And Homes" },
  { image: "/industry/8.jpeg", name: "Laminates" },
  { image: "/industry/6.jpg", name: "Medical/Personal Care" },
  { image: "/industry/7.jpg", name: "Footwear & Apparel" },
];

export default function IndustriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2); // default desktop value

  // Handle responsiveness safely on the client
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(2);
    };

    updateVisibleCount(); // Run once on mount
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + visibleCount >= industries.length ? 0 : prev + visibleCount
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [visibleCount]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? industries.length - visibleCount : prev - visibleCount
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + visibleCount >= industries.length ? 0 : prev + visibleCount
    );
  };

  return (
    <section className="relative bg-blue-400/10 py-20 overflow-hidden">
      <div className="relative w-full mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl mb-3 font-extrabold text-black tracking-tight leading-snug">
              Industries We Serve
            </h2>
            <p className="text-black mt-2 text-base sm:text-lg max-w-lg">
              Delivering reliable solutions across diverse industries with
              unmatched quality and expertise.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 self-start md:self-auto">
            <button
              onClick={handlePrev}
              className="p-2 sm:p-3 rounded-full bg-black border border-black text-white hover:bg-black hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 sm:p-3 rounded-full bg-black border border-black text-white hover:bg-black hover:scale-110 transition-all duration-300"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="relative mt-10 overflow-hidden px-2 sm:px-9">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.3,1)]"
            style={{
              transform: `translateX(-${
                (currentIndex / industries.length) * 100
              }%)`,
            }}
          >
            {industries.map((item, index) => (
              <div
                key={index}
                className="relative w-[90%] sm:w-1/2 md:w-1/4 h-56 sm:h-64 md:h-72 flex-shrink-0 group overflow-hidden rounded-xl mx-auto sm:mx-1"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                {/* Sliding Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#03a9f4]/90 via-[#007bbd]/80 to-[#012b4a]/90 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-700 ease-in-out flex items-center justify-center">
                  <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold tracking-wide uppercase text-center px-3">
                    {item.name}
                  </h3>
                </div>

                {/* Subtle bottom shadow */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Glow border */}
                <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-[#00e5ff]/40 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
