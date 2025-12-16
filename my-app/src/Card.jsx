import { useState, useEffect } from "react";
import "./Cart.css";

function Card() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const handleRemove = (productId) => {
    const updatedCart = cartItems.filter(item => item._id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-container">
        <h2>Your Cart is Empty!</h2>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-list">
        {cartItems.map(item => (
          <div className="cart-card" key={item._id}>
            <img src={item.image} alt={item.name} className="cart-img" />

            <div className="cart-info">
              <h3>{item.name}</h3>
              <p className="cart-price">₹{item.price}</p>
            </div>

            <button className="remove-btn" onClick={() => handleRemove(item._id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
