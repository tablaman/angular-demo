import React from 'react';
import { connect } from 'react-redux';
import ExpenListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    <ul>
      {props.expenses.map(item => <ExpenListItem key={item.id} {...item} />)}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}
export default connect(mapStateToProps)(ExpenseList);