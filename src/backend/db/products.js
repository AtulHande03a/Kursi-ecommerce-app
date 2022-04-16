import { v4 as uuid } from "uuid";

import { sofa1, sofa2, sofa3, sofa4, sofa5 } from "assets/productImages";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Bali 3 Seater Sofa In Blue Colour",
    discountPrice: 17022,
    originalPrice: 35999,
    categoryName: "sofa",
    rating: 4.5,
    brandName: "Trevi Furniture",
    discount: 53,
    image: sofa1,
    shipsIn: 2,
  },
  {
    _id: uuid(),
    name: "Niki 3 Seater Sofa In Yellow Colour",
    discountPrice: 6999,
    originalPrice: 8999,
    categoryName: "sofa",
    rating: 4,
    brandName: "Springtek",
    discount: 22,
    image: sofa2,
    shipsIn: 3,
  },
  {
    _id: uuid(),
    name: "Florida Neo Sofa Cum Bed In Sky Blue Colour",
    discountPrice: 12925,
    originalPrice: 17000,
    categoryName: "sofa",
    rating: 4.5,
    brandName: "Seventh Heaven",
    discount: 36,
    image: sofa3,
    shipsIn: 4,
  },
  {
    _id: uuid(),
    name: "Darwin 3 Seater Sofa in Blue Colour",
    discountPrice: 49494,
    originalPrice: 72999,
    categoryName: "sofa",
    rating: 5,
    brandName: "Urban Living",
    discount: 32,
    image: sofa4,
    shipsIn: 4,
  },
  {
    _id: uuid(),
    name: "Snoozer Three Seater Sofa In Omega Grey Colour",
    discountPrice: 15666,
    originalPrice: 23200,
    categoryName: "sofa",
    rating: 1.5,
    brandName: "Wakefit",
    discount: 32,
    image: sofa5,
    shipsIn: 4,
  },
];
