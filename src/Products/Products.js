import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import ProductCard from "../Product-card/Product-card";
import { addToDb, getStoredItem } from "../utilities/fakedb";
import "./Products.css";

const Products = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedData = getStoredItem();
    for (let id in storedData) {
      const addedProduct = products.find((product) => product.id === id);
      console.log(addedProduct);
      const quantity = storedData[id];
      if (addedProduct) {
        addedProduct.quantity = quantity;
      }
    }
  }, [products]);

  const addTocart = (product) => {
    const newCartProducts = [...cartProducts, product];
    setCartProducts(newCartProducts);
    addToDb(product.id);
  };

  return (
    <div className="products-section">
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
        <Cart cartProducts={cartProducts}></Cart>
      </div>
    </div>
  );
};

export default Products;
