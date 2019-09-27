import firebase from 'firebase';
import { appName } from '../config';

const initialState = {
  user: null,
  error: null,
  loading: false
};

// const
export const moduleName = 'auth';
export const SIGN_UP_REQUEST = `${appName}/${moduleName}/SIGN_UP_REQUEST`;
export const SIGN_UP_SUCCESS = `${appName}/${moduleName}/SIGN_UP_SUCCESS`;
export const SIGN_UP_ERROR = `${appName}/${moduleName}/SIGN_UP_ERROR`;

// reducer
export default function reducer(state = initialState, action) {
  const { type, payload, error } = action;

  switch (type) {
    case SIGN_UP_REQUEST:
      return { ...state, loading: true };

    case SIGN_UP_SUCCESS:
      return { ...state, loading: false, user: payload.user, error: null };

    case SIGN_UP_ERROR:
      return { ...state, loading: false, user: null, error };

    default:
      return state;
  }
}

// action creator (with thunk)
export function signUp(email, password) {
  return dispatch => {
    dispatch({
      type: SIGN_UP_REQUEST
    });

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user =>
        dispatch({
          type: SIGN_UP_SUCCESS,
          payload: { user }
        })
      )
      .catch(error =>
        dispatch({
          type: SIGN_UP_ERROR,
          error
        })
      );
  };
}

// check if login
// firebase.auth().onAuthStateChanged(user => {
//   const store = require('../redux').default;

//   store.dispatch({
    
//   })
// })