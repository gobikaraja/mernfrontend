import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productAPI } from "./services/api";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // If backend supports GET /getproduct/:id, use:
        // const data = await productAPI.getProductById(id);

        const allProducts = await productAPI.getAllProducts();
        const selectedProduct = allProducts.find((p) => p._id === id);
        setProduct(selectedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = existingCart.find((item) => item._id === product._id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert(`${product.name} added to cart!`);
  };

  if (loading) return <p>Loading product...</p>;

  if (!product) return <h2 className="not-found">Product not found!</h2>;

  return (
    <div className="details-container">
      <div className="details-card">
        <div className="details-image">
          <img src={product.image.startsWith("http") ? product.image : `/shop/${product.image}`} alt={product.name} />
        </div>

        <div className="details-info">
          <h1>{product.name}</h1>
          <p className="description">{product.description}</p>
          <h2 className="price">₹{product.price}</h2>

          <div className="btn-group">
            <button className="add-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
