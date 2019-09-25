import { appName } from '../config';

// const
export const moduleName = 'auth';
export const SIGN_UP_REQUEST = `${appName}/${moduleName}/SIGN_UP_REQUEST`;
export const SIGN_UP_SUCCESS = `${appName}/${moduleName}/SIGN_UP_SUCCESS`;
export const SIGN_UP_ERROR = `${appName}/${moduleName}/SIGN_UP_ERROR`;

// reducer
export default function reducer(state, action) {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
}

// action creator (with thunk)
export function signUp(email, password) {
  return dispatch => {
    console.log('----', 'sign up');
  };
}
