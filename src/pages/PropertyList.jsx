import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import FilterSidebar from "../components/FilterSidebar";
import PropertyCard from "../components/PropertyCard";
import SearchBar from "../components/SearchBar";

const PropertyList = () => {
  const [searchParams] = useSearchParams();
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    search: searchParams.get('search') || "",
    location: searchParams.get('location') || "",
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    minSqft: "",
    maxSqft: ""
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams();
        
        if (filters.search) params.append('search', filters.search);
        if (filters.location) params.append('location', filters.location);
        if (filters.propertyType) params.append('propertyType', filters.propertyType);
        if (filters.minPrice) params.append('minPrice', filters.minPrice);
        if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
        if (filters.minSqft) params.append('minSqft', filters.minSqft);
        if (filters.maxSqft) params.append('maxSqft', filters.maxSqft);

        const response = await axios.get(
          `http://localhost:5000/api/properties?${params.toString()}`
        );

        setProperties(response.data);

      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [filters]);

  const handleSearch = (searchData) => {
    setFilters(prev => ({ ...prev, ...searchData }));
  };

  const renderContent = () => {
    if (loading) {
      return (
        <p className="text-gray-500 text-center col-span-full">
          Loading properties...
        </p>
      );
    }

    if (error) {
      return (
        <p className="text-red-600 text-center col-span-full">
          {error}
        </p>
      );
    }

    if (properties.length === 0) {
      return (
        <p className="text-gray-500 text-center col-span-full">
          No properties match your search criteria.
        </p>
      );
    }

    return (
      properties.map((p) => <PropertyCard key={p.id} property={p} />)
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <FilterSidebar filters={filters} setFilters={setFilters} />
        <div className="flex-1">
          <div className="mb-4 text-gray-600">
            {!loading && !error && (
              <p>Found {properties.length} properties</p>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;