import React, { createContext } from 'react';
import all_product from '../Components/Assets/all_product'; // or wherever your data is

export const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  return (
    <ShopContext.Provider value={{ all_product }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
