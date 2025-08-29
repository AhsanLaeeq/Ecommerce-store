import React, { useState } from "react";
import "./ReturnPage.css";

const ReturnPage = () => {
  const [formData, setFormData] = useState({
    orderId: "",
    email: "",
    reason: "",
    comments: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Return request submitted successfully!");
    setFormData({ orderId: "", email: "", reason: "", comments: "" });
  };

  return (
    <div className="return-container">
      <h2 className="return-title">Product Return Request</h2>
      <p className="return-subtitle">
        Please fill out the form below to request a return for your order.
      </p>

      <form className="return-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="orderId">Order ID</label>
          <input
            type="text"
            id="orderId"
            name="orderId"
            value={formData.orderId}
            onChange={handleChange}
            required
            placeholder="Enter your order ID"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Registered Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="reason">Reason for Return</label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          >
            <option value="">Select a reason</option>
            <option value="damaged">Damaged product</option>
            <option value="wrong">Wrong item received</option>
            <option value="not_satisfied">Not satisfied with product</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="comments">Additional Comments</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Provide more details (optional)"
          />
        </div>

        <button type="submit" className="return-btn">Submit Request</button>
      </form>
    </div>
  );
};

export default ReturnPage;
