import uuid from 'uuid';
import { firebase, googleAuthProvider } from '../firebase/firebase';

export const loginUser = creds => ({
  type: 'LOGIN_USER',
  creds
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  }
}

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
}