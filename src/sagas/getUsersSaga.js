import { put, takeEvery, all, call } from 'redux-saga/effects';
import { Api } from 'api/Api';

export function* getUsersSaga() {
  try {
    const user = yield call(Api.fetch, 'https://jsonplaceholder.typicode.com/users/11');
    yield put({ type: 'USER_DATA_LOADED', payload: user })
  } catch(error) {
    console.log(error, 'error');
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