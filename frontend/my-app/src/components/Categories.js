import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
    const categories = ["Fiction", "Non-Fiction", "Mystery", "Sci-Fi", "Biography", "Children"];

    return (
        <section id="categories" className="categories">
            <h2>Browse by Categories</h2>
            <div className="categories-grid">
                {categories.map((category, index) => (
                    <Link
                        key={index}
                        to={`/category/${category.toLowerCase()}`}
                        className="category"
                    >
                        {category}
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Categories;
