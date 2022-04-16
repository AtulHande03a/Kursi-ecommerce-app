import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categoryData, setCategoryData] = useState([]);

  const getCategories = async () => {
    try {
      const res = await axios.get("./api/categories");
      setCategoryData((_prevData) => res.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categoryData }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };
