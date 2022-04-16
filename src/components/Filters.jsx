import React from "react";

export const Filters = () => {
  return (
    <>
      <aside id="filters" className="filters px-1 py-1 ml-1 mt-1">
        <div className="filters-wrapper">
          <div className="flex align-center space-between mb-2 filter-wrapper-action">
            <p className="font-semibold text-l">Filters</p>
            <button className="button-link mx-1 my-0-5 text-m">
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
              />
            </div>
            <div className="flex space-between">
              <span className="text-sm">
                From :<span className="font-semi">5000</span>
              </span>
              <span className="text-sm">
                From :<span className="font-semi">80000</span>
              </span>
            </div>
          </div>

          <p className="font-regular text-m mb-0-5 mt-2">Rating</p>
          <div className="flex-column">
            <ul className="text-sm">
              <li className="pt-1">
                <input
                  type="radio"
                  id="four-star"
                  name="rating"
                  value="four-star"
                  checked
                />
                <label htmlFor="four-star">4 stars and above</label>
              </li>
              <li className="pt-1">
                <input
                  type="radio"
                  id="three-star"
                  name="rating"
                  value="three-star"
                />
                <label htmlFor="three-star">3 stars and above</label>
              </li>
              <li className="pt-1">
                <input
                  type="radio"
                  id="two-star"
                  name="rating"
                  value="two-star"
                />
                <label htmlFor="three-star">2 stars and above</label>
              </li>
            </ul>
          </div>

          <p className="font-regular text-m mb-0-5 mt-2">Category</p>
          <div className="flex-column">
            <ul className="text-sm">
              <li className="pt-1">
                <input type="checkbox" id="bed" name="bed" checked />
                <label htmlFor="bed">Beds</label>
              </li>
              <li className="pt-1">
                <input type="checkbox" id="sofa" name="sofa" checked />
                <label htmlFor="sofa">Sofa</label>
              </li>
              <li className="pt-1">
                <input type="checkbox" id="chair" name="chair" checked />
                <label htmlFor="chair">Office Chair</label>
              </li>
            </ul>
          </div>
        </div>

        <p className="font-regular text-m mb-0-5 mt-2">Sort By</p>
        <div className="flex-column">
          <ul className="text-sm">
            <li className="pt-1">
              <input
                type="radio"
                id="high-to-low"
                name="sort-by"
                value="high-to-low"
                checked
              />
              <label htmlFor="high-to-low">Price High to Low</label>
            </li>
            <li className="pt-1">
              <input
                type="radio"
                id="low-to-high"
                name="sort-by"
                value="low-to-high"
              />
              <label htmlFor="low-to-high">Price Low to High</label>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
