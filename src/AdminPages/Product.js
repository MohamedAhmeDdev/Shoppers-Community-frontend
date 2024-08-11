import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; 
import axios from 'axios';
import { SERVER_URL } from '../constant';

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { shop_id } = useParams();

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/shops/${shop_id}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching shops:', error);
      }finally {
        setIsLoading(false);
      }
    };

    fetchShops();
  }, [shop_id]);

  const deleteProduct = async (id) => { 
    try {
      await axios.delete(`${SERVER_URL}/product/${id}`);
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="p-4">
      <Link to="/CreateProduct">
        <button className="mb-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
          Create Product
        </button>
      </Link>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <svg className="animate-spin h-8 w-8 text-blue-500" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ratings</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mode of Payment</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.ratings}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.mode_of_payment}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <img src={product.product_image} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                    <Link to={`/editProduct/${product.id}`}>
                      Edit
                    </Link>
                  </button>
                  <button onClick={() => deleteProduct(product.id)} className="text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Product;
