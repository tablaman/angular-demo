import React from 'react';
import moment from 'moment';
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false
  }
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }
  onNoteChange = (e) => {
    // Note, need to do this - 
    // i.e. capture value initially
    // or use e.persist();
    const note = e.target.value;
    this.setState(() => ({ note }));
  }
  onAmountchange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
      this.setState(()=> ({ amount }))
  }

  // calendar
  onFocusChange = ({ focused }) => {
    this.setState(()=> ({ calendarFocused: focused }))
  }
  // better UX so user shouldn't be able to delete the date
  // from the input
  onDateChange = (createdAt) => {
    if (createdAt) this.setState(()=> ({ createdAt }));
  }
  onSubmit = (e) => {
    e.preventDefault();

    this.lblDescription.innerHTML = (!this.state.description) 
        ? 'please provide a description' : '';

    this.lblAmount.innerHTML = (!this.state.amount) 
        ? 'please provide an amount' : ''
    if(!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please fill out required fields' }))
    }
  }
  render() {
    return (
      <div>
        { this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.onSubmit}>
          <input 
            id="description"
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange} />
          <label 
            ref={el => this.lblDescription = el}
            htmlFor="description"
            ></label>

          <input 
            id="amount"
            type="text"
            placeholder="Amount"
            value = {this.state.amount}
            onChange={this.onAmountchange} />
          <label 
            ref={el => this.lblAmount = el}
            htmlFor="amount"
            ></label>

          <SingleDatePicker
            date={this.state.createdAt} 
            onDateChange={this.onDateChange} 
            focused={this.state.calendarFocused} 
            onFocusChange={this.onFocusChange} 
            numberOfMonths={1}
            isOutsideRange={() => false} // make every day available to us!
          />
          <textarea placeholder="Add a note for your expenses" 
            cols="30" rows="10"
            onChange={this.onNoteChange}></textarea>


          <button>Add expense</button>
        </form> 
      </div>
    )
  }
}

export default ExpenseForm;