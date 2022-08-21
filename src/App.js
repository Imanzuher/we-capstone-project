import { Routes, Route } from "react-router-dom";
import { login } from "./app/slices/authSlice";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Blog from "./pages/BlogPage";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      dispatch(login(email));
    }
  });
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="shoppingCart" element={<Cart />} />
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
