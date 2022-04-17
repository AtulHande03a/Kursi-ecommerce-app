import { useCart } from "contexts/cart-context";
import React from "react";
import { toast } from "react-toastify";

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
    toast.success(<div>Removed from Wishlist</div>);
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
    toast.success(<div>Moved to Cart</div>);
  };

  return (
    <article class="card-verticle flex flex-column mr-2 my-1">
      <section class="image-container mb-0-5">
        <img
          loading="lazy"
          class="card-image responsive-img"
          src={product.image}
          alt={product.category}
        />

        {/* <i class="fa-regular fa-circle-xmark dismiss-btn"></i>
        <i class="fa-regular fa-heart icon-badge"></i> */}
        <div class="card-rating flex flex-center">
          <span class="card-rating-star">{product.rating}</span>
          <i class="fa-solid fa-star rating-star-icon"></i>
        </div>
      </section>
      <section class="px-0-5 mb-0-5">
        <p class="card-title font-semi mb-0-5">{product.title}</p>
        <span class="card-brand font-semi mb-1">{product.brandName}</span>
        <div class="card-price mb-0-5">
          <span class="card-price-offer font-bold">₹ {product.price}</span>
          <span class="card-price-mrp font-semibold">₹ {product.mrp}</span>
        </div>
        <div class="flex mb-0-5">
          <span class="card-discount-text mb-0-5 font-semibold">
            {product.discount}% off
          </span>
          <span class="card-shipment font-semi">
            Ships in <b> {product.shipsIn} day</b>
          </span>
        </div>
        <button class="card-buy-btn" onClick={() => moveToCart(product)}>
          Move to Cart
        </button>
        <button
          class="card-add-btn"
          onClick={() => removeFromWishlist(product)}
        >
          Remove form Wishlist
        </button>
      </section>
    </article>
  );
};
