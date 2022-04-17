import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers/filterReducer";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sortBy: "",
    category: {
      sofa: false,
      chair: false,
      table: false,
      beds: false,
    },
    price: 5000,
    rating: 0,
  });

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };