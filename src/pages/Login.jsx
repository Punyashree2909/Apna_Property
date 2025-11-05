import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- MODIFIED TermsModal ---
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
          {/* --- Updated Close Button to SVG --- */}
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

export default function SignIn() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  // ✅ LOGIN API FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData)
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");

        // ✅ Save JWT token
        localStorage.setItem("token", data.token);

        // ✅ Optional: save email if remember me checked
        if (rememberMe) {
          localStorage.setItem("userEmail", email);
        }

        // ✅ Redirect to home page
        window.location.href = "/";
      } else {
        alert(data.message || "Invalid credentials. Try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Server error — make sure backend is running.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4" style={{ fontFamily: "'Inter', sans-serif" }}>

      <main className="bg-white rounded-2xl shadow-xl flex w-full max-w-4xl overflow-hidden">
        
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Sign in</h1>

          <form onSubmit={handleSubmit}>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email"
                placeholder="example.email@gmail.com"
                className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={isPasswordVisible ? 'text' : 'password'}
                  placeholder="Enter Password"
                  className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {/* --- Updated Eye Icon to SVG --- */}
                <button 
                  type="button" 
                  onClick={togglePasswordVisibility} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
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

            <div className="flex justify-between items-center my-4">
              <div className="flex items-center">
                <input 
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="ml-2 text-sm text-gray-900">Remember me</label>
              </div>

              <a 
                href="#" 
                className="text-sm text-blue-600 hover:underline"
                onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
              >
                Terms & Conditions
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Sign in
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-6 text-center">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline font-semibold">
              Sign up
            </Link>
          </p>
        </div>

        <div className="hidden md:block md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000"
            alt="A modern house at night"
            className="w-full h-full object-cover"
          />
        </div>
      </main>

      {isModalOpen && <TermsModal onClose={() => setIsModalOpen(false)} />}
      
    </div>
  );
}