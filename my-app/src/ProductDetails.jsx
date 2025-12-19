import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { productAPI } from "./services/api";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
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
    const index = existingCart.findIndex(item => item._id === product._id);

    if (index !== -1) {
      existingCart[index].quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    Swal.fire({
      icon: "success",
      title: "Added to Cart",
      text: `${product.name} has been added to your cart! Quantity: ${index !== -1 ? existingCart[index].quantity : 1}`,
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const handleBuyNow = () => {
    Swal.fire({
      icon: "success",
      title: "Purchase Successful!",
      text: `Thank you for buying ${product.name}!`,
      timer: 2000,
      showConfirmButton: false,
      background: "#f0f8ff",
      iconColor: "#ff5722",
    });
  };

  if (loading) return <p>Loading product...</p>;
  if (!product) return <h2 className="not-found">Product not found!</h2>;

  return (
    <div className="details-container">
      <div className="details-card">
        <div className="details-image">
          <img
            src={product.image.startsWith("http") ? product.image : `/shop/${product.image}`}
            alt={product.name}
          />
        </div>

        <div className="details-info">
          <h1>{product.name}</h1>
          <p className="description">{product.description}</p>
          <h2 className="price">₹{product.price}</h2>

          <div className="btn-group">
            <button className="add-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="buy-btn" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
