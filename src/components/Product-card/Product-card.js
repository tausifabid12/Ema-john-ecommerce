import React from "react";
import "./Product-card.css";

const ProductCard = ({ productInfo, addTocart }) => {
  const { name, img, ratings, seller, price } = productInfo;
  return (
    <div className="product-card">
      <img src={img} alt="" />
      <div className="common-info">
        <h4>{name}</h4>
        <p>Price: $ {price}</p>
        <div className="other-info">
          <p>
            <small>Manufacturer : {seller}</small>
          </p>
          <p>
            <small>Rating: {ratings} star</small>
          </p>
        </div>
      </div>
      <button onClick={() => addTocart(productInfo)} className="cart-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
