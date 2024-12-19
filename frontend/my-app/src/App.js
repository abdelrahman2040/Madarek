import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Bestsellers from "./components/Bestsellers";

function App() {
    const [login,setLogin] = useState(true);
    const [cart, setCart] = useState([]); // Track items in the cart
    const [query, setQuery] = useState(""); // Search query state

    // Function to add an item to the cart
    const addToCart = (item) => {
        setCart([...cart, item]);
    };


    return (
        <Router>
            <Header cart={cart} login={login} query={query} setQuery={setQuery} />  
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/category/:categoryName" element={<CategoryPage />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/bestsellers" element={<Bestsellers />} />
            </Routes>
        </Router>
    );
}

export default App;
