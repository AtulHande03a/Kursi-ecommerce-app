import { useFilter } from "contexts/filter-context";
import React from "react";

export const Filters = () => {
  const { filterState, filterDispatch } = useFilter();

  const { price, sortBy, category, rating } = filterState;
  const { sofa, chair, table, beds } = category;

  const priceHandler = (e) => {
    filterDispatch({
      type: "PRICE",
      payload: e.target.value,
    });
  };

  const categoryHandler = (e) => {
    filterDispatch({
      type: "CATEGORY",
      payload: e.target.value,
    });
  };

  const sortByHandler = (e) => {
    filterDispatch({
      type: "SORT",
      payload: e.target.value,
    });
  };

  const handleRatingChange = (e) => {
    filterDispatch({
      type: "RATING",
      payload: e.target.value,
    });
  };

  return (
    <>
      <aside id="filters" className="filters px-1 py-1 ml-1 mt-1">
        <div className="filters-wrapper">
          <div className="flex align-center space-between mb-2 filter-wrapper-action">
            <p className="font-semibold text-l">Filters</p>
            <button
              className="button-link mx-1 my-0-5 text-m"
              onClick={() => filterDispatch({ type: "CLEAR_FILTERS" })}
            >
              Clear All
            </button>
          </div>

          <p className="font-regular text-m mb-0-5">Price</p>
          <div className="flex-column">
            <div className="my-1">
              <input
                className="pointer input-range"
                id="slider-input"
                type="range"
                min="5000"
                max="80000"
                step="10000"
                value={price}
                onChange={priceHandler}
              />
            </div>
            <div className="flex space-between">
              <span className="text-sm">
                From :<span className="font-semi">5000</span>
              </span>
              <span className="text-sm">
                To :<span className="font-semi">80000</span>
              </span>
            </div>
          </div>

          {/* filter by category */}

          <p className="font-regular text-m mb-0-5 mt-2">Category</p>
          <div className="flex-column">
            <ul className="text-sm">
              <li className="pt-1">
                <input
                  type="checkbox"
                  id="beds"
                  checked={beds}
                  value="beds"
                  onChange={categoryHandler}
                />
                <label htmlFor="beds">Beds</label>
              </li>
              <li className="pt-1">
                <input
                  type="checkbox"
                  id="sofa"
                  checked={sofa}
                  value="sofa"
                  onChange={categoryHandler}
                />
                <label htmlFor="sofa">Sofa</label>
              </li>
              <li className="pt-1">
                <input
                  type="checkbox"
                  id="chair"
                  checked={chair}
                  value="chair"
                  onChange={categoryHandler}
                />
                <label htmlFor="chair">Chair</label>
              </li>
              <li className="pt-1">
                <input
                  type="checkbox"
                  id="table"
                  checked={table}
                  value="table"
                  onChange={categoryHandler}
                />
                <label htmlFor="table">Table</label>
              </li>
            </ul>
          </div>
        </div>

        {/* sort by price filters */}

        <p className="font-regular text-m mb-0-5 mt-2">Sort By</p>
        <div className="flex-column">
          <ul className="text-sm">
            <li className="pt-1">
              <input
                type="radio"
                id="high-to-low"
                name="sort-by-price"
                value="HIGH_TO_LOW"
                checked={sortBy === "HIGH_TO_LOW"}
                onChange={sortByHandler}
              />
              <label htmlFor="high-to-low">Price High to Low</label>
            </li>
            <li className="pt-1">
              <input
                type="radio"
                id="LOW_TO_HIGH"
                name="sort-by-price"
                value="LOW_TO_HIGH"
                checked={sortBy === "LOW_TO_HIGH"}
                onChange={sortByHandler}
              />
              <label htmlFor="low-to-high">Price Low to High</label>
            </li>
          </ul>
        </div>
        {/* filter by rating */}
        <p className="font-regular text-m mb-0-5 mt-2">Rating</p>
        <div className="flex-column">
          <ul className="text-sm">
            <li className="pt-1">
              <input
                type="radio"
                id="four-star"
                name="rating"
                value="4"
                checked={rating === "4"}
                onChange={handleRatingChange}
              />
              <label htmlFor="four-star">4 stars and above</label>
            </li>
            <li className="pt-1">
              <input
                type="radio"
                id="three-star"
                name="rating"
                value="3"
                checked={rating === "3"}
                onChange={handleRatingChange}
              />
              <label htmlFor="three-star">3 stars and above</label>
            </li>
            <li className="pt-1">
              <input
                type="radio"
                id="two-star"
                name="rating"
                value="2"
                checked={rating === "2"}
                onChange={handleRatingChange}
              />
              <label htmlFor="three-star">2 stars and above</label>
            </li>
            <li className="pt-1">
              <input
                type="radio"
                id="one-star"
                name="rating"
                value="1"
                checked={rating === "1"}
                onChange={handleRatingChange}
              />
              <label htmlFor="three-star">1 stars and above</label>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
