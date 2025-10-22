"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/Data";


const laminatesProducts = categories.find((c) => c.id === "laminates")?.products ?? [];


export default function ProductsPage() {
  const renderProductCard = (product) => (
    <Link
      key={product.id}
      href={`/products/${product.id}`}
      className="group relative rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      style={{
        background: "linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)",
        minWidth: "280px",
      }}
    >
      {/* Arrow Icon */}
      <div className="absolute top-4 right-4 bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 shadow-md transition duration-300">
        <ArrowUpRight className="w-6 h-6 text-blue-600" />
      </div>

      {/* Card Content */}
      <div className="p-8 flex flex-col justify-between h-full w-full relative">
        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300 mb-2">
          {product.name}
        </h3>

        <div className="space-y-2 text-white text-sm md:text-base">
          {(product.excerpt || [])
            .filter((b) => b.type === "p")
            .map((block, idx) => (
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#4A90E2_0%,_transparent_40%)] opacity-20 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-10 md:px-16 space-y-6 py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">{title}</h2>
        <p className="text-xl text-gray-700 font-medium">{subtitle}</p>
        <div className="text-gray-800 text-lg leading-relaxed space-y-4">
          {description.split("\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 w-full">
          {products.map(renderProductCard)}
        </div>
      </div>
    </section>
  );

  return (
    <>
      {/* Banner Section */}
      <div
        className="relative w-full h-[50vh] md:h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/category/laminates.jpg')" }}
      />

   

      {/* Laminates Section */}
      {renderSection(
        "Titanium Dioxide Solutions for Laminates",
        "Enabling Custom Color and Design for Flooring and Furniture",
        `Laminate manufacturers require paper, foil, and printed surfaces that deliver exceptional opacity, color consistency, and light stability. Titanium dioxide (TiO₂) plays a vital role in achieving these goals—providing brilliant whiteness, superior hiding power, and excellent retention during production.

The Salford solution for laminates helps reduce downtime and ensures smooth, efficient production by maintaining consistent quality and minimizing reel-to-reel variation. Its enhanced retention characteristics support strong paper runnability with fewer web breaks, improving productivity and final product quality.

Salford R-796+ is a laminate-grade TiO₂ designed to enhance opacity and color retention. Its advanced surface treatment makes it compatible with a wide range of water chemistries, ensuring versatility across multiple applications such as high- and low-pressure décor papers, decorative foils, and printed laminates used in flooring and furniture.

Titanium dioxide adds indispensable value to the laminate industry. It improves surface brightness, provides uniform color formation, and enhances the overall visual appeal and longevity of laminate materials. By ensuring optimal light stability and appearance, Salford’s TiO₂ pigments keep printed patterns vibrant and prevent discoloration caused by UV exposure.

Consistency is key in manufacturing décor papers and foils. Uneven TiO₂ dispersion can cause clumping, weak paper strength, and color inconsistency. Salford’s titanium dioxide solutions deliver reel-to-reel uniformity, improved paper strength, and reliable performance—allowing manufacturers to use lighter base papers, increase yield, and enhance profitability.

With Salford titanium dioxide, laminate producers gain the perfect balance of quality, performance, and process efficiency—empowering the creation of vibrant, durable, and visually striking decorative materials.`,
        laminatesProducts
      )}



      
      {/* Scrollable Product List Section */}
<section className="relative bg-white py-20">
  <div className="max-w-6xl mx-auto px-6 md:px-12">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#004C91]">
      Salford TiO₂ Product Grades for Plastics
    </h2>

    <div className=" overflow-y-auto h-[70vh] shadow-lg rounded-2xl border border-gray-200">
      <table className="min-w-full bg-white text-left">
        <thead className="bg-gradient-to-r from-[#4A90E2] to-[#357ABD] text-white">
          <tr>
            <th className="py-4 px-6 font-semibold text-lg">Product</th>
            <th className="py-4 px-6 font-semibold text-lg">Applications</th>
          </tr>
        </thead>

 <tbody className="divide-y divide-gray-100">
  <tr className="hover:bg-blue-50 transition">
    <td className="py-5 px-6 font-semibold text-[#004C91]">SALFORD 626</td>
    <td className="py-5 px-6 space-y-2 text-gray-700">
      <p>PVC profiles and sidings</p>
      <p>Engineering plastics</p>
      <p>Flexible PVC</p>
      <p>Plastisols</p>
      <p>Polyolefins</p>
      <p>Plasticizer pastes and liquid colors</p>
      <p>Polystyrene and copolymers</p>
    </td>
  </tr>
</tbody>


      </table>
    </div>
  </div>
</section>

    </>
  );
}
