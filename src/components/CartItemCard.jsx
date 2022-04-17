import { useCart } from "contexts/cart-context";
import React from "react";
import { useNavigate } from "react-router-dom";

export const CartItemCard = ({ product }) => {
  const {
    cartState: { wishlist },
    cartDispatch,
  } = useCart();

  const navigate = useNavigate();

  const removeFromCart = (id) => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  const matchedItemInWishlist = wishlist.find(
    (item) => item._id === product._id
  );

  const moveToWishlist = (product) => {
    if (matchedItemInWishlist === undefined) {
      cartDispatch({
        type: "ADD_TO_WISHLIST",
        payload: product,
      });
      cartDispatch({
        type: "REMOVE_FROM_CART",
        payload: product._id,
      });
    }
    if (matchedItemInWishlist) {
      cartDispatch({
        type: "REMOVE_FROM_CART",
        payload: product._id,
      });
    }
  };

  return (
    <article className="card-horizontal flex wrap" key={product._id}>
      <section className="horizontal-image-container mr-2">
        <img
          loading="lazy"
          className="horizontal-card-image responsive-img"
          src={product.image}
          alt={product.category}
        />
      </section>
      <section className="card-description p-1">
        <h4 className="horizontal-card-title font-regular mb-0-5">
          {product.title}
        </h4>

        <span className="horizontal-card-brand font-bold">
          {product.brandName}
        </span>

        <div className="hr-card-price mb-1">
          <div className="offer-price">
            <span className="offer-price-amount">₹ {product.price}</span>
            <span className="offer-price-discount">
              ({product.discount}% off)
            </span>
          </div>
        </div>
        <div className="save-price mb-1">
          <span className="save-price-discount">MRP ₹ {product.mrp}</span>
          <span className="price-incl-text"> (Inc of all taxes) </span>
        </div>
        <div className="card-action-buttons flex justify-center mb-1">
          <div className="quantity-action gap-1">
            <button
              className={`btn-float btn-action ${
                product.quantity <= 1 ? "disabled" : "enabled"
              }`}
              id="decrement-btn"
              disabled={product.quantity <= 1}
              onClick={() =>
                cartDispatch({ type: "DECREMENT_ITEM", payload: product })
              }
            >
              <i className="fa-solid fa-minus text-m"></i>
            </button>
            <span className="quantity mr-0-5 ml-0-5 text-l pointer">
              {product.quantity}
            </span>
            <button
              className="btn-float btn-action enabled"
              id="increment-btn"
              onClick={() =>
                cartDispatch({ type: "INCREMENT_ITEM", payload: product })
              }
            >
              <i className="fa-solid fa-plus text-m"></i>
            </button>
          </div>
        </div>
        <div className="horizontal-btn-action">
          <button
            className="card-add-btn mb-1 "
            onClick={() => removeFromCart(product._id)}
          >
            Remove from Cart
          </button>
          {matchedItemInWishlist ? (
            <button className="card-add-btn" onClick={() => navigate("/cart")}>
              Go to Wishlist
            </button>
          ) : (
            <button
              className="card-buy-btn"
              onClick={() => moveToWishlist(product)}
            >
              Move To WishList
            </button>
          )}
        </div>
      </section>
    </article>
  );
};
