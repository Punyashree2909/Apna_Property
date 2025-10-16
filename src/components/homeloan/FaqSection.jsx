import React from 'react';
import AccordionItem from './AccordionItem';

const faqData = [
    {
        question: "What is pre-EMI interest?",
        answer: "Pre-EMI (Equated Monthly Installment) interest is the interest paid on the disbursed loan amount before the full loan amount is disbursed. This usually happens in cases of under-construction properties where the lender disburses the loan in tranches."
    },
    {
        question: "What is the meaning of the Moratorium Period in Home Loans?",
        answer: "A moratorium period is a time during the loan term when the borrower is not required to make any repayment. It's a waiting period before you begin paying your EMIs. This is common in home loans for under-construction properties, where the moratorium may last until the possession of the house."
    },
    {
        question: "What is Pradhan Mantri Awas Yojana?",
        answer: "Pradhan Mantri Awas Yojana (PMAY) is a government scheme in India which aims at making housing affordable for all by 2022. Under this scheme, first-time homebuyers can avail of interest subsidies on their home loans, making the cost of owning a home significantly lower."
    }
];

const FaqSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
