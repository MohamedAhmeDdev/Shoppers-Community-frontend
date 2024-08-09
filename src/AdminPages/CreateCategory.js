import React, { useState } from 'react';
import { SERVER_URL } from '../constant';
import ClipLoader from 'react-spinners/ClipLoader';

function CreateCategory() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const newErrors = {};
    if (!formData.name) newErrors.name = 'Category name is required.';
    if (!formData.image) newErrors.image = 'Image is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    const categoryData = new FormData();
    categoryData.append('name', formData.name);
    categoryData.append('file', formData.image);

    try {
      const response = await fetch(`${SERVER_URL}/create-category`, {
        method: 'POST',
        body: categoryData,
      });

      const result = await response.json();
      if (response.ok) {
        setMessage('Category created successfully.');
        setFormData({
          name: '',
          image: null,
        });
        setTimeout(() => setMessage(''), 3000);
      } else {
        setErrors({ general: result.message });
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors({ general: 'Failed to create category. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6">Add New Category</h1>
        {message && <p className="text-green-500 text-sm">{message}</p>}
        {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}
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
              className="mt-1 px-3 py-2 block w-full max-w-xs bg-gray-200 border border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              className="mt-1 px-3 py-2 block w-full max-w-xs bg-gray-200 border border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading ? <ClipLoader size={20} color={"#fff"} /> : 'Add Category'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateCategory;
