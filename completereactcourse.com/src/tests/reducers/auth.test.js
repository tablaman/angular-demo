import authReducer from "../../reducers/auth";

describe('auth REDUCERS', () => {
  test('should successfully login user', () => {
    const action = {
      type: 'LOGIN',
      uid: 123
    }
    const state = authReducer({}, action);
    expect(state).toBe(action.uid);
  });
  test('should successfully logout user', () => {
    const action = {
      type: 'LOGOUT'
    }
    const state = authReducer({}, action);
    expect(state).toEqual({});
  });
});