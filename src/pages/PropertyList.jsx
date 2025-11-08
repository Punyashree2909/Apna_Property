import React, { useEffect, useState } from "react";
import axios from 'axios'; // <-- ADD THIS
import FilterSidebar from "../components/FilterSidebar";
import PropertyCard from "../components/PropertyCard";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    price: 5, // Assuming this is 5 Cr
    beds: "",
    area: 0
  });

  // --- ADD THESE NEW STATE VARIABLES ---
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // ------------------------------------

  // --- MODIFIED useEffect ---
  // This hook now runs once on load, AND anytime the 'filters' state changes.
  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true); // Show loading spinner
      setError(null);   // Clear old errors

      try {
        // 1. Build the URL parameters from your filters state
        const params = new URLSearchParams();
        
        // We only add filters if they have a value
        // Note: Your backend needs to know how to handle 'price=5' (e.g., as 5 Cr)
        params.append('price', filters.price * 10000000); // Send price in rupees
        if (filters.beds) {
          params.append('beds', filters.beds);
        }
        if (filters.area > 0) {
          params.append('area', filters.area);
        }

        // 2. Make the axios call with the parameters
        // !!! Replace with your backend properties endpoint
        const response = await axios.get(
          `http://your-backend-api.com/api/properties?${params.toString()}`
        );

        // 3. Set the properties from the response
        setProperties(response.data);

      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties. Please try again.");
      } finally {
        setLoading(false); // Hide loading spinner
      }
    };

    fetchProperties();
  }, [filters]); // <-- MODIFIED: The hook now depends on 'filters'
  // --- END OF MODIFIED useEffect ---


  // --- Helper function to render content ---
  const renderContent = () => {
    // 1. Show loading message
    if (loading) {
      return (
        <p className="text-gray-500 text-center col-span-full">
          Loading properties...
        </p>
      );
    }

    // 2. Show error message
    if (error) {
      return (
        <p className="text-red-600 text-center col-span-full">
          {error}
        </p>
      );
    }

    // 3. Show "No properties" message
    if (properties.length === 0) {
      return (
        <p className="text-gray-500 text-center col-span-full">
          No properties match your filters.
        </p>
      );
    }

    // 4. Show the properties
    return (
      properties.map((p) => <PropertyCard key={p._id} property={p} />) // Use p._id if from MongoDB
    );
  };
  // ----------------------------------------

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
      <FilterSidebar filters={filters} setFilters={setFilters} />
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* --- MODIFIED: Use the renderContent function --- */}
        {renderContent()}
      </div>
    </div>
  );
};

export default PropertyList;