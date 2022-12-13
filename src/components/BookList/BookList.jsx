import React from 'react';
import { useSelector } from 'react-redux';
import { selectBooks } from '../../redux/books/books';
import Book from '../Book/Book';
import BookForm from '../BookForm/BookForm';
import './BookList.css';
import bookImg from '../../images/book-empty.png';

const BookList = () => {
  const books = useSelector(selectBooks);

  if (!books.length) {
    return (
      <>
        <div className="booklist">
          <div className="booklist-empty">
            <img src={bookImg} alt="book" />
            <h2>Library is empty. Add a book to see it here</h2>
          </div>

          <BookForm />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="booklist">
        {books.map((book) => <Book key={book.id} book={book} />)}

        <BookForm />
      </div>
    </>
  );
};

export default BookList;
