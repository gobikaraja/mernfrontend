import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { productAPI } from "./services/api"; // your backend API

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productAPI.getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (!products.length) return <p>No products found.</p>;

  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <Link
            key={product._id}
            to={`/product/${product._id}`}
            className="product-card"
          >
            <img
              src={
                product.image.startsWith("http")
                  ? product.image
                  : `/shop/${product.image}`
              }
              alt={product.name}
              className="product-img"
            />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p className="product-price">₹{product.price.toLocaleString()}</p>
              <p className="product-desc">{product.description}</p>
              <button className="buy-btn">Buy Now</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Product;
