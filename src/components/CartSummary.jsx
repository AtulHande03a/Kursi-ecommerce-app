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

      <div className="cart-checkout flex-column">
        {cartItems.length !== 0 && (
          <>
            <h3>Price Details</h3>
            <hr />
            <ul clasName="checkout-list text-m">
              <li className="checkout-list-item">
                <span>Price ({totalQuantity} items)</span>
                <span className="checkout-price">₹ {itemsTotal}</span>
              </li>
              <li className="checkout-list-item">
                <span>Discount</span>
                <span className="checkout-price">- ₹ {discount}</span>
              </li>
              <li className="checkout-list-item">
                <span>Delivery Charges</span>
                <span className="checkout-price">Free</span>
              </li>
            </ul>
            <hr />
            <div className="flex space-between">
              <h3>Total Amount</h3>
              <p>₹ {itemsTotal - discount}</p>
            </div>
            <hr />
            <button className="card-buy-btn">Proceed to Checkout</button>
          </>
        )}
      </div>
    </div>
  );
};
