import React from "react";

export const CartSummary = () => {
  return (
    <div class="cart-checkout flex-column">
      <h3>Price Details</h3>
      <hr />
      <ul class="checkout-list text-m">
        <li class="checkout-list-item">
          <span>Price (2 items)</span>
          <span class="checkout-price">₹ 1,27,998</span>
        </li>
        <li class="checkout-list-item">
          <span>Discount</span>
          <span class="checkout-price">- ₹ 64,000</span>
        </li>
        <li class="checkout-list-item">
          <span>Delivery Charges</span>
          <span class="checkout-price">Free</span>
        </li>
      </ul>
      <hr />
      <div class="flex space-between">
        <h3>Total Amount</h3>
        <p>₹ 63,998</p>
      </div>
      <hr />
      <button class="card-buy-btn">Proceed to Checkout</button>
    </div>
  );
};
