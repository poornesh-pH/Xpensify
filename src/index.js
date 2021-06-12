import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router/AppRouter';
import configureStore from './Redux/store/store';
import { addExpense } from './Redux/actions/expenseAct';
import { setTextField } from './Redux/actions/filtersAct';
import getVisibleExpense from './Redux/selectors/expensesSel';
const store = configureStore();
const expense1 = store.dispatch(
  addExpense({
    amount: 100,
    description: 'Grocery'
  })
);
const expense2 = store.dispatch(
  addExpense({
    amount: 500,
    description: 'Rent'
  })
);
const sortByText = store.dispatch(setTextField({text:"ent"}))
// console.log(store.getState());
const state = store.getState();
const visibleExpeses = getVisibleExpense(state.expenses,state.filters);
console.log(visibleExpeses);
ReactDOM.render(<AppRouter />, document.getElementById('root'));
