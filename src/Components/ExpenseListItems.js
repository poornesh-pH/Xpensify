import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../Redux/actions/expenseAct';
import {Link} from 'react-router-dom';

const ExpenseListItems = ({id,description,amount,createdAt,dispatch}) => {
  return (
    <div>
      <Link to ={`/edit/${id}`}>{description}</Link>
      <p>{amount} - {createdAt}</p>
      <button onClick = {()=>{
        dispatch(removeExpense(id))
      }}>Remove</button>
    </div>
  );
};

export default connect()(ExpenseListItems);
