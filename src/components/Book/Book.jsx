import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import { useDispatch } from 'react-redux';
import { removeAction } from '../../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div className="book">
      <div className="book-info">
        <div>
          <p className="cat">{book.category}</p>
          <h2>{book.title}</h2>
          <p className="author">{book.author}</p>
          <ul>
            <li><button type="button">Comments</button></li>
            <li><button type="button" onClick={() => dispatch(removeAction(book.id))}>Remove</button></li>
            <li><button type="button">Edit</button></li>
          </ul>
        </div>
        <div className="completed">
          <svg viewBox="0 0 36 36" className="circular-chart">
            <path
              className="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle"
              strokeDasharray={`${book.percent}, 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            {/* <text x="18" y="20.35" className="percentage">30%</text> */}
          </svg>
          <div className="percent-div">
            <p className="percent">
              {book.percent}
              %
            </p>
            <p>Completed</p>
          </div>
        </div>
      </div>
      <div className="chapter-div">
        <p className="current">CURRENT CHAPTER</p>
        <p className="chapter">{book.chapter}</p>
        <button type="button" className="update">Update Progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape.isRequired,
};

export default Book;
