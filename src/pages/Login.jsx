import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Used for the "Sign up" link

// New Modal Component for Terms & Conditions
const TermsModal = ({ onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
        onClick={onClose} // Close modal on backdrop click
      >
        {/* Modal Content */}
        <div 
          className="bg-white rounded-lg shadow-xl max-w-2xl w-full m-4 p-6 relative max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
        >
          {/* Close Button */}
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
            <p>Welcome to ApnaProperty. By accessing or using our website, you agree to be bound by these terms and conditions.</p>
            
            <h3 className="font-semibold text-base text-gray-800 pt-2">1. User Conduct</h3>
            <p>You agree not to post any content that is false, misleading, defamatory, or infringes on any third-party rights. All listings must be accurate and represent properties you are legally authorized to market.</p>

            <h3 className="font-semibold text-base text-gray-800 pt-2">2. Listing Accuracy</h3>
            <p>ApnaProperty is not responsible for the accuracy of listings provided by users, brokers, or third parties. We do not verify the information and advise all users to conduct their own due diligence before entering into any transaction.</p>

            <h3 className="font-semibold text-base text-gray-800 pt-2">3. Intellectual Property</h3>
            <p>All content on this site, including logos, graphics, and text, is the property of ApnaProperty or its content suppliers and is protected by international copyright laws.
            </p>

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

// Main Component (changed name to SignIn)
export default function SignIn() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // <-- ADDED for modal

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!', { email, password, rememberMe });
    // You can add your sign-IN logic here
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* Main Sign-in Card */}
      <main className="bg-white rounded-2xl shadow-xl flex w-full max-w-4xl overflow-hidden">
        
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          {/* 1. Title Changed */}
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Sign in</h1>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" id="email" name="email"
                     placeholder="example.email@gmail.com"
                     className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={isPasswordVisible ? 'text' : 'password'}
                  id="password"
                  name="password"
                  // 2. Placeholder Changed
                  placeholder="Enter Password"
                  className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required />
                {/* Password visibility toggle */}
                <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {isPasswordVisible ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7 1.274-4.057 5.064-7 9.542-7 .847 0 1.67.11 2.458.31M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Policy Checkbox / Terms Link */}
            <div className="flex justify-between items-center my-4">
              <div className="flex items-center">
                <input type="checkbox" id="rememberMe" name="rememberMe"
                       className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                       checked={rememberMe}
                       onChange={(e) => setRememberMe(e.target.checked)} />
                {/* Note: Kept this text as you didn't ask to change it. 
                    For a sign-in page, "Remember me" might be more common. */}
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">I agree to the privacy policy</label>
              </div>
              
              {/* 3. Terms & Conditions link updated to open modal */}
              <a 
                href="#" 
                className="text-sm text-blue-600 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }}
              >
                Terms & Conditions
              </a>
            </div>

            {/* 4. Sign In Button */}
            <button type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
              Sign in
            </button>
          </form>
          
          {/* 5. 'Or sign in with' divider */}
          <div className="my-6 flex items-center justify-center">
            <span className="text-sm text-gray-500">Or sign in with</span>
          </div>

          {/* Social Logins */}
          <div className="flex justify-center space-x-4">
            {/* Google */}
            <button className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
            </button>
            {/* Facebook */}
            <button className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-6 h-6 text-[#1877F2]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
              </svg>
            </button>
            {/* 6. Third button (Apple) removed */}
          </div>

          {/* 7. New: Don't have an account? Sign up */}
          <p className="text-sm text-gray-600 mt-6 text-center">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline font-semibold">
              Sign up
            </Link>
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="hidden md:block md:w-1/2">
          <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000"
               onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x800/333/FFF?text=Image+Not+Found'; }}
               alt="A modern house at night"
               className="w-full h-full object-cover" />
        </div>
      </main>
      
      {/* 3. Render the modal if isModalOpen is true */}
      {isModalOpen && <TermsModal onClose={() => setIsModalOpen(false)} />}
      
    </div>
  );
}