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
import Cozy1BHKApartment from "../assets/images/Cozy 1BHK Apartment.jpg";
import Modern2BHKFlat from "../assets/images/Modern 2BHK Flat.jpg";
import CompactStudioApartment from "../assets/images/compact studio apartment.jpg";
import Elegant3BHKFamilyHome from "../assets/images/Elegant 3BHK Family Home.jpg";
import LuxuryServiceApartment from "../assets/images/Luxury Service Apartment.jpg";
import Budget1BHKNearMetro from "../assets/images/Budget 1BHK Near Metro.jpg";
import CorporatePGRooms from "../assets/images/Corporate PG Rooms.jpg";
import Seaside2BHKApartment from "../assets/images/Seaside 2BHK Apartment.jpg";
import UrbanColivingSpace from "../assets/images/Urban Co-living Space.jpg";
import Modern2BHKApartment from "../assets/images/Modern 2BHK Apartment.jpg";
import StudentRoomNearCollege from "../assets/images/Student Room Near College.jpg";
import FamilyApartment from "../assets/images/Family Apartment.jpg"

// Fix Leaflet icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// 🏘️ Rent Properties Data
const rentProperties = [
  {
    id: 1,
    title: "Cozy 1BHK Apartment",
    price: "₹ 15,000/month",
    area: "600 sqft",
    type: "Fully Furnished",
    image: Cozy1BHKApartment,
    agent: "Neha Sharma",
    updated: "2 days ago",
    contact: {
      phone: "+91 98111 22334",
      email: "neha.sharma@propertymail.com",
    },
    location: [19.076, 72.8777], // Mumbai
  },
  {
    id: 2,
    title: "Modern 2BHK Flat",
    price: "₹ 25,000/month",
    area: "950 sqft",
    type: "Semi-Furnished",
    tag: "Verified",
    image: Modern2BHKFlat,
    agent: "Rohit Verma",
    updated: "3 days ago",
    contact: {
      phone: "+91 98222 33445",
      email: "rohit.verma@propertymail.com",
    },
    location: [28.6139, 77.209], // Delhi
  },
  {
    id: 3,
    title: "Compact Studio Apartment",
    price: "₹ 12,000/month",
    area: "450 sqft",
    type: "Furnished",
    tag: "Popular",
    image: CompactStudioApartment,
    agent: "Priya Nair",
    updated: "1 day ago",
    contact: {
      phone: "+91 98333 44556",
      email: "priya.nair@propertymail.com",
    },
    location: [13.0827, 80.2707], // Chennai
  },
  {
    id: 4,
    title: "Elegant 3BHK Family Home",
    price: "₹ 35,000/month",
    area: "1,600 sqft",
    type: "Semi-Furnished",
    tag: "Premium",
    image: Elegant3BHKFamilyHome,
    agent: "Ankit Mehta",
    updated: "4 days ago",
    contact: {
      phone: "+91 98444 55667",
      email: "ankit.mehta@propertymail.com",
    },
    location: [12.9716, 77.5946], // Bangalore
  },
  {
    id: 5,
    title: "Luxury Service Apartment",
    price: "₹ 80,000/month",
    area: "2,200 sqft",
    type: "Fully Furnished",
    image: LuxuryServiceApartment,
    agent: "Sneha Patil",
    updated: "1 week ago",
    contact: {
      phone: "+91 98555 66778",
      email: "sneha.patil@propertymail.com",
    },
    location: [18.5204, 73.8567], // Pune
  },
  {
    id: 6,
    title: "Budget 1BHK Near Metro",
    price: "₹ 10,000/month",
    area: "500 sqft",
    type: "Unfurnished",
    image: Budget1BHKNearMetro,
    agent: "Vikram Rao",
    updated: "2 days ago",
    contact: {
      phone: "+91 98666 77889",
      email: "vikram.rao@propertymail.com",
    },
    location: [26.9124, 75.7873], // Jaipur
  },
  {
    id: 7,
    title: "Corporate PG Rooms",
    price: "₹ 8,500/month",
    area: "300 sqft",
    type: "Shared Accommodation",
    tag: "Popular",
    image: CorporatePGRooms,
    agent: "Aditi Singh",
    updated: "1 day ago",
    contact: {
      phone: "+91 98777 88990",
      email: "aditi.singh@propertymail.com",
    },
    location: [23.0225, 72.5714], // Ahmedabad
  },
  {
    id: 8,
    title: "Seaside 2BHK Apartment",
    price: "₹ 30,000/month",
    area: "1,100 sqft",
    type: "Fully Furnished",
    tag: "Verified",
    image: Seaside2BHKApartment,
    agent: "Rahul Kapoor",
    updated: "3 days ago",
    contact: {
      phone: "+91 98888 99001",
      email: "rahul.kapoor@propertymail.com",
    },
    location: [15.2993, 74.124], // Goa
  },
  {
    id: 9,
    title: "Urban Co-living Space",
    price: "₹ 20,000/month",
    area: "550 sqft",
    type: "Shared",
    image: UrbanColivingSpace,
    agent: "Karan Bhatia",
    updated: "4 days ago",
    contact: {
      phone: "+91 98999 00112",
      email: "karan.bhatia@propertymail.com",
    },
    location: [17.385, 78.4867], // Hyderabad
  },
  {
    id: 10,
    title: "Modern 2BHK Apartment",
    price: "₹ 27,000/month",
    area: "1,000 sqft",
    type: "Semi-Furnished",
    image: Modern2BHKApartment,
    agent: "Shreya Desai",
    updated: "2 days ago",
    contact: {
      phone: "+91 99000 11223",
      email: "shreya.desai@propertymail.com",
    },
    location: [21.1702, 72.8311], // Surat
  },
  {
    id: 11,
    title: "Student Room Near College",
    price: "₹ 9,000/month",
    area: "250 sqft",
    type: "Furnished",
    image: StudentRoomNearCollege,
    agent: "Mehul Jain",
    updated: "5 days ago",
    contact: {
      phone: "+91 99111 22334",
      email: "mehul.jain@propertymail.com",
    },
    location: [22.7196, 75.8577], // Indore
  },
  {
    id: 12,
    title: "Family Apartment",
    price: "₹ 32,000/month",
    area: "1,400 sqft",
    type: "Semi-Furnished",
    tag: "Verified",
    image: FamilyApartment,
    agent: "Deepika Bansal",
    updated: "6 days ago",
    contact: {
      phone: "+91 99222 33445",
      email: "deepika.bansal@propertymail.com",
    },
    location: [25.5941, 85.1376], // Patna
  },
];


// Auto-fit map bounds
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

// Property Card
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
      {/* Property Image */}
      <img src={image} alt={title} className="w-full h-56 object-cover" />

      <CardContent className="p-5">
        {/* Property Details */}
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

        {/* Agent + Contact Section */}
        <div className="flex flex-col border-t border-gray-200 pt-4 mt-4 space-y-3">
          {/* Agent Info */}
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

          {/* Buttons */}
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
              }}
            >
              Get Phone No.
            </Button>
          </div>

          {/* Contact Info */}
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
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};



export default function RentPage() {
  const [view, setView] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(rentProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProperties = rentProperties.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Input placeholder="Enter Location (e.g., Mumbai)" className="w-full md:w-72" />
            <Button variant="secondary" className="flex items-center gap-1">
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

            {/* Pagination */}
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
        // Map View
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
            <FitBounds markers={rentProperties} />
            {rentProperties.map((p) => (
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
