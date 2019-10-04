import { addPersonSaga, ADD_PERSON, ADD_PERSON_REQUEST } from './otherForm';
import { call, put } from 'redux-saga/effects';
import { generateId } from './utils';

it('should dispatch person with id', () => {
  const user = {
    name: 'Name Name',
    email: 'test@test.com'
  };
  const saga = addPersonSaga({
    type: ADD_PERSON_REQUEST,
    payload: user
  });
  
  expect(saga.next().value).toEqual(call(generateId));

  const id = generateId();

  expect(saga.next(id).value).toEqual(
    put({
      type: ADD_PERSON,
      payload: { id, ...user }
    })
  );
});
