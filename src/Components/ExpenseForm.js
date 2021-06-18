import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends Component {
  setValues = e => {
    this.setState(() => ({
      [e.target.name]: e.target.value
    }));
  };
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calanderFocused: false,
    error: ''
  };
  onDateChange = createdAt => {
    createdAt && this.setState({ createdAt });
  };
  onFocusChange = ({ focused }) => {
    this.setState({ calanderFocused: focused });
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState({ error: 'Fill the Description and Amount' });
    } else {
     this.props.onSubmit({
       description:this.state.description,
       note: this.state.note,
       amount: this.state.amount,
       createdAt: this.state.createdAt.valueOf()
     })
    }
  };
  clearError = () => {
    this.setState({ error: '' });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.setValues}
            type="text"
            placeholder="Description"
            name="description"
            // autoFocus
            value={this.state.description}
            onFocus={this.clearError}
          />
          <input
            type="number"
            placeholder="Amount"
            name="amount"
            onFocus={this.clearError}
            onChange={this.setValues}
          />

          <textarea
            placeholder="Note (optional)"
            name="note"
            onChange={this.setValues}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calanderFocused}
            onFocusChange={this.onFocusChange}
            small={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <input type="submit" value="Add Expense" />
        </form>
        <p>{this.state.error}</p>
      </div>
    );
  }
}
