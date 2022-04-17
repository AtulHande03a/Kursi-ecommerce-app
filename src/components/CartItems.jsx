import { useCart } from "contexts/cart-context";
import React from "react";
import { CartItemCard } from "./CartItemCard";

export const CartItems = () => {
  const { cartState } = useCart();
  const { cartItems } = cartState;

  return (
    <main class="main-wrapper p-0-5 ml-1">
      {cartItems.map((product) => {
        return <CartItemCard key={product._id} product={product} />;
      })}
    </main>
  );
};
