import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Search from './Search';
import Cart from './Cart'
const Header = ({ cart,login, query, setQuery }) => (
    <header className="header">
        <div className="logo">Book Store</div>
        <nav className="navbar">
        {login && <Cart cart={cart}/>}
            <ul>
                {login && <li><Link to="/profile">Profile</Link></li>}
                {!login && (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
                )}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/bestsellers">Bestsellers</Link></li>
            </ul>
        </nav>
        <Search query={query} setQuery={setQuery} /> {/* Add SearchBar here */}
    </header>
);

export default Header;
