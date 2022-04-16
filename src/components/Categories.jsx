import { Link } from "react-router-dom";
import { useCategory } from "contexts/category-context";

export const Categories = () => {
  const { categoryData } = useCategory();
  return (
    <section className="categories-wrapper flex align-center space-around wrap text-center my-2 mx-0-5">
      <div class="w-100">
        <h2 className="categories-list mb-2">Categories</h2>
      </div>
      {categoryData.map((category) => {
        const { _id, categoryName, src, altName } = category;
        return (
          <div
            className="my-1 mx-1 flex-column flex-center text-center category-card"
            key={_id}
          >
            <button className="btn-category btn-primary">
              <Link to="products">Shop</Link>
            </button>
            <div>
              <img
                className="category-item mb-0-5 img-responsive"
                src={src}
                alt={altName}
              />
            </div>

            <p className="text-m font-semibold">{categoryName}</p>
          </div>
        );
      })}
    </section>
  );
};
