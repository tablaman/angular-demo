// Edit Expense Page
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  handleOnSubmit = expense => {
    this.props.editExpense({
      id: this.props.expense.id,
      updates: expense
    });
    this.props.history.push("/");
  }
  handleRemoveExpense = expense => {
    this.props.removeExpense({
      id: this.props.expense.id
    });
    this.props.history.push("/");
  }
  render () {
    return (
      <div>
        Edit expense page
        <Link to="/create">Create something</Link>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.handleOnSubmit}
        />
        <button
          onClick={this.handleRemoveExpense}
        >
          Remove
        </button>
      </div>

    )
  }
}
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
