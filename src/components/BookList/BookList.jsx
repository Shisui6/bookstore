import React, { useState } from 'react';
import Book from '../Book/Book';
import BookForm from '../BookForm/BookForm';

const BookList = () => {
  const booksArr = [
    {
      id: 1,
      title: 'HTML',
      author: 'Jack',
    },
    {
      id: 2,
      title: 'CSS',
      author: 'Jane',
    },
    {
      id: 3,
      title: 'JavaScript',
      author: 'John',
    },
  ];
  const [books] = useState(booksArr);

  return (
    <>
      <div>
        {books.map((book) => <Book key={book.id} book={book} />)}
      </div>

      <BookForm />
    </>
  );
};

export default BookList;
