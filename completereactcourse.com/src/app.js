import validator from "validator";
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'react-dates/lib/css/_datepicker.css';
import "./styles/styles.scss";
import './firebase/firebase';
// import './playground/promises';


const store = configureStore();

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

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});
