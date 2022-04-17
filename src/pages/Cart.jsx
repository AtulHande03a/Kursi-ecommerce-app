import { CartItems } from "components/CartItems";
import { CartSummary } from "components/CartSummary";
import React from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const Cart = () => {
  useDocumentTitle("Cart | Kursi");
  return (
    <div className="flex mb-1 gap-2 main-container-cart">
      <CartItems />
      <CartSummary />
    </div>
  );
};
