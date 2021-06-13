import React from 'react';

const ExpenseListItems = props => {
  return (
    <div>
      <h3>{props.expense.description}</h3>
    </div>
  );
};

export default ExpenseListItems;
