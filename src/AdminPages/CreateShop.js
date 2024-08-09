import React, { useState } from 'react';

function CreateShop() {
  const [shopName, setShopName] = useState('');

  const handleChange = (e) => {
    setShopName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const shopData = { name: shopName };

    try {
      const response = await fetch('http://localhost:5000/shops', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(shopData),
      });

      if (!response.ok) {
        throw new Error('Failed to create shop');
      }

      const result = await response.json();
      console.log('Shop created:', result);

      setShopName('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Shop</h2>
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
              value={shopName}
              onChange={handleChange}
              placeholder="Enter shop name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateShop;;