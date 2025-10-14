// src/pages/PropertyDetails.jsx
import React from "react";
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

export default function PropertyDetails() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const similarProps = [
    {
      title: "Apartment",
      price: "₹20,000 / Month",
      img: "./assets/images/apartment1.jpg",
      beds: 2,
      baths: 2,
      area: "1000 sqft",
    },
    {
      title: "Villa",
      price: "₹45,000 / Month",
      img: "./assets/images/villa1.jpg",
      beds: 4,
      baths: 3,
      area: "2500 sqft",
    },
    {
      title: "Studio",
      price: "₹10,000 / Month",
      img: "./assets/images/studio1.jpg",
      beds: 1,
      baths: 1,
      area: "500 sqft",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* ====== NAVBAR ====== */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="ApnaProperty" className="w-8" />
            <span className="text-xl font-bold text-green-700">
              ApnaProperty
            </span>
          </div>
          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-green-700">
              Buy/Rent
            </a>
            <a href="#" className="hover:text-green-700">
              Sell
            </a>
            <a href="#" className="hover:text-green-700">
              Home Loan
            </a>
            <a href="#" className="hover:text-green-700">
              Advice
            </a>
            <a href="#" className="hover:text-green-700">
              Help
            </a>
            <a href="#" className="hover:text-green-700">
              Contact
            </a>
          </nav>
          <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 hidden md:block">
            Post Property
          </button>
          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </header>

      {/* ====== HERO IMAGE ====== */}
      <motion.div
        className="w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="./assets/images/main.jpg"
          alt="Property Main"
          className="w-full h-[380px] sm:h-[450px] object-cover"
        />
      </motion.div>

      {/* ====== MAIN CONTENT ====== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 px-4 flex-grow">
        {/* ==== LEFT COLUMN ==== */}
        <div className="lg:col-span-2 space-y-8">
          {/* Title */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <h1 className="text-3xl font-bold text-gray-900">
              Luxurious 3BHK Apartment in Borgaon
            </h1>
            <div className="flex items-center text-gray-500 mt-1 text-sm sm:text-base">
              <MapPin className="w-4 h-4 mr-1" />
              Gokul Society, Main Road, Borgaon, Nagpur
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
              <BedDouble className="w-4 h-4 mr-2" />3 Bedrooms
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-2" />2 Bathrooms
            </div>
            <div className="flex items-center">
              <Ruler className="w-4 h-4 mr-2" />1200 sqft
            </div>
            <div className="flex items-center">Semi-Furnished</div>
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600 leading-relaxed">
              This stunning 3BHK apartment in Gokul Society, Borgaon, Nagpur, offers
              unparalleled comfort and modern living. Boasting spacious rooms, elegant
              finishes, and abundant natural light, this home is perfect for families seeking
              a serene yet connected lifestyle. The apartment features a contemporary kitchen
              with ample storage, well-appointed bedrooms, and modern bathrooms designed for
              convenience.
            </p>
          </motion.div>

          {/* Amenities */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
            <h2 className="text-xl font-semibold mb-3">Amenities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700">
              <div className="flex items-center">
                <ParkingSquare className="w-4 h-4 mr-2" />
                Dedicated Parking
              </div>
              <div className="flex items-center">
                <Dumbbell className="w-4 h-4 mr-2" />
                Gym Access
              </div>
              <div className="flex items-center">
                <Waves className="w-4 h-4 mr-2" />
                Swimming Pool
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                24/7 Security
              </div>
              <div className="flex items-center">
                <Wifi className="w-4 h-4 mr-2" />
                High-Speed Internet
              </div>
              <div className="flex items-center">
                <Power className="w-4 h-4 mr-2" />
                Power Backup
              </div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}>
            <h2 className="text-xl font-semibold mb-3">Location</h2>
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center text-gray-600">
              Map showing location of Gokul Society, Borgaon, Nagpur
            </div>
          </motion.div>

          {/* Similar Properties */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5}>
            <h2 className="text-2xl font-bold mb-4">Similar Properties Nearby</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {similarProps.map((prop, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  <div className="rounded-2xl shadow-sm hover:shadow-lg overflow-hidden bg-white transition">
                    <img
                      src={prop.img}
                      alt={prop.title}
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{prop.title}</h3>
                      <p className="text-gray-500 text-sm">{prop.price}</p>
                      <div className="text-gray-400 text-sm mt-1">
                        {prop.beds} Beds • {prop.baths} Baths • {prop.area}
                      </div>
                      <button className="w-full mt-3 bg-green-700 text-white py-2 rounded-lg hover:bg-green-800">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ==== RIGHT SIDEBAR ==== */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          <div className="p-5 rounded-2xl sticky top-4 shadow-md bg-white">
            <h2 className="text-2xl font-bold text-green-700 mb-1">
              ₹25,000 / Month
            </h2>
            <p className="text-gray-500 text-sm mb-4">Negotiable. Deposit ₹50,000</p>
            <div className="border-t pt-3">
              <h3 className="font-semibold text-lg mb-2">Contact Agent</h3>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-green-700"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-green-700"
                />
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-green-700"
                />
                <button className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800">
                  Request a Call Back
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ====== FOOTER ====== */}
      <motion.footer
        className="bg-green-700 text-white text-center py-12 mt-12"
        initial={{ opacity: 0 }}
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
