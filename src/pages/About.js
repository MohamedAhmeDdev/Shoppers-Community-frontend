import React from 'react';

function About() {
  return (
    <div className="font-roboto w-full bg-white">
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
        <section className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-2/3">
            <h1 className="text-2xl font-bold mb-4">Your number 1 comparison destination for specific products online</h1>
            <p className="text-gray-600">Since 2024, Shophorizon's mission is to provide seekers with the insights they need to find the best products online based on their industry, size, budget and specific requirements. Every year, we connect millions of people with products and the vendors that meet their needs.</p>
          </div>
          <img src="https://placehold.co/400x300" alt="Comparison Illustration" className="md:w-1/3 mt-6 md:mt-0 md:ml-6" />
        </section>
        <section className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-2/3">
            <h1 className="text-2xl font-bold mb-4">Your number 1 comparison destination for specific products online</h1>
            <p className="text-gray-600">Since 2024, Shophorizon's mission is to provide seekers with the insights they need to find the best products online based on their industry, size, budget and specific requirements. Every year, we connect millions of people with products and the vendors that meet their needs.</p>
          </div>
          <img src="https://placehold.co/400x300" alt="Comparison Illustration" className="md:w-1/3 mt-6 md:mt-0 md:ml-6" />
        </section>
        <section className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-2/3">
            <h1 className="text-2xl font-bold mb-4">Your number 1 comparison destination for specific products online</h1>
            <p className="text-gray-600">Since 2024, Shophorizon's mission is to provide seekers with the insights they need to find the best products online based on their industry, size, budget and specific requirements. Every year, we connect millions of people with products and the vendors that meet their needs.</p>
          </div>
          <img src="https://placehold.co/400x300" alt="Comparison Illustration" className="md:w-1/3 mt-6 md:mt-0 md:ml-6" />
        </section>

        <section className="text-center py-12">
          <h2 className="text-2xl font-bold mb-6">Customer’s Testimonials</h2>
          <div className="flex justify-center items-center space-x-4">
            <button className="bg-red-500 text-white p-4 rounded-full"><i className="fas fa-chevron-left"></i></button>
            <div className="bg-white p-6 rounded-full">
              <img src="https://placehold.co/100x100" alt="Customer Image" className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold">Group 1</h3>
              <p className="text-gray-600">Customer</p>
              <p className="mt-4">The best service I have come across and used so far, I would forever recommend to anyone</p>
            </div>
            <button className="bg-red-500 text-white p-4 rounded-full"><i className="fas fa-chevron-right"></i></button>
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

export default About;