import React from "react";

// HELPER: Inlined SVG icon for the location pin
const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    // text-gray-500 matches the location text color
    className="w-4 h-4 mr-1 flex-shrink-0 text-gray-500"
  >
    <path
      fillRule="evenodd"
      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.1.4-.22.655-.36a6.56 6.56 0 00.655-.406 3.33 3.33 0 00.52-.426c.158-.147.306-.301.443-.465.134-.16.26-.328.377-.504a4.99 4.99 0 00.442-1.1s.12-.24.17-.375.09-.27.12-.41a4.48 4.48 0 00.06-.41l.01-.12.01-.12.002-.03c.002-.03.004-.06.005-.09l.001-.03.001-.03c0-.01 0-.01.001-.02a4.99 4.99 0 00-5.07-4.756A4.99 4.99 0 005 10.03v.003l.001.03.001.03.001.03.005.09.004.06.002.03.01.12.01.12.06.41c.03.14.07.28.12.41s.12.24.17.375a4.99 4.99 0 00.442 1.1c.117.176.243.344.377.504.137.164.285.318.443.465.168.12.35.26.52.426a6.56 6.56 0 00.655.406c.255.14.47.26.655.36.096.05.186.1.281.14l.018.008.006.003zM10 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
      clipRule="evenodd"
    />
  </svg>
);

// HELPER: Formats price to match "2.5 Cr" and "85 Lac"
const formatPrice = (price) => {
  if (!price || isNaN(price)) return "Price on request";
  if (price >= 10000000) { // 1 Crore
    return `₹ ${(price / 10000000).toFixed(1)} Cr`;
  }
  if (price >= 100000) { // 1 Lakh
    return `₹ ${(price / 100000).toFixed(0)} Lac`;
  }
  // Fallback for smaller numbers
  return `₹ ${price.toLocaleString("en-IN")}`;
};

const PropertyCard = ({ property }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 flex flex-col h-full cursor-pointer hover:-translate-y-1 hover:shadow-xl">
    {/* Image container */}
    <div className="relative h-48">
      <img
        src={property?.imageUrl || "/placeholder.jpg"}
        alt={property?.title || "Untitled Property"}
        className="h-48 w-full object-cover"
      />
    </div>

    {/* Content container */}
    {/* Changed to p-4 for more padding and flex-grow to push location to bottom */}
    <div className="p-4 flex flex-col flex-grow">
      {/* Price: Moved to top, made larger */}
      <p className="text-emerald-600 font-semibold text-lg">
        {property?.price || "Price on request"}
      </p>

      {/* Title: Changed font weight and size */}
      <h3 className="font-semibold text-gray-900 text-lg mt-1">
        {property?.title || "No title"}
      </h3>

      {/* Area: Kept simple, as per design */}
      <p className="text-gray-500 text-sm mt-1">
        {property?.sqft ? `${property.sqft} sq ft` : "Area not available"}
      </p>
      
      {/* This spacer pushes the location to the bottom of the card */}
      <div className="flex-grow" />

      {/* Location: Moved to bottom, added icon */}
      <div className="flex items-center text-gray-500 text-sm mt-3">
        <LocationIcon />
        <span className="truncate">{property?.location || "Unknown location"}</span>
      </div>
    </div>
  </div>
);

export default PropertyCard;