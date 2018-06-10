import { createStore } from 'redux'

const store = createStore((state = { count: 0 }) => {
  return state;
})

console.log(store.getState());

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

store.dispatch(incrementCount({ incrementBy: 5 }));

// Reducers
// 1. are pure functions
// 2. never change state or action
