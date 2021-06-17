import React, { Component } from 'react';

export default class ExpenseForm extends Component {
    setValues = e => {
      this.setState(()=>({
      [e.target.name]: e.target.value
      })); 
    };
    state = {
      description: '',
      note: '',
      amount: ''
    };
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
          <input type="submit" value="Add Expense" />
        </form>
      </div>
    );
  }
}
