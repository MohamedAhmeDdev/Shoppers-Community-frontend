import "./App.css";
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Outlet,Navigate } from "react-router-dom";
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
import Shop from './AdminPages/Shop';
import Product from './AdminPages/Product';
import User from './AdminPages/User';
import CreateProduct from './AdminPages/CreateProduct';
import CreateShop from './AdminPages/CreateShop';
import CreateCategory from './AdminPages/CreateCategory';
import Sidebar from './AdminPages/Sidebar';
import CategoryList from './AdminPages/Category';
import { checkToken } from './utils/TokenExp';
import { UseAuthContext } from './hook/UseAuthContext';
import EditProduct from "./AdminPages/EditProduct";
import RouteProtection from './utils/RouteProtection';
import WishList from "./pages/WishList";



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
            <Route path="/wishList" element={<WishList/>} />
            <Route path="/user/:token" element={<AuthenticateUser />} />
            <Route path="/message" element={<Message />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword/:token" element={<ResetPassword />} />
          <Route path="/register" element={<Register />} />
          <Route
                    path="/*"
                    element={
                        <div>
                            <Sidebar />
                            <div className="md:ml-64">
                                <Routes>
                                    <Route path="/shops" element={<RouteProtection element={<Shop/> }/>} />
                                    <Route path="/categoryList" element={<RouteProtection  element={<CategoryList/>}/>} />
                                    <Route path="/user" element={<RouteProtection element={<User/>}/>} />
                                    <Route path="/product/:shop_id" element={<RouteProtection element={<Product />}/>} />
                                    <Route path="/editProduct/:product_id" element={<RouteProtection element={<EditProduct/>}/>} />
                                    <Route path="/createProduct" element={<RouteProtection element={<CreateProduct/>}/>} />
                                    <Route path="/createShop" element={<RouteProtection element={<CreateShop/>}/>} />
                                    <Route path="/create-category" element={<RouteProtection element={<CreateCategory/>}/>} />
                                    <Route path="*" element={<Navigate to="/login" />} />
                                </Routes>
                            </div>
                        </div>
                    }
                />
                 <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
