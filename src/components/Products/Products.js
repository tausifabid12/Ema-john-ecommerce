import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import ProductCard from "../Product-card/Product-card";
import {
  addToDb,
  deleteShoppingCart,
  getStoredItem,
} from "../../utilities/fakedb";
import "./Products.css";
import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const { products } = useLoaderData();

  useEffect(() => {
    const savedCart = [];
    const storedData = getStoredItem();
    for (let id in storedData) {
      const addedProduct = products.find((product) => product.id === id);
      const quantity = storedData[id];
      if (addedProduct) {
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCartProducts(savedCart);
  }, [products]);

  const addTocart = (selectedProduct) => {
    // if (!selectedProduct.quantity) {
    //   console.log("this is true fdskfdksjf");
    // }
    let newCartProducts = [];
    const exists = cartProducts.find(
      (product) => product.id === selectedProduct.id
    );
    if (!exists) {
      selectedProduct.quantity = 1;
      newCartProducts = [...cartProducts, selectedProduct];
    } else {
      exists.quantity = exists.quantity + 1;
      const rest = cartProducts.filter(
        (product) => product.id !== selectedProduct.id
      );
      newCartProducts = [...rest, exists];
    }

    setCartProducts(newCartProducts);
    addToDb(selectedProduct.id);
  };

  const clearCart = () => {
    setCartProducts([]);
    deleteShoppingCart();
  };

  return (
    <div className="products-section" id="products-section">
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productInfo={product}
            addTocart={addTocart}
          ></ProductCard>
        ))}
      </div>
      <div className="order-info">
        <Cart cartProducts={cartProducts} clearCart={clearCart}>
          <Link to="/orders">
            <button className="cart-botton cart-btn-orange">Chack Out</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Products;
