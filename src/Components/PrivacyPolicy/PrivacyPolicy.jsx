import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="policy" id="top">
      <header className="policy-hero">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: August 29, 2025</p>
        <p className="subtitle">
          Your privacy matters. This policy explains what data we collect at{" "}
          <strong>ShopEase</strong>, how we use it, and the choices you have.
        </p>
      </header>

      {/* Smooth Scroll Table of Contents */}
      <nav className="policy-toc" aria-label="Table of contents">
        <h2>Contents</h2>
        <ul>
          <li>
            <button onClick={() => scrollToSection("info-we-collect")}>
              1. Information We Collect
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("how-we-use")}>
              2. How We Use Your Information
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("cookies")}>
              3. Cookies & Tracking
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("payments")}>
              4. Payments
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("sharing")}>
              5. Sharing Your Information
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("data-retention")}>
              6. Data Retention
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("security")}>
              7. Security
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("your-rights")}>
              8. Your Rights & Choices
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("children")}>
              9. Children’s Privacy
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("international")}>
              10. International Transfers
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("changes")}>
              11. Changes to This Policy
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")}>
              12. Contact Us
            </button>
          </li>
        </ul>
      </nav>

      {/* Policy Content */}
      <main className="policy-content">
        <section id="info-we-collect">
          <h3>1. Information We Collect</h3>
          <p>We collect information to provide and improve our services:</p>
          <ul>
            <li><strong>Account Info:</strong> name, email, password.</li>
            <li><strong>Order Details:</strong> items purchased, shipping/billing address, contact number.</li>
            <li><strong>Device & Usage:</strong> IP address, browser type, pages visited, timestamps.</li>
            <li><strong>Communication:</strong> messages you send to support or via forms.</li>
            <li><strong>Optional:</strong> wishlist, saved carts, and reviews.</li>
          </ul>
        </section>

        <section id="how-we-use">
          <h3>2. How We Use Your Information</h3>
          <ul>
            <li>Process and deliver orders, provide invoices, and handle returns.</li>
            <li>Operate, maintain, and improve the ShopEase website and apps.</li>
            <li>Personalize your experience and show relevant products or offers.</li>
            <li>Send service emails (order updates, security alerts). Marketing emails only with your consent.</li>
            <li>Prevent fraud, enforce our Terms, and comply with legal obligations.</li>
          </ul>
        </section>

        <section id="cookies">
          <h3>3. Cookies & Tracking</h3>
          <p>
            We use cookies and similar technologies (local storage, pixels) to keep you signed in, remember your cart,
            and measure site performance. You can manage cookies in your browser settings. Disabling some cookies may
            affect functionality.
          </p>
        </section>

        <section id="payments">
          <h3>4. Payments</h3>
          <p>
            Payments are processed by third-party providers (e.g., PayPal, card processors). We do not store full card
            details on our servers. Your payment data is handled in accordance with the processor’s privacy and security
            practices.
          </p>
        </section>

        <section id="sharing">
          <h3>5. Sharing Your Information</h3>
          <p>We share data only as necessary:</p>
          <ul>
            <li><strong>Vendors/Partners:</strong> shipping carriers, payment processors, analytics and cloud hosting.</li>
            <li><strong>Legal:</strong> to comply with law, respond to lawful requests, or protect rights and safety.</li>
            <li><strong>Business Transfers:</strong> in a merger, acquisition, or asset sale, per applicable laws.</li>
          </ul>
          <p>We do not sell your personal information.</p>
        </section>

        <section id="data-retention">
          <h3>6. Data Retention</h3>
          <p>
            We retain information for as long as needed to provide services, comply with legal obligations, resolve
            disputes, and enforce agreements. When no longer needed, we securely delete or anonymize data.
          </p>
        </section>

        <section id="security">
          <h3>7. Security</h3>
          <p>
            We implement administrative, technical, and physical safeguards to protect your information. However,
            no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section id="your-rights">
          <h3>8. Your Rights & Choices</h3>
          <ul>
            <li>Access, correct, or delete certain personal data via your account or by contacting us.</li>
            <li>Opt out of marketing emails via the “unsubscribe” link.</li>
            <li>Manage cookies via your browser or our cookie banner (where available).</li>
            <li>
              Depending on your region, you may have additional rights (e.g., GDPR/CCPA) such as data portability,
              restriction, and objection. We will honor applicable requests as required by law.
            </li>
          </ul>
        </section>

        <section id="children">
          <h3>9. Children’s Privacy</h3>
          <p>
            Our services are not directed to children under 13 (or the minimum age in your jurisdiction). We do not
            knowingly collect personal information from children. If you believe a child has provided us data, contact us.
          </p>
        </section>

        <section id="international">
          <h3>10. International Transfers</h3>
          <p>
            Your information may be processed and stored in countries other than your own. Where required, we use
            appropriate safeguards for cross-border transfers.
          </p>
        </section>

        <section id="changes">
          <h3>11. Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will post the revised version with an updated date.
            Material changes may be communicated via email or site notice.
          </p>
        </section>

        <section id="contact">
          <h3>12. Contact Us</h3>
          <p>
            Questions? Contact our privacy team:
          </p>
          <address>
            ShopEase Privacy Team<br />
            support@shopease.example<br />
            123 Market Street, Suite 200, Karachi, PK
          </address>
        </section>

        <button
          className="back-to-top"
          onClick={() => scrollToSection("top")}
        >
          Back to top ↑
        </button>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
