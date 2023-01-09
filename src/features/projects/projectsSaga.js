import {fetchError, fetchProjects, fetchProjectsSuccess} from "./projectsSlice";
import {getProjects} from "./api";
import {takeLatest, put, delay, call} from "@redux-saga/core/effects";

function* fetchProjectsHandler() {
  try {
    yield delay(500);
    const data = yield call(getProjects);
    yield put(fetchProjectsSuccess(data));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* projectsSaga() {
  yield takeLatest(fetchProjects, fetchProjectsHandler);
}