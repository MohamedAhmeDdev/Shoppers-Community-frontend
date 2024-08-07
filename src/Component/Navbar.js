<<<<<<< HEAD
import React from 'react'
import logo from '../assets/d9691fbd-2061-4573-b2e9-85d30d67215f.jpeg'

=======
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../assets/d9691fbd-2061-4573-b2e9-85d30d67215f.jpeg';
import { UseAuthContext } from "../hook/UseAuthContext";
>>>>>>> 70a07410723939bde5c40575c5558271e27ef485

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { dispatch,user } = UseAuthContext();
  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const navLinks = document.getElementsByClassName('nav-link');
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', closeMenu);
    }

    return () => {
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].removeEventListener('click', closeMenu);
      }
    };
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  

  return (
<<<<<<< HEAD
    <div className="w-full bg-blue-500">
      <div className="container mx-auto flex items-center justify-between">
          <img src={logo} alt="ShopHorizon Logo" className="h-12" />
          <nav className="space-x-8">
            <a href="#" className="hover:text-gray-200">Home</a>
            <a href="#" className="hover:text-gray-200">Category</a>
            <a href="#" className="hover:text-gray-200">About Us</a>
            <a href="#" className="hover:text-gray-200">Contact</a>
          </nav>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-full">Sign Up</button>
        </div>
    </div>
  )
=======
    <div>
      <nav className="flex flex-col md:flex-row items-center justify-between bg-blue-400 p-2 space-x-0 lg:space-x-10">
        <div className="flex items-center justify-between w-full md:w-auto">
         <div className='pl-10' >
        <div className=''>
        <img src={logo} alt="Company Logo" className="object-cover object-center w-20 h-10" />
        </div>
          <a href="/" className="flex items-center space-x-1">
            
            <span className="text-md text-white font-bold capitalize ">ShopHorizon</span>
          </a>
         </div>

          <div className="flex md:hidden">
            <button id="hamburger" onClick={toggleMenu}>
              <div className={`menu-icon text-white ${menuOpen ? 'hidden' : 'block'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
              </div>
              <div className={`close-icon text-white ${menuOpen ? 'block' : 'hidden'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div className={`w-full md:w-auto flex-col md:flex-row items-center justify-center ${menuOpen ? 'flex' : 'hidden md:flex'}`}>
          <div className="flex flex-col md:flex-row text-left md:text-center mt-5 md:mt-0 md:border-none lg:justify-center" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
            <Link to="/" className="nav-link block md:inline-block text-white text-md font-semibold hover:text-black px-3 py-3 md:border-none">Home</Link>
            <Link to="/category" className="nav-link block md:inline-block text-white text-md font-semibold hover:text-black px-3 py-3 md:border-none">Category</Link>
            {user ? ( <Link to="/history" className="nav-link block md:inline-block text-white text-md font-semibold hover:text-black px-3 py-3 md:border-none">Search History</Link>
              ) : 
              null
             }
            <Link to="/about" className="nav-link block md:inline-block text-white text-md font-semibold hover:text-black px-3 py-3 md:border-none">About us</Link>
            <Link to="/contact" className="nav-link block md:inline-block text-white text-md font-semibold hover:text-black px-3 py-3 md:border-none">Contact</Link>
            {user ? (
               <button onClick={handleLogout} className="nav-link block md:hidden text-white text-md font-semibold hover:text-black px-3 py-3 md:border-none">Logout</button>     
            ) : (
              <Link  to="/login" className="nav-link block md:hidden text-white text-md font-semibold hover:text-black px-3 py-3 md:border-none">Sign In</Link>
            )}
          </div>
        </div>

        {user ? (
         <button onClick={handleLogout} className="nav-link hidden sm:block text-white text-md font-semibold hover:text-black px-3 py-3 md:border-none">Logout</button>     
        ):(
          <Link to="/login" className="py-2 px-2 rounded-md bg-white text-black hover:text-blue-600 transition-all duration-300 hidden sm:block"> Sign In</Link>
          )}



        

      </nav>
    </div>
  );
>>>>>>> 70a07410723939bde5c40575c5558271e27ef485
}

export default Navbar;