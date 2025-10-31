import React, { useState } from 'react';

const AccordionItem = ({ question, answer }) => {
    // State to manage whether the accordion item is open or closed
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border border-gray-200 rounded-lg shadow-sm">
            {/* Question Button with Arrow */}
            <button
                className="flex justify-between items-center w-full p-5 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                onClick={toggleAccordion}
                aria-expanded={isOpen}
            >
                {question}
                {/* Arrow Icon that Rotates based on state */}
                <svg
                    className={`w-5 h-5 text-teal-600 transform transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
            </button>

            {/* Answer Content */}
            {isOpen && (
                <div 
                    className="px-5 pb-5 pt-0 text-gray-600 transition-all duration-300 ease-in-out"
                    // Add an invisible div with max-height for smooth transition in a real CSS file
                >
                    <div className="border-t border-gray-100 pt-4">
                        {answer}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccordionItem;