"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/Data";

// Featured products IDs
const featuredProductIds = ["salford-201", "salford-250", "salford-628", "salford-626"];

// Filter products based on featured IDs
const featuredProducts = categories
  .flatMap((cat) => cat.products)
  .filter((p) => featuredProductIds.includes(p.id));

export default function HomeProducts() {
  return (
    <section className="py-24 px-6 bg-[#f0f8ff]">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0047b3]">
            Featured Products
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            Explore our diverse portfolio of TiO₂ products, engineered for superior brightness, opacity, and durability across plastics, coatings, and laminates.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group relative rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white"
            >
            
              <div className="p-6 flex flex-col justify-between h-full">
                <h3 className="text-lg md:text-xl font-bold text-[#0047b3] group-hover:text-[#0066cc] transition-colors duration-300 mb-2">
                  {product.name}
                </h3>
                <div className="text-gray-700 text-sm md:text-base mb-4">
                  {(product.excerpt || []).filter(b => b.type === "p").map((block, idx) => (
                    <p key={idx} className="leading-relaxed">{block.text}</p>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-auto text-[#0047b3] font-semibold group-hover:text-[#0066cc] transition-colors duration-300">
                  <span>View Product</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <span className="block h-1 w-0 bg-gradient-to-r from-[#8AB0C2] to-[#0082C8] rounded-full mt-3 transition-all duration-300 group-hover:w-full"></span>
              </div>
            </Link>
          ))}
        </div>

        {/* See All Products Button */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-block mt-6 px-8 py-4 rounded-full bg-gradient-to-r from-[#8AB0C2] to-[#0082C8] text-white font-semibold shadow-lg hover:scale-105 transform transition"
          >
            See All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
