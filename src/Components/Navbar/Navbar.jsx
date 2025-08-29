import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../CartContext/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cartitem } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">ShopEase</div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
      </div>

      {/* Navigation Links + Cart */}
      <div className="nav-right">
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/return">Returns</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Cart */}
        <Link to="/checkout" className="cart-link">
          <div className="cart-icon">
            <FaShoppingCart />
            <span className="cart-count">{cartitem.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
