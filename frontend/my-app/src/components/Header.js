import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Search from './Search';
import Cart from './Cart'
const Header = ({ cart,login, query, setQuery }) => (
    <header className="header">
        <div className="logo">Book Store</div>
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                {login && <Cart cart={cart}/>}
                {login && <li><Link to="/profile">Profile</Link></li>}
                {!login && (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
                )}
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/bestsellers">Bestsellers</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/product">Product</Link></li>
            </ul>
        </nav>
        <Search query={query} setQuery={setQuery} /> {/* Add SearchBar here */}
    </header>
);

export default Header;
