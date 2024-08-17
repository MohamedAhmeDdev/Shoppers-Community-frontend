import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../assets/d9691fbd-2061-4573-b2e9-85d30d67215f.jpeg';
import { UseAuthContext } from "../hook/UseAuthContext";
import { UseWishListContext } from "../hook/WishListCartContext";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { dispatch,user } = UseAuthContext();
  const { wishListItems } = UseWishListContext();
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
    localStorage.removeItem("role");
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  

  return (
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

          {user ? (
        <div class="relative right-7">
        <Link to="/wishList">
        <div class="bottom-4 absolute left-3 ">
            <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{wishListItems.length}</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
        </Link>
        </div>
            ) : 
            null
           }

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


        <div className='flex'>
        {user ? (
        <div class="relative py-2 right-5 hidden md:block">
        <Link to="/wishList">
        <div class="bottom-7 absolute left-3">
            <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{wishListItems.length}</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg></Link>
        </div>
            ) : 
            null
           }

        {user ? (
                <button onClick={handleLogout} className="nav-link hidden md:block text-white text-md font-semibold hover:text-black px-3 py-3 md:border-none">Logout</button>     
                ):(
                  <Link to="/login" className="py-2 px-2 rounded-md bg-white text-black hover:text-blue-600 transition-all duration-300 hidden sm:block"> Sign In</Link>
        )}
        </div>
     



        

      </nav>
    </div>
  );
}

export default Navbar;