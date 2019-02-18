import { put, takeEvery, all, call } from 'redux-saga/effects';
import { Api } from 'api/Api';

export function* getUsersSaga() {
  try {
    const user = yield call(Api.fetch, 'http://jsonplaceholder.typicode.com/users/');
    yield put({ type: 'USER_DATA_LOADED', payload: user })
  } catch(error) {
    console.log(error.message, 'error');
  }
}

export function* getInitialData() {
  console.log('initial data');
}

export function* rootSaga() {
  yield all([
    getUsersSaga(),
    getInitialData()
  ])
}