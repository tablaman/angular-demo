// Library code
function createStore (reducer) {
  // Store should have 4 parts
  // 1. The state
  // 2. Get the state
  // 3. Listen to changes on state
  // 4. update the state

  let state;
  let listeners = [];

  const getState = () => state;
  // Dispatch
  const dispatch = (action) => {
    // call todos
    state = reducer (state, action)
    // loop over listeners and invoke them
    listeners.forEach((listener) => listener());
  }

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    }
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}


// App code
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

// Action creators - better way to dispatch!
function addToDoAction(todo) {
  return {
    type: ADD_TODO,
    todo
  }
}
function removeToDoAction(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}
function toggleToDoAction(id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}
function addGoalAction(goal) {
  return {
    type: ADD_GOAL,
    goal
  };
}
function removeGoalAction(id) {
  return {
    type: REMOVE_GOAL,
    id
  };
}





// REDUCERS
function todos (state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return state.concat([action.todo])
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id)
    case TOGGLE_TODO:
       // Use Object.assign() to merge different objects together
     return state.map((todo) => todo.id !== action.id ? todo : 
        Object.assign({}, todo, {complete: !todo.complete}));
    default: 
      return state
  }
}

function goals (state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal])
    case REMOVE_GOAL:
      return state.filter((goal) => goal.id !== action.id)
    default:
      return state
  }
}

function app (state = {}, action) {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action)
  }
}

// how to call
const store = createStore(app);
store.subscribe(() => {
  console.log("The new state is: ", store.getState());
});

// Actions

store.dispatch(
  addToDoAction({
    id: 0,
    name: "walk the dog",
    complete: false
  })
);
// old way
// store.dispatch({
//   type: ADD_TODO,
//   todo: {
//     id: 0,
//     name: "Walk the dog",
//     complete: false
//   }
// });

store.dispatch(
  addToDoAction({
    id: 1,
    name: "walk the car",
    complete: false
  })
);
store.dispatch(
  addToDoAction({
    id: 2,
    name: "Go to the gym",
    complete: true
  })
);




store.dispatch(removeToDoAction(1));
store.dispatch(toggleToDoAction(0));

store.dispatch(addGoalAction({
  id: 0,
  name: 'Learn Redux'
}));
store.dispatch(addGoalAction({
  id: 1,
  name: 'Learn Animation'
}));
store.dispatch(removeGoalAction(0));