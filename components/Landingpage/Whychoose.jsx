"use client";

import Image from "next/image";
import React from "react";
const IconWrapper = ({ children }) => (
  <div className="w-16 h-16 min-w-[64px] min-h-[64px] rounded-2xl border border-[#8FD0F9]/60 flex items-center justify-center bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_-5px_#03a9f4]/60">
    {children}
  </div>
);

const DiamondIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2L2 9l10 13 10-13L12 2z"
      stroke="#03a9f4"
      strokeWidth="1.6"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const StarIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2l2.6 6.6L21 10l-5 3.8L17.2 21 12 17.8 6.8 21 8 13.8 3 10l6.4-1.4L12 2z"
      stroke="#03a9f4"
      strokeWidth="1.6"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#03a9f4" strokeWidth="1.6" />
    <path
      d="M12 7v5l3 2"
      stroke="#03a9f4"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function WhyChooseUs() {
  return (
    <section
    
      className="relative bg-white w-full py-20 overflow-hidden "
    >
      {/* Soft overlay & glow */}
      <div className="absolute inset-0 bg-white/40"></div>


      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="pr-4 lg:pr-10" data-aos="fade-right">
            <h2 className="text-[42px] sm:text-[46px] leading-tight font-extrabold text-black mb-6">
              Salford’s Commitment to Excellence
            </h2>

            {/* Animated underline */}
            <div className="relative w-28 h-2 bg-[#03a9f4]/30 rounded mb-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#03a9f4] via-[#004AAC] to-[#03a9f4] animate-slide"></div>
            </div>

            {/* FEATURE ITEMS */}
            <div className="space-y-4">
              {[
                {
                  title: "LEADING MANUFACTURER",
                  desc: "With more than 15 years of export experience in the chemical industry.",
                  icon: <DiamondIcon />,
                },
                {
                  title: "STABLE SUPPLY",
                  desc: "A large amount of inventory ensures sufficient supply for customers.",
                  icon: <StarIcon />,
                },
                {
                  title: "FAST DELIVERY",
                  desc: "Efficient logistics and global partners ensure timely delivery.",
                  icon: <ClockIcon />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-6 p-4 rounded-2xl bg-blue-400/10 transition-all duration-500 "
                >
                  <IconWrapper>{item.icon}</IconWrapper>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1f3a44] mb-2 group-hover:text-[#03a9f4] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-black leading-7">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            className="relative flex justify-center lg:justify-end items-start"
            data-aos="fade-left"
          >
            {/* Decorative frame */}
            <div className="hidden md:block absolute -right-8 top-20 w-[520px] h-[420px] bg-[#1B5AA2] rounded-lg shadow-xl opacity-90"></div>

            {/* Main image with overlay animation */}
            <div className="relative mt-10 z-10 w-full max-w-[640px] md:max-w-[600px] lg:max-w-[560px] overflow-hidden rounded-xl shadow-2xl group">
              <Image
                src="/pvc-resin-factory.jpg"
                alt="Plant"
                width={960}
                height={540}
                className="object-cover w-full h-[320px] md:h-[360px] lg:h-[450px] transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-[#03a9f4]/70 to-transparent transition-all duration-700 group-hover:h-full"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Add animation */
<style jsx global>{`
  @keyframes slide {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  .animate-slide {
    animation: slide 3s linear infinite;
  }
`}</style>
