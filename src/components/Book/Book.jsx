import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <div className="book">
    <h2>{book.title}</h2>
    <p>{book.author}</p>
    <button type="button">Remove</button>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape.isRequired,
};

export default Book;
