import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const store = configureStore([
  thunk,
])();

test('should render Header corretly', () => {

  const wrapper = shallow(<Header store={store} startLogout={() => {}}/>).dive();

  expect(wrapper).toMatchSnapshot();

  // expect(wrapper.find('h1').length).toBe(1);
  // expect(wrapper.find('h1').text()).toBe("Expensify yey!");
  
})

// test('should call startLogout on button click', () => {
//   const startLogout = jest.fn();
//   const wrapper = shallow(<Header store={store} startLogout={startLogout} />).dive();
//   wrapper.find('button').simulate('click');
//   expect(startLogout).toHaveBeenCalled();
// })
// test('should call startLogout on button click', () => {
//   const startLogin = jest.fn();
//   const wrapper = shallow(<Header store={store} startLogin={startLogin} />).dive();
//   wrapper.find('button').simulate('click');
//   expect(startLogin).toHaveBeenCalled();
// })