import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  setTextField,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../Redux/actions/filtersAct';
import { DateRangePicker } from 'react-dates';
class ExpenseSearch extends Component {
  state = {
    calenderFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = focusedInput => {
    this.setState({ calenderFocused: focusedInput });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(setTextField(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            e.target.value === 'date'
              ? this.props.dispatch(sortByDate())
              : this.props.dispatch(sortByAmount());
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          small={true}
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          isOutsideRange={() => false}
          numberOfMonths={1}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseSearch);
