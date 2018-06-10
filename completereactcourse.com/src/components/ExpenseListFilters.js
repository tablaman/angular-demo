import React from "react";
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from "../actions/filters";


const ExpenseListFilters = (props) => (
  <div>
    <input type="text" 
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(setTextFilter({text: e.target.value}));
      }} />
      <select 
        value={props.filters.sortBy}
        onChange={(e) => {
          switch(e.target.value) {
            case 'date':
              return props.dispatch(sortByDate())
            case 'amount':
              return props.dispatch(sortByAmount())
            default:
              break;
          }
        
      }}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}


export default connect(mapStateToProps)(ExpenseListFilters);
