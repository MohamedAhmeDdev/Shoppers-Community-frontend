import React, { createContext, useReducer, useEffect } from "react";

export const WishListContext = createContext({
  wishListItems: [],
  addToWishList: (item) => {},
  removeFromWishList: (id) => {},
});

export const wishListReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_WISHLIST":
      return {
        wishListItems: action.payload,
      };

    case "ADD_TO_WISHLIST":
      const updatedWishlist = [action.payload, ...state.wishListItems];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return {
        wishListItems: updatedWishlist,
      };

    case "REMOVE_FROM_WISHLIST":
      const filteredWishlist = state.wishListItems.filter((item) => item.id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(filteredWishlist));
      return {
        wishListItems: filteredWishlist,
      };

    default:
      return state;
  }
};

export const WishListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishListReducer, {
    wishListItems: [],
  });

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    dispatch({ type: "INITIALIZE_WISHLIST", payload: storedWishlist });
  }, []);

  const addToWishList = (item) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: item });
  };

  const removeFromWishList = (id) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  };

  return (
    <WishListContext.Provider
      value={{
        addToWishList,
        removeFromWishList,
        wishListItems: state.wishListItems,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};
