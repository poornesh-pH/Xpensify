import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItems from './ExpenseListItems';

const ExpenseList = props => (
  <div>
      {props.expenses.map(expense => (
       <ExpenseListItems key={expense.id} {...expense} />
      ))}
    </div>
);

const mapStateToProps = state => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);
