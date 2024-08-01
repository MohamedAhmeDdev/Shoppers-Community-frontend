import React from 'react'
import logo from '../assets/d9691fbd-2061-4573-b2e9-85d30d67215f.jpeg'


function Navbar() {
  return (
    <div className="w-full bg-white">
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
}

export default Navbar