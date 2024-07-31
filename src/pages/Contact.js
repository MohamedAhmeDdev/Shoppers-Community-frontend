import React from 'react';

function Contact() {
  return (
    <div className="w-full bg-white">
      {/* Header Section */}
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex items-center justify-between">
          <img src="https://placehold.co/100x50" alt="ShopHorizon Logo" className="h-12" />
          <nav className="space-x-8">
            <a href="#" className="hover:text-gray-200">Home</a>
            <a href="#" className="hover:text-gray-200">Category</a>
            <a href="#" className="hover:text-gray-200">About Us</a>
            <a href="#" className="hover:text-gray-200">Contact</a>
          </nav>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-full">Sign Up</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-16 px-4">
        <section className="text-center mb-12">
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
          <img src="https://placehold.co/1000x400" alt="Cityscape" className="mx-auto mb-6" />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 text-center mb-12">
          <div className="mb-6 md:mb-0">
            <i className="fas fa-map-marker-alt fa-3x mb-4 text-black"></i>
            <h2 className="text-xl font-bold mb-2">Location</h2>
            <p className="text-gray-600">ShopHorizon<br />Street Lane<br />Avenue 11</p>
          </div>
          <div className="mb-6 md:mb-0">
            <i className="fas fa-phone-alt fa-3x mb-4 text-black"></i>
            <h2 className="text-xl font-bold mb-2">Telephone</h2>
            <p className="text-gray-600">+2547012345678</p>
          </div>
          <div>
            <i className="fas fa-envelope fa-3x mb-4 text-black"></i>
            <h2 className="text-xl font-bold mb-2">Mail</h2>
            <p className="text-gray-600">shophorizon@gmail.com</p>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-500 text-white py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img src="https://placehold.co/100x50" alt="ShopHorizon Logo" className="h-12 mb-4" />
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
  );
}

export default Contact;