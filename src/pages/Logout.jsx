import React from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const Logout = () => {
  useDocumentTitle("Logout | Kursi");
  return <div>Logout</div>;
};
