"use client";
import React from "react";
import Image from "next/image";

export default function ContactForm({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs z-50 px-4">
      {/* Form Card */}
      <div
        className="relative rounded-3xl shadow-2xl overflow-hidden w-full max-w-lg text-white"
        style={{ backgroundImage: "url(/home/eco3-1024x745.webp)" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[#004aad]/60 backdrop-blur-sm"></div>

        {/* Inner Content */}
        <div className="relative p-8 sm:p-10 z-10">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-red-400 text-2xl transition"
          >
            ✕
          </button>

          {/* Title */}
          <h2 className="text-center text-2xl sm:text-3xl font-semibold text-white tracking-wide">
            Get In Touch With Us
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] mx-auto mt-3 mb-8 rounded-full"></div>

          {/* Form */}
          <form
            className="space-y-5"
            action="https://formsubmit.co/sales@aanyaenterprise.com"
            method="POST"
          >
            {/* Hidden fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Product Enquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="product" value="Enquiry From Website" />
            <input type="hidden" name="_nosponsor" value="true" />

            {/* Name + Machine */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-[#00C9FF] focus:border-transparent transition"
                required
              />

              {/* <select
                defaultValue=""
                className="flex-1 px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-[#00C9FF] focus:border-transparent transition"
                required
              >
                <option value="" disabled hidden>
                  Select Product
                </option>
                <option className="text-black" value="Paper Cup Making Machine">
                  Paper Cup Making Machine
                </option>
                <option className="text-black" value="Paper Die Cutting Machine">
                  Paper Die Cutting Machine
                </option>
                <option
                  className="text-black"
                  value="Paper Plate Making Machine"
                >
                  Paper Plate Making Machine
                </option>
                <option
                  className="text-black"
                  value="Bio-degradable Bag Making Machine"
                >
                  Bio-degradable Bag Making Machine
                </option>
                <option className="text-black" value="Flexoprinting Machine">
                  Flexoprinting Machine
                </option>
                <option
                  className="text-black"
                  value="Non Woven Bag Making Machines"
                >
                  Non Woven Bag Making Machines
                </option>
                <option
                  className="text-black"
                  value="Offset Bag Printing Machine"
                >
                  Offset Bag Printing Machine
                </option>
                <option className="text-black" value="Momo Making Machine">
                  Momo Making Machine
                </option>
                <option className="text-black" value="Noodle Making Machine">
                  Noodle Making Machine
                </option>
              </select> */}
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 bg-white/10 border border-white/30 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#00C9FF] transition">
              <Image
                src="/flag.webp"
                alt="India Flag"
                width={20}
                height={15}
                className=""
              />
              <span className="text-white text-sm">+91</span>
              <input
                type="tel"
                maxLength={10}
                minLength={10}
                pattern="[0-9]{10}"
                placeholder="Enter phone number"
                className="flex-1 bg-transparent placeholder-white/70 text-white focus:outline-none px-2"
                required
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-[#00C9FF] focus:border-transparent transition"
              required
            />

            {/* Message */}
            <textarea
              placeholder="Message"
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-[#00C9FF] focus:border-transparent transition h-28 resize-none"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#00C9FF] to-[#0077E6] hover:from-[#0077E6] hover:to-[#00C9FF] transition-all duration-300 rounded-lg font-semibold text-white text-base shadow-lg shadow-[#00C9FF]/30"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
