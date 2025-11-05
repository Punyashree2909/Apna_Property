import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- MODIFIED TermsModal ---
// Added your specific text and styled it for readability.
const TermsModal = ({ onClose }) => {
  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-lg shadow-xl max-w-2xl w-full m-4 p-6 relative max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms & Conditions</h2>
          
          {/* --- NEW CONTENT --- */}
          <div className="space-y-3 text-sm text-gray-700">
            <p>Welcome to ApnaProperty. By accessing or using our website, you agree to be bound by these terms and conditions.</p>
            
            <h3 className="font-semibold text-base text-gray-800 pt-2">1. User Conduct</h3>
            <p>You agree not to post any content that is false, misleading, defamatory, or infringes on any third-party rights. All listings must be accurate and represent properties you are legally authorized to market.</p>

            <h3 className="font-semibold text-base text-gray-800 pt-2">2. Listing Accuracy</h3>
            <p>ApnaProperty is not responsible for the accuracy of listings provided by users, brokers, or third parties. We do not verify the information and advise all users to conduct their own due diligence before entering into any transaction.</p>

            <h3 className="font-semibold text-base text-gray-800 pt-2">3. Intellectual Property</h3>
            <p>All content on this site, including logos, graphics, and text, is the property of ApnaProperty or its content suppliers and is protected by international copyright laws.</p>
            
            <h3 className="font-semibold text-base text-gray-800 pt-2">4. Limitation of Liability</h3>
            <p>ApnaProperty shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services, including but not limited to, financial losses or data corruption.</p>
            
            <p className="pt-2">By checking "I agree to the privacy policy", you also acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.</p>
          </div>
          
          <button 
            onClick={onClose}
            className="mt-6 w-full bg-blue-600 text-white p-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </>
  );
};

export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [userType, setUserType] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
  const toggleConfirmPasswordVisibility = () => setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  const openModal = (e) => { e.preventDefault(); setIsModalOpen(true); };

  // ✅ API Signup Function
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!agreedToTerms) {
      alert("You must agree to the Terms & Conditions and Privacy Policy.");
      return;
    }

    const userData = {
      name: fullName,
      email,
      password,
      role: userType
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup successful! Please login.");
        window.location.href = "/login";
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error — check backend is running");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <main className="bg-white rounded-2xl shadow-xl flex w-full max-w-4xl overflow-hidden">
        
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Create an Account</h1>

          <form onSubmit={handleSubmit}>
            
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-10 p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            {/* --- MODIFIED DROPDOWN --- */}
            {/* Wrapped in relative div and added custom arrow */}
            <div className="relative mb-4">
              <select
                className="w-full pl-10 p-3 border border-gray-200 rounded-lg bg-gray-50 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                required
              >
                <option value="" disabled>Select User Type</option>
                <option value="buyer_owner">Buyer/Owner</option>
                <option value="agent">Agent</option>
                <option value="builder">Builder</option>
              </select>
              {/* Custom Arrow */}
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="mail@example.com"
                className="w-full pl-10 p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label 
                htmlFor="password-input" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password-input"
                  type={isPasswordVisible ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="w-full pl-10 p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button 
                  type="button" 
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                  aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                >
                  {isPasswordVisible ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M1 1l22 22" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.022 7-9.542 7-4.478 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label 
                htmlFor="confirm-password-input" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Re-enter Password
              </label>
              <div className="relative">
                <input
                  id="confirm-password-input"
                  type={isConfirmPasswordVisible ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  className="w-full pl-10 p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button 
                  type="button" 
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                  aria-label={isConfirmPasswordVisible ? "Hide password" : "Show password"}
                >
                  {isConfirmPasswordVisible ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M1 1l22 22" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.022 7-9.542 7-4.478 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* --- MODIFIED TERMS LINK --- */}
            <div className="flex items-center mb-6">
              <input
                id="terms-checkbox"
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms-checkbox" className="ml-2 text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" onClick={openModal} className="text-blue-600 hover:underline">
                  Privacy Policy & Terms
                </a>.
              </label>
            </div>

            <button type="submit" className="w-full bg-teal-500 text-white p-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors">
              Sign Up
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-6 text-center">
            Already have an account? <Link to="/login" className="text-blue-600 font-semibold hover:underline">Sign in</Link>
          </p>
        </div>

        <div className="hidden md:block md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000"
            alt="Modern living room interior"
            className="w-full h-full object-cover"
          />
        </div>
      </main>

      {isModalOpen && <TermsModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}