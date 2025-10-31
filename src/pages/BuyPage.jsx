import React, { useState, useEffect } from "react";
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
import Modern3BHKApparment from "@/assets/images/Modern 3BHK Apartment.jpg";
import Elegant5BHKVilla from "@/assets/images/Elegant 5BHK Villa.jpg";
import PrimeCommercialOffice from "@/assets/images/Prime Commercial Office.jpg";
import ExclusivePenthouse from "@/assets/images/Exclusive Penthouse.jpg";
import CompactStudioApartment from "@/assets/images/Compact Studio Apartment.jpg";
import SprawlingFarmhouse from "@/assets/images/Sprawling Farmhouse.jpg";
import Luxury4BHKApartment from "@/assets/images/Luxury 4BHK Apartment.jpg";
import ModernDuplexHouse from "@/assets/images/Modern Duplex House.jpg";
import SeaFacingVilla from "@/assets/images/Sea-Facing Villa.jpg";
import ModernOfficeSpace from "@/assets/images/Modern Office Space.jpg";
import Compact2BHKFlat from "@/assets/images/Compact 2BHK Flat.jpg";
import ElegantTownhouse from "@/assets/images/Elegant Townhouse.jpg";

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

// 🏘️ Property Data
const properties = [
  {
    id: 1,
    title: "Modern 3BHK Apartment",
    price: "₹ 1.25 Cr",
    area: "1,800 sqft",
    type: "Ready to Move",
    tag: "Premium",
    image: Modern3BHKApparment,
    agent: "Rohan Sharma",
    updated: "2 days ago",
    location: [19.076, 72.8777],
  },
  {
    id: 2,
    title: "Elegant 5BHK Villa",
    price: "₹ 3.50 Cr",
    area: "3,200 sqft",
    type: "Under Construction",
    tag: "Verified",
    image: Elegant5BHKVilla,
    agent: "Priya Singh",
    updated: "1 week ago",
    location: [28.6139, 77.209],
  },
  {
    id: 3,
    title: "Prime Commercial Office",
    price: "₹ 80 Lakh",
    area: "1,200 sqft",
    type: "Ready to Move",
    image: PrimeCommercialOffice,
    agent: "Arjun Reddy",
    updated: "3 days ago",
    location: [12.9716, 77.5946],
  },
{
  id: 4,
  title: "Exclusive Penthouse",
  price: "₹ 5.00 Cr",
  area: "4,500 sqft",
  type: "Ready to Move",
  tag: "Premium",
  image: ExclusivePenthouse,
  agent: "Sneha Rao",
  updated: "4 days ago",
  location: [18.5204, 73.8567], // Pune
},

  {
    id: 5,
    title: "Compact Studio Apartment",
    price: "₹ 45 Lakh",
    area: "600 sqft",
    type: "Ready to Move",
    tag: "Verified",
    image: CompactStudioApartment,
    agent: "Karan Mehta",
    updated: "1 day ago",
    location: [13.0827, 80.2707],
  },
  {
    id: 6,
    title: "Sprawling Farmhouse",
    price: "₹ 2.10 Cr",
    area: "2.5 Acres",
    type: "Ready to Move",
    image: SprawlingFarmhouse,
    agent: "Deepika Prasad",
    updated: "5 days ago",
    location: [26.9124, 75.7873],
  },
  {
    id: 7,
    title: "Luxury 4BHK Apartment",
    price: "₹ 2.80 Cr",
    area: "2,300 sqft",
    type: "Ready to Move",
    image: Luxury4BHKApartment,
    agent: "Ankit Verma",
    updated: "6 days ago",
    location: [23.0225, 72.5714],
  },
  {
    id: 8,
    title: "Modern Duplex House",
    price: "₹ 1.95 Cr",
    area: "2,000 sqft",
    type: "Ready to Move",
    tag: "Premium",
    image: ModernDuplexHouse,
    agent: "Shreya Patil",
    updated: "1 day ago",
    location: [21.1702, 72.8311],
  },
 {
  id: 9,
  title: "Sea-Facing Villa",
  price: "₹ 4.75 Cr",
  area: "3,800 sqft",
  type: "Ready to Move",
  tag: "Verified",
  image: SeaFacingVilla,
  agent: "Rahul Kapoor",
  updated: "2 days ago",
  location: [15.2993, 74.124],
},
  {
    id: 10,
    title: "Modern Office Space",
    price: "₹ 1.10 Cr",
    area: "1,500 sqft",
    type: "Under Construction",
    image: ModernOfficeSpace,
    agent: "Divya Chauhan",
    updated: "1 week ago",
    location: [17.385, 78.4867],
  },
 {
  id: 11,
  title: "Compact 2BHK Flat",
  price: "₹ 70 Lakh",
  area: "950 sqft",
  type: "Ready to Move",
  image: Compact2BHKFlat,
  agent: "Manish Jain",
  updated: "3 days ago",
  location: [22.7196, 75.8577],
},
  {
    id: 12,
    title: "Elegant Townhouse",
    price: "₹ 1.75 Cr",
    area: "2,200 sqft",
    type: "Ready to Move",
    tag: "Verified",
    image: ElegantTownhouse,
    agent: "Neha Bansal",
    updated: "5 days ago",
    location: [25.5941, 85.1376],
  },
];

// 📍 Auto-fit map bounds
function FitBounds({ markers }) {
  const map = useMap();
  useEffect(() => {
    if (markers.length > 0) {
      const group = new L.featureGroup(markers.map((p) => L.marker(p.location)));
      map.fitBounds(group.getBounds(), { padding: [60, 60] });
    }
  }, [markers, map]);
  return null;
}

// 💡 Property Card
const PropertyCard = ({ title, image, price, area, type, tag, agent, updated }) => (
  <Card className="overflow-hidden shadow-md hover:shadow-xl transition rounded-2xl border border-gray-100">
    <img src={image} alt={title} className="w-full h-56 object-cover" />
    <CardContent className="p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {tag && (
          <Badge variant={tag === "Verified" ? "default" : "secondary"} className="text-xs">
            {tag}
          </Badge>
        )}
      </div>
      <p className="text-xl font-semibold text-emerald-600 mb-2">{price}</p>
      <p className="text-sm text-gray-600 mb-1">{area}</p>
      <p className="text-sm text-gray-600 mb-3">{type}</p>
      <p className="text-xs text-gray-500">
        Agent: {agent} • {updated}
      </p>
    </CardContent>
  </Card>
);

export default function PropertyListingPage() {
  const [view, setView] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(properties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProperties = properties.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Filters */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Input placeholder="Enter Location (e.g., Mumbai)" className="w-full md:w-72" />
            <Button variant="secondary" className="flex items-center gap-1">
              <Search className="w-4 h-4" /> Search
            </Button>
          </div>

          {/* <div className="flex flex-wrap items-center gap-2">
            <Select>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Buy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="buy">Buy</SelectItem>
                <SelectItem value="rent">Rent</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Residential" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="flex items-center gap-1">
              <Filter className="w-4 h-4" /> More Filters
            </Button>
          </div> */}

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
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      {view === "list" ? (
        <>
          <div className="max-w-7xl mx-auto py-10 px-4 sm:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProperties.map((p) => (
                <PropertyCard key={p.id} {...p} />
              ))}
            </div>

            {/* Pagination with page numbers */}
            <div className="flex justify-center items-center gap-3 mt-10 flex-wrap">
              <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
              >
                ← Previous
              </Button>

              {[...Array(totalPages)].map((_, index) => (
                <Button
                  key={index}
                  variant={currentPage === index + 1 ? "default" : "outline"}
                  onClick={() => setCurrentPage(index + 1)}
                  className="w-10"
                >
                  {index + 1}
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
          </div>
        </>
      ) : (
        // 🗺️ Map View
        <div className="relative w-full h-[85vh]">
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={5}
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
                <Popup>
                  <div className="w-48">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-24 object-cover rounded-md mb-2"
                    />
                    <p className="font-semibold">{p.title}</p>
                    <p className="text-emerald-600 text-sm">{p.price}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}
    </div>
  );
}
