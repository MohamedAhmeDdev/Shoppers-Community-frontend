import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../constant';



function User() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/users`);
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setIsLoading(false);
    }
  };

  fetchUsers();
}, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <svg className="animate-spin h-8 w-8 text-blue-500" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
        </div>
      ) : (

      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="w-full bg-gray-100 border-b border-gray-200">
            <th className="py-2 px-4 text-left text-gray-600">ID</th>
            <th className="py-2 px-4 text-left text-gray-600">First Name</th>
            <th className="py-2 px-4 text-left text-gray-600">Last Name</th>
            <th className="py-2 px-4 text-left text-gray-600">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-b border-gray-200">
              <td className="py-2 px-4 text-gray-700">{user.id}</td>
              <td className="py-2 px-4 text-gray-700">{user.firstName}</td>
              <td className="py-2 px-4 text-gray-700">{user.lastName}</td>
              <td className="py-2 px-4 text-gray-700">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
       )}
    </div>
    
  );
}

export default User;
