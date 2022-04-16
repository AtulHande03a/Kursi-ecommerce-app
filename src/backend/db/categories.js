import { v4 as uuid } from "uuid";

//import images
import { beds, chair, coffeeTable, sofa } from "assets/images";

export const categories = [
  {
    _id: uuid(),
    categoryName: "Beds",
    src: beds,
    altName: "Bed",
  },
  {
    _id: uuid(),
    categoryName: "Chair",
    src: chair,
    altName: "Chair",
  },
  {
    _id: uuid(),
    categoryName: "Sofa",
    src: sofa,
    altName: "Sofa",
  },
  {
    _id: uuid(),
    categoryName: "Coffee Table",
    src: coffeeTable,
    altName: "Coffee table",
  },
];
