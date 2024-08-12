import React from 'react';
import { Navigate } from 'react-router-dom';

const getUserFromLocalStorage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const role = localStorage.getItem('role'); 
    return { token: user ? user.token : null, role };
};

const RouteProtection = ({ element }) => {
    const { token, role } = getUserFromLocalStorage();

    if (token && role === 'shop owner') {
        return element;
    }

    return <Navigate to="/login" />;
};

export default RouteProtection;
