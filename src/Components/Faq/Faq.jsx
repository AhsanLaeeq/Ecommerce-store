import React, { useState } from "react";
import "./Faq.css";

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards, PayPal, and bank transfers."
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery usually takes 3-5 business days depending on your location."
  },
  {
    question: "Can I return or exchange a product?",
    answer: "Yes, we have a 7-day return and exchange policy for unused products."
  },
  {
    question: "How can I track my order?",
    answer: "After placing your order, you’ll receive a tracking link via email."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${openIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
