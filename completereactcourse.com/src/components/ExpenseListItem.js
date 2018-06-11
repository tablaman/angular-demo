import React from 'react';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => (
  <li>
    <h3>
      <Link to={`/edit/${id}`}>{description} </Link>
    </h3>
    <p>{amount} - {createdAt}</p>
    <span>{note}</span>
  </li>
);

export default ExpenseListItem;