import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookBox.css';

function BookBox({ id, image, title, alt, description, review }) {
    const navigate = useNavigate();
    
    // حساب متوسط التقييمات
    const averageRating = Math.round(
        review.reduce((acc, r) => acc + r.rating, 0) / review.length
    );

    const handleClick = () => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="book-box" onClick={handleClick}>
            <div className="book-image-container">
                <img src={image} alt={alt} className="book-image" />
                <div className="book-overlay">
                    <p className="book-description">{description}</p>
                </div>
            </div>
            <div className="book-info">
                <h3 className="book-title">{title}</h3>
                <div className="book-rating">
                    {Array.from({ length: averageRating }).map((_, i) => (
                        <span key={i} className="star">★</span>
                    ))}
                    <span className="review-count">({review.length})</span>
                </div>
            </div>
        </div>
    );
}

export default BookBox;
