import React from "react";

export const Products = () => {
  return (
    <main className="main-wrapper flex wrap p-0-5 ml-1 mt-1">
      <article className="card-verticle flex flex-column mr-2 my-1">
        <section className="image-container mb-0-5">
          <img
            loading="lazy"
            ssName="card-image responsive-img"
            src="../assets/images/sofa.jpg"
            alt="chair-ikea"
          />
          <span className="text-badge">Best Seller</span>
          <i className="fa-regular fa-heart icon-badge"></i>
          <div className="card-rating flex flex-center">
            <span className="card-rating-star">4.5</span>
            <i className="fa-solid fa-star rating-star-icon"></i>
          </div>
          <div className="add-to-cart-action orange-btn">
            <a href="#" className="add-to-cart-btn">
              Add To Cart
            </a>
          </div>
        </section>
        <section className="px-0-5 mb-0-5">
          <p className="card-title font-semi mb-0-5">
            Andrea Sofa 3 seater in peacock green color
          </p>
          <span className="card-brand font-semi mb-1">Ikea</span>
          <div className="card-price mb-0-5">
            <span className="card-price-offer font-bold">₹ 39,999</span>
            <span className="card-price-mrp font-semibold">₹ 79,999</span>
          </div>
          <div className="flex mb-0-5">
            <span className="card-discount-text mb-0-5 font-semibold">
              50% off
            </span>
            <span className="card-shipment font-semi">
              Ships in <b> 1 day</b>
            </span>
          </div>
          <button className="card-buy-btn">Buy Now</button>
        </section>
      </article>
    </main>
  );
};
