import { v4 as uuid } from "uuid";

//import images
import { beds, chair, table, sofa } from "assets/images";

export const categories = [
  {
    _id: uuid(),
    categoryName: "beds",
    src: beds,
    name: "Bed",
  },
  {
    _id: uuid(),
    categoryName: "chair",
    src: chair,
    name: "Chair",
  },
  {
    _id: uuid(),
    categoryName: "sofa",
    src: sofa,
    name: "Sofa",
  },
  {
    _id: uuid(),
    categoryName: "table",
    src: table,
    name: "Table",
  },
];
