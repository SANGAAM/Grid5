import React, { createContext, useState, useContext } from "react";

// Create ProductContext
const ProductContext = createContext();

// Create ProductProvider component
export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use ProductContext
export const useProductContext = () => useContext(ProductContext);
