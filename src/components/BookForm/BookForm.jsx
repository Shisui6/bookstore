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
    category: 'Fiction',
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    if (e.target.name === 'title') {
      setBook((book) => ({
        ...book,
        title: e.target.value,
      }));
    } else if (e.target.name === 'author') {
      setBook((book) => ({
        ...book,
        author: e.target.value,
      }));
    } else {
      setBook((book) => ({
        ...book,
        category: e.target.value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...book,
      item_id: uuidv4(),
      category: { percent: 10, chapter: 1, category: book.category },
    };

    dispatch(postBook(payload));
    dispatch(addBook(payload));
    setBook({
      title: '',
      author: '',
      category: book.category,
    });
  };

  return (
    <div className="bookForm">
      <img src={bookImg} alt="book" />
      <h2>New Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="title" name="title" placeholder="Title" value={book.title} onChange={handleInputChange} required />
        <input type="text" id="author" name="author" placeholder="Author" value={book.author} onChange={handleInputChange} required />
        <select name="category" id="category" value={book.category} onChange={handleInputChange}>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Drama">Drama</option>
          <option value="Poetry">Poetry</option>
          <option value="Folktale">Folktale</option>
          <option value="Fantasy">Fantasy</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
