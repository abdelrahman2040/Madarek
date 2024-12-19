// CartContext.js
import React, { createContext, useContext, useState } from "react";

// Create a context for managing cart data globally
const CartContext = createContext();

// Custom hook to access the cart context
export const useCart = () => useContext(CartContext);

// Provider component to wrap the application and share cart state
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // If the item already exists, increase its quantity
        return prevItems.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
      }
      // If the item doesn't exist, add it to the cart
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  return <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}> {children} </CartContext.Provider>;
};
