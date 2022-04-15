import { categories } from "data.js";
import { Link } from "react-router-dom";

export const Categories = () => {
  return (
    <section className="categories-wrapper flex align-center space-around wrap text-center my-2 mx-0-5">
      <div class="w-100">
        <h2 className="categories-list mb-2">Categories</h2>
      </div>
      {categories.map((category) => {
        const { id, image, name, slug } = category;
        return (
          <div
            className="my-1 mx-1 flex-column flex-center text-center category-card"
            key={id}
          >
            <button className="btn-category btn-primary">
              <Link to="products">Shop</Link>
            </button>
            <div>
              <img
                className="category-item mb-0-5 img-responsive"
                src={image}
                alt={slug}
              />
            </div>

            <p className="text-m font-semibold">{name}</p>
          </div>
        );
      })}
    </section>
  );
};
