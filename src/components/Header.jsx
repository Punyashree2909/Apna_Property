    
  import React, { useState, useRef } from 'react';
  import { Link, NavLink } from 'react-router-dom';
  import { useAuth } from '../context/AuthContext';
  import Icon from './Icon.jsx';
  import logoImage from '../assets/no background logo.png';



  const Header = () => {
    const { isAuthenticated, user, logout } = useAuth();
    const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);

   

    // --- NEW ---

    // A ref to store the timer ID

    const closeTimer = useRef(null);

    // --- END NEW ---





    const defaultClass = "text-gray-600 hover:text-teal-600 transition-colors";

    const activeClass = "text-teal-600 font-semibold transition-colors";



    const getNavLinkClass = ({ isActive }) => {

      return isActive ? activeClass : defaultClass;

    };



    // --- NEW ---

    // Function to handle entering the menu area

    const handleMenuEnter = () => {

      // If there's a timer to close the menu, cancel it

      if (closeTimer.current) {

        clearTimeout(closeTimer.current);

        closeTimer.current = null;

      }

      // Open the menu

      setIsLoginMenuOpen(true);

    };



    // Function to handle leaving the menu area

    const handleMenuLeave = () => {

      // Set a short timer to close the menu (e.g., 200ms)

      closeTimer.current = setTimeout(() => {

        setIsLoginMenuOpen(false);

      }, 200); // 200ms delay

    };

    // --- END NEW ---



    return (

      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between h-16">

           

            <Link to="/" className="flex items-center space-x-2">

              <img

                src={logoImage}

                alt="ApnaProperty Logo"

                className="h-8 w-auto"

              />

              <span className="text-2xl font-bold text-gray-800">ApnaProperty</span>

            </Link>



           <div className="hidden md:flex items-center space-x-6">

          <NavLink to="/" className={getNavLinkClass} end>Home</NavLink>

           <NavLink to="/buy" className={getNavLinkClass}>Buy</NavLink>

           <NavLink to="/rent" className={getNavLinkClass}>Rent</NavLink>

           <NavLink to="/sell_page" className={getNavLinkClass}>Sell</NavLink> {/* <-- FIXED */}

           <NavLink to="/home-loan" className={getNavLinkClass}>Home Loans</NavLink>

           <NavLink to="/about-us" className={getNavLinkClass}>About Us</NavLink>

           <NavLink to="/contact-us" className={getNavLinkClass}>Contact Us</NavLink>

           <NavLink to="/help" className={getNavLinkClass}>Help</NavLink> {/* <-- FIXED */}

          </div>



            {/* Auth Section */}
            {isAuthenticated ? (
              <div className="hidden md:block relative" onMouseEnter={handleMenuEnter} onMouseLeave={handleMenuLeave}>
                <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  {user?.fullName || 'User'}
                </button>
                {isLoginMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-max min-w-[200px] bg-white shadow-lg rounded-md p-4 border border-gray-200 z-50">
                    <Link to="/profile" className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsLoginMenuOpen(false)}>
                      My Profile
                    </Link>
                    <Link to="/my-properties" className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded" onClick={() => setIsLoginMenuOpen(false)}>
                      My Properties
                    </Link>
                    <button onClick={() => { logout(); setIsLoginMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 rounded">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:block relative" onMouseEnter={handleMenuEnter} onMouseLeave={handleMenuLeave}>
                <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  Log In
                </button>
                {isLoginMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-max min-w-[200px] bg-white shadow-lg rounded-md p-4 border border-gray-200 z-50">
                    <Link to="/login" className="block w-full text-center bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors" onClick={() => setIsLoginMenuOpen(false)}>
                      Log In
                    </Link>
                    <p className="text-sm text-gray-600 mt-3 text-center">
                      New to ApnaProperty?{' '}
                      <Link to="/signup" className="text-blue-600 hover:underline font-semibold" onClick={() => setIsLoginMenuOpen(false)}>
                        Sign Up here
                      </Link>
                    </p>
                  </div>
                )}
              </div>
            )}





            <button className="md:hidden">

              <Icon

                path="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"

                className="w-6 h-6 text-gray-600"

              />

            </button>

          </div>

        </div>

      </header>

    );

  };



  export default Header;