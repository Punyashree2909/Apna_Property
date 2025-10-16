// src/pages/AboutUs.jsx
import React from "react";
import { Mail, Phone, MapPin, Lightbulb, ShieldCheck, Handshake } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen">
      {/* ======= NAVBAR ======= */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="ApnaProperty" className="w-8" />
            <span className="text-xl font-bold text-green-700">Apnaproperty</span>
          </div>
          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            <a href="/" className="hover:text-green-700">Buy/Rent</a>
            <a href="#" className="hover:text-green-700">Sell</a>
            <a href="#" className="hover:text-green-700">Home loans</a>
            <a href="#" className="hover:text-green-700">AP Advice</a>
            <a href="#" className="hover:text-green-700">Help</a>
            <a href="#" className="hover:text-green-700">Commercial</a>
          </nav>
          <div className="flex gap-3">
            <button className="border border-green-700 text-green-700 px-4 py-1.5 rounded-lg hover:bg-green-50">
              Shortlisted Properties
            </button>
            <button className="bg-green-700 text-white px-4 py-1.5 rounded-lg hover:bg-green-800">
              Login
            </button>
          </div>
        </div>
      </header>

      {/* ======= ABOUT SECTION ======= */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">About Us</h1>
          <p className="text-gray-600 leading-relaxed">
            Connecting dreams with homes, Apnaproperty is your trusted partner for buying, selling,
            and renting properties across India.
          </p>
        </div>
        <img
          src="/aboutus.jpg"
          alt="About ApnaProperty"
          className="rounded-2xl shadow-md w-full object-cover h-72"
        />
      </section>

      {/* ======= MISSION & VISION ======= */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-600">
            At Apnaproperty, our mission is to simplify the real estate journey for everyone. 
            We empower individuals to make informed decisions by providing transparent data, 
            comprehensive listings, and personalized support throughout the process.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className="text-gray-600">
            Our vision is to be the leading real estate platform, known for innovation, integrity, 
            and customer satisfaction. We aim to revolutionize the property market through technology 
            and trust, making property ownership a joyful experience for all.
          </p>
        </div>
      </section>

      {/* ======= OUR VALUES ======= */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-10">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-green-100 text-green-700 p-4 rounded-full mb-3">
                <Lightbulb size={28} />
              </div>
              <h3 className="font-semibold text-lg">Innovation</h3>
              <p className="text-gray-600 mt-2">
                Continuously seeking new ways to enhance the real estate experience through technology.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-green-100 text-green-700 p-4 rounded-full mb-3">
                <ShieldCheck size={28} />
              </div>
              <h3 className="font-semibold text-lg">Integrity</h3>
              <p className="text-gray-600 mt-2">
                Upholding honesty and transparency in all our dealings with clients and partners.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-green-100 text-green-700 p-4 rounded-full mb-3">
                <Handshake size={28} />
              </div>
              <h3 className="font-semibold text-lg">Trust</h3>
              <p className="text-gray-600 mt-2">
                Building long-lasting relationships through reliability and deep customer understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======= TEAM ======= */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {["CEO & Founder", "Chief Operating Officer", "Head of Technology", "Head of Sales"].map(
            (role, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition">
                <div
                  className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center text-white mb-3 ${
                    i === 0
                      ? "bg-purple-600"
                      : i === 1
                      ? "bg-blue-500"
                      : i === 2
                      ? "bg-blue-400"
                      : "bg-green-500"
                  }`}
                >
                  <span className="text-lg font-semibold">xyz</span>
                </div>
                <h3 className="text-gray-700 font-medium">xyz</h3>
                <p className="text-gray-500 text-sm mt-1">{role}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* ======= CONTACT ======= */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="space-y-3 text-gray-600">
            <p>
              <strong>Our Office</strong><br />
              Apnaproperty Headquarters, 123, Nagpur, 440001, India
            </p>
            <p className="flex items-center gap-2"><Phone size={16} /> +91 xxxxxxxxxx</p>
            <p className="flex items-center gap-2"><Mail size={16} /> contact@apnaproperty.com</p>
          </div>
        </div>

        <form className="bg-gray-50 p-6 rounded-xl shadow-sm space-y-3">
          <input type="text" placeholder="Your Name" className="w-full border rounded-lg p-2" />
          <input type="email" placeholder="Your Email" className="w-full border rounded-lg p-2" />
          <input type="text" placeholder="Subject" className="w-full border rounded-lg p-2" />
          <textarea placeholder="Your Message" rows="4" className="w-full border rounded-lg p-2" />
          <button className="bg-green-700 text-white w-full py-2 rounded-lg hover:bg-green-800">
            Send Message
          </button>
        </form>
      </section>

      {/* ======= CTA FOOTER ======= */}
      <footer className="bg-teal-700 text-white text-center py-10">
        <h2 className="text-2xl font-semibold mb-3">Post Your Property For Free</h2>
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-medium">
          + Post My Listing Now
        </button>
        <p className="text-teal-100 mt-4 text-sm">© 2025 ApnaProperty. All rights reserved.</p>
      </footer>
    </div>
  );
}
