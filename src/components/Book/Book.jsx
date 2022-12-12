import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = ({ book }) => (
  <div className="book">
    <div className="book-info">
      <div>
        <p>Action</p>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <ul>
          <li>Comments</li>
          <li>Remove</li>
          <li>Edit</li>
        </ul>
      </div>
      <div>
        <p>65%</p>
        <p>Completed</p>
      </div>
    </div>
    <div>
      <p>CURRENT CHAPTER</p>
      <p>Chapter 17</p>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape.isRequired,
};

export default Book;
