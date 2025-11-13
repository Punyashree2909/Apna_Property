// --- MODIFIED: Added axios and useNavigate ---
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

// --- TermsModal Component ---
// (This component is fine, no changes needed)
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
          {/* ... (Modal content) ... */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms & Conditions</h2>
          <div className="space-y-3 text-sm text-gray-700">
            {/* ... (Modal text) ... */}
            <p>Your terms and conditions content goes here...</p>
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
// --- End of TermsModal ---


export default function SignIn() {
  // --- Form Data State (no changes) ---
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- ADD THESE NEW STATE VARIABLES ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  // --- MODIFIED handleSubmit Function ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(""); // Clear old messages
    setIsSubmitting(true); // Start loading

    const loginData = {
      email,
      password
    };

    // --- MODIFIED: Switched from fetch to axios ---
    try {
      setStatusMessage("Signing in..."); // Loading message

      const response = await axios.post(
        "http://localhost:5000/api/auth/login", 
        loginData
      );

      // On Success:
      setStatusMessage("Login successful! Redirecting...");

      // ✅ Use auth context to login
      login(response.data.user, response.data.token);

      // ✅ Optional: save email if remember me checked
      if (rememberMe) {
        localStorage.setItem("userEmail", email);
      } else {
         localStorage.removeItem("userEmail");
      }

      // ✅ Redirect to home page
      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (error) {
      console.error("Login Error:", error);
      
      // --- Better Error Handling for Axios ---
      if (error.response && error.response.data && error.response.data.message) {
        // Show specific error from backend (e.g., "Invalid credentials")
        setStatusMessage(error.response.data.message);
      } else if (error.request) {
        // Server didn't respond
        setStatusMessage("Server not responding. (Is your backend running?)");
      } else {
        // Other unexpected errors
        setStatusMessage("Login failed. Please try again.");
      }
      setIsSubmitting(false); // Re-enable button on error
    }
    // --- End of axios logic ---
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4" style={{ fontFamily: "'Inter', sans-serif" }}>

      <main className="bg-white rounded-2xl shadow-xl flex w-full max-w-4xl overflow-hidden">
        
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Sign in</h1>

          <form onSubmit={handleSubmit}>
            
            {/* ... (Email input - no changes) ... */}
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

            {/* ... (Password input - no changes) ... */}
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
                <button 
                  type="button" 
                  onClick={togglePasswordVisibility} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                >
                  {/* ... (Eye icons - no changes) ... */}
                  {isPasswordVisible ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M1 1l22 22" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"> {/* <-- FIX: Removed stray 's' */}
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.022 7-9.542 7-4.478 0-8.268-2.943-9.542-7z" /> {/* <-- FIX: Removed stray 's' */}
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* --- MODIFIED: Added missing JSX --- */}
            <div className="flex justify-between items-center my-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="text-sm text-blue-600 hover:underline font-semibold"
              >
                Terms & Conditions
              </button>
            </div>

            {/* --- MODIFIED: Sign In Button --- */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:bg-gray-400" // <-- MODIFIED
              disabled={isSubmitting} // <-- ADD THIS
            >
              {isSubmitting ? "Signing in..." : "Sign in"} {/* <-- MODIFIED */}
            </button>
          </form> {/* <-- FIX: Removed stray '_' */}

          {/* --- ADD THIS: Status Message Display --- */}
          {statusMessage && (
            <p className={`text-center text-sm mt-4 ${
              statusMessage.includes("successful") ? "text-green-700" : "text-red-600"
            }`}>
              {statusMessage}
            </p>
          )}

          <p className="text-sm text-gray-600 mt-6 text-center"> {/* <-- FIX: Removed stray 'M' */}
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline font-semibold">
              Sign up {/* <-- FIX: Removed stray 'Note' */}
            </Link>
          </p>
        </div>

        {/* ... (Image side - no changes) ... */}
        <div className="hidden md:block md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000"
            alt="A modern house at night"
            className="w-full h-full object-cover"
          /> {/* <-- FIX: Removed stray 'Next' */}
        </div>
      </main>

      {isModalOpen && <TermsModal onClose={() => setIsModalOpen(false)} />}
      
    </div>
  );
}