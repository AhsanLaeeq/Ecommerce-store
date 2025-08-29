import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartitem, setcartitem] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartitem));
  }, [cartitem]);

  // const [cartitem, setcartitem] = useState([]);
  // console.log(cartitem);

  const addcart = (item) => {
    setcartitem((prev) => {
      const exist = prev.find((p) => p.id === item.id);
      if (exist) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      } else {
        return [...prev, { ...item, qty: 1 }];
      }
    });
  };

  const increaseItem = (id) => {
    setcartitem((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseItem = (id) => {
    setcartitem((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const removecart = (id) => {
    setcartitem((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ removecart, addcart, cartitem, increaseItem, decreaseItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
