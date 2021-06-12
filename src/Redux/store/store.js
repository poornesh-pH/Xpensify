import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expense';
import filterReducer from '../reducers/filters';

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);
