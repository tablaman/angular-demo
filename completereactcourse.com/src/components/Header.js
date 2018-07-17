import React from "react";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import { startLogout } from '../actions/auth';


// Header
const Header = ({ startLogout }) => (
  <React.Fragment>
    <h1>Expensify yey!</h1>
    <NavLink to="/" activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    <button onClick={startLogout}>logout</button>
  </React.Fragment>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps) (Header);
