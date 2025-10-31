import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);


// Helper functions for Indian currency formatting
const formatCurrency = (num) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Math.max(0, num));
const formatToLakhs = (num) => {
    const absNum = Math.abs(num);
    if (absNum >= 10000000) return `${num < 0 ? '-' : ''}₹${(absNum / 10000000).toFixed(2)} Cr`;
    if (absNum >= 100000) return `${num < 0 ? '-' : ''}₹${(absNum / 100000).toFixed(2)} Lac`;
    return formatCurrency(num);
};


// Reusable Input Component to apply min=0 and no-spin styles
const CalculatorInput = ({ label, value, onChange, step = "1", id }) => {
    return (
        <div>
            <label htmlFor={id} className="text-sm font-medium text-gray-600 block mb-1">{label}</label>
            <input
                type="number"
                id={id}
                value={value}
                onChange={e => onChange(Number(e.target.value))}
                step={step}
                min="0"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 input-no-spin"
            />
        </div>
    );
};


const LoanCalculator = () => {
    const [activeTab, setActiveTab] = useState('emi');


    // State for EMI Calculator
    const [emiAmount, setEmiAmount] = useState(8000000);
    const [emiInterest, setEmiInterest] = useState(8.5);
    const [emiTenure, setEmiTenure] = useState(30);
    const [emiResult, setEmiResult] = useState({ emi: 0, principal: 0, interest: 0 });


    // State for Eligibility Calculator
    const [elIncome, setElIncome] = useState(50000);
    const [elExistingEmi, setElExistingEmi] = useState(0);
    const [elTenure, setElTenure] = useState(30);
    const [elInterest, setElInterest] = useState(8.45);
    const [elResult, setElResult] = useState({ amount: 0, emi: 0 });


    // State for Balance Transfer Calculator
    const [btCurrentAmount, setBtCurrentAmount] = useState(2500000);
    const [btCurrentTenure, setBtCurrentTenure] = useState(6);
    const [btCurrentInterest, setBtCurrentInterest] = useState(10);
    const [btInstallmentsPaid, setBtInstallmentsPaid] = useState(40);
    const [btNewFee, setBtNewFee] = useState(1);
    const [btNewTenure, setBtNewTenure] = useState(6);
    const [btNewInterest, setBtNewInterest] = useState(9);
    const [btResult, setBtResult] = useState({ savings: 0, tenureChange: '', currentInterest: 0, newInterest: 0, outstanding: 0, newEmi: 0 });


    // --- Calculations ---


    useEffect(() => {
        const p = emiAmount;
        const r = emiInterest / 100 / 12;
        const n = emiTenure * 12;


        if (p > 0 && r > 0 && n > 0) {
            const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            const totalPayment = emi * n;
            const totalInterest = totalPayment - p;
            setEmiResult({ emi, principal: p, interest: totalInterest });
        } else {
            setEmiResult({ emi: 0, principal: p, interest: 0 });
        }
    }, [emiAmount, emiInterest, emiTenure]);


    useEffect(() => {
        const income = elIncome;
        const existingEmi = elExistingEmi;
        const n = elTenure * 12;
        const r = elInterest / 100 / 12;
        // Assume maximum 50% of income can go towards EMI (DTI ratio)
        const maxEmiForNewLoan = Math.max(0, (income * 0.5) - existingEmi);


        if (income > 0 && n > 0 && r > 0) {
            if (maxEmiForNewLoan > 0) {
                const loanAmount = (maxEmiForNewLoan / r) * (1 - (1 / Math.pow(1 + r, n)));
                setElResult({ amount: loanAmount, emi: maxEmiForNewLoan });
            } else {
                setElResult({ amount: 0, emi: 0 });
            }
        } else {
            setElResult({ amount: 0, emi: 0 });
        }
    }, [elIncome, elExistingEmi, elTenure, elInterest]);


    useEffect(() => {
        const p = btCurrentAmount;
        const r = btCurrentInterest / 100 / 12;
        const n = btCurrentTenure * 12;
        const installmentsPaid = btInstallmentsPaid;
        const newFee = btNewFee / 100; // Convert fee percentage to decimal
        const newN = btNewTenure * 12;
        const newR = btNewInterest / 100 / 12;


        if (p > 0 && r > 0 && n > 0 && installmentsPaid >= 0) {
            // 1. Calculate Current EMI
            const currentEmi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);


            // 2. Calculate Outstanding Principal (After Installments Paid)
            // Handle edge case where installmentsPaid is 0 or less than total tenure
            const monthsRemaining = Math.max(0, n - installmentsPaid);
            let outstanding = 0;
            if (monthsRemaining > 0) {
                outstanding = (currentEmi / r) * (1 - (1 / Math.pow(1 + r, monthsRemaining)));
            }
            
            // 3. Calculate Remaining Interest on Old Loan (if kept)
            const remainingInterest = (currentEmi * monthsRemaining) - outstanding;


            // 4. Calculate New Loan Details
            const newLoanAmount = outstanding * (1 + newFee); // Outstanding + Processing Fee
            const newEmi = (newLoanAmount * newR * Math.pow(1 + newR, newN)) / (Math.pow(1 + newR, newN) - 1);
            const totalNewPayment = newEmi * newN;
            const newInterest = totalNewPayment - newLoanAmount;


            // 5. Calculate Savings and Tenure Change
            const savings = remainingInterest - newInterest;
            const tenureDiffMonths = newN - monthsRemaining;
            let tenureChangeText = 'EMI Tenure will not change';
            if (tenureDiffMonths > 0) tenureChangeText = `EMI Tenure will be increased by ${tenureDiffMonths.toFixed(0)} months`;
            if (tenureDiffMonths < 0) tenureChangeText = `EMI Tenure will be decreased by ${Math.abs(tenureDiffMonths).toFixed(0)} months`;
            
            setBtResult({ savings, tenureChange: tenureChangeText, currentInterest: remainingInterest, newInterest, outstanding, newEmi });
        } else {
             setBtResult({ savings: 0, tenureChange: '', currentInterest: 0, newInterest: 0, outstanding: 0, newEmi: 0 });
        }
    }, [btCurrentAmount, btCurrentTenure, btCurrentInterest, btInstallmentsPaid, btNewFee, btNewTenure, btNewInterest]);



    // --- Chart Data ---
    const emiChartData = {
        labels: ['Principal', 'Interest'],
        datasets: [{
            data: [emiResult.principal, emiResult.interest],
            backgroundColor: ['#0d9488', '#5eead4'],
            borderWidth: 0,
        }],
    };


    const renderTabContent = () => {
        switch (activeTab) {
            case 'emi':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="space-y-4">
                                <CalculatorInput 
                                    id="emi-amount" 
                                    label="Home Loan Amount (₹)" 
                                    value={emiAmount} 
                                    onChange={setEmiAmount} 
                                />
                                <CalculatorInput 
                                    id="emi-interest" 
                                    label="Interest Rate (% p.a.)" 
                                    value={emiInterest} 
                                    onChange={setEmiInterest} 
                                    step="0.1"
                                />
                                <CalculatorInput 
                                    id="emi-tenure" 
                                    label="Loan Tenure (Years)" 
                                    value={emiTenure} 
                                    onChange={setEmiTenure} 
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-4">
                                <Doughnut data={emiChartData} options={{ responsive: true, cutout: '75%', plugins: { legend: { display: false }, tooltip: { enabled: false } } }} />
                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                    <p className="text-gray-500 text-sm">Monthly EMI</p>
                                    <p className="text-2xl sm:text-3xl font-bold text-teal-600">{formatCurrency(emiResult.emi)}</p>
                                </div>
                            </div>
                            <div className="flex justify-center space-x-6 text-sm">
                                <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-teal-500 mr-2"></span>Principal: <strong className="ml-1">{formatCurrency(emiResult.principal)}</strong></div>
                                <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-teal-200 mr-2"></span>Interest: <strong className="ml-1">{formatCurrency(emiResult.interest)}</strong></div>
                            </div>
                        </div>
                    </div>
                );
            case 'eligibility':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div>
                            <div className="space-y-4">
                                <CalculatorInput 
                                    id="el-income" 
                                    label="Net Monthly Income (₹)" 
                                    value={elIncome} 
                                    onChange={setElIncome} 
                                />
                                <CalculatorInput 
                                    id="el-emi" 
                                    label="Ongoing EMIs (Excluding proposed loan, ₹)" 
                                    value={elExistingEmi} 
                                    onChange={setElExistingEmi} 
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <CalculatorInput 
                                        id="el-tenure" 
                                        label="Desired Loan Tenure (Years)" 
                                        value={elTenure} 
                                        onChange={setElTenure} 
                                    />
                                    <CalculatorInput 
                                        id="el-interest" 
                                        label="Expected Interest Rate (% p.a.)" 
                                        value={elInterest} 
                                        onChange={setElInterest} 
                                        step="0.01"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="text-center md:text-left bg-teal-50/70 p-8 rounded-xl shadow-inner">
                            <p className="text-gray-600 font-medium">Maximum Home Loan Eligibility</p>
                            <p className="text-4xl font-extrabold text-teal-700 my-2">{formatToLakhs(elResult.amount)}</p>
                            <p className="text-gray-500">Based on a maximum eligible monthly EMI of: <strong className="text-gray-700">{formatCurrency(elResult.emi)}</strong></p>
                        </div>
                    </div>
                );
            case 'transfer':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-gray-700 border-b pb-2">Calculate Potential Interest Savings</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="font-bold text-teal-600 mb-3 text-lg">Current Home Loan Details</p>
                                    <div className="space-y-3">
                                        <CalculatorInput 
                                            id="bt-amount" 
                                            label="Original Loan Amount (₹)" 
                                            value={btCurrentAmount} 
                                            onChange={setBtCurrentAmount} 
                                        />
                                        <div className="grid grid-cols-2 gap-4">
                                            <CalculatorInput 
                                                id="bt-current-tenure" 
                                                label="Original Tenure (Years)" 
                                                value={btCurrentTenure} 
                                                onChange={setBtCurrentTenure} 
                                            />
                                            <CalculatorInput 
                                                id="bt-current-interest" 
                                                label="Current Interest Rate (% p.a.)" 
                                                value={btCurrentInterest} 
                                                onChange={setBtCurrentInterest} 
                                                step="0.01"
                                            />
                                        </div>
                                        <CalculatorInput 
                                            id="bt-installments" 
                                            label="Total Installments Paid (Months)" 
                                            value={btInstallmentsPaid} 
                            onChange={setBtInstallmentsPaid} 
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <p className="font-bold text-teal-600 mb-3 text-lg mt-4">New Balance Transfer Details</p>
                                    <div className="grid grid-cols-3 gap-4">
                                        <CalculatorInput 
                                            id="bt-new-fee" 
                                            label="Processing Fee (%)" 
                                            value={btNewFee} 
                                            onChange={setBtNewFee} 
                                            step="0.1"
                                        />
                                        <CalculatorInput 
                                            id="bt-new-tenure" 
                                            label="New Tenure (Years)" 
                                            value={btNewTenure} 
                                            onChange={setBtNewTenure} 
                                        />
                                        <CalculatorInput 
                                            id="bt-new-interest" 
                                            label="New Interest Rate (% p.a.)" 
                                            value={btNewInterest} 
                                            onChange={setBtNewInterest} 
                                            step="0.01"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-teal-50/70 p-8 rounded-xl shadow-lg">
                            <div className="text-center">
                                {btResult.savings > 0 ? (
                                    <>
                                        <p className="text-gray-600 font-medium">Potential Interest Saved</p>
                                        <p className="text-4xl font-extrabold text-green-600 my-2">{formatCurrency(btResult.savings)}</p>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-gray-600 font-medium">Potential Additional Interest</p>
                                        <p className="text-4xl font-extrabold text-red-600 my-2">{formatCurrency(Math.abs(btResult.savings))}</p>
                                    </>
                                )}
                                <p className="text-center text-gray-500 text-sm mb-6 mt-1 font-semibold">{btResult.tenureChange}</p>
                            </div>
                            <div className="space-y-3 pt-4 border-t border-gray-200">
                                <div className="flex justify-between items-center text-sm px-2">
                                    <span className="text-gray-600">Outstanding Principal</span>
                                    <span className="font-bold text-gray-800">{formatCurrency(btResult.outstanding)}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm px-2 py-2 bg-white rounded-lg shadow-sm">
                                    <span className="text-lg font-semibold text-teal-700">New Monthly EMI</span>
                                    <span className="text-lg font-extrabold text-teal-700">{formatCurrency(btResult.newEmi)}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-xs text-center pt-2">
                                    <div className="p-3 bg-gray-100 rounded-lg">
                                        <p className="font-semibold text-gray-500">Interest on Remaining Term (Old)</p>
                                        <strong className="text-gray-700">{formatCurrency(btResult.currentInterest)}</strong>
                                    </div>
                                    <div className="p-3 bg-gray-100 rounded-lg">
                                        <p className="font-semibold text-gray-500">Total Interest on New Loan</p>
                                        <strong className="text-gray-700">{formatCurrency(btResult.newInterest)}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };


    return (
        <section className="py-4 bg-teal-50/50 font-sans">
            {/* Inject custom CSS to hide number input spin buttons across browsers */}
            <style>
                {`
                    .input-no-spin::-webkit-outer-spin-button,
                    .input-no-spin::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }
                    .input-no-spin {
                        -moz-appearance: textfield; /* Firefox */
                    }
                    .tab-active {
                        border-color: #0d9488; /* Tailwind teal-600 */
                        color: #0d9488;
                    }
                `}
            </style>
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Comprehensive Home Loan Calculator</h2>
                <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-10">
                    <div className="flex flex-wrap justify-center border-b border-gray-200 mb-8">
                        <button 
                            onClick={() => setActiveTab('emi')} 
                            className={`tab-btn py-3 px-6 font-bold border-b-4 transition-all duration-300 mx-1 sm:mx-2 ${activeTab === 'emi' ? 'tab-active' : 'border-transparent text-gray-500 hover:text-teal-600'}`}
                        >
                            EMI Calculator
                        </button>
                        <button 
                            onClick={() => setActiveTab('eligibility')} 
                            className={`tab-btn py-3 px-6 font-bold border-b-4 transition-all duration-300 mx-1 sm:mx-2 ${activeTab === 'eligibility' ? 'tab-active' : 'border-transparent text-gray-500 hover:text-teal-600'}`}
                        >
                            Loan Eligibility
                        </button>
                        <button 
                            onClick={() => setActiveTab('transfer')} 
                            className={`tab-btn py-3 px-6 font-bold border-b-4 transition-all duration-300 mx-1 sm:mx-2 ${activeTab === 'transfer' ? 'tab-active' : 'border-transparent text-gray-500 hover:text-teal-600'}`}
                        >
                            Balance Transfer
                        </button>
                    </div>
                    {renderTabContent()}
                </div>
            </div>
        </section>
    );
};


export default LoanCalculator;
