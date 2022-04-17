import { useCart } from "contexts/cart-context";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/kursi-logo.png";

export const Navbar = () => {
  const { cartState } = useCart();

  return (
    <header className="header py-0-5 z-1">
      <nav className="flex align-center space-between wrap navbar-container">
        <section className="brandlogo-wrapper pl-1 flex flex-center">
          <Link to="/">
            <img className="brandlogo-img py-0-5" src={logo} alt="Kursi" />
          </Link>
          <Link to="/">
            <h1 className="font-bold brandname-text">Kursi</h1>
          </Link>
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
            <Link to="products">
              <div className="flex flex-center mb-0-5">
                <i className="fa-solid fa-store badge-icon"></i>
              </div>
              <p className="text-sm">Products</p>
            </Link>
          </div>
          <div className="navbar-icon text-l flex-column align-center p-0-5">
            <Link to="cart">
              <div className="flex flex-center mb-0-5">
                <i className="fa-solid fa-cart-shopping badge-icon">
                  {cartState.cartItems.length !== 0 && (
                    <span className="number-badge icon-badge-position font-size-icon primary-badge-clr border-white">
                      {cartState.cartItems.length}
                    </span>
                  )}
                </i>
              </div>
              <p className="text-sm">Cart</p>
            </Link>
          </div>
          <div className="navbar-icon text-l flex-column align-center p-0-5">
            <Link to="wishlist">
              <div className="flex flex-center mb-0-5">
                <i className="fa-solid fa-heart badge-icon ">
                  <span className="number-badge icon-badge-position font-size-icon primary-badge-clr border-white">
                    4
                  </span>
                </i>
              </div>
              <p className="text-sm">Wishlist</p>
            </Link>
          </div>
          <div className="navbar-icon text-l flex-column align-center text-center p-0-5">
            <Link to="login">
              <div className="flex flex-center mb-0-5">
                <i className="fa-solid fa-user badge-icon"></i>
              </div>
              <p className="text-sm">Login</p>
            </Link>
          </div>
        </section>
      </nav>
    </header>
  );
};
