import React from "react";
import { Redirect } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

const Cart = () => {
  const { cart, clearCart } = useCartContext();

  if (!cart.length) return <Redirect to="/" />;

  return (
    <div>
      {cart.map((prod) => (
        <h1>
          Product: {prod.title} x {prod.quantity}
        </h1>
      ))}
      <button onClick={clearCart}>Empty cart</button>
    </div>
  );
};

export default Cart;
