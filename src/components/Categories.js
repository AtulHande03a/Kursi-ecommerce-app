import { categories } from "data.js";

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
            <button className="btn-category btn-primary">Shop</button>
            <a href="./pages/product-list.html">
              <img
                className="category-item mb-0-5 img-responsive"
                src={image}
                alt={slug}
              />
            </a>

            <p className="text-m font-semibold">{name}</p>
          </div>
        );
      })}
    </section>
  );
};
