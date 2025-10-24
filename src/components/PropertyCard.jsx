import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="border rounded-lg overflow-hidden bg-white hover:shadow-lg transition">
      <img
        src={property.image}
        alt={property.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-3">
        <h3 className="font-medium text-gray-800 truncate">{property.title}</h3>
        <p className="text-gray-500 text-sm">{property.location}</p>
        <p className="text-emerald-600 font-semibold mt-2">
          ₹ {(property.price / 10000000).toFixed(1)} Cr
        </p>
        <div className="text-xs text-gray-500 mt-1">
          {property.beds} Beds · {property.baths} Baths · {property.area} Sq.ft
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
