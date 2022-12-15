import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
