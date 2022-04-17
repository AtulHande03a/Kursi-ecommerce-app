import React from "react";
import { useCart } from "../contexts/cart-context";
import {
  calcDiscount,
  calcItemsPrice,
  calcQuantity,
} from "../utils/cartSummary";

export const CartSummary = () => {
  const {
    cartState: { cartItems },
  } = useCart();

  const itemsTotal = calcItemsPrice(cartItems);
  const discount = calcDiscount(cartItems, itemsTotal);
  const totalQuantity = calcQuantity(cartItems);

  return (
    <div>
      {cartItems.length === 0 && (
        <h3 className=" mt-2 empty-cart-text">You have no items in the cart</h3>
      )}

      <div class="cart-checkout flex-column">
        {cartItems.length !== 0 && (
          <>
            <h3>Price Details</h3>
            <hr />
            <ul class="checkout-list text-m">
              <li class="checkout-list-item">
                <span>Price ({totalQuantity} items)</span>
                <span class="checkout-price">₹ {itemsTotal}</span>
              </li>
              <li class="checkout-list-item">
                <span>Discount</span>
                <span class="checkout-price">- ₹ {discount}</span>
              </li>
              <li class="checkout-list-item">
                <span>Delivery Charges</span>
                <span class="checkout-price">Free</span>
              </li>
            </ul>
            <hr />
            <div class="flex space-between">
              <h3>Total Amount</h3>
              <p>₹ {itemsTotal - discount}</p>
            </div>
            <hr />
            <button class="card-buy-btn">Proceed to Checkout</button>
          </>
        )}
      </div>
    </div>
  );
};
