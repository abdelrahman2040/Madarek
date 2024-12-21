import './Product.css';
import facebook_logo from '../Assets/facebook.png';
import test from '../Assets/test.jpeg';
import twitter_logo from '../Assets/twitter.png';
import instagram_logo from '../Assets/instagram.png';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookBox from "./BookBox.js";

function View() {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setProduct({
                id: id,
                name: "test product " + id,
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ad odit sint aperiam earum! Provident dolorem incidunt qui, totam, hic similique necessitatibus cumque amet quia animi quibusdam porro itaque sint?",
                price: 199.99,
                image: test,
                rating: 4,
                reviews: [
                    { username: 'Ahmed', review: 'Great product! Very high quality.', rating: 5 },
                    { username: 'Sarah', review: 'Very good product, but the price is a bit high.', rating: 4 },
                    { username: 'Mahmoud', review: 'I can\'t say it\'s good enough.', rating: 2 },
                ],
            });
            setLoading(false);
        }, 500);
    }, [id]);

    const decreaseQuantity = () => {
        setQuantity(Math.max(quantity - 1, 1)); 
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1); 
    };

    const onAddToCart = (product) => {
        console.log('Adding to cart:', { ...product, quantity });
    };

    const recommendedProducts = [
        {id: 0, image: "/images/book1.jpg", title: "Book Title 1", alt: "Book 1",description:"This is a short description", rateing: [
            { username: 'Ahmed', review: 'Great product! Very high quality.', rating: 5 },
            { username: 'Sarah', review: 'Very good product, but the price is a bit high.', rating: 4 },
            { username: 'Mahmoud', review: 'I can\'t say it\'s good enough.', rating: 2 },
        ]},
        {id: 1, image: "/images/book2.jpg", title: "Book Title 2", alt: "Book 2",description:"This is a short description too", rateing: [
            { username: 'Ahmed', review: 'Great product! Very high quality.', rating: 5 },
            { username: 'Sarah', review: 'Very good product, but the price is a bit high.', rating: 4 },
            { username: 'Mahmoud', review: 'I can\'t say it\'s good enough.', rating: 2 },
        ]},
        {id: 2, image: "/images/book3.jpg", title: "Book Title 3", alt: "Book 3",description:"This is a short description too too", rateing: [
            { username: 'Ahmed', review: 'Great product! Very high quality.', rating: 5 },
            { username: 'Sarah', review: 'Very good product, but the price is a bit high.', rating: 4 },
            { username: 'Mahmoud', review: 'I can\'t say it\'s good enough.', rating: 2 },
        ]},
        {id: 2, image: "/images/book3.jpg", title: "Book Title 3", alt: "Book 3",description:"This is a short description too too", rateing: [
            { username: 'Ahmed', review: 'Great product! Very high quality.', rating: 5 },
            { username: 'Sarah', review: 'Very good product, but the price is a bit high.', rating: 4 },
            { username: 'Mahmoud', review: 'I can\'t say it\'s good enough.', rating: 2 },
        ]},
        {id: 2, image: "/images/book3.jpg", title: "Book Title 3", alt: "Book 3",description:"This is a short description too too", rateing: [
            { username: 'Ahmed', review: 'Great product! Very high quality.', rating: 5 },
            { username: 'Sarah', review: 'Very good product, but the price is a bit high.', rating: 4 },
            { username: 'Mahmoud', review: 'I can\'t say it\'s good enough.', rating: 2 },
        ]},
        {id: 2, image: "/images/book3.jpg", title: "Book Title 3", alt: "Book 3",description:"This is a short description too too", rateing: [
            { username: 'Ahmed', review: 'Great product! Very high quality.', rating: 5 },
            { username: 'Sarah', review: 'Very good product, but the price is a bit high.', rating: 4 },
            { username: 'Mahmoud', review: 'I can\'t say it\'s good enough.', rating: 2 },
        ]},
    ];


    

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (!product) {
        return <div className="error">Product not found</div>;
    }

    // حساب متوسط التقييمات
    const averageRating = Math.round(
        product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length
    );

    return (
        <div className="product-page">
            <div className="product-container">
                <div className="product-image">
                    <img src={product.image} alt={product.name} className="product-img" />
                </div>
                <div className="product-details">
                    <h1 className="product-title">{product.name}</h1>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">${product.price}</p>
                    <div className="product-rating">
                        <a href="#reviews-section" style={{ textDecoration: 'none', color: 'inherit' }}>
                            {Array.from({ length: averageRating -1}).map((_, i) => (
                                <span key={i} className="star">★</span>
                            ))}
                            <span className="rating-count">({product.reviews.length} reviews)</span>
                        </a>
                    </div>
                    <div className="product-actions">
                        <button className="btn-add-to-cart" onClick={() => onAddToCart(product)}>
                            <span className="cart-text">Add to Cart</span>
                            <div className="quantity-container">
                                <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
                                <input 
                                    type="number" 
                                    min="1" 
                                    value={quantity} 
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                                    className="quantity-input" 
                                />
                                <button className="quantity-btn" onClick={increaseQuantity}>+</button>
                            </div>
                        </button>
                    </div>
                    <div className="social-share">
                        <p>Share:</p>
                        <div className="social-icons">
                            <img src={facebook_logo} alt="Facebook" />
                            <img src={twitter_logo} alt="Twitter" />
                            <img src={instagram_logo} alt="Instagram" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="recommended-products">
                <h2>Recommended Products</h2>
                <div className="recommended-container">
                    {recommendedProducts.map((book) => (
                        <BookBox 
                            id={book.id}
                            image={book.image}
                            title={book.title}
                            alt={book.alt}
                            description={book.description}
                            review={book.rateing}
                        />
                    ))}
                </div>
            </div>

            <div className="product-reviews" id="reviews-section">
                <h2>Reviews</h2>
                {product.reviews.map((review, index) => (
                    <div key={index} className="review">
                        <h3>{review.username}</h3>
                        <p>{review.review}</p>
                        <div className="review-rating">
                            {Array.from({ length: review.rating }).map((_, i) => (
                                <span key={i} className="star">★</span>
                            ))}
                        </div>
                        {index !== product.reviews.length - 1 && <hr />}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default View;
