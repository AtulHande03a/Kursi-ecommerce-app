import { useCart } from "contexts/cart-context";
import React from "react";

export const CartItemCard = ({ product }) => {
  const { cartDispatch } = useCart();

  const removeFromCart = (id) => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
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
        {/* <div class="hr-icon-container hide">
          <i class="fa-regular fa-heart horizontal-icon-badge"></i>
        </div> */}

        <span className="horizontal-card-brand font-bold">
          {product.brandName}
        </span>
        {/* <span class="text-badge">Best Seller</span> */}
        {/* <div class="rating-warranty-wrap mt-1 mb-1-5">
          <div class="rating-wrapper">
            <i class="fa-solid fa-star rating-star-icon icon-size"></i>
            <i class="fa-solid fa-star rating-star-icon icon-size"></i>
            <i class="fa-solid fa-star rating-star-icon icon-size"></i>
            <i class="fa-solid fa-star rating-star-icon icon-size"></i>
            <i class="fa-solid fa-star rating-star-icon icon-size"></i>
          </div>
          <div class="warranty-text">36 Month's Warranty</div>
        </div> */}
        <div className="hr-card-price mb-1">
          <div className="offer-price">
            <span className="offer-price-amount">₹ {product.price}</span>
            <span className="offer-price-discount">
              ({product.discount}% off)
            </span>
          </div>
        </div>
        <div className="save-price mb-1">
          {/*  */}
          {/* <span class="save-price-amount">Save ₹ {product.mrp}</span> */}
          <span className="save-price-discount">MRP ₹ {product.mrp}</span>
          <span className="price-incl-text"> (Inc of all taxes) </span>
        </div>
        <div className="card-action-buttons flex justify-center">
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
          {/* <button class="remove-action">Remove</button> */}
        </div>
        <div className="horizontal-btn-action">
          <button
            className="card-add-btn mb-1 hide"
            onClick={() => removeFromCart(product._id)}
          >
            Remove from Cart
          </button>
          <button className="card-buy-btn hide">Move To WishList</button>
        </div>
      </section>
    </article>
  );
};
