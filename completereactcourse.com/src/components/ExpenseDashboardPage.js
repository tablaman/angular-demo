//  Expense Dashboard Page
import React from 'react'
import {
  Link
} from 'react-router-dom'
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = (props) => (
  
  <div> Dashboard: expense page
    <Link to="/create">Create something</Link>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
)

export default ExpenseDashboardPage;