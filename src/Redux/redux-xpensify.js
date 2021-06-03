import Redux, { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [
    {
      id: 'asdasdasd',
      amount: 1000,
      note: 'This is a note',
      description: 'This is the description',
      createdAt: 0
    }
  ],
  filters: {
    sortBy: amount, // date or amount
    text: 'rent',
    startDate: undefined,
    endDate: undefined
  }
};

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);
const expenseReducerStateDefault = [];
const expenseReducer = (state = expenseReducerStateDefault, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const filterReducerStateDefault = {};
const filterReducer = (state = filterReducerStateDefault, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
