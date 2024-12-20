import React from "react";
import PropTypes from "prop-types";
import "./BookBox.css"; // Add styles for the book box
import AddCart from  "./AddCart"
const BookBox = ({ image, title, alt,description, handleAddToCart }) => {
    return (
        <div className="book-box">
            <img src={image} alt={alt} className="book-image" />
            <p className="book-title">{title}</p>
            <p className="book-description">{description}</p>
            <AddCart />
        </div>
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
