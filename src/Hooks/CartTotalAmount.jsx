import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const useCartTotalAmount = () => {
  const { cartProducts } = useContext(CartContext);

  const totalAmount = cartProducts.reduce((total, product) => {
    const price = parseFloat(product.price.replace("€", ""));
    return total + price * product.quantity;
  }, 0);

  return totalAmount;
};
