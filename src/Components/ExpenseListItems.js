import React from 'react';

const ExpenseListItems = props => {
  console.log(props);
  return (
    <div>
      {props.expenses.map(expense => (
        <div key={expense.id}>
          <h3>{expense.description}</h3>
        </div>
      ))}
    </div>
  );
};

export default ExpenseListItems;
