import { takeEvery, takeLatest, all, call, put } from 'redux-saga/effects';
import { login as loginApi } from '../api/auth';

function* login({ type, payload }) {
  const res = yield call(loginApi, payload.username, payload.password);
  console.log('res ==> ', res);
  if (res.status === 200) {
    yield put({ type: 'auth/markLogin', payload: res.body });
  }
}
function* register({ type, payload }) {
  const res = yield call(loginApi, payload.username, payload.password);
  console.log('res ==> ', res);
  if (res.status === 200) {
    yield put({ type: 'auth/markLogin', payload: res.body });
  }
}
export default [
  function* fetchWatcher() {
    yield all([
      takeLatest('auth/callLogin', login),
      takeLatest('auth/resgiter', register)
    ]);
  }
];
