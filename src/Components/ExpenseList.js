import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItems from './ExpenseListItems';

const ExpenseList = props => (
  <div>
      {props.expenses.map(expense => (
        <div key={expense.id}>
       <ExpenseListItems expense={expense} />
        </div>
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
