//import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [prodInCart, setProdInCart] = useState(null);

  const [totalPrice, setTotalPrice] = useState(0);

  //const [providerloading, setproviderLoading] = useState(true);

  const clearCart = () => setCart([]);

  const removeProd = (prod) => {
    let products = cart.filter((e) => e.id !== prod.id);
    setCart([...products]);
    return "Producto eliminado";
  };

  const isInCart = (id) => cart.some((item) => item.id === id);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartElement) => {
        if (cartElement.id === item.id) {
          return {
            ...cartElement,
            quantity: cartElement.quantity + quantity,
          };
        } else return cartElement;
      });
      setCart(newCart);
    } else {
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };
  const actualStock = (item) => {
    const prodInCart = cart.find((prod) => item.id === prod.id);
    if (prodInCart) {
      return item.stock - prodInCart.quantity;
    } else return item.stock;
  };

  // useEffect(() => {
  //   const localCart = localStorage.getItem("cart");
  //   if (!localCart) localStorage.setItem("cart", JSON.stringify([]));
  //   else setCart(JSON.parse(localCart));
  //   setproviderLoading(false);
  // }, []);

  //SI TRATO DE IMPLEMENTAR LO DEL LOCAL STORAGE. ME TIRA UN ERROR EN LA LINEA 59 DE QUE CART.REDUCE NO ES UNA FUNCION(VER)
  useEffect(() => {
    //localStorage.setItem("cart", JSON.stringify(cart));
    const inCart = cart.reduce((acc, prod) => {
      return acc + prod.quantity;
    }, 0);
    setProdInCart(inCart);
    setTotalPrice(
      cart
        .reduce((acc, { quantity, price }) => acc + quantity * price, 0)
        .toFixed(2)
    );
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        clearCart,
        addToCart,
        isInCart,
        removeProd,
        actualStock,
        prodInCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
