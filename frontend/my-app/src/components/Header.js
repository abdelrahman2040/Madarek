import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../Assets/logo.svg";
import Search from './Search';
import Cart from './Cart'

const Header = ({ cart, login, query, setQuery }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <Link to="/" className="logo">
                <img src={logo} alt="Logo" />
            </Link>

            <nav className={`navbar ${isMenuOpen ? 'show' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                    {login && <li className="cart-item"><Cart cart={cart}/></li>}
                    {login && <li><Link to="/profile" onClick={() => setIsMenuOpen(false)}>Profile</Link></li>}
                    {!login && (
                        <>
                            <li><Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
                            <li><Link to="/register" onClick={() => setIsMenuOpen(false)}>Register</Link></li>
                        </>
                    )}
                    <li><Link to="/categories" onClick={() => setIsMenuOpen(false)}>Categories</Link></li>
                    <li><Link to="/bestsellers" onClick={() => setIsMenuOpen(false)}>Bestsellers</Link></li>
                    <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                    <li><Link to="/product" onClick={() => setIsMenuOpen(false)}>Product</Link></li>
                </ul>
            </nav>
            
            <div className="desktop-search">
                <Search query={query} setQuery={setQuery} />
            </div>

            <button className={`menu-button ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </header>
    );
};

export default Header;
