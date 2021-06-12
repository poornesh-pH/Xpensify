import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expense';
import filterReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filterReducer
    })
  );
  return store;
};
