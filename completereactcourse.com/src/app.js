import validator from "validator";
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'react-dates/lib/css/_datepicker.css';
import "./styles/styles.scss";


const store = configureStore();


store.dispatch(addExpense({description: 'Water', amount:45, createdAt: 4500}))
store.dispatch(addExpense({description: 'Gas bill', note:'hello', createdAt: 1000}))
store.dispatch(addExpense({description: 'Get some milk', note:'milk yum!', createdAt: 9000}))
// store.dispatch(setTextFilter({text: 'll'}));
const state = store.getState();

const visibleExp = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExp)
console.log(store.getState());

setTimeout(() => {
  store.dispatch(addExpense({
    description: 'Other thing to doll',
    note: 'I have no idea what that other thing is...',
    amount: 30.00,
    createdAt: -100
  }))
}, 3000);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));
