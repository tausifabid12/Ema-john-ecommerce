import { getStoredItem } from "../utilities/fakedb";

export const cartAndProductLoader = async () => {
  const productData = await fetch("products.json");
  const products = await productData.json();

  const storedItems = getStoredItem();
  const initialCart = [];

  for (let id in storedItems) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      const quantity = storedItems[id];
      addedProduct.quantity = quantity;
    }
    initialCart.push(addedProduct);
  }
  console.log(initialCart);

  return { products, initialCart };
};
