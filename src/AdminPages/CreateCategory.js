import React, { useState } from 'react';
import { SERVER_URL } from '../constant';
import ClipLoader from 'react-spinners/ClipLoader';
import axios from 'axios';

function CreateCategory() {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

 
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
  
    const newErrors = {};
    if (!name) newErrors.name = 'Category name is required.';
    if (!image) newErrors.image = 'Image is required.';
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }
    console.log(image);
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', image);
  
    try {
      const response = await axios.post(`${SERVER_URL}/create-category`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.status === 201) {
        setMessage('Category created successfully.');
        setName('');
        setImage('');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setErrors({ general: response.data.message });
      }
    } catch (error) {
      console.log(error);
      if (error.response.status) {
        setErrors({ general: error.response.data.message });
      } else if (error.request) {
        setErrors({ general: 'No response received from server.' });
      } else {
        setErrors({ general: error.message });
      }
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
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
