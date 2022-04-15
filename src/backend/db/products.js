import { v4 as uuid } from "uuid";

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
    src: "https://ii1.pepperfry.com/media/catalog/product/b/a/800x400/bali-3-seater-sofa-in-blue-colour-by-trevi-furniture-bali-3-seater-sofa-in-blue-colour-by-trevi-furn-5kqqc0.jpg",
    shipsIn: 2,
  },
  {
    _id: uuid(),
    name: "Dreamer (72x36) Foam 8 Inch Single Size Sofa Cum Foldable Mattress",
    discountPrice: 6999,
    originalPrice: 8999,
    categoryName: "sofa",
    rating: 4,
    brandName: "Springtek",
    discount: 22,
    src: "https://ii1.pepperfry.com/media/catalog/product/v/i/800x880/vista-single-size--72x36--hd-foam--mattress-by-springtek-vista-single-size--72x36--hd-foam--mattress-omsw1x.jpg",
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
    src: "https://ii1.pepperfry.com/media/catalog/product/f/l/568x284/florida-mj71-wooden-sofa-cum-bed-in-sky-blue-colour-by-seventh-heaven-florida-mj71-wooden-sofa-cum-b-0irj3x.jpg",
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
    src: "https://ii1.pepperfry.com/media/catalog/product/d/a/568x284/darwin-3-seater-sofa-in-blue-colour-in-urban-living-darwin-3-seater-sofa-in-blue-colour-in-urban-liv-kcpjct.jpg",
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
    src: "https://ii1.pepperfry.com/media/catalog/product/s/n/800x400/snoozer-three-seater-sofa-in-omega-grey-colour-by-wakefit-snoozer-three-seater-sofa-in-omega-grey-co-em15io.jpg",
    shipsIn: 4,
  },
];
