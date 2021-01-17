import { all } from "redux-saga/effects";
import { appName } from "../config";

const initialState = {
  entities: {},
  selected: [],
  loading: false,
  loaded: false,
};

export const EventRecord = {
  uid: null,
  title: null,
  url: null,
  where: null,
  when: null,
  month: null,
  submissionDeadline: null,
};

// const
export const moduleName = "events";
export const SOME_EVENT = `${appName}/${moduleName}/SOME_EVENT`;

// reducer
export default function reducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
}

// action creators

// saga
export const saga = function* () {
  yield all([]);
};
