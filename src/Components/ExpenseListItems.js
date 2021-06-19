import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItems = ({id,description,amount,createdAt,dispatch}) => {
  return (
    <div>
      <Link to ={`/edit/${id}`}>{description}</Link>
      <p>{amount} - {createdAt}</p>
     
    </div>
  );
};

export default ExpenseListItems;
