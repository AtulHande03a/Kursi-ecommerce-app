import React from "react";

export const Filters = () => {
  return (
    <>
      <aside id="filters" class="filters px-1 py-1 ml-1 mt-1">
        <div class="filters-wrapper">
          <div class="flex align-center space-between mb-2 filter-wrapper-action">
            <p class="font-semibold text-l">Filters</p>
            <button class="button-link mx-1 my-0-5 text-m">Clear All</button>
          </div>

          <p class="font-regular text-m mb-0-5">Price</p>
          <div class="flex-column">
            <div class="my-1">
              <input
                class="pointer input-range"
                id="slider-input"
                type="range"
                min="5000"
                max="80000"
                step="10000"
              />
            </div>
            <div class="flex space-between">
              <span class="text-sm">
                From :<span class="font-semi">5000</span>
              </span>
              <span class="text-sm">
                From :<span class="font-semi">80000</span>
              </span>
            </div>
          </div>

          <p class="font-regular text-m mb-0-5 mt-2">Rating</p>
          <div class="flex-column">
            <ul class="text-sm">
              <li class="pt-1">
                <input
                  type="radio"
                  id="four-star"
                  name="rating"
                  value="four-star"
                  checked
                />
                <label for="four-star">4 stars and above</label>
              </li>
              <li class="pt-1">
                <input
                  type="radio"
                  id="three-star"
                  name="rating"
                  value="three-star"
                />
                <label for="three-star">3 stars and above</label>
              </li>
              <li class="pt-1">
                <input
                  type="radio"
                  id="two-star"
                  name="rating"
                  value="two-star"
                />
                <label for="three-star">2 stars and above</label>
              </li>
            </ul>
          </div>

          <p class="font-regular text-m mb-0-5 mt-2">Category</p>
          <div class="flex-column">
            <ul class="text-sm">
              <li class="pt-1">
                <input type="checkbox" id="bed" name="bed" checked />
                <label for="bed">Beds</label>
              </li>
              <li class="pt-1">
                <input type="checkbox" id="sofa" name="sofa" checked />
                <label for="sofa">Sofa</label>
              </li>
              <li class="pt-1">
                <input type="checkbox" id="chair" name="chair" checked />
                <label for="chair">Office Chair</label>
              </li>
            </ul>
          </div>
        </div>

        <p class="font-regular text-m mb-0-5 mt-2">Sort By</p>
        <div class="flex-column">
          <ul class="text-sm">
            <li class="pt-1">
              <input
                type="radio"
                id="high-to-low"
                name="sort-by"
                value="high-to-low"
                checked
              />
              <label for="high-to-low">Price High to Low</label>
            </li>
            <li class="pt-1">
              <input
                type="radio"
                id="low-to-high"
                name="sort-by"
                value="low-to-high"
              />
              <label for="low-to-high">Price Low to High</label>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
