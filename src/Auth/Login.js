import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import {SERVER_URL} from '../constant'
import { UseAuthContext } from "../hook/UseAuthContext";



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigate = useNavigate()
  const { dispatch } = UseAuthContext();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const authLogin = async (e) => {
    e.preventDefault();
  
    setErrors({});
    setLoading(true);
  
    const newErrors = {};
  
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!password) newErrors.password = 'Password is required.';
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }
  
    try {
      const response = await fetch(`${SERVER_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        const user = result; 
        setErrors({});
     if(user.role === 'shop owner'){
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("role", user.role); 
      dispatch({ type: "LOGIN", payload: user });
      navigate('/shops');
     }else{
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: "LOGIN", payload: user });
      navigate('/');
     }
      } else {
        setErrors({ general: result.message });
      }
    } catch (error) {
      console.log(error);
      setErrors({ general: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen py-20 bg-gradient-to-r from-blue-100  to-blue-400" >
       <div className="container flex-1 flexflex-col items-center max-w-lg mx-auto px-4 py-28">
        <div className="flex flex-col p-6 shadow-lg bg-white rounded-xl">
          <h2  className="text-2xl text-center capitalize mb-4 text-black font-semibold">login in</h2>
          <form onSubmit={authLogin}>
            
           {errors.general && <div className="text-red-500 text-sm capitalize rounded-md mt-3">{errors.general}</div>}

            <div className="mb-6">
            <label htmlFor="email" className="mb-2 text-sm text-start font-semibold text-gray-400">Email</label>
            <input  type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" className="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"/>
            {errors.email && <div className="text-red-500 text-sm capitalize rounded-md">{errors.email}</div>}
            </div>
            <div className="mb-6">
            <label htmlFor="password" className="mb-2 text-sm text-start font-semibold text-gray-400">Password</label>
            <div className="relative">
            <input  type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Confirm Your Password" className="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"/>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 text-gray-600"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              )}
            </button>

            </div>
             {errors.password && <div className="text-red-500 text-sm capitalize rounded-md">{errors.password}</div>}
            </div>
            <div className="flex flex-row justify-end mb-2">
            <a href="/forgotPassword" className="mr-4 text-sm font-medium text-left hover:text-[#4169E1] text-purple-blue-500">Forgot password?</a>
            </div>
            <div className="">
            <button className="w-full bg-[#4169E1] py-3 text-center text-white">
            {loading ? <ClipLoader color="#fff" size={20} /> : 'Login'}
            </button>

              <p className="text-sm text-center pt-5   capitalize leading-relaxed text-gray-900">Not registered yet?<a href="/register" className="font-bold text-[#4169E1] text-grey-700">Create an Account</a></p>
            </div>
          </form>
        </div>

      </div>
  
   </div>
  )
}

export default Login