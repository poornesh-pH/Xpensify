import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends Component {
    setValues = e => {
      this.setState(()=>({
      [e.target.name]: e.target.value
      })); 
    };
    state = {
      description: '',
      note: '',
      amount: '',
      createdAt: moment(),
      calanderFocused : false,
    };
    onDateChange =(createdAt)=>{
      this.setState({createdAt})
    }
    onFocusChange =({focused })=>{
      this.setState({calanderFocused : focused})
    }
  render() {

    return (
      <div>
        <form>
          <input
            onChange={this.setValues}
            type="text"
            placeholder="Description"
            name="description"
            autoFocus
            value={this.state.description}
          />
          <input type="number" placeholder="Amount" name="amount"  onChange={this.setValues}/>
         
          <textarea placeholder="Note (optional)" name="note"  onChange={this.setValues}/>
           <SingleDatePicker 
           date = {this.state.createdAt}
           onDateChange = {this.onDateChange}
           focused ={this.state.calanderFocused}
           onFocusChange = {this.onFocusChange}
           small = {true}
           numberOfMonths= {1}
           isOutsideRange ={()=>false}
           />
          <input type="submit" value="Add Expense" />
        </form>
      </div>
    );
  }
}
