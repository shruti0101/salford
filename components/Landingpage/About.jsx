
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {


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
        supporting world's fast-growing industrial landscape. We connect
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
        <strong>Titanium Dioxide Manufacturing partner.</strong>
      </p>

      {/* Actions */}
      <div className="flex flex-nowrap items-center gap-3">
        <Link href="/about-us" className="relative px-7 py-3 rounded-full  text-lg font-semibold bg-gradient-to-r from-[#8AB0C2] to-[#0082C8] text-black shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
          <span className="absolute inset-0 bg-white opacity-10 -translate-x-full group-hover:translate-x-0 transform transition-transform duration-500"></span>
          Know More
        </Link>
      </div>
    </div>
  </div>
</section>

  );
}
