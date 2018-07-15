import React from "react";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";
import { startLogin } from "../actions/auth";

export const LoginPage = ({startLogin}) => (
  <div>
      LOGIN PAGE
      <h1>Login</h1>
      <button onClick={ startLogin } >
        Login
      </button>
  </div>
)


const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});
// const mapDispatchToProps = dispatch => ({
//   startAddExpense: expense => dispatch(startAddExpense(expense))
// });

export default connect(undefined, mapDispatchToProps)(LoginPage);

// for testing purposes this has been altered
// typically we would use: export default connect()(AddExpensePage);
