import React from "react";
import BookBox from "./BookBox";
import "./Bestsellers.css";

const Bestsellers = () => {
    const books = [
        { image: "/images/book1.jpg", title: "Book Title 1", alt: "Book 1",description:"This is a short description" },
        { image: "/images/book2.jpg", title: "Book Title 2", alt: "Book 2",description:"This is a short description too" },
        { image: "/images/book3.jpg", title: "Book Title 3", alt: "Book 3",description:"This is a short description too too" },
    ];

    return (
        <section id="bestsellers" className="bestsellers">
            <h2>Bestselling Books</h2>
            <div className="grid">
                {books.map((book, index) => (
                    <BookBox 
                        key={index}
                        image={book.image}
                        title={book.title}
                        alt={book.alt}
                        description={book.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Bestsellers;
