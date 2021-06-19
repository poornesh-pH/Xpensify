import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
function Edit(props){
  console.log(props.expense,'edit')
  return(
    <div>
    <p>Edit Expense {props.match.params.id}</p>
    <ExpenseForm expense = {props.expense}
    onSubmit = {(expense)=>{
      console.log(expense)
      props.history.push('/')
    }}/>
    </div>
  )
}
const mapStateToProps =(state,props)=>{
  return{
    expense: state.expenses.find((expense)=> expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(Edit)