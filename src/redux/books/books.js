// Imports
import { v4 as uuidv4 } from 'uuid';

// Action types
const ADD = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE_BOOK';

// Initial state
const initialState = [
  {
    id: uuidv4(),
    percent: 64,
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    chapter: 'Chapter 17',
  },
  {
    id: uuidv4(),
    percent: 30,
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    chapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    id: uuidv4(),
    percent: 10,
    category: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    chapter: 'Introduction',
  },
];

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

// Action Creators
export const addAction = (payload) => ({
  type: ADD,
  payload,
});

export const removeAction = (payload) => ({
  type: REMOVE,
  payload,
});

// Selectors
export const selectBooks = (state) => state.books;
