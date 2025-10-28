"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const tabs = [
  {
    id: 1,
    title: "Driving World’s Industrial Growth",
    description: `Salford is dedicated to supporting World rapidly growing industrial landscape by ensuring reliable access to premium titanium dioxide (TiO₂). As a foreign Manufacturing  partner, we understand the unique challenges and opportunities in the Global market. Our goal is to provide businesses with a consistent supply of world-class TiO₂, helping them meet international standards, enhance product quality, and stay competitive in a dynamic economy.
We focus on creating value for Global industries through a combination of expertise, service, and reliability:`,
    points: [
      "Timely Deliveries – Efficient logistics and inventory management ensure clients receive materials when they need them.",
      "Tailored Solutions – Flexible grades, packaging, and volumes to match specific industry requirements.",
      "Local Support with Global Standards – Technical assistance for optimal TiO₂ usage, compliant with international specifications.",
      "Strengthening Partnerships – Building long-term relationships across all over world.",
    ],
    image: "/pigment-wave-1.webp",
  },
  {
    id: 2,
    title: "Sustainability and Responsibility",
    description: `At Salford, we recognize that responsible business practices are essential for long-term growth and trust. As a foreign Manufacturing  partner in all over world, we are committed to ensuring that our titanium dioxide (TiO₂) is sourced, handled, and delivered in ways that protect the environment, ensure safety, and meet global compliance standards. Sustainability is not just a policy—it is an integral part of how we operate across all industries we serve.`,
    points: [
      "Eco-Friendly Sourcing – Partnering with manufacturers who minimize ecological footprint.",
      "Regulatory Compliance – Adhering to REACH, FDA, ISO, and global regulations.",
      "Safe Handling & Transport – Shipments managed with strict safety protocols.",
      "Promoting Responsible Applications – Guidance on safe TiO₂ usage.",
    ],
    image: "/pigment-wave-2.webp",
  },
  {
    id: 3,
    title: "Building Long-Term Partnerships",
    description: `At Salford, our mission goes beyond supplying titanium dioxide (TiO₂); we aim to establish lasting partnerships with Global industries. We believe that strong, long-term relationships are built on trust, reliability, and mutual growth. By working closely with our clients, we help them navigate market challenges, plan for the future, and maintain a consistent supply of high-quality TiO₂ for their operations.
We focus on fostering partnerships through several key initiatives:`,
    points: [
      "Collaborative Approach – Tailoring solutions to industry needs.",
      "Reliable Supply – Consistent availability in all markets.",
      "Technical Support – Guidance on applications and process optimization.",
      "Flexible Solutions – Adapting grades, packaging, and volumes.",
      "Long-Term Commitment – Sustainable partnerships that drive success.",
    ],
    image: "/pigment-wave-3.webp",
  },
];

export default function PremiumTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Animated Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tabs[activeIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 -z-10"
        >
          <Image
            src={tabs[activeIndex].image}
            alt={tabs[activeIndex].title}
            fill
            className="object-cover "
            priority
          />
  
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 relative z-10">
        {/* LEFT CONTENT */}
        <div className="flex flex-col">
          {/* Tab Buttons */}
          <div className="flex flex-wrap border-b border-[#1B5AA2]/30 mb-8">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveIndex(index)}
                className={`relative px-4 py-2 text-lg md:text-xl font-semibold transition-all ${
                  index === activeIndex
                    ? "text-[#1B5AA2]"
                    : "text-gray-600 hover:text-[#1B5AA2]"
                }`}
              >
                {tab.title.split(" ")[0]}
                {index === activeIndex && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#1B5AA2] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tabs[activeIndex].id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#00537B] mb-5">
                {tabs[activeIndex].title}
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                {tabs[activeIndex].description}
              </p>

              <ul className="space-y-3">
                {tabs[activeIndex].points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#1B5AA2] text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-800 text-base md:text-lg leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Placeholder for layout symmetry */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
