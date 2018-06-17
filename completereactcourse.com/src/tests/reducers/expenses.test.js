import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test ('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})
test ('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})
test ('should NOT remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };

  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test ('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '5',
      description: 'Gum New Expense',
      note: '',
      amount: 19,
      createdAt: 1500
    }
  };
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, action.expense]);
})
test ('should edit an expense', () => {
  const description = 'Gum New Expense';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '3',
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[2].description).toBe(description);
})
test ('should NOT edit an expense if expense not found', () => {
  const description = 'Gum New Expense';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '45',
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
})

