import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email');
      return;
    }

    setError('');
    
    // Simulate API call
    try {
      const response = await fetch('/api/forgot-password', { // Replace with your actual API endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const result = await response.json();

      if (!result.success) {
        setError(result.message);
      } else {
        setSuccess('Password reset link sent!');
        setEmail('');
      }
    } catch (error) {
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-r from-blue-100 to-blue-400">
      <div className="container flex-1 flex flex-col items-center max-w-lg mx-auto px-4 py-28">
        <div className="flex flex-col p-6 shadow-lg bg-white rounded-xl">
          <h2 className="text-2xl text-center capitalize mb-4 text-black font-semibold">Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="email" className="text-sm text-start font-semibold text-gray-400">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"
              />
            </div>
            {error && <div className="text-red-500 mb-2">{error}</div>}
            {success && <div className="text-green-500 mb-2">{success}</div>}
            <div className="flex flex-row justify-end mb-2">
              <a href="/login" className="mr-4 text-sm font-medium text-left hover:text-[#4169E1] text-purple-blue-500">Login</a>
            </div>
            <div className="">
              <button type="submit" className="w-full bg-[#4169E1] py-3 text-center text-white">Submit</button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default ForgotPassword;