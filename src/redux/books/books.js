/* eslint-disable no-param-reassign */
// Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base URL
const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${process.env.REACT_APP_API_KEY}/books`;

// Thunk for fetching books from API
export const fetchBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const response = await fetch(URL);
    const json = await response.json();
    let jsonArr = Object.keys(json).map((item) => {
      json[item][0].item_id = item;
      return json[item][0];
    });
    jsonArr = jsonArr.sort((a, b) => {
      const fa = a.title.toLowerCase();
      const fb = b.title.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    return jsonArr;
  },
);

// Thunk for posting books to API
export const postBook = createAsyncThunk(
  'books/addBook',
  async (data) => {
    await axios.post(URL, data);
  },
);

// Thunk for deleting a book from API
export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (data) => {
    await axios.delete(`${URL}/${data.item_id}`);
  },
);

// Books slice
export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    selectedCategory: '',
    isLoading: false,
    hasError: false,
  },
  reducers: {
    setSelectedCategory(state, action) {
      const state1 = state;
      state1.selectedCategory = action.payload;
    },
    addBook(state, action) {
      state.books.push(action.payload);
    },
    removeBook(state, action) {
      const state1 = state;
      state1.books = state.books.filter((book) => book.item_id !== action.payload.item_id);
    },
    updateProgress(state, action) {
      const state1 = state;
      state1.books = state.books.map((book) => {
        if (book.item_id === action.payload.item_id) {
          if (book.category.percent !== 100) {
            book.category.percent += 10;
            book.category.chapter += 1;
          }
        }
        return book;
      });
    },
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      const state1 = state;
      state1.isLoading = true;
      state1.hasError = false;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      const state1 = state;
      state1.books = action.payload;
      state1.isLoading = false;
      state1.hasError = false;
    },
    [fetchBooks.rejected]: (state) => {
      const state1 = state;
      state1.isLoading = false;
      state1.hasError = true;
    },
  },
});

export const {
  setSelectedCategory,
  addBook,
  removeBook,
  updateProgress,
} = booksSlice.actions;

// Selectors
export const selectSelectedCategory = (state) => state.books.selectedCategory;
export const selectBooks = (state) => state.books.books;
export const selectIsLoading = (state) => state.books.isLoading;
export const selectHasError = (state) => state.books.hasError;
export const selectFilteredBooks = (state) => {
  const books = selectBooks(state);
  const category = selectSelectedCategory(state);
  if (category) {
    return books.filter((book) => book.category.category.includes(category));
  }

  return books;
};

export default booksSlice.reducer;
