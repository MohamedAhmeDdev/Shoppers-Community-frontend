import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../constant';
import ClipLoader from 'react-spinners/ClipLoader';
import { apiCall } from "../utils/apiCall";

function CreateShop() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setMessage('');

    if (!name) {
      setErrors({ name: 'Shop name is required.' });
      setLoading(false);
      return;
    }

    try {
      const response = await apiCall('/create-shop', 'POST', {
        name:name,
      });

      if (response.status === 201) {
        setName('');
        setMessage('Shop created successfully!');
        navigate('/shops');
      } 
    } catch (error) {
      console.error('Error:', error);
      setErrors({ general: error.response.data.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Shop</h2>
        {message && <p className="text-green-500 text-sm">{message}</p>}
        {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label 
              htmlFor="shopName" 
              className="block text-gray-700 text-sm font-bold mb-2">
              Shop Name
            </label>
            <input 
              type="text" 
              id="shopName" 
              name="shopName" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter shop name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? <ClipLoader size={20} color="#fff" /> : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateShop;
