import { Categories, Hero } from "components";
import React from "react";
import { Fragment } from "react/cjs/react.production.min";

export const Homepage = () => {
  return (
    <Fragment>
      <Hero />
      <Categories />
    </Fragment>
  );
};
