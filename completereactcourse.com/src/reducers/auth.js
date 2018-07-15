const helpReducerDefaultState = {};
// AUTH REDUCER
const authReducer = (state = authReducerDefaultState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        creds: action.creds
      };

    default:
      return state;
  }
}

export default authReducer;