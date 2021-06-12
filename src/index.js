import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router/AppRouter';
import configureStore from './Redux/store/store';
import {addExpense} from './Redux/actions/expenseAct';
import {setTextField} from './Redux/actions/filtersRed';
import getVisibleExpense from './Redux/selectors/expensesSel';
const store = configureStore();

console.log(getVisibleExpense())

const expense1 = store.dispatch(
  addExpense({
    amount: 5000,
    note: 'this is grocery expense',
    description: 'Grocery',
    createdAt: 0
  })
);

ReactDOM.render(<AppRouter />, document.getElementById('root'));
