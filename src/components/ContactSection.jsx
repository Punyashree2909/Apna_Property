// --- ADD THESE IMPORTS ---
import React, { useState } from "react";
import axios from "axios";
// -------------------------

import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  // --- ADD THIS ENTIRE SECTION FOR FORM HANDLING ---
  const initialFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Updates state as the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Runs when the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault(); // Stops the page from reloading
    setIsSubmitting(true);
    setStatusMessage("Sending...");

    try {
      // !!! IMPORTANT: Replace this with your backend's "contact" endpoint
      // It's probably the same one as your AboutUs page
      const response = await axios.post(
        "http://localhost:5000/api/contact", 
        formData
      );

      // On success:
      setStatusMessage("Message sent successfully!");
      setFormData(initialFormData); // Clear the form fields

    } catch (error) {
      console.error("Error sending message:", error);
      // Check for backend-specific error messages
      if (error.response && error.response.data && error.response.data.message) {
         setStatusMessage(error.response.data.message);
      } else {
         setStatusMessage("Error: Could not send message. Please try again.");
      }
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };
  // --- END OF ADDED SECTION ---

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* Column 1: Contact Information (No Changes) */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-bold text-lg text-gray-700">Our Office</h3>
              <p className="mt-1">
                Apnaproperty Headquarters, 123, Nagpur, 440001, India
              </p>
            </div>
            <p className="flex items-center gap-3">
              <Phone size={18} className="text-green-700" />
              <span>+91 xxxxxxxxxx</span>
            </p>
            <p className="flex items-center gap-3">
              <Mail size={18} className="text-green-700" />
              <span>contact@apnaproperty.com</span>
            </p>
          </div>
        </div>

        {/* Column 2: Contact Form (MODIFIED) */}
        <form 
          onSubmit={handleSubmit} // <-- MODIFIED: Added submit handler
          className="bg-gray-50 p-8 rounded-xl shadow-sm space-y-4 border border-gray-200"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Send us a message</h3>
          <div>
            <label htmlFor="name" className="sr-only">Your Name</label>
            <input 
              type="text" 
              id="name"
              name="name" // <-- MODIFIED: Added name
              placeholder="Your Name" 
              className="w-full border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500 transition" 
              value={formData.name} // <-- MODIFIED: Added value
              onChange={handleChange} // <-- MODIFIED: Added onChange
              required // <-- MODIFIED: Added required
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Your Email</label>
            <input 
              type="email" 
              id="email"
              name="email" // <-- MODIFIED: Added name
              placeholder="Your Email" 
              className="w-full border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500 transition" 
              value={formData.email} // <-- MODIFIED: Added value
              onChange={handleChange} // <-- MODIFIED: Added onChange
              required // <-- MODIFIED: Added required
            />
          </div>
          <div>
            <label htmlFor="subject" className="sr-only">Subject</label>
            <input 
              type="text" 
              id="subject"
              name="subject" // <-- MODIFIED: Added name
              placeholder="Subject" 
              className="w-full border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500 transition" 
              value={formData.subject} // <-- MODIFIED: Added value
              onChange={handleChange} // <-- MODIFIED: Added onChange
              required // <-- MODIFIED: Added required
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea 
              id="message"
              name="message" // <-- MODIFIED: Added name
              placeholder="Your Message" 
              rows="5" 
              className="w-full border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500 transition" 
              value={formData.message} // <-- MODIFIED: Added value
              onChange={handleChange} // <-- MODIFIED: Added onChange
              required // <-- MODIFIED: Added required
            />
          </div>
          <button 
            type="submit"
section   className="bg-green-700 text-white w-full py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors duration-300 disabled:bg-gray-400"
            disabled={isSubmitting} // <-- MODIFIED: Added disabled state
          >
            {/* <-- MODIFIED: Button text changes --> */}
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

      </div>
    </section>
  );
}