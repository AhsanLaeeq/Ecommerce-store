// Checkout.jsx
import React, { useState, useContext } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { CartContext } from "../CartContext/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const { cartitem, increaseItem, decreaseItem, removecart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  // Calculate subtotal
  const subtotal = cartitem.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = 5;
  const total = subtotal + shipping;

  return (
    <div className="checkout">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-container">
        {/* Left Section */}
        <div className="checkout-left">
          {/* Shipping Info */}
          <div className="checkout-box">
            <h2>Shipping Information</h2>
            <form className="checkout-form">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Phone Number" required />
              <input type="text" placeholder="Address" required />
              <div className="form-flex">
                <input type="text" placeholder="City" required />
                <input type="text" placeholder="ZIP Code" required />
              </div>
              <select required>
                <option value="">Select Country</option>
                <option>Pakistan</option>
                <option>USA</option>
                <option>UK</option>
                <option>India</option>
              </select>
            </form>
          </div>

          {/* Payment Method */}
          <div className="checkout-box">
            <h2>Payment Method</h2>
            <div className="payment-options">
              {["card", "paypal", "cod"].map((method) => (
                <label key={method}>
                  <input
                    type="radio"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    name="payment"
                  />
                  {method === "card" && "Credit/Debit Card"}
                  {method === "paypal" && "PayPal"}
                  {method === "cod" && "Cash on Delivery"}
                </label>
              ))}
            </div>
          </div>

          {/* PayPal Buttons */}
          {paymentMethod === "paypal" && (
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={(data, actions) =>
                actions.order.create({
                  purchase_units: [
                    {
                      description: "Order Payment",
                      amount: { currency_code: "USD", value: total.toFixed(2) },
                    },
                  ],
                })
              }
              onApprove={async (data, actions) => {
                const details = await actions.order.capture();
                alert(`Transaction completed by ${details.payer.name.given_name}`);
              }}
              onError={(err) => console.error("PayPal Checkout Error:", err)}
            />
          )}
        </div>

        {/* Right Section */}
        <div className="checkout-right">
          <div className="checkout-box">
            <h2>Order Summary</h2>

            {cartitem.map((item) => (
              <div className="order-items" key={item.id}>
                <div className="order-item">
                  <img src={item.thumbnail} alt={item.title} />
                  <div>
                    <h4>{item.title}</h4>
                    <p>Qty: {item.qty}</p>
                    <div className="qty-controls">
                      <button onClick={() => increaseItem(item.id)}>+</button>
                      <button onClick={() => decreaseItem(item.id)}>-</button>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removecart(item.id)}
                    >
                      Remove Item
                    </button>
                  </div>
                  <span>${(item.price * item.qty).toFixed(2)}</span>
                </div>
              </div>
            ))}

            <div className="order-summary">
              <p>
                Subtotal: <span>${subtotal.toFixed(2)}</span>
              </p>
              <p>
                Shipping: <span>${shipping.toFixed(2)}</span>
              </p>
              <h3>
                Total: <span>${total.toFixed(2)}</span>
              </h3>
            </div>

            <button className="place-order-btn">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
