import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render Header corretly', () => {

  const wrapper = shallow(<Header startLogout={() => {}}/>);

  expect(wrapper).toMatchSnapshot();

  // expect(wrapper.find('h1').length).toBe(1);
  // expect(wrapper.find('h1').text()).toBe("Expensify yey!");
  
})

test('should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
})
test('should call startLogout on button click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<Header startLogin={startLogin} />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
})