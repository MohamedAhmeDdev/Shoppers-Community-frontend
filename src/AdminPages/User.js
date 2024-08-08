import React from 'react';
const users = [
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
  { id: 2, firstName: 'Bob', lastName: 'Smith', email: 'bob@example.com' },
  { id: 3, firstName: 'Charlie', lastName: 'Brown', email: 'charlie@example.com' }
];

function User() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
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
    </div>
  );
}

export default User;
