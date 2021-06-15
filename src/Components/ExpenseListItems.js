import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../Redux/actions/expenseAct';

const ExpenseListItems = ({id,description,amount,createdAt,dispatch}) => {
  return (
    <div>
      <h3>{description}</h3>
      <p>{amount} - {createdAt}</p>
      <button onClick = {()=>{
        dispatch(removeExpense(id))
      }}>Remove</button>
    </div>
  );
};

export default connect()(ExpenseListItems);
