import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './BookForm.css';
import bookImg from '../../images/book-form.png';
import { addBook, postBook } from '../../redux/books/books';

const BookForm = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    if (e.target.name === 'title') {
      setBook((book) => ({
        ...book,
        title: e.target.value,
      }));
    } else {
      setBook((book) => ({
        ...book,
        author: e.target.value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      ...book,
      item_id: uuidv4(),
      category: { percent: 0, chapter: 'Chapter 1', category: 'Fiction' },
    });

    const payload1 = {
      ...book,
      id: uuidv4(),
      category: { percent: 0, chapter: 'Chapter 1', category: 'Fiction' },
    };

    dispatch(postBook(payload));
    dispatch(addBook(payload1));
    setBook({
      title: '',
      author: '',
    });
  };

  return (
    <div className="bookForm">
      <img src={bookImg} alt="book" />
      <h2>New Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="title" name="title" placeholder="Title" value={book.title} onChange={handleInputChange} required />
        <input type="text" id="author" name="author" placeholder="Author" value={book.author} onChange={handleInputChange} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
