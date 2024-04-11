import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const useCartTotalItems = () => {
  const { cartProducts } = useContext(CartContext);

  const totalItems = cartProducts.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  return totalItems;
};
