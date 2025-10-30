// import React from "react";

const PropertyCard = ({ property }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 flex flex-col h-full cursor-pointer hover:-translate-y-1 hover:shadow-xl">
    <div className="relative h-48">
      <img
        src={property?.image || "/placeholder.jpg"}
        alt={property?.title || "Untitled Property"}
        className="h-48 w-full object-cover"
      />
    </div>
    <div className="p-3">
      <h3 className="font-medium text-gray-800 truncate">
        {property?.title || "No title"}
      </h3>
      <p className="text-gray-500 text-sm">{property?.location || "Unknown location"}</p>
      <p className="text-emerald-600 font-semibold mt-2">
        ₹{" "}
        {property?.price
          ? (property.price / 10000000).toFixed(1) + " Cr"
          : "Price not available"}
      </p>
      <div className="text-xs text-gray-500 mt-1">
        {property?.beds || 0} Beds · {property?.baths || 0} Baths ·{" "}
        {property?.area || 0} Sq.ft
      </div>
    </div>
  </div>
);

export default PropertyCard;
