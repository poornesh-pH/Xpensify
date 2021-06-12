import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router/AppRouter';
import configureStore from './Redux/store/store';

const store = configureStore();
console.log(store.getState())
ReactDOM.render(<AppRouter />, document.getElementById('root'));
