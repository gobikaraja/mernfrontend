import { Link } from "react-router-dom";
 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">TechBazaar</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/login">Login</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;
