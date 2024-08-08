import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Product() {
  // Sample data for the table with image URLs
  const products = [
    {
      name: "Product A",
      price: "2000",
      ratings: "4.5",
      paymentMode: "Upfront",
      category: "Electronics",
      shop: "Shop A",
      productImage: "https://via.placeholder.com/100" // Placeholder image URL
    },
    {
      name: "Product B",
      price: "300",
      ratings: "4.0",
      paymentMode: "After delivery",
      category: "Apparel",
      shop: "Shop B",
      productImage: "https://via.placeholder.com/100" // Placeholder image URL
    },
    // Add more products as needed
  ];

  return (
    <div className="p-4">
      {/* Button linking to CreateProduct page */}
      <Link to="/CreateProduct">
        <button className="mb-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
            Create Product
        </button>
      </Link>
      
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ratings</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mode of Payment</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shop</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Image</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.price}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.ratings}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.paymentMode}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.shop}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <img src={product.productImage} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product;