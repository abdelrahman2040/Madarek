import React from "react";
import { useParams } from "react-router-dom";
import BookBox from "./BookBox";
import './CategoryPage.css';
const CategoryPage = () => {

    const { categoryName } = useParams();
    const books = [
        { image: "/images/book1.jpg", title: "Book Title 1", alt: "Book 1" },
        { image: "/images/book2.jpg", title: "Book Title 2", alt: "Book 2" },
        { image: "/images/book3.jpg", title: "Book Title 3", alt: "Book 3" },
    ];

    return (
<div className="books-grid">
    {books.map((book, index) => (
        <BookBox
            key={index}
            image={book.image}
            title={book.title}
            alt={book.alt}
        />
    ))}
</div>

    );
};

export default CategoryPage;
