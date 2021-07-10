import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [database, setDatabase] = useState([]);

  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartElement) => {
        if (cartElement.id === item.id) {
          return { ...cartElement, quantity: cartElement.quantity + quantity };
        } else return cartElement;
      });
      setCart(newCart);
    } else {
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://run.mocky.io/v3/5a206849-b4e1-47de-a0f6-392bd22f06b3"
      );

      setDatabase(data);
    })();
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, setCart, clearCart, addToCart, isInCart, database }}
    >
      {children}
    </CartContext.Provider>
  );
};
