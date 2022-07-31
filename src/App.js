import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="categories" element={<Categories />} />
      <Route path="products" element={<Products />} />
      <Route path="product" element={<Product />} />
      <Route path="login" element={<Login />} />
      <Route path="shoppingCart" element={<Cart />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
