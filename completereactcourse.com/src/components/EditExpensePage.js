// Edit Expense Page
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = props => (
  <div>
    Edit expense page
    <Link to="/create">Create something</Link>
    <ExpenseForm
      expense={props.expense}
      onSubmit={expense => {
        console.log("updated", expense);

        props.dispatch(editExpense({ id: props.expense.id, updates: expense }));
        props.history.push("/");
      }}
    />
    <button
      onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push("/");
      }}
    >
      Remove
    </button>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditExpensePage);
