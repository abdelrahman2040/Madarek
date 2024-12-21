import React from "react";
import PropTypes from "prop-types";
import "./BookBox.css";
import { Link } from 'react-router-dom';
import AddCart from  "./AddCart"
const BookBox = ({id, image, title, alt,description, price, review }) => {

    // حساب متوسط التقييمات
    const averageRating = Math.round(
        review.reduce((acc, review) => acc + review.rating, 0) / review.length
    );
    return (
        <Link to={`/product/${id}`} className="book-box">
            <div key={id} className="product-details">
                <img src={image} alt={title} className="recommended-img" />
                <h3>{title}</h3>
                <p className="book-description">{description}</p>
                <p>${price}</p>
                <p>{Array.from({ length: averageRating-1 }).map((_, i) => (<span key={i} className="star">★</span>))}</p>
            </div>
            <AddCart />
        </Link>
    );
};

// Props validation
BookBox.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    handleAddToCart: PropTypes.func.isRequired, // Function to handle the click
};

export default BookBox;
