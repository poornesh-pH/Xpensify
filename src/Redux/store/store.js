import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expenseRed';
import filterReducer from '../reducers/filtersRed';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filterReducer
    })
  );
  return store;
};
