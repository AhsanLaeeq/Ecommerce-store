import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-col">
          <h2 className="footer-logo">ShopEase</h2>
          <p className="footer-desc">
            ShopEase brings you the best products at unbeatable prices.
            Explore deals, enjoy secure shopping, and experience fast delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-col">
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/return">Returns</Link></li>
            <li><Link to="/shipping">Shipping</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col newsletter">
          <h3>Subscribe</h3>
          <p>Join our newsletter to stay updated on deals & offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ShopEase. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
