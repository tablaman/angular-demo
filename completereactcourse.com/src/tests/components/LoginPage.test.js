import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';


test('render ExpenseListItem with fixture data', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});