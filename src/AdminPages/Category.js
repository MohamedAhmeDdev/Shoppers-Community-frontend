import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Electronics', image: 'https://via.placeholder.com/150?text=Electronics' },
  { id: 2, name: 'Clothing', image: 'https://via.placeholder.com/150?text=Clothing' },
  { id: 3, name: 'Sports & Outdoors', image: 'https://via.placeholder.com/150?text=Sports+%26+Outdoors' }, 
];

function Category() {
  const navigate = useNavigate();

  const handleAddCategory = () => {
    navigate('/create-category');
  };

  return (
    <div className="container mx-auto p-6 relative">
      <button
        onClick={handleAddCategory}
        className="absolute top-6 right-6 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
      >
        Add Category
      </button>
      <h1 className="text-2xl font-bold mb-6">Category Management</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {categories.map(category => (
              <tr key={category.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {category.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {category.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <img className="w-24 h-24 object-cover" src={category.image} alt={category.name} />
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Category;
