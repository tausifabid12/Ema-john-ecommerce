import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import PreviwItems from "../PreviwItems/PreviwItems";
import "./Orders.css";

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const handleDeleteItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  console.log(cart, products, ";;dfkdj");
  return (
    <div className="products-section" id="products-section">
      <div>
        {cart.map((product) => (
          <PreviwItems
            key={product.id}
            product={product}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
        {cart.length === 0 && (
          <h1 className="noproMess">
            No items for Preview <Link to="/shop">click here go to shop</Link>
          </h1>
        )}
      </div>
      <div className="order-info">
        <Cart cartProducts={cart} clearCart={clearCart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
