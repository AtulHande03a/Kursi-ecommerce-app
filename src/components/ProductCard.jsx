import { useCart } from "contexts/cart-context";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ProductCard = ({ product }) => {
  const {
    cartState: { cartItems, wishlist },
    cartDispatch,
  } = useCart();

  const navigate = useNavigate();

  const matchedItemInCart = cartItems.find((item) => item._id === product._id);

  const matchedItemInWishlist = wishlist.find(
    (item) => item._id === product._id
  );

  const addToCart = (product) => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    toast.success(<div>Added to Cart</div>);
  };

  const addToWishlist = (product) => {
    cartDispatch({
      type: "ADD_TO_WISHLIST",
      payload: product,
    });
    toast.success(<div>Added to Wishlist</div>);
  };

  const {
    image,
    category,
    rating,
    price,
    mrp,
    title,
    brandName,
    discount,
    shipsIn,
  } = product;

  return (
    <>
      <article className="card-verticle flex flex-column mr-2 my-1 mb-2">
        <section className="image-container mb-0-5">
          <img
            loading="lazy"
            className="card-image responsive-img"
            src={image}
            alt={category}
          />
          <span className="text-badge">Best Seller</span>

          <div className="card-rating flex flex-center">
            <span className="card-rating-star">{rating}</span>
            <i className="fa-solid fa-star rating-star-icon"></i>
          </div>
        </section>
        <section className="px-0-5 mb-0-5">
          <p className="card-title font-semi mb-0-5">{title}</p>
          <span className="card-brand font-semi mb-1">{brandName}</span>
          <div className="card-price mb-0-5">
            <span className="card-price-offer font-bold">₹ {price}</span>
            <span className="card-price-mrp font-semibold">₹ {mrp}</span>
          </div>
          <div className="flex mb-0-5">
            <span className="card-discount-text mb-0-5 font-semibold">
              {discount}% off
            </span>
            <span className="card-shipment font-semi">
              Ships in <b> {shipsIn} day</b>
            </span>
          </div>
          {matchedItemInCart ? (
            <button
              className="card-cart-btn card-add-btn  mb-0-5"
              onClick={() => navigate("/cart")}
            >
              Go to Cart
            </button>
          ) : (
            <button
              className="card-cart-btn card-buy-btn mb-0-5"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          )}

          {matchedItemInWishlist ? (
            <button
              className="card-wishlist-btn card-add-btn"
              onClick={() => navigate("/wishlist")}
            >
              Go to Wishlist
            </button>
          ) : (
            <button
              className="card-wishlist-btn card-add-btn"
              onClick={() => addToWishlist(product)}
            >
              Add To Wishlist
            </button>
          )}
        </section>
      </article>
    </>
  );
};
