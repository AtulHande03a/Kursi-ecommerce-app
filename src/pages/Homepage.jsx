import { Categories, Hero } from "components";
import React from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const Homepage = () => {
  useDocumentTitle("Kusri");
  return (
    <>
      <Hero />
      <Categories />
    </>
  );
};
