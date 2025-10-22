import {
  FaGlobeAmericas,
  FaHandshake,
  FaCertificate,
  FaTruckMoving,
  FaCogs,
  FaLightbulb,
} from "react-icons/fa";
import Image from "next/image";
import Ti from "@/components/Animations/Ti";

export default function AboutUs() {
 const features = [
  {
    icon: <FaGlobeAmericas className="w-6 h-6 text-[#00537B]" />,
    title: "Global Expertise",
    desc: "Extensive international trade experience ensures access to top-grade titanium dioxide.",
  },
  {
    icon: <FaHandshake className="w-6 h-6 text-[#00537B]" />,
    title: "Trusted Network",
    desc: "Long-standing relationships with manufacturers across Europe, Asia, and the Middle East.",
  },
  {
    icon: <FaCertificate className="w-6 h-6 text-[#00537B]" />,
    title: "Commitment to Quality",
    desc: "Strict quality control measures guarantee products that meet global standards.",
  },
  {
    icon: <FaTruckMoving className="w-6 h-6 text-[#00537B]" />,
    title: "Reliability",
    desc: "Consistent supply chain management minimizes disruptions for clients in  all over world.",
  },
  {
    icon: <FaCogs className="w-6 h-6 text-[#00537B]" />,
    title: "Tailored Solutions",
    desc: "Flexible supply options designed to meet specific client requirements.",
  },
  {
    icon: <FaLightbulb className="w-6 h-6 text-[#00537B]" />,
    title: "Collaborative Support",
    desc: "Guidance on TiO₂ applications, technical insights, and industry trends.",
  },
];

  return (
  <section
  style={{ backgroundImage: "url(/bg-layer.jpg)" }}
  className="relative bg-[#FFFEF7] bg-center bg-cover py-8"
>
  {/* 🔹 Overlay */}
  <div className="absolute inset-0 bg-white/50 dark:bg-black/20 pointer-events-none"></div>

  {/* Main container */}
  <div className="relative z-20 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-10">
    {/* Left content (animation / image) */}
    <div className="flex justify-center">
      <Image
        src="/whychoose.webp"
        alt="Why Choose Us"
        width={500}
        height={500}
        className="object-cover rounded"
      />
    </div>

    {/* Right content (text + button + contact) */}
    <div>
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
        Salford –
      </h2>
      <h1 className="text-[#1B5AA2] font-bold text-3xl lg:text-4xl mb-6">
        Global Titanium Dioxide Supplier
      </h1>

      <p className="text-lg text-black leading-relaxed mb-4">
        <strong>Salford</strong> is a distinguished international supplier
        and trader of <strong>Titanium Dioxide (TiO₂),</strong> dedicated to
        supporting India’s fast-growing industrial landscape. We connect
        Indian businesses with world-class titanium dioxide manufacturers
        abroad, providing consistent, high-performance raw materials.
      </p>

      <p className="text-lg text-black leading-relaxed mb-4">
        <strong>Titanium Dioxide</strong> is more than just a raw
        material—it is the backbone of industries such as{" "}
        <strong>
          paints, coatings, plastics, paper, textiles, cosmetics,
          pharmaceuticals, and food
        </strong>
        . Its brightness, opacity, and durability make it indispensable in
        modern manufacturing.
      </p>

      <p className="text-lg text-black leading-relaxed mb-6">
        As demand in  all over world continues to expand, <strong>Salford</strong>{" "}
        ensures businesses are equipped with the right grades and
        specifications to meet production goals. With a focus on reliability
        and global standards, we are your trusted{" "}
        <strong>Titanium Dioxide trading partner.</strong>
      </p>

      {/* Actions */}
      <div className="flex flex-nowrap items-center gap-3">
        <button className="relative px-7 py-3 rounded-full  text-lg font-semibold bg-gradient-to-r from-[#8AB0C2] to-[#0082C8] text-black shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
          <span className="absolute inset-0 bg-white opacity-10 -translate-x-full group-hover:translate-x-0 transform transition-transform duration-500"></span>
          Know More
        </button>
      </div>
    </div>
  </div>
</section>

  );
}
