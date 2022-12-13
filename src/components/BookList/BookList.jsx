import React, { useState } from 'react';
import Book from '../Book/Book';
import BookForm from '../BookForm/BookForm';
import './BookList.css';

const BookList = () => {
  const booksArr = [
    {
      id: 1,
      percent: 64,
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      percent: 30,
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      chapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      id: 3,
      percent: 5,
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      chapter: 'Introduction',
    },
  ];
  const [books] = useState(booksArr);

  return (
    <>
      <div className="booklist">
        {books.map((book) => <Book key={book.id} book={book} />)}
      </div>

      <BookForm />
    </>
  );
};

export default BookList;
