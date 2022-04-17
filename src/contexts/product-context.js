import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("./api/products");
      setProductList((_prev) => res.data.products);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ loading, productList }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { useProducts, ProductProvider };
