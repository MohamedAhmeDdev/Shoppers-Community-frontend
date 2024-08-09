import React, { useState } from 'react';

function CreateCategory() {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const categoryData = new FormData();
    categoryData.append('name', formData.name);
    categoryData.append('image', formData.image);

    try {
      const response = await fetch('http://localhost:5000/categories', {
        method: 'POST',
        body: categoryData,
      });

      if (!response.ok) {
        throw new Error('Failed to add category');
      }

      const result = await response.json();
      console.log('Category Added:', result);

      setFormData({
        name: '',
        image: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
      <h1 className="text-2xl font-bold mb-6">Add New Category</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1  px-3 py-2 block w-full max-w-xs bg-gray-200 border border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image URL:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
           className="mt-1  px-3 py-2 block w-full max-w-xs bg-gray-200 border border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Category
        </button>
      </form>
      </div>
    </div>
  );
}

export default CreateCategory;
