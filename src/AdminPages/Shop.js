import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SERVER_URL } from '../constant';
import { apiCall } from "../utils/apiCall";


function Shop() {
  const [shops, setShops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await apiCall('/userShop','GET');
        setShops(response.data);
      } catch (error) {
        console.error('Error fetching shops:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShops();
  }, []);

  return (
    <div className="container mx-auto p-6 relative">
      <div className="mb-4">
        <Link to="/CreateShop">
          <button className="absolute top-6 right-6 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
            Create Shop
          </button>
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-6">Shops</h1>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <svg className="animate-spin h-8 w-8 text-blue-500" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr className="bg-gray-100 border-b">
                <th className="py-2 px-4 text-left text-gray-600">Shop Id</th>
                <th className="py-2 px-4 text-left text-gray-600">Shop Name</th>
              </tr>
            </thead>
            <tbody>
              {shops.map(shop => (
                <tr key={shop.id} className="border-b">
                  <td className="py-2 px-4">{shop.id}</td>
                  <td className="py-2 px-4">
                    <Link to={`/product/${shop.id}`}>{shop.name}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Shop;
