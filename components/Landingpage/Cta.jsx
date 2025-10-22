"use client";

import React from "react";

const CTA = () => {
  return (
    <section
      style={{ backgroundImage: "url(/about/cta.png)" }}
      className="relative  text-white py-15 bg-fixed bg-center bg-cover overflow-hidden"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Decorative Zigzag Overlay */}
      <div className="absolute -top-20 -right-40 w-[400px] h-[400px] bg-yellow-300/10 rotate-45 rounded-xl z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-12 px-4">
        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-serif md:text-5xl font-bold leading-tight">
            Connect With Us
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold">
            Partner with a Global Leader Today
          </h3>
          <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl">
If you are seeking a Titanium Dioxide Manufacturer in Germany with the credibility of a trusted titanium dioxide trader in all over world, Salford is your ideal partner.


            Contact our team today to discuss your requirements, request product samples, or explore strategic partnership opportunities.
            <br />
            Together, let’s build a sustainable, brighter future for Global industry—powered by world-class titanium dioxide and the trusted partnership of <span className="font-semibold">Salford</span>.

         
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-full shadow-2xl hover:scale-105 hover:shadow-blue-300 transition-transform duration-300"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
