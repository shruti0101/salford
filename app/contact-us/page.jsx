"use client";
import React from "react";

const Page = () => {
  return (
    <div>
      {/* ===== Banner Section ===== */}
      <div
        className="relative w-full px-8 bg-cover bg-center h-[50vh] md:h-[90vh] flex flex-col items-start justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/whychoosebg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative mt-20 z-10 text-white max-w-4xl">
          <h1 className="text-3xl tracking-wide md:text-7xl px-9 font-extrabold tracking-tight drop-shadow-lg">
            Contact Us
          </h1>
      
        </div>
      </div>

      {/* ===== Contact Section ===== */}
      <section className="bg-[#e6f5ff] py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

          {/* ===== Intro Content (Left Column) ===== */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-extrabold text-[#0047b3]">
              Let's Connect
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              Have questions or want to discuss your project? Fill out the form, 
              and our team of experts will get back to you promptly.  
              We value your partnership and are ready to provide tailored solutions for your business.
            </p>
         
          </div>

          {/* ===== Sticky Form (Right Column) ===== */}
          <div className="relative">
            <div className="lg:sticky lg:top-36">
              <div className="bg-white/80 backdrop-blur-xl border border-white/30 p-8 rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold text-[#0047b3] mb-6 text-center">
                  Get in Touch
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full p-4 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#0047b3]"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full p-4 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#0047b3]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full p-4 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#0047b3]"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-4 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#0047b3]"
                    />
                  </div>

                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full p-4 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#0047b3] resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#0047b3] to-[#0066cc] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:from-[#003a99] hover:to-[#0052a3] transition-all w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Page;
