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
    isLoading: false,
    hasError: false,
  },
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
    removeBook(state, action) {
      const state1 = state;
      state1.books = state.books.filter((book) => book.item_id !== action.payload.item_id);
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
  addBook,
  removeBook,
} = booksSlice.actions;

// Selectors
export const selectBooks = (state) => state.books.books;
export const selectIsLoading = (state) => state.books.isLoading;
export const selectHasError = (state) => state.books.hasError;

export default booksSlice.reducer;
