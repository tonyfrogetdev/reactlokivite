import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProcucts] = useState([]);

  // fonction pour ajouter le produit au panier

  const addToCart = (product) => {
    setCartProcucts((prevItems) => {
      // Utiliser le slug comme identifiant unique
      const itemExists = prevItems.find((item) => item.slug === product.slug);
      // Si le produit existe déjà
      if (itemExists) {
        // Renvoie une nouvelle version de la liste en ajustant la quantité
        return prevItems.map(
          (item) =>
            item.slug === product.slug
              ? { ...item, quantity: item.quantity + 1 } // Augmente la quantité de 1
              : item // Ou garde les produits normaux
        );
      } else {
        // Si le produit n'existe pas, ajoute le nouveau produit avec une quantité de 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const getQuantity = () => {
    return cartProducts.reduce((total, product) => total + product.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartProducts, addToCart, getQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// hook perosnnalisé qui englobe useContext pour un accès à CartContext
export const useCart = () => {
  return useContext(CartContext);
};
