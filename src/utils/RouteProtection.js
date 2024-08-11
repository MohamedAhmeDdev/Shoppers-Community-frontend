import React from 'react';
import { Navigate } from 'react-router-dom';

const getUserFromLocalStorage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const role = localStorage.getItem('role');  // No need to parse role since it's stored as a string
    return { token: user ? user.token : null, role };
};

const RouteProtection = ({ element }) => {
    const { token, role } = getUserFromLocalStorage();

    // If the user is authenticated and has the right role
    if (token && role === 'shop owner') {
        return element;  // Render the protected component
    }

    // If not authenticated, redirect to login page
    return <Navigate to="/login" />;
};

export default RouteProtection;
