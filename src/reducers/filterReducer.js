export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "SORT":
      return { ...state, sortBy: payload };
    case "CATEGORY":
      return {
        ...state,
        category: { ...state.category, [payload]: !state.category[payload] },
      };
    case "PRICE":
      return { ...state, price: payload };
    case "RATING":
      return { ...state, rating: payload };
    case "CLEAR_FILTERS":
      return {
        sortBy: "",
        category: {
          sofa: false,
          chair: false,
          table: false,
          beds: false,
        },
        price: 5000,
        rating: 0,
      };
    case "SET_SAVED_FILTERS":
      const savedCategory = Object.values(payload.category);
      return {
        ...state,
        sortBy: payload.sortBy,
        category: {
          sofa: savedCategory[0],
          chair: savedCategory[1],
          table: savedCategory[2],
          beds: savedCategory[3],
        },
        price: payload.price,
        rating: payload.rating,
      };
    default:
      return state;
  }
};
