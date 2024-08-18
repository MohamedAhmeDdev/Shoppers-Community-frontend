import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import {SERVER_URL} from '../constant'

function Register() {
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
  };

  const autRegister = async (e) => {
    e.preventDefault();

    setErrors({});
    setLoading(true);

  
    const newErrors = {};
    if (!first_name) newErrors.first_name = 'First name is required.';
    if (!last_name) newErrors.last_name = 'Last name is required.';
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!role) newErrors.role = 'Role is required.';

    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 10) {
      newErrors.password = 'Password must be at least 10 characters long.';
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      newErrors.password = 'Password must include at least one special character.';
    }
    if (!confirmPassword) newErrors.confirmPassword = 'Confirm password is required.';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${SERVER_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          role,
          password,
          confirmPassword,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setFirst_name('');
        setLast_name('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors({});
        navigate('/message')
      } else {
        setErrors({ general: result.message });
      }
    } catch (error) {
      setErrors({ general: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-r from-blue-100 to-blue-400">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center lg:bg-[url('https://lilacinfotech.com/lilac_assets/images/blog/What-Is-E-commerce-and-what-are-its-Applications.jpg')]"></div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-2xl text-center capitalize mb-4 text-black font-semibold">Register With Us</h2>
            <form onSubmit={autRegister}>
              <div className="grid grid-cols-2 gap-5">
                <div className='mb-3'>
                  <label htmlFor="name" className="mb-2 text-sm text-start font-semibold text-gray-400">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-2 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                  />
                  {errors.first_name && <div className="text-red-500 text-sm capitalize rounded-md">{errors.first_name}</div>}
                </div>
                <div>
                  <label htmlFor="name" className="mb-2 text-sm text-start font-semibold text-gray-400">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-2 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                  />
                  {errors.last_name && <div className="text-red-500 text-sm capitalize rounded-md">{errors.last_name}</div>}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="mb-2 text-sm text-start font-semibold text-gray-400">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-2 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div className="text-red-500 text-sm capitalize rounded-md">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="mb-2 text-sm text-start font-semibold text-gray-400">Role</label>
                <select
                id="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm ${errors.payment ? 'border-red-500' : ''} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
               >
                <option value="">Select Role</option>
                <option value="shop owner">Shop Owner</option>
                <option value="user">user</option>
              </select>
                {errors.role && <div className="text-red-500 text-sm capitalize rounded-md">{errors.role}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="mb-2 text-sm text-start font-semibold text-gray-400">Password</label>
                <div className="relative">
                <input
                 type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-2 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
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
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="mb-2 text-sm text-start font-semibold text-gray-400">Confirm Password</label>
                <div className="relative">
                <input
                 type={showConfirmPassword? "text" : "password"}
                  placeholder="Confirm Password"
                  className="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-2 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                  <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-3 text-gray-600"
                >
                  {showConfirmPassword ? (
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
                {errors.confirmPassword && <div className="text-red-500 text-sm capitalize rounded-md">{errors.confirmPassword}</div>}
              </div>
              <div className="pt-3">
                <button className="w-full bg-[#4169E1] py-3 text-center text-white flex justify-center items-center">
                  {loading ? <ClipLoader color="#fff" size={20} /> : 'Register Now'}
                </button>
              </div>

              {errors.general && <div className="text-red-500 text-sm capitalize rounded-md mt-3">{errors.general}</div>}

              <p className="text-sm text-center pt-5 capitalize leading-relaxed text-gray-900">
                Already have an account? <a href="/login" className="font-bold text-[#4169E1] text-grey-700">Login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;