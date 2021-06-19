import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../Redux/actions/expenseAct'
function Create(props) {
  return (
    <div>
      <h3>Add Expense</h3>
      <ExpenseForm onSubmit={(expense)=>{
       props.dispatch(addExpense(expense))
       props.history.push('/')
      }}/>
    </div>
  );
}
export default connect()(Create)