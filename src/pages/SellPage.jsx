import React from 'react'
import { useState } from 'react';
import image from '../assets/images/villa1.jpg'

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
        { id: 1, title: "3 BHK Apartment", price: "₹2.5 Cr", image: "https://via.placeholder.com/400x260" },
        { id: 2, title: "4 BHK Villa", price: "₹4.2 Cr", image: "https://via.placeholder.com/400x260" },
        { id: 3, title: "Residential Plot", price: "₹85 Lac", image: "https://via.placeholder.com/400x260" },
        { id: 4, title: "Studio Flat", price: "₹75 Lac", image: "https://via.placeholder.com/400x260" },
      ];
    
      function handleChange(e) {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
      }
    
      function estimateValue() {
        // Simple heuristic estimator for demo (replace with real API)
        let base = 5000000; // 50L baseline
        if (form.propertyType === "Villa") base += 3000000;
        if (form.propertyType === "Plot") base -= 2000000;
        const sizeNum = parseFloat(form.size) || 0;
        const add = Math.max(0, sizeNum) * 10000; // per sqft multiplier for demo
        const value = Math.round((base + add) / 100000) / 10; // in lakhs/Cr shorthand
    
        setEstValue(value);
        setSubmitted(true);
      }
  return (
     <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* NAV */}
    {/* //   <header className="bg-white shadow-sm">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="flex justify-between items-center py-4">
    //         <div className="flex items-center gap-3">
    //           <div className="text-teal-600 font-bold text-xl">ApnaProperty</div>
    //           <nav className="hidden md:flex gap-6 text-sm text-gray-600">
    //             <a className="hover:text-gray-900">Buy</a>
    //             <a className="hover:text-gray-900">Rent</a>
    //             <a className="hover:text-gray-900">Sell</a>
    //             <a className="hover:text-gray-900">Advice</a>
    //           </nav>
    //         </div>
    //         <div className="flex items-center gap-3">
    //           <button className="hidden md:inline-block bg-teal-600 text-white px-4 py-2 rounded-md text-sm">Login</button>
    //           <button className="border border-teal-600 text-teal-600 px-4 py-2 rounded-md text-sm">Post Property</button>
    //         </div>
    //       </div>
    //     </div>
    //   </header> */}

      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Sell Your Property Faster. Easier. Better.</h1>
            <p className="text-gray-600 mb-6">Get the best value for your home with our local experts and powerful marketing tools. Start with a free valuation — no obligations.</p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-teal-600 text-white px-5 py-2 rounded-md shadow-sm">List Your Property</button>
              <button className="border border-gray-300 px-5 py-2 rounded-md">Talk to an Agent</button>
            </div>

            <div className="mt-8 bg-gray-50 border rounded-lg p-6 max-w-md">
              <h3 className="font-semibold mb-3">Find Out How Much Your Property Is Worth</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select name="propertyType" value={form.propertyType} onChange={handleChange} className="border p-2 rounded">
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Plot</option>
                  <option>Studio</option>
                </select>
                <input name="location" value={form.location} onChange={handleChange} placeholder="Location (city, area)" className="border p-2 rounded" />
                <input name="size" value={form.size} onChange={handleChange} placeholder="Size (sq ft)" className="border p-2 rounded" />
                <input name="contactName" value={form.contactName} onChange={handleChange} placeholder="Your name" className="border p-2 rounded" />
                <input name="contactPhone" value={form.contactPhone} onChange={handleChange} placeholder="Phone or email" className="border p-2 rounded col-span-2" />

                <button onClick={estimateValue} className="bg-teal-600 text-white px-4 py-2 rounded col-span-2">Get Free Valuation</button>
              </div>

              {submitted && (
                <div className="mt-4 p-3 bg-white border rounded">
                  <div className="text-sm text-gray-500">Estimated market value (rough):</div>
                  <div className="text-xl font-bold mt-1">{estValue ? `≈ ₹${estValue} Cr*` : "—"}</div>
                  <div className="text-xs text-gray-400 mt-1">*Indicative. For an accurate valuation an agent will contact you.</div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:block">
            <img src={image} alt="hero" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold mb-6">Why Sell With Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded shadow-sm">
            <h4 className="font-semibold mb-2">Best Market Value</h4>
            <p className="text-sm text-gray-600">AI-backed valuations and expert pricing advice to maximize your return.</p>
          </div>
          <div className="bg-white p-5 rounded shadow-sm">
            <h4 className="font-semibold mb-2">Quick Sale Process</h4>
            <p className="text-sm text-gray-600">Reach verified buyers faster with targeted marketing and buyer prequalification.</p>
          </div>
          <div className="bg-white p-5 rounded shadow-sm">
            <h4 className="font-semibold mb-2">End-to-End Assistance</h4>
            <p className="text-sm text-gray-600">We help with photos, paperwork, negotiations and legal closure.</p>
          </div>
          <div className="bg-white p-5 rounded shadow-sm">
            <h4 className="font-semibold mb-2">Trusted Agents</h4>
            <p className="text-sm text-gray-600">Work with verified local agents to sell with confidence.</p>
          </div>
        </div>
      </section>

      {/* SOLD / SUCCESS */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold mb-6">Success Stories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleSold.map((s) => (
              <div key={s.id} className="bg-gray-50 rounded overflow-hidden shadow-sm">
                <img src={s.image} alt={s.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <div className="text-sm text-teal-600 font-semibold">SOLD</div>
                  <div className="font-semibold mt-1">{s.title}</div>
                  <div className="text-gray-500 mt-1">{s.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENTS & CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-3">Need help pricing or listing your property?</h3>
            <p className="text-gray-600 mb-4">Connect with our local experts — professional photos, home staging, legal support and more.</p>

            <div className="flex flex-wrap gap-3">
              <div className="w-44 bg-white p-4 rounded shadow-sm">
                <div className="h-12 w-12 bg-gray-200 rounded-full mb-2" />
                <div className="font-semibold">Priya Sharma</div>
                <div className="text-sm text-gray-500">Bengaluru</div>
              </div>
              <div className="w-44 bg-white p-4 rounded shadow-sm">
                <div className="h-12 w-12 bg-gray-200 rounded-full mb-2" />
                <div className="font-semibold">Rajesh Kumar</div>
                <div className="text-sm text-gray-500">Bengaluru</div>
              </div>
              <div className="w-44 bg-white p-4 rounded shadow-sm">
                <div className="h-12 w-12 bg-gray-200 rounded-full mb-2" />
                <div className="font-semibold">Anita Singh</div>
                <div className="text-sm text-gray-500">Bengaluru</div>
              </div>
            </div>

          </div>

          <div className="bg-white p-6 rounded shadow-md">
            <h4 className="font-semibold mb-3">List Your Property</h4>
            <p className="text-sm text-gray-600 mb-4">Post your property for free and reach thousands of buyers.</p>
            <button className="w-full bg-teal-600 text-white py-2 rounded">Post My Listing Now</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer className="bg-gray-100 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600">
          <div className="flex justify-between items-center">
            <div>© {new Date().getFullYear()} ApnaProperty. All rights reserved.</div>
            <div className="flex gap-4">Privacy · Terms · Contact</div>
          </div>
        </div>
      </footer> */}
    </div>
  )
}

export default SellPage
