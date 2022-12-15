import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import { useDispatch } from 'react-redux';
import {
  deleteBook, removeBook, updateProgress, postBook,
} from '../../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    const payload = {
      item_id: book.item_id,
    };

    dispatch(deleteBook(payload));
    dispatch(removeBook(payload));
  };

  const handleUpdateClick = () => {
    let { percent } = book.category;
    let { chapter } = book.category;
    const payload = {
      item_id: book.item_id,
    };

    const payload1 = {
      ...book,
      category: { percent: percent += 10, chapter: chapter += 1, category: book.category.category },
    };

    if (percent !== 110) {
      dispatch(updateProgress(payload));
      dispatch(deleteBook(payload)).then(() => {
        dispatch(postBook(payload1));
      });
    }
  };

  return (
    <div className="book">
      <div className="book-info">
        <div>
          <p className="cat">{book.category.category}</p>
          <h2>{book.title}</h2>
          <p className="author">{book.author}</p>
          <ul>
            <li><button type="button">Comments</button></li>
            <li><button type="button" onClick={handleRemoveClick}>Remove</button></li>
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
              strokeDasharray={`${book.category.percent}, 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            {/* <text x="18" y="20.35" className="percentage">30%</text> */}
          </svg>
          <div className="percent-div">
            <p className="percent">
              {book.category.percent}
              %
            </p>
            <p>Completed</p>
          </div>
        </div>
      </div>
      <div className="chapter-div">
        <p className="current">CURRENT CHAPTER</p>
        <p className="chapter">
          Chapter
          &nbsp;
          {book.category.chapter}
        </p>
        <button type="button" className="update" onClick={handleUpdateClick}>Update Progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape().isRequired,
};

export default Book;
