import React from "react";
import logo from "../assets/images/kursi-logo.png";

export const Navbar = () => {
  return (
    <header className="header py-0-5 z-1">
      <nav className="flex align-center space-between wrap navbar-container">
        <section className="brandlogo-wrapper pl-1 flex flex-center">
          <a href="./index.html">
            <img className="brandlogo-img py-0-5" src={logo} alt="Kursi" />
          </a>
          <a href="./index.html">
            <h1 className="font-bold brandname-text">Kursi</h1>
          </a>
        </section>

        <section className="navbar-search flex space-between">
          <input
            className="w-30 border-none py-0-5 px-1"
            required
            placeholder="Door to happinnes begins with a Search.."
            type="text"
          />
          <button className="search-btn">
            <i className="fa-solid fa-magnifying-glass text-l"></i>
          </button>
        </section>
        <section className="navbar-icons flex space-between px-1">
          <div className="navbar-icon text-l flex-column align-center text-center p-0-5">
            <a href="./pages/product-list.html">
              <i className="fa-solid fa-store badge-icon"></i>
            </a>
            <p className="text-sm">Products</p>
          </div>
          <div className="navbar-icon text-l flex-column align-center p-0-5">
            <a href="./pages/cart.html">
              <i className="fa-solid fa-cart-shopping badge-icon">
                <span className="number-badge icon-badge-position font-size-icon primary-badge-clr border-white">
                  2
                </span>
              </i>
            </a>
            <p className="text-sm">Cart</p>
          </div>
          <div className="navbar-icon text-l flex-column align-center p-0-5">
            <a href="./pages/wishlist.html">
              <i className="fa-solid fa-heart badge-icon">
                <span className="number-badge icon-badge-position font-size-icon primary-badge-clr border-white">
                  4
                </span>
              </i>
            </a>
            <p className="text-sm">Wishlist</p>
          </div>
          <div className="navbar-icon text-l flex-column align-center text-center p-0-5">
            <a href="./pages/signin.html">
              <i className="fa-solid fa-user badge-icon"></i>
            </a>
            <p className="text-sm">Login</p>
          </div>
        </section>
      </nav>
    </header>
  );
};
