import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import {
  selectFilteredBooks, fetchBooks, selectIsLoading, selectSelectedCategory,
} from '../../redux/books/books';
import Book from '../Book/Book';
import BookSkeleton from '../Book/BookSkeleton';
import './BookList.css';
import bookImg from '../../images/book-empty.png';
import filterImg from '../../images/filter.png';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectFilteredBooks);
  const category = useSelector(selectSelectedCategory);
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
          {category ? (
            <div className="filter">
              <img src={filterImg} alt="filter" />
              {category}
            </div>
          ) : ''}
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
        {category ? (
          <div className="filter">
            <img src={filterImg} alt="filter" />
            {category}
          </div>
        ) : ''}
        {books.map((book) => <Book key={book.item_id} book={book} />)}
      </div>
    </>
  );
};

export default BookList;
