// src/pages/AboutUs.jsx
import React from "react";
import { Mail, Phone, MapPin, Lightbulb, ShieldCheck, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import aboutUs from "../assets/images/About-Us.jpg";

export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen">
      

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
          src={aboutUs}
          alt="About ApnaProperty"
          className="rounded-2xl shadow-md w-full object-cover h-full"
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
      {/* <section className="max-w-6xl mx-auto px-4 py-16 text-center">
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
      </section> */}

      {/* // ======= TEAM SECTION ======= */}


<section className="max-w-6xl mx-auto px-4 py-16 text-center">
  <h2 className="text-3xl font-bold mb-12 text-gray-900">
    Meet Our <span className="text-green-700">Team</span>
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
    {[
      { name: "Priya Sharma", role: "CEO & Founder", color: "bg-purple-600", glow: "shadow-purple-500/50" },
      { name: "Rohan Mehta", role: "Chief Operating Officer", color: "bg-blue-500", glow: "shadow-blue-500/50" },
      { name: "Ananya Patel", role: "Head of Technology", color: "bg-cyan-500", glow: "shadow-cyan-500/50" },
      { name: "Arjun Singh", role: "Head of Sales", color: "bg-green-600", glow: "shadow-green-500/50" },
    ].map((member, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.2 }}
        className="group relative p-6 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
      >
        {/* Profile circle with glow */}
        <div
          className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white text-xl font-semibold ${member.color} ${member.glow} shadow-lg group-hover:scale-110 transition-transform`}
        >
          {member.name.split(" ")[0][0]}
          {member.name.split(" ")[1][0]}
        </div>

        {/* Info */}
        <h3 className="mt-4 text-lg font-semibold text-gray-800">{member.name}</h3>
        <p className="text-sm text-gray-500">{member.role}</p>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-700/90 to-green-800/90 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex flex-col items-center justify-center text-white p-4">
          <p className="text-sm italic mb-2">“Dedicated to excellence and innovation.”</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-gray-200 transition">
              <i className="fab fa-linkedin text-lg"></i>
            </a>
            <a href="#" className="hover:text-gray-200 transition">
              <i className="fab fa-twitter text-lg"></i>
            </a>
            <a href="#" className="hover:text-gray-200 transition">
              <i className="fab fa-envelope text-lg"></i>
            </a>
          </div>
        </div>

        {/* Soft glow ring around card */}
        <div
          className={`absolute inset-0 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 ${member.glow} transition-opacity duration-500 pointer-events-none`}
        ></div>
      </motion.div>
    ))}
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

      
    </div>
  );
}
