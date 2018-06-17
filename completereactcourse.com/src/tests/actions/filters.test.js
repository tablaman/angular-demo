import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters'
import moment from 'moment';

test('should generate set START action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})
test('should generate set END action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('should generate SORT_BY_AMOUNT action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})
// Another concise way to do this is...
test('should generate SORT_BY_DATE action object', () => {
  expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'});
})

test('should generate SET_TEXT_FILTER filled action object', () => {
  const text = 'hello'
  const action = setTextFilter({text});
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
})
