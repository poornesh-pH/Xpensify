import React from 'react';
import './style.scss';
import ExpenseList from './Components/ExpenseList';
import ExpenseSearch from './Components/ExpenseSearch';
export default function App() {
  return (
    <div>
      <title>Xpensify</title>
      <ExpenseSearch />
      <ExpenseList />
    </div>
  );
}
