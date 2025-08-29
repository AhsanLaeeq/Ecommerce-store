import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaTruck, FaTags, FaShieldAlt, FaHeadset } from "react-icons/fa";

import Cartitem from "../Cart/Cartitem";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const categoriesRef = useRef(null); // ✅ create ref

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Pick sample products for categories
  const categories = [
    products.find((p) => p.category === "beauty"),
    products.find((p) => p.category === "fragrances"),
    products.find((p) => p.category === "furniture"),
    products.find((p) => p.category === "groceries"),
  ];

  // ✅ Function to scroll to categories
  const scrollToCategories = () => {
    categoriesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Welcome to <span>ShopEase</span>
          </h1>
          <p>Your one-stop shop for the best deals & latest trends.</p>
          <button className="hero-btn" onClick={scrollToCategories}>
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="categories" ref={categoriesRef}>
        <h2>Featured Categories</h2>
        <div className="category-grid">
          {categories.map(
            (cat, index) =>
              cat && (
                <div className="category-card" key={index}>
                  <Link to={`/category/${cat.category}`}>
                    <img
                      src={cat.thumbnail || "https://via.placeholder.com/250x180"}
                      alt={cat.category}
                    />
                    <h3>{cat.category}</h3>
                  </Link>
                </div>
              )
          )}
        </div>
      </section>

      {/* Products Section */}
      <section className="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <Cartitem key={product.id} item={product} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Choose ShopEase?</h2>
        <div className="why-grid">
          <div className="why-card">
            <FaTruck className="why-icon" />
            <h3>Fast Delivery</h3>
            <p>Get your orders delivered in no time.</p>
          </div>
          <div className="why-card">
            <FaTags className="why-icon" />
            <h3>Best Prices</h3>
            <p>Unbeatable deals & discounts every day.</p>
          </div>
          <div className="why-card">
            <FaShieldAlt className="why-icon" />
            <h3>Secure Shopping</h3>
            <p>Shop with confidence & security guaranteed.</p>
          </div>
          <div className="why-card">
            <FaHeadset className="why-icon" />
            <h3>24/7 Support</h3>
            <p>We’re here to help, anytime you need us.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
