import { login, logout } from "../../actions/auth";

describe('LOGIN', () => {
  test('should successfully login user', () => {
    const action = login(123);
    expect(action).toEqual({
      type: 'LOGIN',
      uid: action.uid
    });
  })
  test('should successfully logout user', () => {
    const action = logout();
    expect(action).toEqual({
      type: 'LOGOUT'
    });
  })
});
  
  
