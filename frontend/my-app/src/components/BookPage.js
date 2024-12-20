// BookPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookPage.css'; // Import the CSS file
import AddCart from  "./AddCart"

const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null); // Change to null to handle loading state

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:8000/books/${id}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className="book-page">
      <div className="book-details">
        <img src={book.image} alt={book.title} className="book-image" />
        <h1 className="book-title">{book.title}</h1>
        <p className="book-author">by {book.author}</p>
        <p className="book-description">{book.description}</p>
        <AddCart />
        
      </div>
    </div>
  );
};

export default BookPage;
