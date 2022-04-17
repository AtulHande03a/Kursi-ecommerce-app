import { useFilter } from "contexts/filter-context";
import { useProducts } from "contexts/product-context";
import React from "react";
import { filterProducts } from "utils/filterProducts";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  const { loading, productList } = useProducts();
  const { filterState } = useFilter();
  const sortedProducts = filterProducts(productList, filterState);
  console.log(productList, "productlist");
  console.log(sortedProducts, "sortedproducts");
  console.log(filterProducts(productList, filterState), "func");
  return (
    <main className="main-wrapper flex wrap p-0-5 ml-1 mt-1">
      {!loading && sortedProducts.length === 0 && <h2>NO MATCHING PRODUCTS</h2>}
      {loading && <h2 className="text-center">"Loading.."</h2>}
      {sortedProducts.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </main>
  );
};
