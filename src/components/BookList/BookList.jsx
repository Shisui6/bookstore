import React from 'react';
import { useSelector } from 'react-redux';
import { selectBooks } from '../../redux/books/books';
import Book from '../Book/Book';
import BookForm from '../BookForm/BookForm';
import './BookList.css';

const BookList = () => {
  const books = useSelector(selectBooks);

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
