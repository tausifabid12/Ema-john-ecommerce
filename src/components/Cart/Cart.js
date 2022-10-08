import React from "react";
import "./Cart.css";

const Cart = ({ cartProducts, clearCart, children }) => {
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (let item of cartProducts) {
    quantity = quantity + item.quantity;
    total = total + item.price * item.quantity;
    totalShipping = totalShipping + item.shipping;
  }
  let tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + totalShipping + tax;
  return (
    <div className="cart-item-info-container">
      <h3 className="">Order Summery</h3>
      <p className="">Slelected Item: {quantity}</p>
      <p className="">Total Price: ${total}</p>
      <p className="">Total Shipping Charge: ${totalShipping} </p>
      <p className="">Tax: ${tax}</p>
      <p className="">
        <strong> Grand Total: {grandTotal}</strong>
      </p>
      {children}
      <button className="cart-botton cart-btn-red" onClick={clearCart}>
        Clear cart
      </button>
    </div>
  );
};

export default Cart;
