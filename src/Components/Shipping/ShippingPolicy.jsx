import React from "react";
import "./ShippingPolicy.css";

const ShippingPolicy = () => {
  return (
    <div className="shipping-policy">
      <h1>Shipping Policy</h1>
      <p className="intro">
        We aim to deliver your orders quickly and safely. Please review our
        shipping terms below to understand our process.
      </p>

      <section id="processing">
        <h2>1. Processing Time</h2>
        <p>
          Orders are processed within <strong>1–3 business days</strong>. You
          will receive a confirmation email with tracking information once your
          order has shipped.
        </p>
      </section>

      <section id="shipping-methods">
        <h2>2. Shipping Methods & Delivery Times</h2>
        <ul>
          <li>Standard Shipping: 5–7 business days</li>
          <li>Express Shipping: 2–3 business days</li>
          <li>Overnight Shipping: 1 business day</li>
        </ul>
      </section>

      <section id="shipping-rates">
        <h2>3. Shipping Rates</h2>
        <p>
          Shipping costs are calculated at checkout based on your location and
          selected method.
        </p>
      </section>

      <section id="international">
        <h2>4. International Shipping</h2>
        <p>
          We offer worldwide shipping. Customs duties, taxes, or import fees may
          apply depending on your country.
        </p>
      </section>

      <section id="tracking">
        <h2>5. Tracking Your Order</h2>
        <p>
          Once shipped, you will receive a tracking number to monitor your
          package.
        </p>
      </section>

      <section id="delays">
        <h2>6. Delays</h2>
        <p>
          While we aim to deliver on time, delays may occur due to high demand,
          weather, or courier issues. We appreciate your patience.
        </p>
      </section>

      <section id="contact">
        <h2>7. Contact Us</h2>
        <p>
          If you have any shipping-related questions, please{" "}
          <a href="/contact">contact us</a>.
        </p>
      </section>
    </div>
  );
};

export default ShippingPolicy;
