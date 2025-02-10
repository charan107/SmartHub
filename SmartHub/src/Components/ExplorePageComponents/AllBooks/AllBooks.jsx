import React from "react";
import "./AllBooks.css";

const AllBooks = ({ books }) => {
  return (
    <div className="all-books-section">
      <h3 className="all-books-heading">All Books</h3>
      {books.length > 0 ? (
        <div className="all-books-grid">
          {books.map((book, index) => (
            <div key={index} className="single-book-card">
              <img src={book.src} alt={book.title} className="single-book-cover" />
              <div className="single-book-info">
                <h4 className="single-book-title">{book.title}</h4>
                <p className="single-book-description">{book.description}</p>
                <p className="single-book-genre">{book.genre}</p>
                <div className="single-book-actions">
                  <button className="single-buy-now">Buy Now</button>
                  <button className="single-wishlist">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-books">No books available</p>
      )}
    </div>
  );
};

export default AllBooks;
