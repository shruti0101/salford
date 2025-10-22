"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/Data";

const coatingsProducts =
  categories.find((c) => c.id === "coatings")?.products ?? [];

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
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          {title}
        </h2>
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
        className="relative w-full h-[50vh] md:h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/category/coating.webp')" }}
      />

      {renderSection(
        "Titanium Dioxide Solutions for Paints & Coatings",
        "A Range of High-Performance Pigments Designed for Enhanced Coating Efficiency",
        `Salford titanium dioxide solutions for paints and coatings are engineered to deliver exceptional performance, improved appearance, and effortless application. Coatings formulated with Salford TiO₂ exhibit excellent opacity, vibrant color, and long-term durability. Whether for architectural or industrial coatings, Salford products ensure smooth finishes, UV resistance, and lasting protection across a range of demanding environments.

Titanium dioxide (TiO₂) is the key white pigment used in the coatings industry, prized for its ability to scatter visible light effectively—imparting brightness, whiteness, and opacity. Available in two crystalline forms, anatase and rutile, Salford primarily employs rutile TiO₂ for its superior light-scattering efficiency, stability, and durability.

To enhance performance, Salford’s TiO₂ pigments are surface-treated with specialized inorganic and organic coatings. Inorganic treatments like alumina and silica improve properties such as dispersibility, chalk resistance, and thermal stability, while organic treatments aid in compatibility and ease of dispersion. This precise control over surface chemistry ensures consistent performance across various paint systems.

Salford’s advanced titanium dioxide grades provide optimal hiding power and brightness without depending solely on TiO₂ concentration. In fact, Salford grades with 80–88% TiO₂ content outperform higher-content alternatives in certain formulations, especially high-pigment flat paints.

For gloss and semi-gloss applications, Salford’s TiO₂ pigments are designed for high reflectivity, easy dispersion, and strong color stability. In exterior architectural coatings, they ensure durability, self-cleaning performance, and resistance to environmental stress. Industrial finishes—including automotive, powder, and coil coatings—benefit from Salford’s balance of opacity, gloss retention, and chemical resistance.

Across every segment, Salford maintains strict quality control using advanced process monitoring systems to guarantee uniformity and reliability. Its titanium dioxide products undergo rigorous testing for color strength, particle size, dispersion, and weathering stability. All manufacturing and technical service operations adhere to ISO 9001-certified quality systems.

By combining technical precision with environmental responsibility, Salford continues to set the standard in titanium dioxide solutions for the coatings industry—helping formulators achieve long-lasting, brilliant finishes while maintaining sustainable manufacturing practices.`,
        coatingsProducts
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
    <td className="py-5 px-6 font-semibold text-[#004C91]">SALFORD 628</td>
    <td className="py-5 px-6 space-y-2 text-gray-700">
      <p>Powder coating</p>
      <p>White and tinted automotive finishes</p>
      <p>Waterborne paints</p>
      <p>Screen and digital printing inks</p>
      <p>Quartz and stone</p>
      <p>Coil coating and UV-cured finishes</p>
    </td>
  </tr>

  <tr className="hover:bg-blue-50 transition">
    <td className="py-5 px-6 font-semibold text-[#004C91]">SALFORD 686</td>
    <td className="py-5 px-6 space-y-2 text-gray-700">
      <p>Architectural, industrial paints</p>
      <p>Screen and digital printing inks</p>
      <p>Waterborne paints</p>
      <p>White automotive finishes</p>
      <p>Quartz and stone</p>
      <p>Coil coating and UV-cured finishes</p>
    </td>
  </tr>

  <tr className="hover:bg-blue-50 transition">
    <td className="py-5 px-6 font-semibold text-[#004C91]">SALFORD 660</td>
    <td className="py-5 px-6 space-y-2 text-gray-700">
      <p>Automotive OEM topcoat and refinish</p>
      <p>High durability exterior coil coatings</p>
      <p>Aerospace coatings</p>
      <p>Powder coatings</p>
      <p>Other industrial OEM and specialty coatings requiring superior chalk resistance and tint retention</p>
    </td>
  </tr>

  <tr className="hover:bg-blue-50 transition">
    <td className="py-5 px-6 font-semibold text-[#004C91]">SALFORD 618</td>
    <td className="py-5 px-6 space-y-2 text-gray-700">
      <p>Interior industrial coatings</p>
      <p>Powder coatings</p>
      <p>Coil coatings</p>
      <p>Container coatings</p>
      <p>Electrodeposition applications</p>
      <p>Interior architectural coatings</p>
    </td>
  </tr>

  <tr className="hover:bg-blue-50 transition">
    <td className="py-5 px-6 font-semibold text-[#004C91]">SALFORD 620</td>
    <td className="py-5 px-6 space-y-2 text-gray-700">
      <p>Industrial coating</p>
      <p>Powder coating</p>
      <p>External & internal architectural coating</p>
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
