import React from 'react'
import logo from '../assets/d9691fbd-2061-4573-b2e9-85d30d67215f.jpeg'

function Footer() {
  return (
    <div>
      <footer className="bg-blue-500 text-white py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img src={logo} alt="ShopHorizon Logo" className="h-12 mb-4" />
            <p className="text-gray-200">We aim to solve the problem of evaluating the marginal benefit (MB) and cost benefit (CB) of purchasing products from various e-shops</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Pages</h3>
            <ul className="text-gray-200 space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Category</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="text-gray-200 space-y-2">
              <li><a href="#" className="hover:underline">Electronics</a></li>
              <li><a href="#" className="hover:underline">Sports & Outdoors</a></li>
              <li><a href="#" className="hover:underline">Clothing</a></li>
              <li><a href="#" className="hover:underline">Furniture</a></li>
              <li><a href="#" className="hover:underline">Others</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="text-gray-200 mb-4">Subscribe to get the latest news from us</p>
            <button className="bg-white text-blue-500 px-4 py-2 rounded-full">Subscribe</button>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-twitter fa-lg"></i></a>
              <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-instagram fa-lg"></i></a>
              <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-facebook fa-lg"></i></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-400 mt-8 pt-4 text-center">
          <p className="text-gray-200">&copy; ShopHorizon 2024, All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer