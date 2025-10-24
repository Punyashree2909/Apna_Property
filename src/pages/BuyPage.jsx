import React from 'react';
import { FaMapMarkerAlt, FaBed, FaRulerCombined, FaTag, FaCompass, FaBuilding, FaPhone, FaShareAlt } from 'react-icons/fa';


const PROPERTY_DATA = {
    title: "Luxury 4 BHK Villa for Sale in Whitefield", // [cite: 7]
   location: "Whitefield, Bangalore", // [cite: 8]
    priceCr: "3.5 Cr", // [cite: 15]
    pricePerSqFt: "15,000/sq.ft.", // [cite: 16]
    status: "Ready to Move", // [cite: 10]
    area: "2500 Sq.Ft.", 
    description: "Experience unparalleled luxury in this exquisite 4 BHK villa located in the heart of Whitefield, Bangalore. Designed with contemporary aesthetics and functionality in mind, this property offers a spacious living environment perfect for modern families. Enjoy high-end finishes, ample natural light, and a serene ambiance. The villa features expansive living areas, well-appointed bedrooms with attached bathrooms, and a private garden area. Located in a prime residential locality, it offers excellent connectivity to major IT hubs, educational institutions, and healthcare facilites, ensuring a convenient lifestyle."// [cite: 21, 22, 23, 24, 25]
};

const PROPERTY_DETAILS = [
    { label: "Property Type", value: "Villa" }, 
    { label: "Area", value: "2500 Sq.Ft."}, 
    { label: "Plot Area", value: "3000 Sq. Ft."}, 
    { label: "Configuration", value: "4 BHK" }, 
   { label: "Age of Construction", value: "New (0-1 Year)" }, 
   { label: "Furnishing", value: "SemiFurnished" }, 
   { label: "Facing", value: "East" }, 
   { label: "Floor", value: "Ground +1" }, 
   { label: "Transaction Typ", value: "Resale" }, 
   { label: "Ownership", value: "Freehold" } 
];

const PRICE_BREAKUP = [
   { label: "Property Price", value: "₹3,50,00,000" }, 
   { label: "Registration Charges", value: "₹35,00,000" }, 
   { label: "Stamp Duty", value: "₹21,00,000" }, 
   { label: "Brokerage", value: "₹7,00,000" }, 
   { label: "Total Payable", value: "₹4,13,00,000", isTotal: true } 
];

const SIMILAR_PROPERTIES = [
   { title: "Elegant Family Home", location: "Saryapur Roo", price: "2.1 Cr", size: "1800 Sq.Ft" }, 
   { title: "Modern Apartment", location: "Koramanga", price: "1.8 Cr", size: "1600 Sq.Ft" }, 
   { title: "Luxury Penthouse", location: "Imaranagar", price: "4.5 Cr", size: "3200 Sq.Ft" }, 
   { title: "Charming Cottage", location: "Nagar", price: "95 Lakhs", size: "1200 Sq.Ft" } 
];


const Navbar = () => (
    <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-6">
               <div className="text-2xl font-bold text-indigo-600">ApnaProperty</div> 
                <div className="hidden md:flex space-x-4 text-gray-600 text-sm">
                   <a href="#" className="hover:text-indigo-600 font-semibold">Buy</a> 
                   <a href="#" className="hover:text-indigo-600">Sell</a> 
                   <a href="#" className="hover:text-indigo-600">Rent</a> 
                   <a href="#" className="hover:text-indigo-600">Agents</a> 
                   <a href="#" className="hover:text-indigo-600">Blog</a> 
                </div>
            </div>
            <div className="flex items-center space-x-3 text-sm">
               <button className="text-gray-600 hover:text-indigo-600 hidden sm:block">Login</button> 
               <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-150">Sign Up</button> 
            </div>
        </div>
    </nav>
);


const SimilarPropertyCard = ({ property }) => (
    <div className="bg-white rounded-xl shadow-md p-4 transition duration-300 hover:shadow-lg border border-gray-100">
        <img 
            src="/images/prop-small-placeholder.jpg" 
            alt={property.title} 
            className="w-full h-32 object-cover rounded-lg mb-3" 
        />
        <h4 className="font-semibold text-gray-900 text-base mb-1 truncate">{property.title}</h4>
        <p className="text-xs text-gray-500 flex items-center mb-2">
            <FaMapMarkerAlt className="text-xs mr-1 text-red-400" />
            {property.location}
        </p>
        <div className="flex justify-between items-center pt-2 border-t">
            <span className="font-bold text-indigo-600 text-lg">{property.price}</span>
            <span className="text-sm text-gray-500 flex items-center">
                <FaRulerCombined className="mr-1 text-sm" /> {property.size}
            </span>
        </div>
    </div>
);



const PropertyDetailPage = () => {
    
    
    const detailsRows = PROPERTY_DETAILS.map((item, index) => (
        <div key={index} className="flex justify-between border-b pb-2">
            <dt className="text-sm font-medium text-gray-500 flex items-center">
                {item.label === 'Facing' && <FaCompass className="mr-2 text-blue-500" />}
                {item.label === 'Age of Construction' && <FaBuilding className="mr-2 text-blue-500" />}
                {item.label}
            </dt>
            <dd className="text-sm font-semibold text-gray-900">{item.value}</dd>
        </div>
    ));

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />

            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                
                
                <div className="mb-6">
                   <h1 className="text-3xl font-bold text-gray-900">{PROPERTY_DATA.title}</h1> 
                    <p className="text-lg text-gray-500 flex items-center mt-1">
                        <FaMapMarkerAlt className="text-red-500 mr-2" />
                       {PROPERTY_DATA.location} 
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    
                    <div className="lg:col-span-2 space-y-8">
                        
                        
                        <div className="bg-white rounded-xl shadow-lg relative">
                            <img
                                src="/images/main-villa.jpg" // Image placeholder
                                alt={PROPERTY_DATA.title}
                                className="w-full h-96 object-cover rounded-t-xl"
                            />
                            <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white text-sm font-semibold px-3 py-1 rounded-full cursor-pointer hover:bg-opacity-70">
                               View All Photos 
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-end border-b pb-4 mb-4">
                                    <div>
                                       <p className="text-4xl font-extrabold text-indigo-600">{PROPERTY_DATA.priceCr}</p> 
                                       <span className="text-base text-gray-500">{PROPERTY_DATA.pricePerSqFt}</span> 
                                    </div>
                                    <div className="flex space-x-4">
                                        <div className="text-center p-2 bg-green-100 rounded-lg">
                                           <p className="text-sm font-semibold text-green-700">{PROPERTY_DATA.status}</p> 
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <FaBed className="text-2xl text-indigo-500 mx-auto mb-1" />
                                       <p className="text-sm font-semibold">4 BHK</p> 
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <FaRulerCombined className="text-2xl text-green-500 mx-auto mb-1" />
                                       <p className="text-sm font-semibold">{PROPERTY_DATA.area}</p> 
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <FaTag className="text-2xl text-orange-500 mx-auto mb-1" />
                                       <p className="text-sm font-semibold">Villa</p> 
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="flex border-b mb-4">
                               <button className="py-2 px-4 text-indigo-600 border-b-2 border-indigo-600 font-semibold">Overview</button> 
                               <button className="py-2 px-4 text-gray-600 hover:text-indigo-600">Floor Plan</button> 
                               <button className="py-2 px-4 text-gray-600 hover:text-indigo-600">Location & Nearby</button> 
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Overview</h2>
                           <p className="text-gray-600 leading-relaxed">{PROPERTY_DATA.description}</p> 
                        </div>
                        
                       
                        <div className="bg-white p-6 rounded-xl shadow-md">
                           <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Property Details</h2> 
                            <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
                                {detailsRows}
                            </dl>
                        </div>
                    </div>

                    
                    <div className="lg:col-span-1 space-y-6">
                        
                        
                        <div className="bg-white p-6 rounded-xl shadow-lg sticky top-6 border-t-4 border-indigo-500">
                           <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact </h2> 
                            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-150 mb-3 flex items-center justify-center">
                               <FaPhone className="mr-2" /> Get Phone Number 
                            </button>
                            <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-lg transition duration-150 flex items-center justify-center">
                               <FaShareAlt className="mr-2" /> Share
                            </button>
                        </div>

                        
                        <div className="bg-white p-6 rounded-xl shadow-md">
                           <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Price Breakup</h2> 
                            <dl className="space-y-2">
                                {PRICE_BREAKUP.map((item, index) => (
                                    <div key={index} className={`flex justify-between ${item.isTotal ? 'border-t border-dashed pt-2' : ''}`}>
                                        <dt className={`text-sm ${item.isTotal ? 'font-bold text-gray-900' : 'text-gray-600'}`}>
                                            {item.label}
                                        </dt>
                                        <dd className={`text-sm ${item.isTotal ? 'font-extrabold text-lg text-indigo-600' : 'text-gray-800'}`}>
                                            {item.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                        
                        
                        <div className="bg-white p-6 rounded-xl shadow-md">
                           <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">EMI Calculator</h2> 
                            <div className="flex items-center justify-between bg-indigo-50 p-4 rounded-lg">
                                <span className="text-sm text-gray-700">Estimated Monthly EMI:</span>
                               <span className="font-extrabold text-2xl text-indigo-700">₹32,224</span>
                            </div>
                           <p className="text-xs text-gray-500 mt-2">Loan Amount: P50,00,000 [cite: 31] |Down Payment: 10,00,000 |Loan Tenure: 20 Years</p>
                        </div>
                    </div>
                </div>

                
                <div className="mt-12">
                   <h2 className="text-3xl font-bold text-gray-900 mb-6">Properties You Might Like</h2> 
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {SIMILAR_PROPERTIES.map((property, index) => (
                            <SimilarPropertyCard key={index} property={property} />
                        ))}
                    </div>
                </div>
            </div>
            
            
            <footer className="bg-gray-900 text-white mt-12 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-8 mb-6">
                        <div className="col-span-2">
                           <h3 className="text-2xl font-bold text-indigo-400 mb-3">ApnaProperty</h3> 
                           <p className="text-gray-400 text-sm">Your trusted partner in finding the perfect property. </p>
                        </div>
                       
                        <div><h4 className="font-semibold mb-3">Company</h4></div>
                        <div><h4 className="font-semibold mb-3">Properties</h4></div>
                        <div><h4 className="font-semibold mb-3">Resources</h4></div>
                    </div>
                    
                    <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>© 2024 Apna Property.All rights reserved.</span>
                        <div className="space-x-4">
                           <span>Made with Visily [cite: 56, 57]</span>
                           <a href="#" className="hover:text-white">Privacy Policy</a> 
                           <a href="#" className="hover:text-white">Terms of Service</a> 
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PropertyDetailPage;