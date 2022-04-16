import React from "react";

export const ProductCard = ({ product }) => {
  const {
    image,
    categoryName,
    rating,
    discountPrice,
    originalPrice,
    name,
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
            alt={categoryName}
          />
          <span className="text-badge">Best Seller</span>
          {/* <i className="fa-regular fa-heart icon-badge"></i> */}
          <div className="card-rating flex flex-center">
            <span className="card-rating-star">{rating}</span>
            <i className="fa-solid fa-star rating-star-icon"></i>
          </div>
          <div className="add-to-cart-action orange-btn">
            <button className="add-to-cart-btn">Add To Cart</button>
          </div>
        </section>
        <section className="px-0-5 mb-0-5">
          <p className="card-title font-semi mb-0-5">{name}</p>
          <span className="card-brand font-semi mb-1">{brandName}</span>
          <div className="card-price mb-0-5">
            <span className="card-price-offer font-bold">
              ₹ {discountPrice}
            </span>
            <span className="card-price-mrp font-semibold">
              ₹ {originalPrice}
            </span>
          </div>
          <div className="flex mb-0-5">
            <span className="card-discount-text mb-0-5 font-semibold">
              {discount}% off
            </span>
            <span className="card-shipment font-semi">
              Ships in <b> {shipsIn} day</b>
            </span>
          </div>
          <button className="card-cart-btn card-buy-btn mb-0-5">
            Add To Cart
          </button>
          <button className="card-wishlist-btn card-buy-btn">
            Add To Wishlist
          </button>
        </section>
      </article>
    </>
  );
};