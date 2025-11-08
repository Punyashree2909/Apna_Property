// src/pages/AboutUs.jsx

// --- ADD THESE IMPORTS ---
import React, { useState } from "react"; 
import axios from "axios"; 
// -------------------------

import { Mail, Phone, MapPin, Lightbulb, ShieldCheck, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import aboutUs from "../assets/images/About-Us.jpg";

export default function AboutUs() {

  // --- ADD THIS ENTIRE SECTION FOR FORM HANDLING ---
  const initialFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(""); // To show "Message Sent!" or "Error"

  // This function updates our state as the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // This function runs when the user clicks the "Send Message" button
  const handleSubmit = async (e) => {
    e.preventDefault(); // This stops the page from reloading on submit
    setIsSubmitting(true);
    setStatusMessage("Sending...");

    try {
      // !!! IMPORTANT: Replace this URL with your backend's "contact" endpoint
      const response = await axios.post(
        "http://your-backend-api.com/api/contact", 
        formData
      );

      // On success:
      setStatusMessage("Message sent successfully!");
      setFormData(initialFormData); // Clear the form fields

    } catch (error) {
      console.error("Error sending message:", error);
      setStatusMessage("Error: Could not send message. Please try again.");
    } finally {
      setIsSubmitting(false); // Re-enable the button whether it succeeded or failed
    }
  };
  // --- END OF ADDED SECTION ---


  return (
    <div className="bg-white min-h-screen">
      
      {/* ======= ABOUT SECTION ======= */}
      {/* ... (no changes here) ... */}
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
      {/* ... (no changes here) ... */}
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
    L       <p className="text-gray-600">
            Our vision is to be the leading real estate platform, known for innovation, integrity, 
            and customer satisfaction. We aim to revolutionize the property market through technology 
            and trust, making property ownership a joyful experience for all.
          </p>
        </div>
      </section>

      {/* ======= OUR VALUES ======= */}
      {/* ... (no changes here) ... */}
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
          _ </div>

            <div className="flex flex-col items-center">
              <div className="bg-green-100 text-green-700 p-4 rounded-full mb-3">
                <Handshake size={28} />
              </div>
              <h3 className="font-semibold text-lg">Trust</h3>
Read       <p className="text-gray-600 mt-2">
                Building long-lasting relationships through reliability and deep customer understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======= TEAM SECTION ======= */}
      {/* ... (no changes here) ... */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">
          Meet Our <span className="text-green-700">Team</span>
        </h2>
        {/* ... (rest of team section) ... */}
      </section>


      {/* ======= CONTACT ======= */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="space-y-3 text-gray-600">
            {/* ... (no changes to address info) ... */}
            <p>
              <strong>Our Office</strong><br />
              Apnaproperty Headquarters, 123, Nagpur, 440001, India
            </p>
            <p className="flex items-center gap-2"><Phone size={16} /> +91 xxxxxxxxxx</p>
            <p className="flex items-center gap-2"><Mail size={16} /> contact@apnaproperty.com</p>
          </div>
        </div>

        {/* --- THIS IS THE MODIFIED FORM --- */}
        <form 
          onSubmit={handleSubmit} // <-- MODIFIED: Added the submit handler
          className="bg-gray-50 p-6 rounded-xl shadow-sm space-y-3"
        >
          <input 
            type="text" 
            name="name" // <-- MODIFIED: Added name
            placeholder="Your Name" 
            className="w-full border rounded-lg p-2" 
            value={formData.name} // <-- MODIFIED: Added value
            onChange={handleChange} // <-- MODIFIED: Added onChange
            required // <-- MODIFIED: Added required
          />
          <input 
            type="email" 
            name="email" // <-- MODIFIED: Added name
            placeholder="Your Email" 
            className="w-full border rounded-lg p-2" 
            value={formData.email} // <-- MODIFIED: Added value
            onChange={handleChange} // <-- MODIFIED: Added onChange
            required // <-- MODIFIED: Added required
          />
          <input 
            type="text" 
            name="subject" // <-- MODIFIED: Added name
            placeholder="Subject" 
            className="w-full border rounded-lg p-2" 
            value={formData.subject} // <-- MODIFIED: Added value
            onChange={handleChange} // <-- MODIFIED: Added onChange
            required // <-- MODIFIED: Added required
          />
          <textarea 
            name="message" // <-- MODIFIED: Added name
            placeholder="Your Message" 
            rows="4" 
            className="w-full border rounded-lg p-2"
            value={formData.message} // <-- MODIFIED: Added value
            onChange={handleChange} // <-- MODIFIED: Added onChange
            required // <-- MODIFIED: Added required
          />
          <button 
            type="submit" // <-- MODIFIED: Added type="submit"
            disabled={isSubmitting} // <-- MODIFIED: Added disabled state
            className="bg-green-700 text-white w-full py-2 rounded-lg hover:bg-green-800 disabled:bg-gray-400" // <-- MODIFIED: Added disabled style
          >
            {/* <-- MODIFIED: Button text changes when submitting --> */}
            {isSubmitting ? "Sending..." : "Send Message"} 
          </button>
          
          {/* --- ADD THIS FOR STATUS MESSAGE --- */}
          {statusMessage && (
            <p className={`text-center text-sm ${
              statusMessage.includes("Error") ? "text-red-600" : "text-green-700"
            }`}>
              {statusMessage}
            </p>
          )}
          {/* ---------------------------------- */}
        </form>
        {/* --- END OF MODIFIED FORM --- */}

      </section>
    </div>
  );
}