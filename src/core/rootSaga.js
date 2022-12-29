import {all} from "@redux-saga/core/effects";
import {projectsSaga} from "../features/projects/projectsSaga";

export default function* rootSaga() {
  yield all([
    projectsSaga(),
  ])
}