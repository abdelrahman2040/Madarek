import './Product.css';
import facebook_logo from '../Assets/facebook.png';
import test from '../Assets/test.jpeg';
import twitter_logo from '../Assets/twitter.png';
import instagram_logo from '../Assets/instagram.png';
import { useState } from 'react';

function View() {

    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        setQuantity(Math.max(quantity - 1, 1)); 
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1); 
    };

    const onAddToCart = (product) => {
        // console.log(product);
        console.log(quantity);
    };


    const product = {
        id: 1,
        name: "test product",
        description: 'وصف مختصر للمنتج مع بعض التفاصيل الهامة مثل الجودة والتقنيات المستخدمة.',
        price: 199.99,
        image: test,
    };

    const reviews = [
        { username: 'Ahmed', review: 'Great product! Very high quality.', rating: 5 },
        { username: 'Sarah', review: 'Very good product, but the price is a bit high.', rating: 4 },
        { username: 'Mahmoud', review: 'I can\'t say it\'s good enough.', rating: 2 },
    ];
    

    // منتجات موصى بها
    const recommendedProducts = [
        { id: 2, name: 'منتج 2', image: 'https://via.placeholder.com/200', rating: 5, price: 149.99 },
        { id: 3, name: 'منتج 3', image: 'https://via.placeholder.com/200', rating: 5, price: 249.99 },
        { id: 4, name: 'منتج 4', image: 'https://via.placeholder.com/200', rating: 5, price: 5555 },
        { id: 3, name: 'منتج 3', image: 'https://via.placeholder.com/200', rating: 5, price: 249.99 },
        { id: 3, name: 'منتج 3', image: 'https://via.placeholder.com/200', rating: 5, price: 249.99 },
        { id: 3, name: 'منتج 3', image: 'https://via.placeholder.com/200', rating: 5, price: 249.99 },
        { id: 3, name: 'منتج 3', image: 'https://via.placeholder.com/200', rating: 5, price: 249.99 },
        { id: 3, name: 'منتج 3', image: 'https://via.placeholder.com/200', rating: 5, price: 249.99 },
    ];

    return (
        <div className="product-page">
            <div className="product-container">
                <div className="product-image">
                    <img src={product.image} alt={product.name} className="product-img" />
                </div>
                <div className="product-details">
                    {/* <h1 className="product-title">{product.name}</h1> */}
                    {/* <p className="product-description">{product.description}</p> */}
                    <h1 className="product-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quidem</h1>
                    <p className="product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, a! Aliquid sequi laudantium corrupti, quaerat deserunt nihil ex nemo culpa quo et. Quaerat accusantium consectetur optio mollitia est itaque in?</p>
                    <p className="product-price">${product.price}</p>
                    <div className="product-actions">
                        <button className="btn-add-to-cart" onClick={() => onAddToCart(product)}>
                            <span className="cart-text">Add to Cart</span>
                            <div className="quantity-container">
                                <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
                                <input type="number" min="1" value={quantity} className="quantity-input" />
                                <button className="quantity-btn" onClick={increaseQuantity}>+</button>
                            </div>
                        </button>
                    </div>
                    <div className="social-share">
                        <p>Shere:</p>
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
                    {recommendedProducts.map((prod) => (
                        <div key={prod.id} className="recommended-product">
                            <img src={prod.image} alt={prod.name} className="recommended-img" />
                            <h3>{prod.name}</h3>
                            <p>${prod.price}</p>
                            <p>{Array.from({ length: prod.rating }).map((_, i) => (
                                <span key={i} className="star">★</span>
                            ))}</p>
                            <button className="btn btn-add-to-cart">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>





            <div className="product-reviews">
                <h1>Review</h1>
                {reviews.map((review, index) => (
                    <div key={index} className="review">
                        <h3>{review.username}</h3>
                        <p>{review.review}</p>
                        <div className="review-rating">
                            {Array.from({ length: review.rating }).map((_, i) => (
                                <span key={i} className="star">★</span>
                            ))}
                        </div>
                        {index != reviews.length-1 && <hr />}
                    </div>
                ))}
            </div>


        </div>
    );
}

export default View;
