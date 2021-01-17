import { saga as otherFormSaga } from "../ducks/otherForm";
import { saga as authSaga } from "../ducks/auth";
import { saga as eventsSaga } from "../ducks/events";
import { all } from "redux-saga/effects";

export default function* () {
  yield all([otherFormSaga(), authSaga(), eventsSaga()]);
}
