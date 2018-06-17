import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import expenses from '../fixtures/expenses'

test('render ExpenseListItem with fixture data', () => {
  const wrapper = shallow( < ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});