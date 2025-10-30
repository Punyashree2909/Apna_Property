import React from "react";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* Column 1: Contact Information */}
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

        {/* Column 2: Contact Form */}
        <form className="bg-gray-50 p-8 rounded-xl shadow-sm space-y-4 border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Send us a message</h3>
          <div>
            <label htmlFor="name" className="sr-only">Your Name</label>
            <input 
              type="text" 
              id="name"
              placeholder="Your Name" 
              className="w-full border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500 transition" 
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Your Email</label>
            <input 
              type="email" 
              id="email"
              placeholder="Your Email" 
              className="w-full border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500 transition" 
            />
          </div>
          <div>
            <label htmlFor="subject" className="sr-only">Subject</label>
            <input 
              type="text" 
              id="subject"
              placeholder="Subject" 
              className="w-full border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500 transition" 
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea 
              id="message"
              placeholder="Your Message" 
              rows="5" 
              className="w-full border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500 transition" 
            />
          </div>
          <button 
            type="submit"
            className="bg-green-700 text-white w-full py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}