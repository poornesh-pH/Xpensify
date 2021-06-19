import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
function Edit(props){
  console.log(props,'edit')
  return(
    <div>
    <p>Edit Expense {props.match.params.id}</p>
    <ExpenseForm expense = {props.expense}/>
    </div>
  )
}
const mapStateToProps =(state,props)=>{
  return{
    expense: state.expenses.find((exp)=> exp.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(Edit)