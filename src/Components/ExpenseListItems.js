import React from 'react';

const ExpenseListItems = ({description,amount,createdAt}) => {
  return (
    <div>
      <h3>{description}</h3>
      <p>{amount} - {createdAt}</p>
    </div>
  );
};

export default ExpenseListItems;
