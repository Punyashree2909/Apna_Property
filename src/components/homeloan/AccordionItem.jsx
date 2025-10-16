import React, { useState } from 'react';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item bg-white rounded-lg shadow-sm">
      <button
        className="faq-question w-full flex justify-between items-center text-left p-5 font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <i data-lucide="chevron-down" className={`faq-icon transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      <div className={`faq-answer p-5 pt-0 text-gray-600 ${isOpen ? '' : 'hidden'}`}>
        {answer}
      </div>
    </div>
  );
};

export default AccordionItem;
