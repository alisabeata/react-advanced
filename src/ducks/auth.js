import firebase from 'firebase';
import { appName } from '../config';
import { all, take, takeEvery, call, put, cps } from 'redux-saga/effects';
import { push } from 'react-router-redux';

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
export const SIGN_OUT_REQUEST = `${appName}/${moduleName}/SIGN_OUT_REQUEST`;
export const SIGN_OUT_SUCCESS = `${appName}/${moduleName}/SIGN_OUT_SUCCESS`;
export const SIGN_OUT_ERROR = `${appName}/${moduleName}/SIGN_OUT_ERROR`;

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

    case SIGN_OUT_SUCCESS:
      return { ...initialState };

    default:
      return state;
  }
}

// action creator (with thunk)
// export function signUp(email, password) {
//   return dispatch => {
//     dispatch({
//       type: SIGN_UP_REQUEST
//     });

//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then(user =>
//         dispatch({
//           type: SIGN_UP_SUCCESS,
//           payload: { user }
//         })
//       )
//       .catch(error =>
//         dispatch({
//           type: SIGN_UP_ERROR,
//           error
//         })
//       );
//   };
// }

// check if login
// firebase.auth().onAuthStateChanged(user => {
//   const store = require('../redux').default;

//   store.dispatch({

//   })
// })

// action creator (with saga)
export function signUp(email, password) {
  return {
    type: SIGN_UP_REQUEST,
    payload: { email, password }
  };
}

export function signOut(email, password) {
  return {
    type: SIGN_OUT_REQUEST,
    payload: { email, password }
  };
}

// sagas
export const signUpSaga = function*() {
  const auth = firebase.auth();

  while (true) {
    const action = yield take(SIGN_UP_REQUEST);

    try {
      const user = yield call(
        [auth, auth.createUserWithEmailAndPassword],
        action.payload.email,
        action.payload.password
      );

      yield put({
        type: SIGN_UP_SUCCESS,
        payload: { user }
      });
    } catch (error) {
      yield put({
        type: SIGN_UP_ERROR,
        error
      });
    }
  }
};

// check if login with saga
export const watchStatusChange = function*() {
  const auth = firebase.auth();

  try {
    yield cps([auth, auth.onAuthStateChanged]);
  } catch (user) {
    yield put({
      type: SIGN_UP_SUCCESS,
      payload: { user }
    });
  }
};

export const signOutSaga = function*() {
  const auth = firebase.auth();

  try {
    yield call([auth, auth.signOut]);
    yield put({
      type: SIGN_OUT_SUCCESS
    });
    yield put(push('/auth/signin'));
  } catch (error) {}
};

export const saga = function*() {
  yield all([
    signUpSaga(),
    watchStatusChange(),
    takeEvery(SIGN_OUT_REQUEST, signOutSaga)
  ]);
};
