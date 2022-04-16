import { useProducts } from "contexts/product-context";
import React from "react";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  const { loading, productList } = useProducts();
  return (
    <main className="main-wrapper flex wrap p-0-5 ml-1 mt-1">
      {loading && <h2>"Loading.."</h2>}
      {productList.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </main>
  );
};
