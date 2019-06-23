import { fork, all } from 'redux-saga/effects';
import auth from './auth';
import product from './product';

const rootSaga = function*() {
  yield all([
    ...auth.map(watcher => fork(watcher)),
    ...product.map(watcher => fork(watcher))
  ]);
};

export default rootSaga;
