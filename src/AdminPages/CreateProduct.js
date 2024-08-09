import React from 'react';

export default function CreateProduct() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create a New Product</h2>
      <form className="space-y-4">
        {/* Product Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter product name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            id="price"
            type="number"
            placeholder="Enter product price"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>

        {/* Ratings */}
        <div>
          <label htmlFor="ratings" className="block text-sm font-medium text-gray-700">
            Ratings
          </label>
          <input
            id="ratings"
            type="text"
            placeholder="Rate product"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>

        {/* Mode of Payment */}
        <div>
          <label htmlFor="payment-mode" className="block text-sm font-medium text-gray-700">
            Mode of Payment
          </label>
          <select
            id="payment-mode"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="credit-card">Upfront</option>
            <option value="paypal">After Delivery</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Sports & Outdoors</option>
          </select>
        </div>

        {/* Shop */}
        <div>
          <label htmlFor="shop" className="block text-sm font-medium text-gray-700">
            Shop
          </label>
          <input
            id="shop"
            type="text"
            placeholder="Enter shop name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>

        {/* Product Image */}
        <div>
          <label htmlFor="product-image" className="block text-sm font-medium text-gray-700">
            Product Image
          </label>
          <input
            id="product-image"
            type="file"
            accept="image/*"
            className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-gray-50 hover:file:bg-gray-100"/>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
