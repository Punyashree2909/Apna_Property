import React from 'react';
import { FaMapMarkerAlt, FaBed, FaRulerCombined, FaTag, FaCompass, FaBuilding, FaPhone, FaShareAlt } from 'react-icons/fa';


const PROPERTY_DATA = {
    title: "Luxury 4 BHK Villa for Sale in Whitefield", // [cite: 7]
   location: "Whitefield, Bangalore", // [cite: 8]
    priceCr: "3.5 Cr", // [cite: 15]
    pricePerSqFt: "15,000/sq.ft.", // [cite: 16]
    status: "Ready to Move", // [cite: 10]
    area: "2500 Sq.Ft.", // [cite: 27]
    description: "Experience unparalleled luxury in this exquisite 4 BHK villa located in the heart of Whitefield, Bangalore. Designed with contemporary aesthetics and functionality in mind, this property offers a spacious living environment perfect for modern families. Enjoy high-end finishes, ample natural light, and a serene ambiance. The villa features expansive living areas, well-appointed bedrooms with attached bathrooms, and a private garden area. Located in a prime residential locality, it offers excellent connectivity to major IT hubs, educational institutions, and healthcare facilites, ensuring a convenient lifestyle." [cite_start]// [cite: 21, 22, 23, 24, 25]
};

const PROPERTY_DETAILS = [
    [cite_start]{ label: "Property Type", value: "Villa" }, // [cite: 27]
    { label: "Area", value: "2500 Sq.Ft." [cite_start]}, // [cite: 27]
    { label: "Plot Area", value: "3000 Sq. Ft." [cite_start]}, // [cite: 27]
    [cite_start]{ label: "Configuration", value: "4 BHK" }, // [cite: 27]
    [cite_start]{ label: "Age of Construction", value: "New (0-1 Year)" }, // [cite: 27]
    [cite_start]{ label: "Furnishing", value: "SemiFurnished" }, // [cite: 27]
    [cite_start]{ label: "Facing", value: "East" }, // [cite: 27]
    [cite_start]{ label: "Floor", value: "Ground +1" }, // [cite: 27]
    [cite_start]{ label: "Transaction Typ", value: "Resale" }, // [cite: 27]
    [cite_start]{ label: "Ownership", value: "Freehold" } // [cite: 27]
];

const PRICE_BREAKUP = [
    [cite_start]{ label: "Property Price", value: "₹3,50,00,000" }, // [cite: 30]
    [cite_start]{ label: "Registration Charges", value: "₹35,00,000" }, // [cite: 30]
    [cite_start]{ label: "Stamp Duty", value: "₹21,00,000" }, // [cite: 30]
    [cite_start]{ label: "Brokerage", value: "₹7,00,000" }, // [cite: 30]
    [cite_start]{ label: "Total Payable", value: "₹4,13,00,000", isTotal: true } // [cite: 30]
];

const SIMILAR_PROPERTIES = [
    [cite_start]{ title: "Elegant Family Home", location: "Saryapur Roo", price: "2.1 Cr", size: "1800 Sq.Ft" }, // [cite: 41, 42, 51]
    [cite_start]{ title: "Modern Apartment", location: "Koramanga", price: "1.8 Cr", size: "1600 Sq.Ft" }, // [cite: 43, 59]
    [cite_start]{ title: "Luxury Penthouse", location: "Imaranagar", price: "4.5 Cr", size: "3200 Sq.Ft" }, // [cite: 44, 47, 62]
    [cite_start]{ title: "Charming Cottage", location: "Nagar", price: "95 Lakhs", size: "1200 Sq.Ft" } // [cite: 45, 48, 65]
];

// --- B. कंपोनेंट: नेविगेशन बार (Navbar) ---
const Navbar = () => (
    <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-6">
                [cite_start]<div className="text-2xl font-bold text-indigo-600">ApnaProperty</div> {/* [cite: 1] */}
                <div className="hidden md:flex space-x-4 text-gray-600 text-sm">
                    [cite_start]<a href="#" className="hover:text-indigo-600 font-semibold">Buy</a> {/* [cite: 2] */}
                    [cite_start]<a href="#" className="hover:text-indigo-600">Sell</a> {/* [cite: 2] */}
                    [cite_start]<a href="#" className="hover:text-indigo-600">Rent</a> {/* [cite: 2] */}
                    [cite_start]<a href="#" className="hover:text-indigo-600">Agents</a> {/* [cite: 2] */}
                    [cite_start]<a href="#" className="hover:text-indigo-600">Blog</a> {/* [cite: 2] */}
                </div>
            </div>
            <div className="flex items-center space-x-3 text-sm">
                [cite_start]<button className="text-gray-600 hover:text-indigo-600 hidden sm:block">Login</button> {/* [cite: 4] */}
                [cite_start]<button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-150">Sign Up</button> {/* [cite: 5] */}
            </div>
        </div>
    </nav>
);

// --- C. कंपोनेंट: सिमिलर प्रॉपर्टी कार्ड (Similar Property Card) ---
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


// --- D. मुख्य पेज कंपोनेंट (Main Page Component) ---
const PropertyDetailPage = () => {
    
    // PDF में दिखाए गए अनुसार डिटेल्स को फ़िल्टर करना
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
                
                {/* --- A. शीर्षक सेक्शन (Title Section) --- */}
                <div className="mb-6">
                    [cite_start]<h1 className="text-3xl font-bold text-gray-900">{PROPERTY_DATA.title}</h1> {/* [cite: 7] */}
                    <p className="text-lg text-gray-500 flex items-center mt-1">
                        <FaMapMarkerAlt className="text-red-500 mr-2" />
                        [cite_start]{PROPERTY_DATA.location} {/* [cite: 8] */}
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* --- B. बायाँ/मध्य कंटेंट (Left/Middle Content) --- */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* 1. मुख्य छवि और सारांश (Main Image and Summary) */}
                        <div className="bg-white rounded-xl shadow-lg relative">
                            <img
                                src="/images/main-villa.jpg" // Image placeholder
                                alt={PROPERTY_DATA.title}
                                className="w-full h-96 object-cover rounded-t-xl"
                            />
                            <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white text-sm font-semibold px-3 py-1 rounded-full cursor-pointer hover:bg-opacity-70">
                                [cite_start]View All Photos {/* [cite: 14] */}
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-end border-b pb-4 mb-4">
                                    <div>
                                        [cite_start]<p className="text-4xl font-extrabold text-indigo-600">{PROPERTY_DATA.priceCr}</p> {/* [cite: 15] */}
                                        [cite_start]<span className="text-base text-gray-500">{PROPERTY_DATA.pricePerSqFt}</span> {/* [cite: 16] */}
                                    </div>
                                    <div className="flex space-x-4">
                                        <div className="text-center p-2 bg-green-100 rounded-lg">
                                            [cite_start]<p className="text-sm font-semibold text-green-700">{PROPERTY_DATA.status}</p> {/* [cite: 10] */}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <FaBed className="text-2xl text-indigo-500 mx-auto mb-1" />
                                        [cite_start]<p className="text-sm font-semibold">4 BHK</p> {/* [cite: 27] */}
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <FaRulerCombined className="text-2xl text-green-500 mx-auto mb-1" />
                                        [cite_start]<p className="text-sm font-semibold">{PROPERTY_DATA.area}</p> {/* [cite: 27] */}
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <FaTag className="text-2xl text-orange-500 mx-auto mb-1" />
                                        [cite_start]<p className="text-sm font-semibold">Villa</p> {/* [cite: 27] */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Overview (विवरण) */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="flex border-b mb-4">
                                [cite_start]<button className="py-2 px-4 text-indigo-600 border-b-2 border-indigo-600 font-semibold">Overview</button> {/* [cite: 11] */}
                                [cite_start]<button className="py-2 px-4 text-gray-600 hover:text-indigo-600">Floor Plan</button> {/* [cite: 13] */}
                                [cite_start]<button className="py-2 px-4 text-gray-600 hover:text-indigo-600">Location & Nearby</button> {/* [cite: 20] */}
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Overview</h2>
                            [cite_start]<p className="text-gray-600 leading-relaxed">{PROPERTY_DATA.description}</p> {/* [cite: 21, 22, 23, 24, 25] */}
                        </div>
                        
                        {/* 3. Property Details Table (संपत्ति विवरण तालिका) */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            [cite_start]<h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Property Details</h2> {/* [cite: 26] */}
                            <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
                                {detailsRows}
                            </dl>
                        </div>
                    </div>

                    {/* --- C. दायाँ साइडबार (Right Sidebar) --- */}
                    <div className="lg:col-span-1 space-y-6">
                        
                        {/* 1. संपर्क (Contact Owner) */}
                        <div className="bg-white p-6 rounded-xl shadow-lg sticky top-6 border-t-4 border-indigo-500">
                            [cite_start]<h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Owner</h2> {/* [cite: 17] */}
                            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-150 mb-3 flex items-center justify-center">
                                [cite_start]<FaPhone className="mr-2" /> Get Phone Number {/* [cite: 18] */}
                            </button>
                            <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-lg transition duration-150 flex items-center justify-center">
                                [cite_start]<FaShareAlt className="mr-2" /> Share {/* [cite: 19] */}
                            </button>
                        </div>

                        {/* 2. कीमत का विवरण (Price Breakup) */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            [cite_start]<h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Price Breakup</h2> {/* [cite: 28] */}
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
                        
                        {/* 3. EMI Calculator (EMI कैलकुलेटर) */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            [cite_start]<h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">EMI Calculator</h2> {/* [cite: 29] */}
                            <div className="flex items-center justify-between bg-indigo-50 p-4 rounded-lg">
                                <span className="text-sm text-gray-700">Estimated Monthly EMI:</span>
                                [cite_start]<span className="font-extrabold text-2xl text-indigo-700">₹32,224</span> {/* [cite: 39] */}
                            </div>
                            [cite_start]<p className="text-xs text-gray-500 mt-2">Loan Amount: P50,00,000 [cite: 31] | [cite_start]Down Payment: 10,00,000 [cite: 32] | [cite_start]Loan Tenure: 20 Years [cite: 35]</p>
                        </div>
                    </div>
                </div>

                {/* --- D. Properties You Might Like (सिमिलर प्रॉपर्टीज़) --- */}
                <div className="mt-12">
                    [cite_start]<h2 className="text-3xl font-bold text-gray-900 mb-6">Properties You Might Like</h2> {/* [cite: 38] */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {SIMILAR_PROPERTIES.map((property, index) => (
                            <SimilarPropertyCard key={index} property={property} />
                        ))}
                    </div>
                </div>
            </div>
            
            {/* --- E. Footer (फूटर) --- */}
            <footer className="bg-gray-900 text-white mt-12 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-8 mb-6">
                        <div className="col-span-2">
                            [cite_start]<h3 className="text-2xl font-bold text-indigo-400 mb-3">ApnaProperty</h3> {/* [cite: 52] */}
                            [cite_start]<p className="text-gray-400 text-sm">Your trusted partner in finding the perfect property. [cite: 53]</p>
                        </div>
                        [cite_start]{/* Company, Properties, Resources links as per PDF [cite: 67, 68, 75] */}
                        <div><h4 className="font-semibold mb-3">Company</h4></div>
                        <div><h4 className="font-semibold mb-3">Properties</h4></div>
                        <div><h4 className="font-semibold mb-3">Resources</h4></div>
                    </div>
                    
                    <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>© 2024 Apna Property. [cite_start]All rights reserved. [cite: 55]</span>
                        <div className="space-x-4">
                            [cite_start]<span>Made with Visily [cite: 56, 57]</span>
                            [cite_start]<a href="#" className="hover:text-white">Privacy Policy</a> {/* [cite: 79] */}
                            [cite_start]<a href="#" className="hover:text-white">Terms of Service</a> {/* [cite: 79] */}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PropertyDetailPage;