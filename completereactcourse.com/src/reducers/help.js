const helpReducerDefaultState = {
  note: ''
};
// EXPENSES REDUCER
const helpReducer = (state = helpReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_HELP_INFO':
      return {
        ...state,
        note: action.note
      };
  
    default:
      return state;
  }
}

export default helpReducer;