
import React from 'react';






function Home() {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to TechBazaar</h1>
          <p>Your Ultimate Electronics Store</p>
          <p>Discover the latest gadgets, smartphones, laptops, smartwatches, and accessories at unbeatable prices.</p>
          <button className="shop-btn">Shop Now</button>
        </div>
        <div className="hero-image">
          <img src="https://th.bing.com/th/id/OIP.zKJEzVWBgSYzvHID30YEUQHaEJ?w=277&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1" alt="Electronics Store Banner" />
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Why Shop With Us?</h2>
        <div className="features-card">
          <p>✔ 100% Secure Payments</p>
          <p>✔ Fast & Reliable Delivery</p>
          <p>✔ Easy Returns & Refunds</p>
          <p>✔ 24/7 Customer Support</p>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <h2>Explore Top Electronics Categories</h2>
        <div className="categories-card">
          <p>📱 Smartphones</p>
          <p>💻 Laptops & Computers</p>
          <p>⌚ Smartwatches & Wearables</p>
          <p>🎧 Headphones & Earbuds</p>
          <p>📷 Cameras & Accessories</p>
          <p>🔌 Home Electronics</p>
        </div>
      </div>

      {/* Trending Offers Section */}
      <div className="offers-section">
        <h2>Trending Offers</h2>
        <div className="offers-card">
          <p>⌚ Smart Watches Starting ₹999</p>
          <p>🎧 Bluetooth Earbuds Under ₹1499</p>
          <p>💻 Laptops From ₹25,000</p>
          <p>📱 Smartphones Up to 30% OFF</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-section">
        <p>© 2025 TechBazaar — Your Electronics Partner.</p>
      </footer>
      
    </div>
  );
}

export default Home;
