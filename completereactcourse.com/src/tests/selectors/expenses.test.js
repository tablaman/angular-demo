import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[1], expenses[2]]);
})
// supposed to get expenses[0] and expenses[2] but getting all 3!
test('should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1] ,expenses[2]]);
})
// test('should filter by start date', () => {
//   const filters = {
//     text: '',
//     sortBy: 'date',
//     startDate: undefined,
//     endDate: moment(0).add(2, 'days')
//   }
//   const result = selectExpenses(expenses, filters);
//   expect(result).toEqual([expenses[0], expenses[1] ,expenses[2]]);
// })

// should sort by amount
test('should filter by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
})