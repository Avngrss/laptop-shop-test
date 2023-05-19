import React from "react";
import { AppContext } from "../components/app/App";

export const useCart = () => {
  const { setCartItems, cartItem } = React.useContext(AppContext);
  const totalPrice = cartItem.reduce((sum, obj) => sum + obj.price, 0);

  return { cartItem, setCartItems, totalPrice };
};
