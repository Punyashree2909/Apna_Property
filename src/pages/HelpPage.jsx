import React, { useState } from "react";

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
    { question: "How to Renew or Refresh my Property?", answer: "Visit My Properties > Select property > Click 'Refresh' to move your ad to the top of search. 'Renew' will extend its expiry by the purchased duration." },
    { question: "Why my package is still not activated?", answer: "Check for pending payment status in order history. If paid and not active after 30 minutes, contact support with your transaction ID and screenshot." },
    { question: "Can I list a property for both rent and sale?", answer: "Yes! While posting, select both options, or edit an existing ad to update its status." },
    { question: "Is there a referral bonus if someone joins by my link?", answer: "Yes, refer friends via your dashboard link and earn credits for each successful sign-up." }
];

export default function HelpUs() {
    const [popup, setPopup] = useState({ show: false, title: '', detail: '' });

    function openPopup(title, detail) {
        setPopup({ show: true, title, detail });
    }
    function closePopup() {
        setPopup({ ...popup, show: false });
    }

    return (
        <div style={{ padding: "60px 0", minHeight: "100vh", background: "#fff" }}>
            <h1 style={{ textAlign: "center", fontWeight: 700, fontSize: "2.5rem", marginBottom: 30 }}>
                Have Questions? We've All the Answers
            </h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: 40 }}>
                {/* Left Help Topics */}
                <div>
                    {helpTopics.map((topic, i) => (
                        <div key={topic.category} style={{ marginBottom: 32 }}>
                            <h2 style={{
                                display: "flex",
                                alignItems: "center",
                                fontWeight: 700,
                                fontSize: "1.35rem",
                                marginBottom: 8,
                                marginLeft: i === 0 ? "35px" : "0px" // <<=== Only User Profile heading shifted!
                            }}>
                                <span style={{ fontSize: 26, marginRight: 6 }}>{topic.icon}</span> {topic.category}
                            </h2>
                            <ul style={{ paddingLeft: 0, marginLeft: 0, marginBottom: 0 }}>
                                {topic.items.map(item => (
                                    <li key={item.label} style={{ color: "#000", fontWeight: 400, fontSize: "1.08rem", marginBottom: 5, listStyle: "none" }}>
                                        <button
                                            style={{
                                                color: "#000",
                                                background: "none",
                                                border: "none",
                                                cursor: "pointer",
                                                textAlign: "left",
                                                padding: 0,
                                                font: "inherit"
                                            }}
                                            onClick={() => openPopup(item.label, item.description)}
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {/* Right FAQs */}
                <div>
                    <h2 style={{ fontWeight: 700, fontSize: "1.35rem", textAlign: "center", marginBottom: 10 }}>
                        Frequently Asked Questions
                    </h2>
                    <ul style={{ paddingLeft: 0 }}>
                        {faqs.map(q => (
                            <li key={q.question} style={{ listStyle: "none", marginBottom: 12 }}>
                                <button
                                    style={{
                                        background: "#fff",
                                        border: "1px solid #999",
                                        borderRadius: 7,
                                        width: 620,
                                        padding: "16px 16px",
                                        textAlign: "left",
                                        fontSize: "1.08rem",
                                        cursor: "pointer",
                                        color: "#222"
                                    }}
                                    onClick={() => openPopup(q.question, q.answer)}
                                >
                                    {q.question}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Modal popup */}
            {popup.show && (
                <div style={{
                    position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
                    background: "rgba(0,0,0,0.23)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 500
                }}>
                    <div style={{
                        background: "#fff", padding: 32, borderRadius: 14,
                        maxWidth: 420, width: "90vw", boxShadow: "0 6px 32px #1112"
                    }}>
                        <h3 style={{ fontWeight: 700, fontSize: "1.24rem", marginBottom: 7 }}>{popup.title}</h3>
                        <div style={{ marginBottom: 16 }}>{popup.detail}</div>
                        <button
                            style={{
                                background: "#138D75", color: "#fff", border: "none", borderRadius: 8,
                                padding: "8px 24px", fontWeight: 600, fontSize: 16, cursor: "pointer"
                            }}
                            onClick={closePopup}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
