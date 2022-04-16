import { Filters, Products, ResponsiveFilter } from "components";
import React from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const ProductListing = () => {
  useDocumentTitle("Products | Kursi");
  return (
    <>
      <ResponsiveFilter />
      <div className="flex content-center mb-1">
        <Filters />
        <Products />
      </div>
    </>
  );
};
