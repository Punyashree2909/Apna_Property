import React, { useState, useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// Helper functions (can be moved to a separate utility file)
const formatCurrency = (num) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(num);
const formatToLakhs = (num) => {
    if (num >= 10000000) return `₹${(num / 10000000).toFixed(2)} Cr`;
    if (num >= 100000) return `₹${(num / 100000).toFixed(2)} Lac`;
    return formatCurrency(num);
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
        }
    }, [emiAmount, emiInterest, emiTenure]);

    useEffect(() => {
        const income = elIncome;
        const existingEmi = elExistingEmi;
        const n = elTenure * 12;
        const r = elInterest / 100 / 12;
        if (income > 0 && n > 0 && r > 0) {
            const maxEmiForNewLoan = (income * 0.5) - existingEmi;
            if (maxEmiForNewLoan > 0) {
                const loanAmount = (maxEmiForNewLoan / r) * (1 - (1 / Math.pow(1 + r, n)));
                setElResult({ amount: loanAmount, emi: maxEmiForNewLoan });
            } else {
                setElResult({ amount: 0, emi: 0 });
            }
        }
    }, [elIncome, elExistingEmi, elTenure, elInterest]);

    useEffect(() => {
        const p = btCurrentAmount;
        const r = btCurrentInterest / 100 / 12;
        const n = btCurrentTenure * 12;
        const installmentsPaid = btInstallmentsPaid;
        const newFee = btNewFee;
        const newN = btNewTenure * 12;
        const newR = btNewInterest / 100 / 12;

        if (p > 0 && r > 0 && n > 0 && installmentsPaid >= 0) {
            const currentEmi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            const outstanding = (p * (Math.pow(1 + r, n) - Math.pow(1 + r, installmentsPaid))) / (Math.pow(1 + r, n) - 1);
            const remainingN = n - installmentsPaid;
            const remainingInterest = (currentEmi * remainingN) - outstanding;
            
            const newLoanAmount = outstanding * (1 + (newFee / 100));
            const newEmi = (newLoanAmount * newR * Math.pow(1 + newR, newN)) / (Math.pow(1 + newR, newN) - 1);
            const totalNewPayment = newEmi * newN;
            const newInterest = totalNewPayment - newLoanAmount;
            
            const savings = remainingInterest - newInterest;
            const tenureDiff = newN - remainingN;
            let tenureChangeText = 'EMI Tenure will not change';
            if (tenureDiff > 0) tenureChangeText = `EMI Tenure will be increased by ${tenureDiff.toFixed(0)} Months`;
            if (tenureDiff < 0) tenureChangeText = `EMI Tenure will be decreased by ${Math.abs(tenureDiff).toFixed(0)} Months`;

            setBtResult({ savings, tenureChange: tenureChangeText, currentInterest: remainingInterest, newInterest, outstanding, newEmi });
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
                                <div>
                                    <label htmlFor="calc-amount" className="text-sm font-medium text-gray-600">Loan Amount (₹)</label>
                                    <input type="number" id="calc-amount" value={emiAmount} onChange={e => setEmiAmount(Number(e.target.value))} className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                                </div>
                                <div>
                                    <label htmlFor="calc-interest" className="text-sm font-medium text-gray-600">Interest Rate (% p.a.)</label>
                                    <input type="number" id="calc-interest" value={emiInterest} onChange={e => setEmiInterest(Number(e.target.value))} step="0.1" className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                                </div>
                                <div>
                                    <label htmlFor="calc-tenure" className="text-sm font-medium text-gray-600">Loan Tenure (Years)</label>
                                    <input type="number" id="calc-tenure" value={emiTenure} onChange={e => setEmiTenure(Number(e.target.value))} className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                                </div>
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
                                <div>
                                    <label htmlFor="el-income" className="text-sm font-medium text-gray-600">Net Monthly Income (₹)</label>
                                    <input type="number" id="el-income" value={elIncome} onChange={e => setElIncome(Number(e.target.value))} className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                                </div>
                                <div>
                                    <label htmlFor="el-emi" className="text-sm font-medium text-gray-600">Ongoing EMIs (₹)</label>
                                    <input type="number" id="el-emi" value={elExistingEmi} onChange={e => setElExistingEmi(Number(e.target.value))} className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="el-tenure" className="text-sm font-medium text-gray-600">Loan Tenure (Yrs)</label>
                                        <input type="number" id="el-tenure" value={elTenure} onChange={e => setElTenure(Number(e.target.value))} className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="el-interest" className="text-sm font-medium text-gray-600">Interest Rate (%)</label>
                                        <input type="number" id="el-interest" value={elInterest} onChange={e => setElInterest(Number(e.target.value))} step="0.01" className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center md:text-left bg-teal-50/70 p-8 rounded-lg">
                            <p className="text-gray-600">You are Eligible for Amount</p>
                            <p className="text-4xl font-bold text-teal-600 my-2">{formatToLakhs(elResult.amount)}</p>
                            <p className="text-gray-500">Monthly EMI: <strong className="text-gray-700">{formatCurrency(elResult.emi)}</strong></p>
                        </div>
                    </div>
                );
            case 'transfer':
                return (
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                        <div>
                           <h3 className="text-lg font-semibold mb-4 text-gray-700">How much will I save on balance transfer?</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-semibold text-teal-600 mb-2">Current Loan</p>
                                    <div className="space-y-3">
                                        <div>
                                            <label htmlFor="bt-amount" className="text-sm font-medium text-gray-600">Loan Amount (₹)</label>
                                            <input type="number" id="bt-amount" value={btCurrentAmount} onChange={e => setBtCurrentAmount(Number(e.target.value))} className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <input type="number" placeholder="Tenure (Yrs)" value={btCurrentTenure} onChange={e => setBtCurrentTenure(Number(e.target.value))} className="w-full p-3 border rounded-lg" />
                                            <input type="number" placeholder="Interest (%)" value={btCurrentInterest} onChange={e => setBtCurrentInterest(Number(e.target.value))} step="0.01" className="w-full p-3 border rounded-lg" />
                                        </div>
                                        <input type="number" placeholder="Installments Paid" value={btInstallmentsPaid} onChange={e => setBtInstallmentsPaid(Number(e.target.value))} className="w-full p-3 border rounded-lg" />
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold text-teal-600 mb-2 mt-4">New Loan</p>
                                    <div className="grid grid-cols-3 gap-4">
                                        <input type="number" placeholder="Fee (%)" value={btNewFee} onChange={e => setBtNewFee(Number(e.target.value))} step="0.1" className="w-full p-3 border rounded-lg" />
                                        <input type="number" placeholder="Tenure (Yrs)" value={btNewTenure} onChange={e => setBtNewTenure(Number(e.target.value))} className="w-full p-3 border rounded-lg" />
                                        <input type="number" placeholder="Interest (%)" value={btNewInterest} onChange={e => setBtNewInterest(Number(e.target.value))} step="0.01" className="w-full p-3 border rounded-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-teal-50/70 p-8 rounded-lg">
                           <div className="text-center">
                               {btResult.savings >= 0 ? (
                                   <>
                                       <p className="text-gray-600">You will save interest of</p>
                                       <p className="text-4xl font-bold text-green-600 my-2">{formatCurrency(btResult.savings)}</p>
                                   </>
                               ) : (
                                   <>
                                       <p className="text-gray-600">You will lose interest of</p>
                                       <p className="text-4xl font-bold text-red-600 my-2">{formatCurrency(Math.abs(btResult.savings))}</p>
                                   </>
                               )}
                               <p className="text-center text-gray-500 text-sm mb-6">{btResult.tenureChange}</p>
                           </div>
                           <div className="grid grid-cols-2 gap-4 text-center text-sm border-t border-b py-4">
                               <p>Current Interest: <strong>{formatCurrency(btResult.currentInterest)}</strong></p>
                               <p>New Interest: <strong>{formatCurrency(btResult.newInterest)}</strong></p>
                           </div>
                           <div className="flex justify-between items-center mt-4 text-sm px-2">
                               <span>Outstanding Principal</span>
                               <span className="font-bold">{formatCurrency(btResult.outstanding)}</span>
                           </div>
                           <div className="flex justify-between items-center mt-1 text-sm px-2">
                               <span>New EMI</span>
                               <span className="font-bold">{formatCurrency(btResult.newEmi)}</span>
                           </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className="py-16 bg-teal-50/50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10">Home Loan Calculator</h2>
                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-4 md:p-8">
                    <div className="flex flex-wrap justify-center border-b mb-6 -mx-4 md:-mx-8 px-4 md:px-8">
                        <button onClick={() => setActiveTab('emi')} className={`tab-btn py-3 px-6 font-semibold border-b-2 transition-colors ${activeTab === 'emi' ? 'tab-active' : 'border-transparent text-gray-500 hover:text-teal-600'}`}>EMI Calculator</button>
                        <button onClick={() => setActiveTab('eligibility')} className={`tab-btn py-3 px-6 font-semibold border-b-2 transition-colors ${activeTab === 'eligibility' ? 'tab-active' : 'border-transparent text-gray-500 hover:text-teal-600'}`}>Loan Eligibility</button>
                        <button onClick={() => setActiveTab('transfer')} className={`tab-btn py-3 px-6 font-semibold border-b-2 transition-colors ${activeTab === 'transfer' ? 'tab-active' : 'border-transparent text-gray-500 hover:text-teal-600'}`}>Balance Transfer</button>
                    </div>
                    {renderTabContent()}
                </div>
            </div>
        </section>
    );
};

export default LoanCalculator;
