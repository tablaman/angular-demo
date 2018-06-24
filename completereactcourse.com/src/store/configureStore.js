import {
  createStore,
  combineReducers
} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import helpReducer from '../reducers/help';

export default () => {
  // store creation
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      help: helpReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
