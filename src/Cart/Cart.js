import React from "react";
import "./Cart.css";

const Cart = ({ cartProducts }) => {
  let total = 0;
  let totalShiping = 0;
  for (let item of cartProducts) {
    console.log(item);
    total = total + item.price;
    totalShiping = totalShiping + item.shipping;
  }
  let tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + totalShiping + tax;
  return (
    <div className="cart-item-info-container">
      <h3 className="">Order Summery</h3>
      <p className="">Slelected Item: {cartProducts.length}</p>
      <p className="">Total Price: ${total}</p>
      <p className="">Total Shipping Charge: ${totalShiping} </p>
      <p className="">Tax: ${tax}</p>
      <p className="">
        <strong> Grand Total: {grandTotal}</strong>
      </p>
    </div>
  );
};

export default Cart;
