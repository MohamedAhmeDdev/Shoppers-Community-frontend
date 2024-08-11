import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import { UseAuthContext } from "../hook/UseAuthContext";

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    const { dispatch, user } = UseAuthContext();
    const navigate = useNavigate();

    const handleLogout = async () => {
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        dispatch({ type: "LOGOUT" });
        navigate("/");
    };

    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}>
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <a href="/shops" className="mt-2 text-center w-full inline-block">
                        <h6 className="font-bold text-lg">ShopHorizon</h6>
                    </a>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="/shops"
                                    className={({ isActive }) => `flex items-center gap-4 text-sm font-light px-2 py-3 rounded-lg ${isActive ? 'bg-blue-500 text-white shadow-md' : 'text-gray-700'}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                                    </svg>
                                    Shops
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/categoryList"
                                    className={({ isActive }) => `flex items-center gap-4 text-sm font-light px-2 py-3 rounded-lg ${isActive ? 'bg-blue-500 text-white shadow-md' : 'text-gray-700'}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                    Category
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2"> 
                                <NavLink
                                    to="/user"
                                    className={({ isActive }) => `flex items-center gap-4 text-sm font-light px-2 py-3 rounded-lg ${isActive ? 'bg-blue-500 text-white shadow-md' : 'text-gray-700'}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                    Users
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/createProduct"
                                    className={({ isActive }) => `flex items-center gap-4 text-sm font-light px-2 py-3 rounded-lg ${isActive ? 'bg-blue-500 text-white shadow-md' : 'text-gray-700'}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                    Create Product
                                </NavLink>
                            </li>
                        </ul>

                        <ul className="flex-col min-w-full flex list-none absolute bottom-0">
                            <li className="rounded-lg">
                                <button 
                                    onClick={handleLogout} 
                                    className='cursor-pointer flex items-center gap-4 text-sm font-light px-2 py-3 rounded-lg text-red-700'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-9A2.25 2.25 0 0 0 2.25 5.25v13.5A2.25 2.25 0 0 0 4.5 21h9a2.25 2.25 0 0 0 2.25-2.25V15m-6-3h12m0 0-3-3m3 3-3 3" />
                                    </svg>
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
