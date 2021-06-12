const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);
