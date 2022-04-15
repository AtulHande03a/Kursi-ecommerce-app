import { Routes, Route } from "react-router-dom";

// page imports
import {
  Homepage,
  ProductListing,
  Cart,
  WishList,
  Login,
  Logout,
  SignUp,
} from "pages";

const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export { WebsiteRoutes as Routes };
