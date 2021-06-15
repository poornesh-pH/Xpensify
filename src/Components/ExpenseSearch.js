import React from 'react';
import { connect } from 'react-redux';
import {setTextField} from '../Redux/actions/filtersAct';

const ExpenseSearch = props => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={e => {
        props.dispatch(setTextField(e.target.value));
      }}
    />
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseSearch);
