import React from 'react';
import { Navigate } from 'react-router-dom';


const getUserFromLocalStorage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user ? user.token : null; 
  };


const RouteProtection = ({ element: Component }) => {
   const user = getUserFromLocalStorage();



  return user ? Component : <Navigate to="/login" />;
};

export default RouteProtection;
