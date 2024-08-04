import React, { useReducer } from 'react';

function Login() {
  const initialState = {
    email: '',
    password: '',
    error: '',
    loading: false,
    success: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_FIELD':
        return {
          ...state,
          [action.field]: action.value,
        };
      case 'SUBMIT':
        return {
          ...state,
          loading: true,
          error: '',
        };
      case 'SUCCESS':
        return {
          ...state,
          loading: false,
          success: true,
        };
      case 'ERROR':
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: 'SET_FIELD',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT' });

    if (!state.email || !state.password) {
      dispatch({ type: 'ERROR', error: 'Email and password are required' });
      return;
    }

    try {
      const response = await fetch('https://shoppers-community-server.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: state.email,
          password: state.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: 'SUCCESS' });
        // Handle successful login (e.g., store token, redirect, etc.)
      } else {
        const errorData = await response.json();
        dispatch({ type: 'ERROR', error: errorData.message });
      }
    } catch (error) {
      dispatch({ type: 'ERROR', error: 'Network error' });
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-r from-blue-100 to-blue-400">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center lg:bg-[url('https://lilacinfotech.com/lilac_assets/images/blog/What-Is-E-commerce-and-what-are-its-Applications.jpg')]">
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-2xl text-center capitalize mb-4 text-black font-semibold">Login</h2>
            <form action="#" onSubmit={handleSubmit}>
              <div className="">
                <label htmlFor="email" className="mb-2 text-sm text-start font-semibold text-gray-400">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label htmlFor="password" className="mb-2 text-sm text-start font-semibold text-gray-400">Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="flex items-center border border-blue-300 w-full px-5 py-3 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-md"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                />
              </div>
              {state.error && <p className="text-red-500">{state.error}</p>}
              <div className="">
                <button type="submit" disabled={state.loading} className="w-full bg-[#4169E1] py-3 text-center text-white">
                  {state.loading ? 'Logging in...' : 'Login'}
                </button>
              </div>
              {state.success && <p className="text-green-500">Login successful!</p>}
              <p className="text-sm text-center pt-5 capitalize leading-relaxed text-gray-900">
                Don't have an account? <a href="/register" className="font-bold text-[#4169E1] text-grey-700">Register</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;