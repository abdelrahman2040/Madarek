// AddToCart.js
import React, { useState } from "react";
import "./AddToCart.css";
import { useCart } from "./CartContext";

const AddToCart = () => {
  // Access cart items and update functions from context
  const { cartItems, setCartItems } = useCart();

  // Local states for payment modal and user inputs
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  // Static shipping cost
  const shippingCost = 50.0;

  // Function to update item quantity
  const updateQuantity = (id, change) => {
    setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity: Math.max(item.quantity + change, 1) } : item)));
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate the subtotal (total cost of items in the cart)
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Calculate the total cost including shipping
  const calculateTotal = () => {
    return calculateSubtotal() + shippingCost;
  };

  // Handle the "Buy Now" button click to open the payment modal
  const handleBuyNowClick = () => {
    setIsPaymentOpen(true);
  };

  // Close the payment modal
  const closePaymentMenu = () => {
    setIsPaymentOpen(false);
  };

  // Handle form submission when placing an order
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsPaymentOpen(false); // Close payment modal
    setShowThankYou(true); // Show a thank-you message
    setTimeout(() => setShowThankYou(false), 3000); // Hide message after 3 seconds
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title"> Your Shopping Cart </h1>
      {cartItems.length > 0 ? (
        <>
          {" "}
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img className="item-image" src={item.image} alt={item.name} />{" "}
              <div className="item-details">
                <h3 className="item-name"> {item.name} </h3> <p className="item-stock"> In Stock </p> <p className="item-delivery"> It will be delivered by tomorrow </p>{" "}
                <p className="item-subtotal">
                  Subtotal: {(item.price * item.quantity).toFixed(2)}
                  EGP{" "}
                </p>{" "}
              </div>{" "}
              <div className="item-actions">
                <div className="quantity-controls">
                  <button className="quantity-btn" onClick={() => updateQuantity(item.id, -1)}>
                    -
                  </button>{" "}
                  <span className="quantity-display"> {item.quantity} </span>{" "}
                  <button className="quantity-btn" onClick={() => updateQuantity(item.id, 1)}>
                    +
                  </button>{" "}
                </div>{" "}
                <p className="item-price">
                  {" "}
                  {item.price.toFixed(2)}
                  EGP{" "}
                </p>{" "}
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove{" "}
                </button>{" "}
              </div>{" "}
            </div>
          ))}{" "}
          <div className="cart-summary">
            <p>
              Subtotal:{" "}
              <span>
                {" "}
                {calculateSubtotal().toFixed(2)}
                EGP{" "}
              </span>{" "}
            </p>{" "}
            <p>
              Shipping:{" "}
              <span>
                {" "}
                {shippingCost.toFixed(2)}
                EGP{" "}
              </span>{" "}
            </p>{" "}
            <p className="total-cost">
              Total:{" "}
              <span>
                {" "}
                {calculateTotal().toFixed(2)}
                EGP{" "}
              </span>{" "}
            </p>{" "}
            <button className="buy-now-btn" onClick={handleBuyNowClick}>
              Buy Now{" "}
            </button>{" "}
          </div>{" "}
        </>
      ) : (
        <p className="empty-cart-message"> Your cart is empty. </p>
      )}
      {isPaymentOpen && (
        <div className="payment-menu-overlay" onClick={closePaymentMenu}>
          <div className="payment-menu-content" onClick={(e) => e.stopPropagation()}>
            <h2> Checkout </h2>{" "}
            <form onSubmit={handlePlaceOrder}>
              <label>
                Deliver to:
                <input type="text" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} required />
              </label>{" "}
              <label>
                Phone number:
                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
              </label>{" "}
              <h3> How would you like to pay ? </h3>{" "}
              <div>
                <label>
                  <input type="radio" name="paymentMethod" value="Debit/Credit Card" onChange={(e) => setPaymentMethod(e.target.value)} required />
                  Debit / Credit Card{" "}
                </label>{" "}
              </div>{" "}
              <div>
                <label>
                  <input type="radio" name="paymentMethod" value="Vodafone Cash" onChange={(e) => setPaymentMethod(e.target.value)} />
                  Vodafone Cash{" "}
                </label>{" "}
              </div>{" "}
              <div>
                <label>
                  <input type="radio" name="paymentMethod" value="Cash On Delivery" onChange={(e) => setPaymentMethod(e.target.value)} />
                  Cash On Delivery{" "}
                </label>{" "}
              </div>{" "}
              <button type="submit"> Place Order </button>{" "}
              <button type="button" onClick={closePaymentMenu}>
                Cancel{" "}
              </button>{" "}
            </form>{" "}
          </div>{" "}
        </div>
      )}
      {showThankYou && <div className="thank-you-message"> Thanks for using our website! </div>}{" "}
    </div>
  );
};

export default AddToCart;
