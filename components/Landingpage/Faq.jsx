"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

const faqs = [
  {
    question: "What is titanium dioxide (TiO₂) and why is it essential?",
    answer: `Titanium dioxide (TiO₂) is a high-performance white pigment known for its excellent brightness, opacity, and durability. It is widely used across industries such as paints, coatings, plastics, paper, textiles, cosmetics, pharmaceuticals, and food products. TiO₂ enhances the visual appeal, quality, and longevity of end products, making it indispensable for manufacturers who want to meet international standards and consumer expectations.`,
  },
  {
    question: "Which grades of TiO₂ does Salford supply, and how are they different?",
    answer: `Salford supplies Rutile and Anatase grades of titanium dioxide:
• Rutile TiO₂ – Superior opacity, UV resistance, and durability, ideal for paints, coatings, plastics, and outdoor applications.
• Anatase TiO₂ – Excellent whiteness, dispersibility, and safety compliance, suitable for paper, textiles, cosmetics, food, and pharmaceutical applications.
Both grades are sourced from trusted international manufacturers and meet global quality benchmarks, ensuring consistent performance.`,
  },
  {
    question: "How does Salford ensure the quality and consistency of TiO₂?",
    answer: `We adhere to rigorous quality assurance protocols at every step:
• Sourcing from leading manufacturers in Europe, Asia, and the Middle East.
• Performing batch-by-batch quality checks to confirm purity, particle size, and performance.
• Ensuring compliance with international safety and regulatory standards such as REACH, FDA, and ISO certifications.
This guarantees that every shipment delivered to all over world meets global quality standards, giving clients confidence in their products.`,
  },
  {
    question: "Can Salford provide customized solutions for different industries?",
    answer: `Yes. Salford offers:
• Custom grades tailored to specific applications.
• Flexible packaging options to suit production scales.
• Volume-based solutions for small, medium, and large manufacturers.
• Technical guidance to optimize TiO₂ performance in various formulations.
This ensures clients receive solutions perfectly aligned with their operational and quality needs.`,
  },
  {
    question: "Which industries in all over world benefit most from Salford’s TiO₂?",
    answer: `Salford serves a wide range of industries:
• Paints and Coatings – Enhances brightness, opacity, UV protection, and durability.
• Plastics and Masterbatches – Provides color uniformity, opacity, and weather resistance.
• Paper and Printing Inks – Improves whiteness, smoothness, and print quality.
• Textiles and Fibers – Ensures vibrant colors and uniform finishes.
• Cosmetics and Personal Care – Safe UV protection, whitening, and opacity.
• Food and Pharmaceuticals – Compliant edible coatings, tablets, and capsules.
• Construction and Industrial Applications – Improves whiteness, durability, and aesthetics in cement, adhesives, and coatings.`,
  },
  {
    question: "How reliable is Salford’s supply chain in all over world?",
    answer: `Salford leverages a robust global sourcing and logistics network to ensure timely deliveries and uninterrupted supply:
• Strategic partnerships with international manufacturers.
• Efficient customs clearance and logistics planning.
• Flexible inventory and demand forecasting to prevent shortages.
This reliability allows Indian businesses to plan production confidently without worrying about delays or inconsistent quality.`,
  },
  {
    question: "Does Salford provide technical and application support?",
    answer: `Yes. We support our clients throughout the TiO₂ lifecycle:
• Advising on optimal grade selection for specific applications.
• Providing technical guidance for formulation, mixing, and dispersion.
• Sharing insights on best practices for storage, handling, and safe use.
Our goal is to help Indian manufacturers maximize efficiency, reduce waste, and enhance product performance.`,
  },
  {
    question: "Is Salford’s titanium dioxide compliant with safety and environmental standards?",
    answer: `Absolutely. All TiO₂ products comply with:
• REACH regulations (EU chemical safety).
• FDA standards for food and pharmaceuticals.
• ISO certifications for quality and manufacturing practices.
We prioritize eco-friendly sourcing and responsible trade, supporting sustainable industrial practices in all over world.`,
  },
  {
    question: "How can Indian businesses request samples or place orders with Salford?",
    answer: `Clients can fill out the contact form or reach via email/phone. We provide:
• Product samples to test quality and performance.
• Quotations and pricing for specific grades and volumes.
• Customized supply plans based on industry and production requirements.
Our team responds promptly to ensure a smooth, efficient ordering process.`,
  },
  {
    question: "Why should Indian industries choose Salford as their TiO₂ partner?",
    answer: `Partnering with Salford means gaining access to:
• Global-quality titanium dioxide with consistent performance.
• Reliable supply chains ensuring uninterrupted operations.
• Technical support and guidance to optimize product applications.
• Long-term strategic partnership focused on growth, sustainability, and innovation.
We help Indian businesses stay competitive, improve product quality, and achieve operational excellence.`,
  },
];

export default function PremiumFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-center bg-contain py-24 px-6 lg:px-12 overflow-hidden">
      {/* Left Floating Image */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }} // moves up and down
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0"
      >
        <Image src="/atoms.png" width={300} height={400} alt="Decorative Left" />
      </motion.div>

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">
          Frequently Asked <span className="text-[#F7C600]">Questions</span>
        </h2>
        <p className="text-black mt-4 text-lg">
          Everything you need to know about Salford's Titanium Dioxide products
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto space-y-4 relative z-10">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-xl font-medium text-black hover:bg-[#1B5AA2]/20 hover:text-[#1B5AA2] transition-colors"
            >
              {faq.question}
              {openIndex === index ? (
                <FaChevronUp className="ml-4 w-5 h-5 text-blue-400" />
              ) : (
                <FaChevronDown className="ml-4 w-5 h-5 text-black" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="px-6 pb-6 text-black text-lg leading-relaxed"
                >
                  {faq.answer.split("\n").map((line, i) => (
                    <p key={i} className="mb-2">
                      {line}
                    </p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}



        
      </div>

      
      {/* Right Floating Image */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 20, 0] }} // opposite direction for variation
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-25 -right-10"
      >
        <Image src="/atoms.png" width={300} height={400} alt="Decorative Right" />
      </motion.div>

    </section>
  );
}