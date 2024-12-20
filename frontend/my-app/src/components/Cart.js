// src/components/CartButton.js

import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css"; // For styling the cart button

const Cart = ({ cart }) => (
    <div className="cart-container">
        <Link to="/cart">
            <button className="cart-button">
                Cart ({cart.length}) {/* Display number of items in the cart */}
            </button>
        </Link>
    </div>
);

export default Cart;
