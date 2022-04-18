import React from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useCart } from "../contexts/cart-context";
import { WishlistCard } from "components/WishlistCard";

export const WishList = () => {
  useDocumentTitle("WishList | Kursi");

  const {
    cartState: { wishlist },
  } = useCart();

  return (
    <>
      <h3 className="text-center mt-1">WishList</h3>
      <main className="flex main-wrapper-wishlist m-2 wrap align-center">
        {wishlist.length === 0 && (
          <h2 className="text-center">You have no items in the wishlist</h2>
        )}
        {wishlist.map((product) => {
          return <WishlistCard key={product._id} product={product} />;
        })}
      </main>
    </>
  );
};
