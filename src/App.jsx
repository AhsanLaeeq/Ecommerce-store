import { HashRouter, Routes, Route } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import { CartProvider } from "./Components/CartContext/CartContext";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Cartdetail from "./Components/Cartdetail/Cartdetail";
import Checkout from "./Components/Checkout/Checkout";
import Contact from "./Components/Contact/Contact";
import Faq from "./Components/Faq/Faq";
import ReturnPage from "./Components/Return/ReturnPage";
import Category from "./Components/Categorypage/Category";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import ShippingPolicy from "./Components/Shipping/ShippingPolicy";

function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": "" }}>
      <CartProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="product/:id" element={<Cartdetail />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="contact" element={<Contact />} />
              <Route path="faq" element={<Faq />} />
              <Route path="return" element={<ReturnPage />} />
              <Route path="category/:category" element={<Category />} />
              <Route path="privacy" element={<PrivacyPolicy />} />
              <Route path="shipping" element={<ShippingPolicy />} />
            </Route>
          </Routes>
        </HashRouter>
      </CartProvider>
    </PayPalScriptProvider>
  );
}

export default App;
