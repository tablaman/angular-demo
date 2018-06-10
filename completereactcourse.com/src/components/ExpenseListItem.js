import React from 'react';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const ExpenseListItem = ({ dispatch, id, description, note, amount, createdAt }) => (
  <li>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <span>{note}</span>
    <button onClick={() => {
      dispatch(removeExpense({id}))
    }}>Remove</button>
  </li>
);

export default connect()(ExpenseListItem);