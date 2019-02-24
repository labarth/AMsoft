import { put, all } from 'redux-saga/effects';
import { onAuthChanged } from 'services/userService';
import { loginActions } from 'redux/actionTypes';

export function* getUserSaga() {
  try {
    yield put({ type: loginActions.LOGIN_REQUEST });
    const user = yield onAuthChanged();
    yield put({ type: loginActions.LOGIN_SUCCESS, payload: user });
  } catch (error) {
    console.log(error);
    yield put({ type: loginActions.LOGIN_FAILURE, payload: error });
  }
}

export function* rootSaga() {
  yield all([
    getUserSaga(),
  ]);
}
