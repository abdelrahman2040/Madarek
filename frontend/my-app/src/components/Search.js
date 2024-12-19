import React from "react";
import './Search.css'
const SearchBar = ({ query, setQuery }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for books..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;
