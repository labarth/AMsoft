import { put, all } from 'redux-saga/effects';
import { onAuthChanged } from 'services/userService';

export function* getUserSaga() {
  try {
    yield put({ type: 'USERS_LOGIN_REQUEST'});
    const user = yield onAuthChanged();
    yield put({ type: 'USERS_LOGIN_SUCCESS', payload: user });
  } catch (error) {
    console.log(error);
    yield put({ type: 'USERS_LOGIN_FAILURE', payload: error });
  }
}

export function* rootSaga() {
  yield all([
    getUserSaga(),
  ]);
}
