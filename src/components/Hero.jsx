import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/images/hero.jpg";

export const Hero = () => {
  return (
    <section className="banner-container mx-0-5">
      <div>
        <img
          loading="lazy"
          className="banner-image img-responsive mr-0-5"
          src={hero}
          alt="sofa"
        />
      </div>
      <div className="banner-detail p-0-5 flex-column flex-center">
        <h1 className="banner-heading pb-0-5">Modular Furniture</h1>
        <p className="banner-offer pb-0-5">Extra 30% off</p>
        <Link to="/products" className="btn btn-primary">
          Buy Now
        </Link>
      </div>
    </section>
  );
};
