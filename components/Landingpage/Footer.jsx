"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  ChevronDown,
} from "lucide-react";

const products = [
  { id: "tio2-anatase", name: "Titanium Dioxide – Anatase Grade" },
  { id: "tio2-rutile", name: "Titanium Dioxide – Rutile Grade" },
 
];

const Footer = () => {


  return (
    <footer
      style={{ backgroundImage: "url('/ff.avif')" }}
      className="relative bg-cover bg-center text-gray-200 pt-16 pb-10 overflow-hidden"
    >
      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/90 via-[#0A0A0A]/85 to-[#1B1B1B]/90"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D33F00] via-[#F5B041] to-[#D33F00]"></div>
      <div className="absolute inset-0 bg-[url('/patterns/noise.png')] opacity-20 mix-blend-overlay"></div>

      <div className="relative max-w-7xl mx-auto px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Column 1: Logo + About */}
          <div>
            <Image
              src="/about/logo.jpg"
              alt="Salford Logo"
              width={100}
              height={60}
              className="mb-6 rounded-sm brightness-110 drop-shadow-lg"
            />

            <p className="text-sm leading-relaxed text-gray-300 mb-5">
            Partner with a Global Leader Today If you are seeking a Titanium Dioxide Manufacturer in Germany with the credibility of a trusted titanium dioxide trader in all over world
            </p>

       

         
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 border-b border-[#F5B041]/40 inline-block pb-1">
              Quick Links
            </h3>
            <ul className="space-y-2 text-md">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about-us" },
                { name: "Products", href: "/products" },
                { name: "Insights", href: "/blogs" },
               
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#F5B041] hover:translate-x-1 transition-transform duration-300 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>



           <div>
            <h3 className="text-white font-semibold text-lg mb-4 border-b border-[#F5B041]/40 inline-block pb-1">
              Quick Links
            </h3>
            <ul className="space-y-2 text-md">
              {[
                { name: "Industries", href: "/industries" },
                { name: "Application", href: "/application" },
                { name: "Contact-Us", href: "/contact-us" },
               
               
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#F5B041] hover:translate-x-1 transition-transform duration-300 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 border-b border-[#F5B041]/40 inline-block pb-1">
              Our Products
            </h3>
            <ul className="space-y-2 text-sm uppercase">
              {products.map((p) => (
                <li key={p.id}>
                  <Link
                    href="/products"
                    className="hover:text-[#F5B041] hover:translate-x-1 transition-transform duration-300 inline-block"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Trust Seal */}
          <div>
            <h3 className="text-[#F5B041] font-semibold text-lg mb-4">
              Global Standards
            </h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-[#F5B041]/20 hover:border-[#F5B041]/40 transition-all duration-300">
              <Image
                src="/about/trustseal.png"
                alt="Certification"
                width={120}
                height={120}
                className="mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-10 pt-5 text-center text-xs text-gray-400 tracking-wide">
        © 2025 <span className="text-[#F5B041] font-medium">Salford Trading Pvt. Ltd.</span> 
        — Global Titanium Dioxide Supplier. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
