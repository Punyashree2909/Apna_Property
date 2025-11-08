// --- MODIFIED: Added all necessary imports ---
import { Link, useParams } from "react-router-dom"; // <-- useParams added
import React, { useState, useEffect } from "react";   // <-- useState and useEffect added
import axios from "axios"; // <-- axios added
// -------------------------------------------

import {
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  ParkingSquare,
  Wifi,
  Dumbbell,
  Shield,
  Power,
  Waves,
  Menu,
  Phone,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

// --- Removed static images, as they will come from the backend ---
// import main from "../assets/images/main.jpg";
// ...etc

export default function PropertyDetails() {
  const { id } = useParams(); // <-- 1. Get the property 'id' from the URL

  // --- 2. State for holding our data, loading, and errors ---
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- 3. State for the sidebar contact form ---
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  // --- Animation object (no change) ---
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  // --- 4. useEffect to FETCH property data when the page loads ---
  useEffect(() => {
    const fetchProperty = async () => {
      setLoading(true);
      setError(null);
      try {
        // !!! Replace with your backend endpoint
        const response = await axios.get(
          `http://your-backend-api.com/api/properties/${id}`
        );
        setProperty(response.data); // <-- Save the fetched property in state
      } catch (err) {
        console.error("Error fetching property:", err);
        setError("Failed to load property details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty(); // Run the fetch function
  }, [id]); // <-- This effect re-runs if the 'id' in the URL ever changes

  
  // --- 5. Handlers for the sidebar contact form ---
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Sending...');

    try {
      // !!! Replace with your agent contact endpoint
      await axios.post('http://your-backend-api.com/api/contact-agent', {
        ...formData,
        propertyId: id, // <-- Include the property ID in the request
        propertyTitle: property.title // <-- Send the title too!
      });
      setFormStatus('Request sent successfully!');
      setFormData({ name: '', email: '', phone: '' }); // Clear form
    } catch (err) {
      console.error("Error sending request:", err);
      setFormStatus('Failed to send request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  // --- End of new logic section ---


  // --- 6. Handle Loading, Error, and Not Found states ---
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-600">Loading property details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-600">Property not found.</p>
      </div>
    );
  }
  // --- End of conditional rendering ---


  // --- 7. If data is loaded, render the dynamic component ---
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* ====== NAVBAR (commented out, no change) ====== */}

      {/* ====== HERO IMAGE (Now Dynamic) ====== */}
      <motion.div
        className="w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          // <-- MODIFIED: Use the main image from the property data
          src={property.images ? property.images[0] : '/placeholder-image.jpg'} 
          alt={property.title}
          className="w-full h-[380px] sm:h-[450px] object-cover"
        />
      </motion.div>

      {/* ====== MAIN CONTENT ====== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 px-4 flex-grow">
        {/* ==== LEFT COLUMN (Now Dynamic) ==== */}
        <div className="lg:col-span-2 space-y-8">
          {/* Title */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <h1 className="text-3xl font-bold text-gray-900">
              {property.title} {/* <-- MODIFIED */}
            </h1>
            <div className="flex items-center text-gray-500 mt-1 text-sm sm:text-base">
              <MapPin className="w-4 h-4 mr-1" />
              {property.address} {/* <-- MODIFIED */}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            className="flex flex-wrap gap-4 sm:gap-6 border-t border-b py-4 text-gray-700"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <div className="flex items-center">
              <BedDouble className="w-4 h-4 mr-2" />
              {property.bedrooms} Bedrooms {/* <-- MODIFIED */}
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-2" />
              {property.bathrooms} Bathrooms {/* <-- MODIFIED */}
            </div>
            <div className="flex items-center">
              <Ruler className="w-4 h-4 mr-2" />
              {property.area} sqft {/* <-- MODIFIED */}
            </div>
            <div className="flex items-center">
              {property.furnishingStatus} {/* <-- MODIFIED */}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600 leading-relaxed">
              {property.description} {/* <-- MODIFIED */}
            </p>
          </motion.div>

          {/* Amenities (Now Dynamic) */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
            <h2 className="text-xl font-semibold mb-3">Amenities</h2>
            {/* <-- MODIFIED: This now dynamically renders based on boolean flags --> */}
            {/* Your backend should send data like: amenities: { parking: true, gym: false, ... } */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700">
              {property.amenities.parking && (
                <div className="flex items-center">
                  <ParkingSquare className="w-4 h-4 mr-2" /> Dedicated Parking
                </div>
              )}
              {property.amenities.gym && (
                <div className="flex items-center">
                  <Dumbbell className="w-4 h-4 mr-2" /> Gym Access
                </div>
              )}
              {property.amenities.pool && (
                <div className="flex items-center">
                  <Waves className="w-4 h-4 mr-2" /> Swimming Pool
                </div>
              )}
              {property.amenities.security && (
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" /> 24/7 Security
                </div>
              )}
              {property.amenities.wifi && (
                <div className="flex items-center">
                  <Wifi className="w-4 h-4 mr-2" /> High-Speed Internet
                </div>
              )}
              {property.amenities.powerBackup && (
                <div className="flex items-center">
                  <Power className="w-4 h-4 mr-2" /> Power Backup
                </div>
              )}
            </div>
          </motion.div>

          {/* Location (Now Dynamic) */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}>
            <h2 className="text-xl font-semibold mb-3">Location</h2>
            <iframe 
              src={property.locationMapUrl} // <-- MODIFIED
              className="w-full h-64 rounded-xl" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </motion.div>

          {/* Similar Properties (Kept static for now, but could be dynamic) */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5}>
            <h2 className="text-2xl font-bold mb-4">Similar Properties Nearby</h2>
            {/* This section is still using the hard-coded 'similarProps' array. */}
            {/* Ideally, your backend would send this too (e.g., property.similarProperties) */}
            <div className="grid md:grid-cols-3 gap-4">
              {property.similarProperties && property.similarProperties.map((prop, i) => ( // <-- MODIFIED
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  <div className="rounded-2xl shadow-sm hover:shadow-lg overflow-hidden bg-white transition">
                    <img
                      src={prop.img}
_                   alt={prop.title}
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{prop.title}</h3>
                      <p className="text-gray-500 text-sm">{prop.price}</p>
    s               <div className="text-gray-400 text-sm mt-1">
                        {prop.beds} Beds • {prop.baths} Baths • {prop.area}
                      </div>
                    {/* Link to the new property details page */}
                      <Link to={`/property/${prop._id}`} className="w-full block text-center mt-3 bg-green-700 text-white py-2 rounded-lg hover:bg-green-800">
                        View Details
                      </Link>
                    </div>
          _       </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ==== RIGHT SIDEBAR (Now Dynamic) ==== */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          <div className="p-5 rounded-2xl sticky top-4 shadow-md bg-white">
            <h2 className="text-2xl font-bold text-green-700 mb-1">
key         {/* <-- MODIFIED: Formats the number as Indian Rupees --> */}
              {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(property.price)} / Month
_           </h2>
            <p className="text-gray-500 text-sm mb-4">
              Negotiable. Deposit {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(property.deposit)}
            </p>
            <div className="border-t pt-3">
              <h3 className="font-semibold text-lg mb-2">Contact Agent</h3>
              {/* --- MODIFIED: Hooked up the form --- */}
              <form className="space-y-2" onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="name" // <-- ADDED
                  placeholder="Your Name"
                  className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-green-700"
                  value={formData.name} // <-- ADDED
                  onChange={handleFormChange} // <-- ADDED
                  required // <-- ADDED
                />
                <input
                  type="email"
                  name="email" // <-- ADDED
                  placeholder="Your Email"
                  className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-green-700"
                  value={formData.email} // <-- ADDED
                  onChange={handleFormChange} // <-- ADDED
                  required // <-- ADDED
                />
                <input
                  type="text"
                  name="phone" // <-- ADDED
i               placeholder="Your Phone Number"
                  className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-green-700"
                  value={formData.phone} // <-- ADDED
                  onChange={handleFormChange} // <-- ADDED
                  required // <-- ADDED
                />
                <button 
                  type="submit" // <-- ADDED
                  className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 disabled:bg-gray-400"
                  disabled={isSubmitting} // <-- ADDED
                >
                  {isSubmitting ? 'Sending...' : 'Request a Call Back'} {/* <-- MODIFIED */}
                </button>

                {/* --- ADDED: Form status message --- */}
                {formStatus && (
                  <p className={`text-center text-sm ${
                    formStatus.includes("Failed") ? "text-red-600" : "text-green-700"
                  }`}>
                    {formStatus}
                  </p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ====== FOOTER (no change) ====== */}
      <motion.footer
        className="bg-green-700 text-white text-center py-12 mt-12"
a       initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-3">
          List Your Property With Us
        </h2>
        <button className="bg-white text-green-700 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold">
          Get Started
        </button>
        <div className="mt-6 text-sm text-green-100">
          © 2025 ApnaProperty. All rights reserved.
        </div>
      </motion.footer>
    </div>
  );
}