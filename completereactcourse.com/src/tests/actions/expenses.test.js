import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


test ('should setup REMOVE expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect (action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})
test ('should setup EDIT expense action object', () => {
  const action = editExpense ( { id:'123abc', updates: { note: 'New note value' } });
  expect (action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  })
})
test('should setup ADD EXPENSE object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    note: 'Rent for last month',
    amount: 10800,
    createdAt: 1000
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})
test('should setup ADD EXPENSE object with DEFAULT values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})