import React from 'react';
import BookBox from './BookBox';
import './Bestsellers.css';

const Bestsellers = () => {
    const bestsellerBooks = [
        // أمثلة للكتب الأكثر مبيعاً
        {
            id: 1,
            title: "كتاب 1",
            image: "/images/book1.jpg",
            description: "وصف الكتاب الأول",
            rating: 4.5,
            reviews: 120
        },
        // يمكنك إضافة المزيد من الكتب هنا
    ];

    return (
        <div className="bestsellers-container">
            <h2 className="bestsellers-title">الكتب الأكثر مبيعاً</h2>
            <div className="books-grid">
                {bestsellerBooks.map(book => (
                    <div key={book.id} className="book">
                        <BookBox
                            id={book.id}
                            title={book.title}
                            image={book.image}
                            description={book.description}
                            rating={book.rating}
                            reviews={book.reviews}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bestsellers;
