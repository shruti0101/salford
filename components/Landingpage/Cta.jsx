"use client";

import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <section
      style={{ backgroundImage: "url(/about/cta.png)" }}
      className="relative bg-cover bg-center bg-fixed text-white py-20 px-6 overflow-hidden"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Decorative Element */}
      <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-blue-400/20 rotate-45 rounded-3xl blur-3xl z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
          Connect With Us
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-[#E6F0FF]">
          Partner with a Global Leader Today
        </h3>

        <p className="text-lg md:text-xl leading-relaxed max-w-4xl text-gray-100">
          If you are seeking a Titanium Dioxide Manufacturer in Germany with the credibility
          of a trusted titanium dioxide trader across the world,{" "}
          <span className="font-semibold text-white">Salford</span> is your ideal partner.
          <br />
          Contact our team today to discuss your requirements, request product samples,
          or explore strategic partnership opportunities.
          <br />
          Together, let’s build a sustainable, brighter future for the global industry—
          powered by world-class titanium dioxide and the trusted partnership of{" "}
          <span className="font-semibold text-white">Salford</span>.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-4 px-8 py-4 rounded-full bg-gradient-to-r from-[#8AB0C2] to-[#0082C8] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-blue-400/50 transition-transform duration-300"
        >
          Contact Our Team
        </Link>
      </div>
    </section>
  );
};

export default CTA;
