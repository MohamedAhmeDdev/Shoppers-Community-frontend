import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const { token } = useParams();


  const authResetPassword = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch(`https://shoppers-community-server.onrender.com/reset-password/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password,
          confirmPassword,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setPassword('');
        setConfirmPassword('');
        setError('');
        setMessage(result.message);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };
  return (
    <div className="min-h-screen py-20 bg-gradient-to-r from-blue-100  to-blue-400" >
    <div className="container flex-1 flexflex-col items-center max-w-lg mx-auto px-4 py-28">
       {error && <div className="mb-4 text-red-500 bg-red-200 p-2 capitalize rounded-md">{error}</div>}
       {message && <div className="mb-4 text-green-500 bg-green-200 capitalize p-2 rounded-md">{message}</div>}
     <div className="flex flex-col p-6 shadow-lg bg-white rounded-xl">
       <h2  className="text-2xl text-center capitalize mb-4 text-black font-semibold">Reset Password</h2>
       <form onSubmit={authResetPassword}>

       <div className="">
            <label htmlFor="password" className="mb-2 text-sm text-start font-semibold text-gray-400">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"/>
            </div>
            <div className="">
            <label htmlFor="password" className="mb-2 text-sm text-start font-semibold text-gray-400">Confirm Password</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" className="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"/>
            </div>
         <div className="flex flex-row justify-end mb-8">
         </div>
         <div className="">
           <button className="w-full bg-[#4169E1] py-3 text-center text-white">Submit</button>
         </div>
       </form>
     </div>

   </div>

    </div>
  )
}

export default ResetPassword