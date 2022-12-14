/* eslint-disable no-param-reassign */
// Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Base URL
const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${process.env.REACT_APP_API_KEY}/books`;

// Thunk for fetching books from API
export const fetchBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const response = await fetch(URL);
    const json = await response.json();
    let jsonArr = Object.keys(json).map((item) => {
      json[item][0].id = item;
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
    const data1 = JSON.stringify(data);
    await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data1,
    });
  },
);

// Thunk for deleting a book from API
export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (data) => {
    const data1 = JSON.stringify(data);
    await fetch(`${URL}/${data.item_id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: data1,
    });
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
      state.books = state.books.filter((book) => book.id !== action.payload.item_id);
    },
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchBooks.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
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
