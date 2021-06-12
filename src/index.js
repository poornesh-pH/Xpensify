import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router/AppRouter';
import configureStore from './Redux/store/store';
import {addExpense} from './Redux/actions/expenseAct';
import {setTextField} from './Redux/actions/filtersRed';
import getVisibleExpense from './Redux/selectors/expensesSel';
const store = configureStore();
// const expense1 = store.dispatch(
//   addExpense({
//     amount : 100,
//     description: 'Grocery',
   
//   })
// );
console.log(store.getState())
// console.log(getVisibleExpense())
ReactDOM.render(<AppRouter />, document.getElementById('root'));
