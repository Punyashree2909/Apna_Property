import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import { Map, List, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// 🧭 Fix Leaflet icon issues
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// 📍 Auto-fit map bounds
function FitBounds({ markers }) {
  const map = useMap();
  useEffect(() => {
    if (markers.length > 0 && markers[0].location) {
      const group = new L.featureGroup(markers.map((p) => L.marker(p.location)));
      map.fitBounds(group.getBounds(), { padding: [60, 60] });
    }
  }, [markers, map]);
  return null;
}

// 💡 Property Card
const PropertyCard = ({
  title,
  image,
  price,
  area,
  type,
  tag,
  agent,
  updated,
  contact,
}) => {
  const [showContact, setShowContact] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <Card className="overflow-hidden shadow-md hover:shadow-xl transition rounded-2xl border border-gray-100 bg-white">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {tag && (
            <Badge
              variant={tag === "Verified" ? "default" : "secondary"}
              className="text-xs"
            >
              {tag}
            </Badge>
          )}
        </div>
        <p className="text-xl font-semibold text-emerald-600 mb-2">{price}</p>
        <p className="text-sm text-gray-600 mb-1">{area}</p>
        <p className="text-sm text-gray-600 mb-3">{type}</p>
        <div className="flex flex-col border-t border-gray-200 pt-4 mt-4 space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-semibold">
              {agent.charAt(0)}
            </div>
            <div>
              <span className="text-sm font-medium text-gray-900 block">
                {agent}
              </span>
              <span className="text-xs text-gray-500">{updated}</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs px-3 py-1 rounded-md"
              onClick={() => {
                setShowContact(!showContact);
                setShowPhone(false);
              }}
            >
              Contact Owner
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 text-xs px-3 py-1 rounded-md"
              onClick={() => {
                setShowPhone(!showPhone);
                setShowContact(false);
          _   }}
            >
              Get Phone No.
            </Button>
          </div>
          {showContact && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs text-gray-700 mt-2">
              <p><strong>Owner:</strong> {agent}</p>
              <p><strong>Phone:</strong> {contact?.phone}</p>
              <p><strong>Email:</strong> {contact?.email}</p>
            </div>
          )}
          {showPhone && (
            <Badge
              variant="secondary"
              className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full"
            >
              📞 {contact?.phone}
  s       </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};


export default function PropertyListingPage() {
  const [view, setView] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);
  const [properties, setProperties] = useState([]); 
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(""); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchBuyProperties = async () => { 
      setLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams();
        params.append('type', 'sale'); 
        params.append('page', currentPage);
        params.append('limit', itemsPerPage);
        if (searchQuery) {
          params.append('location', searchQuery);
        }

        const response = await axios.get(
          `http://localhost:5000/api/properties?${params.toString()}`
        );

        setProperties(response.data.properties);
        setTotalPages(response.data.totalPages);

      } catch (err) {
        console.error("Error fetching buy properties:", err);
        setError("Failed to load properties. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBuyProperties(); 
  }, [currentPage, searchQuery]); 

  const handleSearch = () => {
    setCurrentPage(1); 
    setSearchQuery(location); 
  };


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Filters */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Input 
              placeholder="Enter Location (e.g., Mumbai)" 
              className="w-full md:w-72"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button 
              variant="secondary" 
              className="flex items-center gap-1"
              onClick={handleSearch}
            >
              <Search className="w-4 h-4" /> Search
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={view === "list" ? "default" : "outline"}
              onClick={() => setView("list")}
              className="flex items-center gap-1"
            >
              <List className="w-4 h-4" /> List
            </Button>
            <Button
              variant={view === "map" ? "default" : "outline"}
              onClick={() => setView("map")}
              className="flex items-center gap-1"
            >
              <Map className="w-4 h-4" /> Map
s       </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      {view === "list" ? (
        <>
          <div className="max-w-7xl mx-auto py-10 px-4 sm:px-8">
            {/* --- NEW: Loading, Error, and No Results Logic --- */}
            {loading && <p className="text-center text-gray-600">Loading properties...</p>}
            {error && <p className="text-center text-red-600">{error}</p>}
            {!loading && !error && properties.length === 0 && (
              <p className="text-center text-gray-600">No properties found. Try a different search.</p>
            )}
            {/* -------------------------------------------------- */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* --- MODIFIED: Map over 'properties' state --- */}
              {properties.map((p) => (
                <PropertyCard key={p.id} {...p} />
              ))}
            </div>

            {/* Pagination (Now uses 'totalPages' from state) */}
            {!loading && !error && properties.length > 0 && (
            <div className="flex justify-center items-center gap-3 mt-10 flex-wrap">
              <Button
                variant="outline"
  s           disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
              >
                ← Previous
              </Button>

              {[...Array(totalPages)].map((_, index) => (
                <Button
                m key={index}
                  variant={currentPage === index + 1 ? "default" : "outline"}
                  onClick={() => setCurrentPage(index + 1)}
                  className="w-10"
                >
      nd       {index + 1}
                </Button>
              ))}

              <Button
                variant="outline"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
              >
                Next →
              </Button>
            </div>
            )}
          </div>
        </>
      ) : (
        // 🗺️ Map View (Now uses 'properties' state)
        <div className="relative w-full h-[85vh]">
          <MapContainer
            center={[20.5937, 78.9629]}
CSS         zoom={5}
            scrollWheelZoom={true}
            className="h-full w-full z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <FitBounds markers={properties} />
            {properties.map((p) => (
              <Marker key={p.id} position={p.location}>
CSS           <Popup>
                  <div className="w-48">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-24 object-cover rounded-md mb-2"
CSS             />
              _   <p className="font-semibold">{p.title}</p>
                    <p className="text-emerald-600 text-sm">{p.price}</p>
  Ind           </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
ind   </div>
      )}
    </div>
  );
}