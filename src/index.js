import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router/AppRouter';
import configureStore from './Redux/store/store';
import addExpense from './Redux/actions/expense'
const store = configureStore();
console.log(store.getState())

store.dispatch(addExpense())

ReactDOM.render(<AppRouter />, document.getElementById('root'));
