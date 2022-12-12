const ADD = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE_BOOK';

const initialState = [];

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

export const addAction = (payload) => ({
  type: ADD,
  payload,
});

export const removeAction = (payload) => ({
  type: REMOVE,
  payload,
});
