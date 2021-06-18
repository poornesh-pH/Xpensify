import React from 'react';
import ExpenseForm from './ExpenseForm';
export default function Create() {
  return (
    <div>
      <h3>Add Expense</h3>
      <ExpenseForm onSubmit={(expense)=>{
        console.log("Add_expense",expense)
      }}/>
    </div>
  );
}
