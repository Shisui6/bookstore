const STATUS = 'bookstore/categories/CHECK_STATUS';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export const statusAction = () => ({
  type: STATUS,
});

export const selectCategories = (state) => state.categories;
