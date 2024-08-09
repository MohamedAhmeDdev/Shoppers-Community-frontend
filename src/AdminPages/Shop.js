import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SERVER_URL } from '../constant';

function Shop() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/shop`);
        setShops(response.data);
      } catch (error) {
        console.error('Error fetching shops:', error);
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

      {shops.length === 0 ? (
           <div className="overflow-x-auto">
           <table className="min-w-full bg-white border border-gray-200 divide-y divide-gray-200">
             <thead className="bg-gray-100">
               <tr className="bg-gray-100 border-b">
                 <th className="py-2 px-4 text-left text-gray-600">Shop Id</th>
                 <th className="py-2 px-4 text-left text-gray-600">Shop Name</th>
               </tr>
             </thead>
             <tbody>
              <tr>
              <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500">No shops found.</td>
              </tr>
             </tbody>
           </table>
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
