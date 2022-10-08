import React from "react";
import "./PreviwItems.css";
import { TrashIcon } from "@heroicons/react/24/solid";

const PreviwItems = ({ product, handleDeleteItem }) => {
  const { name, img, quantity, shipping, id } = product;
  return (
    <div className="orders-container">
      <div className="order-cart">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="item-info">
          <div>
            <h5>{name}</h5>
            <p>Quantity: {quantity}</p>
            <p>Shipping: {shipping}$</p>
          </div>
          <button className="delete-btn" onClick={() => handleDeleteItem(id)}>
            <TrashIcon className="delete-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviwItems;
