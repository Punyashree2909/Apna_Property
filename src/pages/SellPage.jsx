import React, { useState } from "react";
import { motion } from "framer-motion";

import BHKApartment from "../assets/images/3 BHK Apartment.jpg";
import BHKVilla from "../assets/images/4 BHK Villa.jpg";
import ResidentialPlot from "../assets/images/Residential Plot.jpg";
import StudioFlat from "../assets/images/Studio Flat.jpg";
import image from "../assets/images/image.jpg";

const SellPage = () => {
  const [form, setForm] = useState({
    propertyType: "Apartment",
    location: "",
    size: "",
    contactName: "",
    contactPhone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [estValue, setEstValue] = useState(null);

  const sampleSold = [
    { id: 1, title: "3 BHK Apartment", price: "₹2.5 Cr", image: BHKApartment },
    { id: 2, title: "4 BHK Villa", price: "₹4.2 Cr", image: BHKVilla },
    { id: 3, title: "Residential Plot", price: "₹85 Lac", image: ResidentialPlot },
    { id: 4, title: "Studio Flat", price: "₹75 Lac", image: StudioFlat },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const estimateValue = () => {
    let base = 5000000; // baseline ₹50L
    if (form.propertyType === "Villa") base += 3000000;
    if (form.propertyType === "Plot") base -= 2000000;
    const sizeNum = parseFloat(form.size) || 0;
    const add = Math.max(0, sizeNum) * 10000;
    const value = Math.round((base + add) / 100000) / 10; // Convert to Cr
    setEstValue(value);
    setSubmitted(true);
  };

  const SoldCard = ({ image, title, price }) => (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
    >
      <img src={image} alt={title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <div className="text-sm text-teal-600 font-semibold">SOLD</div>
        <div className="font-semibold mt-1">{title}</div>
        <div className="text-gray-500 mt-1">{price}</div>
      </div>
    </motion.div>
  );

  const agents = [
    { name: "Priya Sharma", city: "Bengaluru" },
    { name: "Rajesh Kumar", city: "Bengaluru" },
    { name: "Anita Singh", city: "Bengaluru" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO SECTION */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              Sell Your Property <span className="text-teal-600">Smarter.</span>
            </h1>
            <p className="text-gray-600 mb-6 text-lg">
              Get a free instant valuation and connect with verified local buyers. No hidden fees, no stress.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg transition-all">
                List Your Property
              </button>
              <button className="border border-gray-300 hover:border-teal-500 hover:text-teal-600 px-6 py-2.5 rounded-lg transition-all">
                Talk to an Agent
              </button>
            </div>

            {/* Valuation Card */}
            <div className="mt-10 bg-gray-50 border border-gray-200 rounded-xl p-6 max-w-md shadow-sm">
              <h3 className="font-semibold mb-3 text-gray-800">
                Get Your Free Valuation
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select
                  name="propertyType"
                  value={form.propertyType}
                  onChange={handleChange}
                  className="border p-2 rounded-lg"
                >
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Plot</option>
                  <option>Studio</option>
                </select>
                <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Location"
                  className="border p-2 rounded-lg"
                />
                <input
                  name="size"
                  value={form.size}
                  onChange={handleChange}
                  placeholder="Size (sq ft)"
                  className="border p-2 rounded-lg"
                />
                <input
                  name="contactName"
                  value={form.contactName}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="border p-2 rounded-lg"
                />
                <input
                  name="contactPhone"
                  value={form.contactPhone}
                  onChange={handleChange}
                  placeholder="Phone or email"
                  className="border p-2 rounded-lg col-span-2"
                />
                <button
                  onClick={estimateValue}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg col-span-2 transition-all"
                >
                  Get Free Valuation
                </button>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 p-4 bg-white border rounded-lg"
                >
                  <div className="text-sm text-gray-500">
                    Estimated market value:
                  </div>
                  <div className="text-xl font-bold mt-1 text-teal-600">
                    ≈ ₹{estValue} Cr*
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    *Indicative. A local agent will contact you for verification.
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <img
              src={image}
              alt="Sell Property"
              className="rounded-2xl shadow-lg w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* WHY US */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose <span className="text-teal-600">ApnaProperty</span>?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Best Market Value",
              desc: "AI-backed insights and real-time pricing trends.",
            },
            {
              title: "Quick Sale Process",
              desc: "Verified buyers and fast-track deal closures.",
            },
            {
              title: "End-to-End Assistance",
              desc: "From listing to legal — we handle everything.",
            },
            {
              title: "Trusted Agents",
              desc: "Local experts who know your neighborhood best.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all text-center"
            >
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="bg-gray-50 border-t py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Recent Success Stories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleSold.map((s) => (
              <SoldCard key={s.id} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* AGENTS SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">
              Need help listing or pricing your property?
            </h3>
            <p className="text-gray-600 mb-6">
              Our verified local agents provide photography, staging, pricing,
              and negotiation support — at no extra cost.
            </p>

            <div className="flex flex-wrap gap-4">
              {agents.map((a, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className="w-44 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all text-center"
                >
                  {/* 🟢 Gradient Initials Badge */}
                  <div
                    className="h-14 w-14 mx-auto flex items-center justify-center rounded-full mb-2 text-white font-semibold text-lg shadow-sm"
                    style={{
                      background: `linear-gradient(135deg, #14b8a6, #0ea5e9)`,
                    }}
                  >
                    {a.name.split(" ")[0][0]}
                    {a.name.split(" ")[1][0]}
                  </div>

                  <div className="font-semibold">{a.name}</div>
                  <div className="text-sm text-gray-500">{a.city}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h4 className="font-semibold mb-3 text-lg">List Your Property</h4>
            <p className="text-sm text-gray-600 mb-4">
              Post your property for free and reach thousands of active buyers.
            </p>
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-lg transition-all">
              Post My Listing Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SellPage;
