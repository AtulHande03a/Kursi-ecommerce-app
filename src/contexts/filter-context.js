import { createContext, useContext, useReducer, useEffect } from "react";
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

  useEffect(() => {
    filterDispatch({
      type: "SET_SAVED_FILTERS",
      payload: JSON.parse(sessionStorage.getItem("filters")) || filterState,
    });
  }, []);

  useEffect(() => {
    sessionStorage.setItem("filters", JSON.stringify(filterState));
  }, [filterState]);

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };
