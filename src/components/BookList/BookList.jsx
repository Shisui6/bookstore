import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { selectBooks, fetchBooks, selectIsLoading } from '../../redux/books/books';
import Book from '../Book/Book';
import BookSkeleton from '../Book/BookSkeleton';
import './BookList.css';
import bookImg from '../../images/book-empty.png';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const loading = useSelector(selectIsLoading);
  const [animationParent] = useAutoAnimate();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <div className="booklist" ref={animationParent}>
          <BookSkeleton />
        </div>
      </>
    );
  }

  if (!books.length) {
    return (
      <>
        <div className="booklist" ref={animationParent}>
          <div className="booklist-empty">
            <img src={bookImg} alt="book" />
            <h2>Library is empty. Add a book to see it here</h2>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="booklist" ref={animationParent}>
        {books.map((book) => <Book key={book.item_id} book={book} />)}
      </div>
    </>
  );
};

export default BookList;
