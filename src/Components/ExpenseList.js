import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItems from './ExpenseListItems';
import selectExpenses from '../Redux/selectors/expensesSel';

const ExpenseList = props => (
  <div>
    {props.expenses.map(expense => (
      <ExpenseListItems key={expense.id} {...expense} />
    ))}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
