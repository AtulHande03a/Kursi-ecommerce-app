import { useCart } from "contexts/cart-context";
import React from "react";

export const WishlistCard = ({ product }) => {
  const {
    cartState: { cartItems },
    cartDispatch,
  } = useCart();

  const matchedItemInCart = cartItems.find((item) => item._id === product._id);

  const removeFromWishlist = (id) => {
    cartDispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: id,
    });
  };

  const moveToCart = (product) => {
    if (matchedItemInCart === undefined) {
      cartDispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
      cartDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: product._id,
      });
    }
    if (matchedItemInCart) {
      cartDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: product._id,
      });
      cartDispatch({
        type: "INCREMENT_ITEM",
        payload: product,
      });
    }
  };

  return (
    <article className="card-verticle flex flex-column mr-2 my-1">
      <section className="image-container mb-0-5">
        <img
          loading="lazy"
          className="card-image responsive-img"
          src={product.image}
          alt={product.category}
        />

        <div className="card-rating flex flex-center">
          <span className="card-rating-star">{product.rating}</span>
          <i className="fa-solid fa-star rating-star-icon"></i>
        </div>
      </section>
      <section className="px-0-5 mb-0-5">
        <p className="card-title font-semi mb-0-5">{product.title}</p>
        <span className="card-brand font-semi mb-1">{product.brandName}</span>
        <div className="card-price mb-0-5">
          <span className="card-price-offer font-bold">₹ {product.price}</span>
          <span className="card-price-mrp font-semibold">₹ {product.mrp}</span>
        </div>
        <div className="flex mb-0-5">
          <span className="card-discount-text mb-0-5 font-semibold">
            {product.discount}% off
          </span>
          <span className="card-shipment font-semi">
            Ships in <b> {product.shipsIn} day</b>
          </span>
        </div>
        <button
          className="card-buy-btn mb-0-5"
          onClick={() => moveToCart(product)}
        >
          Move to Cart
        </button>
        <button
          className="card-add-btn"
          onClick={() => removeFromWishlist(product)}
        >
          Remove form Wishlist
        </button>
      </section>
    </article>
  );
};
