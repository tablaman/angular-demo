import React from "react";
import { NavLink } from "react-router-dom";

// Header
const Header = () => (
  <React.Fragment>
    <h1>Expensify yey!</h1>
    <NavLink to="/" activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </React.Fragment>
);

export default Header;
