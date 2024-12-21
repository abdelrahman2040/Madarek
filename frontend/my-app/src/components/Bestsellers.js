import React from "react";
import BookBox from "./BookBox";
import "./Bestsellers.css";

const Bestsellers = () => {
    const books = [
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
        {id: 3, image: "/images/book3.jpg", title: "Book Title 4", alt: "Book 4",description:"This is a short description too too", rateing: [
            { username: 'Ahmed', review: 'Great product! Very high quality.', rating: 5 },
            { username: 'Sarah', review: 'Very good product, but the price is a bit high.', rating: 4 },
            { username: 'Mahmoud', review: 'I can\'t say it\'s good enough.', rating: 2 },
        ]},
        {id: 3, image: "/images/book3.jpg", title: "Book Title 4", alt: "Book 4",description:"This is a short description too too", rateing: [
            { username: 'Ahmed', review: 'Great product! Very high quality.', rating: 5 },
            { username: 'Sarah', review: 'Very good product, but the price is a bit high.', rating: 4 },
            { username: 'Mahmoud', review: 'I can\'t say it\'s good enough.', rating: 2 },
        ]},
        {id: 3, image: "/images/book3.jpg", title: "Book Title 4", alt: "Book 4",description:"This is a short description too too", rateing: [
            { username: 'Ahmed', review: 'Great product! Very high quality.', rating: 5 },
            { username: 'Sarah', review: 'Very good product, but the price is a bit high.', rating: 4 },
            { username: 'Mahmoud', review: 'I can\'t say it\'s good enough.', rating: 2 },
        ]},
    ];

    return (
        <div className="bestsellers-container">
            <h2 className="bestsellers-title">Bestselling Books</h2>
            <div className="books-grid">
                {books.map((book) => (
                    <div key={book.id} className="book-wrapper">
                        <BookBox 
                            id={book.id}
                            image={book.image}
                            title={book.title}
                            alt={book.alt}
                            description={book.description}
                            review={book.rateing}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bestsellers;
