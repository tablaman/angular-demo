import uuid from 'uuid';
import { firebase, googleAuthProvider } from '../firebase/firebase';

export const loginUser = creds => ({
  type: 'LOGIN_USER',
  creds
});

export const startLogin = () => {
  console.log('startLogin')
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  }
}