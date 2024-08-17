import { WishListContext } from "../context/WishListContext";
import { useContext } from "react";

export const UseWishListContext = () => {
  const context = useContext(WishListContext);

  if (!context) {
    throw Error("useWishListContext must be used inside an WishListContextProvider ");
  }

  return context;
};
