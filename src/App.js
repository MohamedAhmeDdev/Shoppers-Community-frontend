import "./App.css";
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import ProductFilter from "./pages/ProductFilter";
import Login from "./Auth/Login";
import ForgotPassword from "./Auth/ForgotPassword";
import ResetPassword from "./Auth/ResetPassword";
import Register from "./Auth/Register";
import SearchHistory from "./pages/SearchHistory";
import AuthenticateUser from "./Auth/AuthenticateUser";
import QueryProduct from "./pages/QueryProduct";
import Message from "./Auth/Message";
import { checkToken } from './utils/TokenExp';
import { UseAuthContext } from './hook/UseAuthContext';

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  const { dispatch } = UseAuthContext();

  useEffect(() => {
      checkToken(dispatch);

      const intervalId = setInterval(() => checkToken(dispatch), 60000);
      return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/filter/:category_id" element={<ProductFilter />} />
            <Route path="/QueryProduct" element={<QueryProduct />} />
            <Route path="/history" element={<SearchHistory />} />
            <Route path="/user/:token" element={<AuthenticateUser />} />
            <Route path="/message" element={<Message />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword/:token" element={<ResetPassword />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
