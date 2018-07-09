import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const mockStore = configureStore([thunk]);


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
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
});
test('should add expense to database and store', (done) => {
  const store = mockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then((ref) => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense : {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
  
});
test('should add expense with defaults to database and store', (done) => {
  const store = mockStore({});
  const expenseData = {
    description: '',
      note: '',
      amount: 0,
      createdAt: 0
  };

  store.dispatch(startAddExpense(expenseData)).then((ref) => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense : {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
  
});

test('should add expense with defaults to database and store', () => {

});



// test('should setup ADD EXPENSE object with DEFAULT values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   })
// })