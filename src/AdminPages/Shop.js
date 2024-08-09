import React from 'react';
import { Link } from 'react-router-dom';

function Shop() {
  return (
    <div className="container mx-auto p-6 relative">
      {/* Navigation Button */}
      <div className="mb-4">
        <Link to="/CreateShop">
          <button  className="absolute top-6 right-6 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
            Create Shop
          </button>
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-6">Shops</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr className="bg-gray-100 border-b">
              <th className="py-2 px-4 text-left text-gray-600">Shop Id</th>
              <th className="py-2 px-4 text-left text-gray-600">Shop Name</th>
            </tr>
          </thead>
          <tbody>
            {/* Replace the following with actual shop data */}
            <tr className="border-b">
              <td className="py-2 px-4">Shop 1</td>
              <td className="py-2 px-4">Shop 1</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">Shop 2</td>
              <td className="py-2 px-4">Shop 2</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">Shop 2</td>
              <td className="py-2 px-4">Shop 3</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Shop;