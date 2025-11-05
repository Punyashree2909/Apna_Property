import React, { useState } from "react";

// --- DATA (Unchanged) ---
const helpTopics = [
    {
        category: "User Profile",
        icon: "👤",
        items: [
            { label: "New Registration & Login", description: "Register in 3 easy steps using OTP, or log in with Google/phone/email. If you forgot your password, reset easily from the login screen. For advanced profile verification, use Aadhar/PAN KYC." },
            { label: "Account Deactivation/Re-activation", description: "To deactivate your account, go to Settings > Account. For reactivation, email customer care and you will get a link in 24 hours." },
            { label: "My Profile", description: "View all your details, add alternate contact numbers, manage notification preferences, and upload a profile photo for better trust." },
            { label: "Password Settings", description: "Reset your password, enable two-factor authentication, and see last password change date here for your account security." },
            { label: "Update Email Address", description: "You can now add multiple emails and select your preferred one for notifications and login." }
        ]
    },
    {
        category: "Property Management",
        icon: "🏢",
        items: [
            { label: "Free Property Listing", description: "Post any home, flat, PG, or commercial property for free, unlimited times for verified users." },
            { label: "Posting Property", description: "Guide for basic, premium, featured property ad posting, including bulk property CSV uploads for agents." },
            { label: "Edit/Update Property Details", description: "Edit property status (rent, sale), details, tags, or amenities. You can pause or mark a property as sold." },
            { label: "Locality Update", description: "Change the locality or landmark for existing listings and add new amenities if they open in your area." },
            { label: "Upload/Edit Photos", description: "Add unlimited images or 360-degree tours for better visibility. Use drag-and-drop or click for selection." }
        ]
    },
    {
        category: "Response Management",
        icon: "📥",
        items: [
            { label: "View Responses on Property Posted", description: "Get instant alerts for new responses on your property by SMS, email, or in-app notifications." },
            { label: "Download Responses on Property Posted", description: "Export your complete inquiry history to Excel at any time for analysis or offline access." },
            { label: "Protection from online frauds", description: "Read safety tips, block/report suspicious inquiries, and verify all caller profiles before a visit." }
        ]
    },
    {
        category: "Orders & Services",
        icon: "📦",
        items: [
            { label: "Planning to Buy Ad Packages", description: "Discover combos, banner packages, and partner channel boost packs for your requirements." },
            { label: "Package Queries", description: "Get full pricing, validity, renewal, and feature comparison for all ad packages with customer support chat." },
            { label: "Package Activation", description: "Your package is active instantly after payment; for UPI or bank delay, check transaction status or contact support." },
            { label: "My Package Details", description: "View purchase history, refund request status, auto-renewal settings, and invoice downloads in one place." }
        ]
    },
    {
        category: "Legal & Assistance",
        icon: "📝",
        items: [
            { label: "Rental Agreement", description: "Get doorstep rental paperwork, e-stamped & notarized via our legal partners in all major cities." },
            { label: "Legal Advice", description: "Get 1:1 expert consultation for disputes or property verification, bookable via our Help Center." }
        ]
    },
];

const faqs = [
    { question: "How do I Deactivate my account?", answer: "Go to Profile > Settings > Deactivate. Confirm and your account will be paused instantly. If you are an agent, all listings will be hidden, not deleted. For reactivation, use the link in your confirmation email." },
    { question: "How can I know the status or validity of my package?", answer: "Head to My Packages in profile. Each package shows activation date, status (active/expired), and features used. For renewal, click the Renew Now button there." },
    { question: "When will my Property become visible on the site?", answer: "After your property is posted, verification happens within 2-24 hours on working days. You'll get an SMS/email once live. Delays may occur during festivals or technical upgradation." },
    { question: "What all can I do with the ApnaProperty package I have purchased?", answer: "You can post X properties per package, get additional highlights and WhatsApp alerts, and bump up your listings. Packages can be upgraded anytime with prorated pricing." },
    { question: "How to Renew or Refresh my Property?", answer: "Visit My Properties > Select property > Click 'Refresh' to move your ad to the top of search. 'Renew' will extend its expiry by the duration." },
    { question: "Why my package is still not activated?", answer: "Check for pending payment status in order history. If paid and not active after 30 minutes, contact support with your transaction ID and screenshot." },
    { question: "Can I list a property for both rent and sale?", answer: "Yes! While posting, select both options, or edit an existing ad to update its status." },
    { question: "Is there a referral bonus if someone joins by my link?", answer: "Yes, refer friends via your dashboard link and earn credits for each successful sign-up." }
];


// --- REUSABLE ACCORDION COMPONENT ---

// New SVG Chevron Icon
const ChevronIcon = ({ isOpen }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease-in-out',
            color: '#6b7280' // gray-500
        }}
    >
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

function AccordionItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const itemButtonStyle = {
        background: isOpen ? '#f9fafb' : '#fff', // bg-gray-50 if open
        border: "none",
        width: "100%",
        padding: "16px 20px",
        textAlign: "left",
        fontSize: "1.05rem", // Slightly larger
        cursor: "pointer",
        color: "#1f2937", // gray-800
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: 500,
        transition: 'background 0.2s ease',
    };

    return (
        <div
            style={{
                border: "1px solid #e5e7eb", // border-gray-200
                borderRadius: 8, // Slightly larger radius
                marginBottom: 12,
                overflow: 'hidden',
                boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.06)' : '0 1px 3px rgba(0,0,0,0.03)',
                transition: 'all 0.3s ease-in-out'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button
                style={itemButtonStyle}
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <ChevronIcon isOpen={isOpen} />
            </button>

            {/* The content to show/hide */}
            {isOpen && (
                <div style={{
                    padding: "16px 20px",
                    background: "#fff",
                    color: "#374151", // gray-700
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    borderTop: '1px solid #e5e7eb' // border-gray-200
                }}>
                    {children}
                </div>
            )}
        </div>
    );
}


// --- MAIN COMPONENT ---

export default function HelpUs() {
    return (
        // Main page container with a soft background
        <div style={{ padding: "60px 20px", minHeight: "100vh", background: "#f9fafb", position: "relative", overflowX: "hidden" }}>
            
            <h1 style={{ textAlign: "center", fontWeight: 700, fontSize: "2.5rem", marginBottom: 40, color: '#1f2937' }}>
                Have Questions? We've All the Answers
            </h1>

            {/* The main content "card" */}
            <div style={{ 
                maxWidth: 900, 
                margin: "0 auto", 
                background: '#ffffff', 
                borderRadius: 12, 
                padding: '24px 40px', // More internal padding
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.07)'
            }}>

                {/* --- Render Help Topics --- */}
                {helpTopics.map((topic) => (
                    <div key={topic.category} style={{ marginBottom: 40 }}>
                        <h2 style={{
                            display: "flex",
                            alignItems: "center",
                            fontWeight: 700,
                            fontSize: "1.75rem",
                            marginBottom: 24, // More space
                            borderBottom: "2px solid #138D75",
                            paddingBottom: 12, // More space
                            color: '#111827' // gray-900
                        }}>
                            <span style={{ fontSize: 28, marginRight: 12 }}>{topic.icon}</span> {topic.category}
                        </h2>

                        {topic.items.map(item => (
                            <AccordionItem key={item.label} title={item.label}>
                                {item.description}
                            </AccordionItem>
                        ))}
                    </div>
                ))}

                {/* --- Render FAQs --- */}
                <div style={{ marginBottom: 40 }}>
                    <h2 style={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 700,
                        fontSize: "1.75rem",
                        marginBottom: 24,
                        borderBottom: "2px solid #138D75",
                        paddingBottom: 12,
                        color: '#111827'
                    }}>
                        <span style={{ fontSize: 28, marginRight: 12 }}>❓</span> Frequently Asked Questions
                    </h2>

                    {faqs.map(q => (
                        <AccordionItem key={q.question} title={q.question}>
                            {q.answer}
                        </AccordionItem>
                    ))}
                </div>

            </div>
        </div>
    );
}   