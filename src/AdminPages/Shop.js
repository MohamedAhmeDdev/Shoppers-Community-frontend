import React from 'react';
import { Link } from 'react-router-dom';

function Shop() {
  return (
    <div className="p-6">
      {/* Navigation Button */}
      <div className="mb-4">
        <Link to="/CreateShop">
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
            Create Shop
          </button>
        </Link>
      </div>

      {/* Table with Shop Names */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
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