import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext();
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;

}

const ShopProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(getDefaultCart());

  //to add an item to the cart based on the itemsID
  //
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1
    }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1
    }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item))
        totalAmount += itemInfo.new_price * cartItems[item]
      }

    }
    return Math.round(totalAmount);
  }

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  const sortItemsby = (sortDirection = "asc") => {
    const sortedItems = [...all_product].sort((a, b) => {
      return sortDirection === "asc"
        ? a.new_price - b.new_price
        : b.new_price - a.new_price;
    });
    return sortedItems;
  };
  const clearCart = () => {
    const emptyCart = {};
    all_product.array.forEach(product => {
      emptyCart[product.id] = 0;
    });

    setCartItems(emptyCart);
  }
  const contextValue = { clearCart ,sortItemsby, getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
