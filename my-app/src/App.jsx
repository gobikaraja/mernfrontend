import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import Card from "./Card";
import Contact from "./Contact";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Products Page */}
        <Route path="/products" element={<Product />} />

        {/* Product Details Page */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Cart Page */}
        <Route path="/cart" element={<Card />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
