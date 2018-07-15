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
import { firebase} from './firebase/firebase';
// import './playground/promises';


const store = configureStore();

const state = store.getState();

const visibleExp = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExp)
console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('log in')
  } else {
    console.log('log out')

  }
});