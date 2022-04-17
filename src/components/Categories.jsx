import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useCategory } from "contexts/category-context";
import { useFilter } from "contexts/filter-context";

export const Categories = () => {
  const { categoryData } = useCategory();
  const { filterDispatch } = useFilter();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // This will reset the filterState for proper working of category selected product listing

  useEffect(() => {
    if (pathname === "/") {
      filterDispatch({ type: "CLEAR_FILTERS" });
    }
  }, [filterDispatch, pathname]);

  //redirect to product page with selected category

  const categoryClickHandler = (categoryName) => {
    filterDispatch({ type: "CATEGORY", payload: categoryName });
    navigate("/products");
  };

  return (
    <section className="categories-wrapper flex align-center space-around wrap text-center my-2 mx-0-5">
      <div class="w-100">
        <h2 className="categories-list mb-2">Categories</h2>
      </div>
      {categoryData.map((category) => {
        const { _id, categoryName, src, name } = category;
        return (
          <div
            className="my-1 mx-1 flex-column flex-center text-center category-card"
            key={_id}
          >
            <button
              className="btn-category btn-primary pointer"
              onClick={() => categoryClickHandler(categoryName)}
            >
              Shop
            </button>

            <div>
              <img
                className="category-item mb-0-5 img-responsive"
                src={src}
                alt={categoryName}
              />
            </div>

            <p className="text-m font-semibold">{name}</p>
          </div>
        );
      })}
    </section>
  );
};
