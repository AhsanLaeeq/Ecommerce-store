import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">
        Have any questions or want to work together? Fill the form below and
        I’ll get back to you as soon as possible.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="6" required></textarea>
        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
