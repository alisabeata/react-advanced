import { appName } from '../config';
import { Record, List } from 'immutable';
import { put, call, takeEvery } from 'redux-saga/effects';
import { generateId } from './utils';

const initialState = {
  entities: new List([])
};

const PersonRecord = Record({
  id: null,
  name: null,
  email: null
});

// const
export const moduleName = 'auth';
export const ADD_PERSON_REQUEST = `${appName}/${moduleName}/ADD_PERSON_REQUEST`;
export const ADD_PERSON = `${appName}/${moduleName}/ADD_PERSON`;

// reducer
export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_PERSON:
      return state.update('entities', entities =>
        entities.push(new PersonRecord(payload))
      );

    default:
      return state;
  }
}

// action creator (with thunk)
// export function addPerson(person) {
//   return dispatch => {
//     dispatch({
//       type: FORM_ADD_PERSON,
//       payload: { id: Date.now(), ...person }
//     });
//   };
// }

// action creator (with saga)
export function addPerson(person) {
  return {
    type: ADD_PERSON_REQUEST,
    payload: person
  };
}

// saga

export const addPersonSaga = function*(action) {
  const id = yield call(generateId);

  yield put({
    type: ADD_PERSON,
    payload: { ...action.payload, id }
  });
};

export const saga = function*() {
  yield takeEvery(ADD_PERSON_REQUEST, addPersonSaga);
};
