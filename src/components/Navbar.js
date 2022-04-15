import React from "react";
import logo from "../assets/images/kursi-logo.png";

export const Navbar = () => {
  return (
    <header class="header py-0-5 z-1">
      <nav class="flex align-center space-between wrap navbar-container">
        <section class="brandlogo-wrapper pl-1 flex flex-center">
          <a href="./index.html">
            <img class="brandlogo-img py-0-5" src={logo} alt="Kursi" />
          </a>
          <a href="./index.html">
            <h1 class="font-bold brandname-text">Kursi</h1>
          </a>
        </section>

        <section class="navbar-search flex space-between">
          <input
            class="w-30 border-none py-0-5 px-1"
            required
            placeholder="Door to happinnes begins with a Search.."
            type="text"
          />
          <button class="search-btn">
            <i class="fa-solid fa-magnifying-glass text-l"></i>
          </button>
        </section>
        <section class="navbar-icons flex space-between px-1">
          <div class="navbar-icon text-l flex-column align-center text-center p-0-5">
            <a href="./pages/product-list.html">
              <i class="fa-solid fa-store badge-icon"></i>
            </a>
            <p class="text-sm">Products</p>
          </div>
          <div class="navbar-icon text-l flex-column align-center p-0-5">
            <a href="./pages/cart.html">
              <i class="fa-solid fa-cart-shopping badge-icon">
                <span class="number-badge icon-badge-position font-size-icon primary-badge-clr border-white">
                  2
                </span>
              </i>
            </a>
            <p class="text-sm">Cart</p>
          </div>
          <div class="navbar-icon text-l flex-column align-center p-0-5">
            <a href="./pages/wishlist.html">
              <i class="fa-solid fa-heart badge-icon">
                <span class="number-badge icon-badge-position font-size-icon primary-badge-clr border-white">
                  4
                </span>
              </i>
            </a>
            <p class="text-sm">Wishlist</p>
          </div>
          <div class="navbar-icon text-l flex-column align-center text-center p-0-5">
            <a href="./pages/signin.html">
              <i class="fa-solid fa-user badge-icon"></i>
            </a>
            <p class="text-sm">Login</p>
          </div>
        </section>
      </nav>
    </header>
  );
};
