"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/Data"; 

const plasticsProducts = categories.find((c) => c.id === "plastics")?.products ?? [];
const laminatesProducts = categories.find((c) => c.id === "laminates")?.products ?? [];
const coatingsProducts = categories.find((c) => c.id === "coatings")?.products ?? [];



export default function ProductsPage() {
 const renderProductCard = (product) => (
  <Link
    key={product.id}
    href={`/products/${product.id}`}
    className="group relative rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    style={{
      background: "linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)",
      minWidth: "280px", // increased width for larger cards
    }}
  >
    {/* Arrow Icon */}
    <div className="absolute top-4 right-4 bg-white p-3 rounded-full opacity-0 group-hover:opacity-100  shadow-md transition duration-300">
      <ArrowUpRight className="w-6 h-6 text-blue-600" />
    </div>

    {/* Card Content */}
    <div className="p-8 flex flex-col justify-between h-full w-full">
      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300 mb-2 relative">
        {product.name}
     
      </h3>

      <div className="space-y-2 text-white text-sm md:text-base">
        {(product.excerpt || []).filter(b => b.type === "p").map((block, idx) => (
          <p key={idx} className="leading-relaxed">
            {block.text}
          </p>
        ))}
      </div>

         {/* Underline on hover */}
        <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-300 transition-all duration-300 group-hover:w-full rounded"></span>
    </div>
  </Link>
);


  const renderSection = (title, subtitle, description, products) => (
    <section className="relative w-full bg-gradient-to-b from-white via-[#E6F0FA] to-[#D0E4FA] overflow-hidden">
      <div className="space-y-6 py-10 max-w-7xl px-20 mt-9">
<h2 className=" text-3xl md:text-5xl font-bold">A Trusted Partner in TiO₂ Excellence</h2>

<h3 className="text-2xl   ">Salford Titanium Dioxide: Premium Quality, Reliable Supply, Expert Support</h3>

<p className="text-xl leading-relaxed">For decades, Salford has built lasting partnerships by delivering Titanium Dioxide (TiO₂) our customers can truly depend on. With nearly a century of experience, we continue to provide world-class TiO₂ for coatings, plastics, and laminate applications across the globe.

As innovators of the chloride manufacturing process, we’ve refined it over the years to extend product durability and minimize environmental impact. Through collaboration and innovation, we help our customers develop superior products powered by advanced TiO₂ technology.

Each Salford TiO₂ grade is managed by a dedicated Grade Guardian who ensures it meets our strict quality standards. Only products that pass every test are delivered to our customers.</p>

      </div>



      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#4A90E2_0%,_transparent_40%)] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-10 md:px-16 space-y-6 py-15">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          {title}
        </h2>

        <p className="text-xl text-gray-700 font-medium">{subtitle}</p>
        <p className="text-gray-800 text-lg leading-relaxed">{description}</p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-15 mt-12 w-full">
          {products.map(renderProductCard)}
        </div>
      </div>
    </section>
  );

  return (
    <>
      {/* ===== Banner Section ===== */}
      <div
        className="relative w-full h-[50vh] md:h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/whychoosebg.png')" }}
      >
     
      </div>

    {renderSection(
  " TiO₂ for Plastics",
  "High-performance grades for plastics, polymers, and masterbatches.",
  `Our TiO₂ grades deliver superior opacity, brightness, and UV resistance for high-quality plastic applications. 
   These pigments ensure long-term color stability, excellent dispersibility, and optimal surface finish. 
   Ideal for injection molding, extrusion, and film applications.`,
  plasticsProducts
)}

{renderSection(
  " TiO₂ for Coatings",
  "Coating-grade TiO₂ designed for maximum opacity and durability.",
  `Ideal for architectural, industrial, and automotive coatings with superior gloss, color, and long-term performance. 
   Our TiO₂ pigments provide enhanced hiding power, improved weather resistance, and excellent lightfastness, 
   making coatings more durable and vibrant. Perfect for solvent-based and waterborne systems.`,
  coatingsProducts
)}

{renderSection(
  "TiO₂ for Laminates",
  "Optical brighteners and whiteners for laminate applications.",
  `Designed for exceptional brightness and whiteness in decorative laminates, papers, and films. 
   Our TiO₂ products improve optical performance, ensuring high gloss and uniform color. 
   They are suitable for high-pressure laminates, melamine boards, decorative films, and specialty papers.`,
  laminatesProducts
)}

    </>
  );
}
