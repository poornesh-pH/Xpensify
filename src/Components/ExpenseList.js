import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItems from './ExpenseListItems';

const ExpenseList = props => (
  <div>
    <ExpenseListItems expenses={props.expenses} />
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);
